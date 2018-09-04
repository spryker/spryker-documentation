(function () {
    var _helpSystem = null;

    var autocomplete = true;
    var searchDestinationUrl = null;
    var index = null;

    var searchHistoryDescription = "Search";

    var isSkinPreview = MadCap.Utilities.HasRuntimeFileType("SkinPreview");

    //------methods for elasticsearch connection and settings------//

    function InitiateElasticsearch(helpSystem) {
        var elasticsearch = helpSystem.Elasticsearch;
        if (elasticsearch != null) {
            searchDestinationUrl = elasticsearch.getAttribute("SearchDestinationUrl");
            index = elasticsearch.getAttribute("Guid");

            //basic search options
            targetName = elasticsearch.getAttribute("TargetName");

            var autocompleteEnabled = (elasticsearch.getAttribute("AutocompleteEnabled") || "true") === "true";
            var autocompleteProjectContent = (elasticsearch.getAttribute("AutocompleteProjectContent") || "true") === "true";
            var autocompleteSearchHistory = (elasticsearch.getAttribute("AutocompleteSearchHistory") || "true") === "true";

            autocomplete = autocompleteEnabled && (autocompleteProjectContent || autocompleteSearchHistory);
        }

        var langSkin = MadCap.Utilities.Get(helpSystem, "Language.skin.default", null); // todo: support non-default skins
        if (langSkin != null) {
            searchHistoryDescription = langSkin["Search Auto-complete Item: Description.Search History/Label"] || searchHistoryDescription;
        }
    };

    function WebService(url, successMsg, errorMsg) {
        // Bug 136685 - Support for IE11
        // Workarounds for security prompt - have users:
        // 1) exclude MOTW in output, or
        // 2) unhide security zone for 'My Computer' and modify setting:
        // My Computer > Custom level... > Misc > Enable access data sources across domains
        // Both options mentioned in:
        // https://stackoverflow.com/questions/721446/how-to-tell-ie-a-html-file-on-my-disk-is-not-a-security-risk
        $.support.cors = true;
        return $.ajax({
            url: searchDestinationUrl + url,
            type: "GET",
            cache: false,
            crossDomain: true,
            dataType: "json",
            success: function (results) {
                return results;
            },
            error: function (xhr, status, error) {
                //console.error(error + " - " + errorMsg);
            }
        });
    }

    //------END of methods for elasticsearch connection and settings------//

    //------methods for function RunGeneralSearch(input) { });------//

    MadCap.Default.SearchHandler = function (targetName, searchQuery, options) {
        return RunGeneralSearch(searchQuery, options);
    };

    function GetLinkUrl(link) {
        return _helpSystem.GetTopicPath("../" + _helpSystem.ContentFolder + link);
    }

    function GetSearchHref(input) {
        return _helpSystem.SearchUrl + '?q=' + input;
    }

    function RunGeneralSearch(input, options) {
        var search = WebService("search/query?index=" + index + "&input=" + input + "&page=" + options.content.pageIndex + "&pageSize=" + options.content.pageSize, "", "Search failed.")
            .then(function (response) {
                var searchResults = [];
                searchResults.content = [];
                searchResults.contentTotal = response.total;
                searchResults.clientPaging = false;

                var results = response.results;
                if (results.length > 0) {
                    var Search = MadCap.CreateNamespace("WebHelp.Search");

                    for (var i = 0; i < results.length; i++) {
                        var result = results[i];
                        var score = result["score"];
                        var rank = result["rank"];
                        var title = result["title"];
                        var link = result["link"];
                        var linkUrl = GetLinkUrl(link);
                        var abstractText = result["abstractText"];

                        var searchResult = new Search.SearchResult(score, rank, title, linkUrl.FullPath, unescape(abstractText), true);
                        searchResults.content.push(searchResult);
                    }
                }

                return searchResults;
            });

        var phraseSuggest = WebService("search/phrasesuggest?index=" + index + "&input=" + input, "", "Phrase suggest failed.")
            .then(function (result) {
                var $phraseSuggest = $(".phrase-suggest");
                if (result != null && result.key != null) {
                    $phraseSuggest[0].innerHTML = $phraseSuggest[0].innerHTML.replace('{suggestion}', '<a href="' + GetSearchHref(result.key) + '">' + result.key + '</a>');
                    $phraseSuggest.css("display", "");
                } else {
                    $phraseSuggest.remove();
                }
            });

        // todo: combine promises

        return search;
    };

    //------END of methods for function RunGeneralSearch(input) { });------//

    //------methods for $(".search-field").on("input", function () { }); - SearchSuggest()------//

    var searchSuggestRequest = null;
    var SearchSuggest = MadCap.Utilities.Debounce(function (searchField) {
        if (searchSuggestRequest != null) {
            searchSuggestRequest.abort();
        }

        var input = $(searchField).val();
        if (input.trim() == "") {
            HideResults(searchField);
        }
        else {
            searchSuggestRequest = WebService("search/auto?index=" + index + "&input=" + input, "", "Search suggest failed.");
            searchSuggestRequest.then(function (results) {
                BuildSearchResults(searchField, results);
            });
        }
    }, 150); // milliseconds

    function IsOrContains(el, childEl) {
        return el === childEl || $.contains(el, childEl);
    }

    function GetResultsWrapper(searchField) {
        return $(searchField).siblings(".search-auto-complete");
    }

    function AcquireResultsWrapper(searchField) {
        var resultsEl = GetResultsWrapper(searchField)[0];

        if (typeof resultsEl == "undefined") {
            resultsEl = document.createElement("div");
            resultsEl.setAttribute("class", "search-auto-complete");
            searchField.parentNode.appendChild(resultsEl);
        }

        return resultsEl;
    }

    function HideResults(searchField) {
        $resultsEl = GetResultsWrapper(searchField);
        $resultsEl.hide();
        $resultsEl.trigger("hidden");
    }

    function ShowResults(searchField, resultsEl) {
        var eventsBoundProp = "clickOutsideBound";

        // check if events added already
        if (!$(resultsEl).data(eventsBoundProp)) {
            // click handler to hide results when clicked outside
            function clickOutside(e) {
                if (!IsOrContains(searchField, e.target) && !IsOrContains(resultsEl, e.target)) {
                    HideResults(searchField);
                }
            }
            // hidden handler to remove handlers when hidden
            function resultsHidden() {
                $(document).off("click", clickOutside);
                $(resultsEl).off("hidden", resultsHidden);
                $(resultsEl).data(eventsBoundProp, false);
            }

            $(resultsEl).on("hidden", resultsHidden);
            $(document).on("click", clickOutside);
            $(resultsEl).data(eventsBoundProp, true);
        }

        // show results
        $(resultsEl).show();
    }

    function BuildSearchResults(searchField, searches) {
        if (searches.length > 0) {
            var resultsEl = AcquireResultsWrapper(searchField);
            $(resultsEl).empty();

            var list = document.createElement("ul");
            resultsEl.appendChild(list);

            for (var i = 0; i < searches.length; i++) {
                var search = searches[i];
                var searchType = search["type"];

                var isContentResult = searchType == "Content";
                var isPersonalHistoryResult = searchType == "PersonalHistory";
                var isGlobalHistoryResult = searchType == "GlobalHistory";
                var isHistoryResult = isPersonalHistoryResult || isGlobalHistoryResult;

                var listItem = document.createElement("li");

                var cssClass = "auto-result-item", href = "", title = "", description = "";

                if (isHistoryResult) {
                    href = GetSearchHref(search["input"]);
                    title = search["inputHighlighted"] || search["input"];
                    description = i == 0 ? searchHistoryDescription : "";
                    cssClass += " auto-result-history";

                    listItem.setAttribute("data-mc-input", search["input"]);
                }
                else {
                    href = GetLinkUrl(search["link"]).FullPath;
                    title = search["titleHighlighted"] || search["title"];
                    description = search["link"];
                }

                if (isContentResult) {
                    cssClass += " auto-result-content";
                }
                else if (isPersonalHistoryResult) {
                    cssClass += " auto-result-personal";

                    // delete button
                    var span = document.createElement("div");
                    span.setAttribute("class", "auto-result-remove");
                    listItem.appendChild(span);
                }
                else if (isGlobalHistoryResult) {
                    cssClass += " auto-result-global";
                }

                listItem.setAttribute("class", cssClass);

                var alink = document.createElement("a");
                alink.setAttribute("href", href);

                var icon = document.createElement("div");
                icon.setAttribute("class", "auto-result-icon");
                alink.appendChild(icon);

                var titleSpan = document.createElement("span");
                titleSpan.setAttribute("class", "auto-result-phrase");
                titleSpan.innerHTML = title;
                alink.appendChild(titleSpan);

                if (description) {
                    var descriptionSpan = document.createElement("span");
                    descriptionSpan.setAttribute("class", "auto-result-description");

                    var descriptionSeparator = document.createElement("span");
                    descriptionSeparator.setAttribute("class", "auto-result-separator");
                    descriptionSeparator.innerText = " - ";
                    descriptionSpan.appendChild(descriptionSeparator);

                    var descriptionText = document.createTextNode(description);
                    descriptionSpan.appendChild(descriptionText);

                    alink.appendChild(descriptionSpan);
                }

                listItem.appendChild(alink);
                list.appendChild(listItem);
            }

            ShowResults(searchField, resultsEl);
        }
        else {
            HideResults(searchField);
        }
    };

    //------END of methods for $(".search-field").on("input", function () { }); - SearchSuggest()------//

    //------methods for $(document).on("click", "img.personal", function () { }); - DeleteUserSearch()------//

    function DeleteUserSearch($el, input) {
        WebService("search/deletepersonal?index=" + index + "&input=" + input, "", "Delete failed.")
            .then(function (resp) {
                if (resp)
                    $el.remove();
            });
    };

    //------END of methods for $(document).on("click", "img.personal", function () { }); - DeleteUserSearch()------//

    //------START execution of ElasticsearchOn()------//

    var ElasticsearchOn = function () {
        function AddSelectionEvents() {
            $(document).on("hover", ".search-auto-complete li", function () {
                var $current = $(".search-auto-complete li:hover");

                $(".auto-result-selected").removeClass("auto-result-selected");
                $current.addClass("auto-result-selected");
            });

            $(".search-field").keydown(function (e) {
                var key = e.keyCode;
                var moveDown =
                    key == 40 || // down
                    (key == 9 && !e.shiftKey); // tab
                var moveUp =
                    key == 38 || // up
                    (key == 9 && e.shiftKey); // shift + tab
                var submit = key == 13; // enter

                var $listItems = $(".search-auto-complete li"),
                    $selected = $listItems.filter(".auto-result-selected");

                if (moveDown || moveUp) {
                    var $current;

                    if (moveDown) {
                        if (!$selected.length || $selected.is(":last-child")) {
                            $current = $listItems.first();
                        }
                        else {
                            $current = $selected.next();
                        }
                    }
                    else {
                        if (!$selected.length || $selected.is(":first-child")) {
                            $current = $listItems.last();
                        }
                        else {
                            $current = $selected.prev();
                        }
                    }

                    $listItems.removeClass("auto-result-selected");
                    $current.addClass("auto-result-selected");

                    if ($current.hasClass("auto-result-history"))
                        $(this).val($current.attr("data-mc-input"));

                    e.preventDefault();
                }
                else if (submit) {
                    if ($selected.hasClass("auto-result-content")) {
                        var href = $selected.children("a").attr("href");
                        if (href) {
                            e.preventDefault();
                            window.location.href = href;
                        }
                    }
                }
            });
        };

        function AddEvents() {
            if (isSkinPreview) {
                AddSkinPreviewEvents();
            }
            else {
                if (autocomplete) {
                    $(".search-field").on("input", function () {
                        SearchSuggest(this);
                    });

                    AddSelectionEvents();

                    $(document).on("click", ".auto-result-remove", function () {
                        var listItem = $(this).parent();
                        var input = $(listItem).attr("data-mc-input");

                        DeleteUserSearch(listItem, input);
                    });
                }
            }
        };

        function AddSkinPreviewEvents() {
            AddSelectionEvents();

            $(".search-field").each(function (index, searchField) {
                var resultsEl = GetResultsWrapper(searchField);
                $(searchField).on("click", function (e) {
                    $(searchField).val("ima");
                    ShowResults(searchField, resultsEl[0]);
                    e.stopPropagation();
                });
                resultsEl.on("hidden", function () {
                    $(searchField).val("");
                });
            });            
        }

        function OnLoad() {
            var pathToHelpSystem = $(document.documentElement).attr('data-mc-path-to-help-system');
            var helpSystemPath = "Data/HelpSystem.xml";

            if (pathToHelpSystem)
                helpSystemPath = pathToHelpSystem + helpSystemPath;

            if (MadCap.WebHelp && MadCap.WebHelp.HelpSystem) {
                MadCap.WebHelp.HelpSystem.LoadHelpSystem(helpSystemPath).done(function (helpSystem) {
                    _helpSystem = helpSystem;
                    InitiateElasticsearch(_helpSystem);
                    AddEvents();
                });
            }
            else if (isSkinPreview) {
                $(document).ready(AddSkinPreviewEvents);
            }
        }

        OnLoad();
    };

    ElasticsearchOn();

    //------END execution of ElasticsearchOn()------//
})();