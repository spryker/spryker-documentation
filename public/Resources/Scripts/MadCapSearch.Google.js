(function () {

    var CSESearchBarCallback = function () {
        $(".search-bar").each(function () {
            var self = this;

            function onLoad() {
                var pathToHelpSystem = $(document.documentElement).attr('data-mc-path-to-help-system');
                var helpSystemPath = "Data/HelpSystem.xml";

                if (pathToHelpSystem)
                    helpSystemPath = pathToHelpSystem + helpSystemPath;

                if (MadCap.WebHelp && MadCap.WebHelp.HelpSystem) {
                    MadCap.WebHelp.HelpSystem.LoadHelpSystem(helpSystemPath).done(function (helpSystem) {
                        var currentSkin = helpSystem.GetCurrentSkin();
                        var skinQuery = (currentSkin && currentSkin != helpSystem.DefaultSkin) ? "?skinName=" + currentSkin.SkinID : "";

                        google.search.cse.element.render(
                        {
                            div: $(self).attr("id"),
                            tag: 'searchbox-only',
                            attributes: { resultsUrl: helpSystem.SearchUrl + skinQuery }
                        });

                        StyleSearchBar();

                        $(window).trigger('resize');
                        MadCap.Default.ApplySkin(helpSystem.GetCurrentSkin());
                    });
                }
            }

            if (document.readyState == 'complete') {
                // Document is ready when CSE element is initialized.
                onLoad();
            } else {
                // Document is not ready yet, when CSE element is initialized.
                google.setOnLoadCallback(onLoad, true);
            }
        });
    }

    var CSESearchResultsCallback = function () {
        function onLoad() {
            // Render an element with both search box and search results in div with id 'searchPane'.
            google.search.cse.element.render(
            {
                div: 'searchPane',
                tag: 'searchresults-only',
                attributes: { linkTarget: '_parent' }
            });

            // preserve skin
            $(".gsc-resultsRoot").on('click', function (e) {
                if ($(e.target).is("a") || $(e.target).parent().is("a")) {
                    var clickedUrl = $(e.target).attr("data-ctorig") || $(e.target).parent().attr("data-ctorig");
                    var currentUrl = new MadCap.Utilities.Url(document.location.href);
                    var skinName = currentUrl.QueryMap.GetItem('skinName');
                    if (skinName != null) {
                        e.preventDefault();
                        MadCap.Utilities.Url.Navigate(clickedUrl + "?skinName=" + skinName);
                    }
                }
            });
        }

        if (document.readyState == 'complete') {
            // Document is ready when CSE element is initialized.
            onLoad();
        } else {
            // Document is not ready yet, when CSE element is initialized.
            google.setOnLoadCallback(onLoad, true);
        }

        CSESearchBarCallback();
    }

    var StyleSearchBar = function () {
        if ($(".gsc-control-searchbox-only").length) {
            $("form.gsc-search-box").css({ "font-size": "1em", "padding": "0", "background": "inherit", "border": "inherit", "box-shadow": "inherit", "-webkit-box-shadow": "inherit", "-moz-box-shadow": "inherit", "margin": "inherit" });
            $("table.gsc-search-box").css({ "margin": "inherit", "width": "inherit" });
            $("#gsc-i-id1").css("font-size", "inherit");

            var googleDefault = $(".gsc-input-box").length > 0;
            var $gscInputBox = googleDefault ? $(".gsc-input-box") : $("input.gsc-input");
            $gscInputBox.addClass("search-field");
            if ($gscInputBox.attr("dir") == "rtl") {
                $gscInputBox.css({ "padding-left": "53px", "background-color": "#FFFFFF" });
            } else {
                $gscInputBox.css( {"padding-right": "53px", "background-color": "#FFFFFF" });
            }

            var inputBox = $gscInputBox.filter(":visible");
            inputBox.each(function () {
                //if ($(".mc-component .gsc-input-box").index($(this)) == -1)
                //    $(this).css("height", "2em");

                $(this).children().css("line-height", $(this).innerHeight() + 'px');
            })

            var $gscSearchButton = $("input.gsc-search-button");
            $gscSearchButton.addClass("search-submit-wrapper");
            $gscSearchButton.addClass("search-submit");
            $gscSearchButton.prop("type", "button");

            if (googleDefault) {
                $gscSearchButton.css("margin-top", "0px");
            } else {
                $gscSearchButton.attr("value", '');
                if ($gscInputBox.attr("dir") == "rtl") {
                    $gscInputBox.css({ "padding-right": "18px", "background-position": "right 15px center" });
                } else {
                    $gscInputBox.css({ "padding-left": "18px", "background-position-x": "18px" });
                }
                $gscInputBox.blur(function () {
                    if ($gscInputBox.attr("dir") == "rtl") {
                        $gscInputBox.css("background-position", "right 15px center");
                    } else {
                        $gscInputBox.css("background-position-x", "18px");
                    }
                });

                //$("div.gsc-clear-button").css({ "position": "absolute", "right": "100px", "bottom": "5px" });
            }
        }
    }

    var cb = MadCap.Utilities.HasRuntimeFileType("Search") ? CSESearchResultsCallback : CSESearchBarCallback;

    window.__gcse = {
        parsetags: 'explicit',
        callback: cb
    };

    (function () {
            var cx = '005241588345253911198:sl8yza1ju1e';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
    })();

})();
