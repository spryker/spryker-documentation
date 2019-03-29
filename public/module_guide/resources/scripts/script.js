

function GetAsyncElementHelper(parent, selector, callback){

    this.elem = parent.querySelector(selector) || findElem(parent, selector);

    function findElem(parent, selector) {
        var interval = setInterval(()=>{
            this.elem = parent.querySelector(selector);
            if(this.elem !== null){
                callback(this.elem);
                clearInterval(interval);
            }
        },100);
    }
}

function ScrollToTop () {

    var THRESHOLD = 500;
    var DIRECTION_UP = 'up';
    var DIRECTION_DOWN = 'down';
    var SCROLL_DELAY = 500;
    var SCROLL_EASE = 'swing';

    this.init = function () {
        this.$window = $(window);
        this.$container = $('html, body');
        this.$el = $('.js-scroll-top');
        this.direction = DIRECTION_DOWN;

        this.updateCurrentPosition();
        this.checkEdges();
        this.mapEvents();
    };

    this.mapEvents = function () {
        this.$window.on('scroll', this.onScroll.bind(this));
        this.$el.on('click', this.onClick.bind(this));
    };

    this.onScroll = function () {
        this.updateCurrentPosition();
        this.checkEdges();
    };

    this.onClick = function () {
        this.scrollTop();
    };

    this.updateCurrentPosition = function () {
        this.currentPosition = this.$window.scrollTop();
    };

    this.checkEdges = function () {
        if (this.direction === DIRECTION_DOWN && this.currentPosition > THRESHOLD) {
            this.direction = DIRECTION_UP;
            this.toggleVisibility(true);
            return;
        }

        if (this.direction === DIRECTION_UP && this.currentPosition < THRESHOLD) {
            this.direction = DIRECTION_DOWN;
            this.toggleVisibility(false);
        }
    };

    this.toggleVisibility = function (visible) {
        if (visible) {
            this.$el.fadeIn();
        } else {
            this.$el.stop(true, true).fadeOut();
        }
    };

    this.scrollTop = function () {
        this.$container.animate({
            scrollTop: 0
        }, SCROLL_DELAY, SCROLL_EASE);

        return false;
    }

}

var topScroll = new ScrollToTop();

//========================================

function Anchorer () {

    var TEXT_TO_ID_REGEX = /(\W)/igm;
    var GO_TO_ANCHOR_DELAY = 100;
    var SCROLL_DELAY = 500;
    var SCROLL_EASE = 'swing';

    this.$container = $('html, body');
    this.$el = $('.js-anchorer');
    this.$targets = $('h1, h2, h3, .drop-anchor', this.$el);
    this.headerHeight = document.querySelector('.title-bar').clientHeight;

    this.init = function() {

        this.appendAnchors();
        this.mapEvents();
    };

    this.mapEvents = function() {
        this.$el.on('click', '.js-anchorer__trigger', this.onClick.bind(this));
    };

    this.onClick = function(e) {
        var that = this;
        var href = $(e.currentTarget).attr('href');

        this.scrollToAnchor(href, function () {
            that.setHash(href);
        });

        return false;
    };

    this.appendAnchors = function() {
        var that = this;

        this.$targets.each(function (index, element) {
            var $element = $(element);
            var text = $element.text().trim() || '';
            $element.contents().filter(function () {
                return this.nodeType === 3;
            }).remove();
            var id = that.normalize(text);

            $element.prepend(that.createAnchor(id, text));
        });
    };

    this.normalize = function(text) {
        if (!text) {
            return 'here';
        }

        return text
            .toLowerCase()
            .replace(TEXT_TO_ID_REGEX, '-');
    };

    this.createAnchor = function(id, text) {
        return `<a class="a-anchor js-anchorer__trigger" href="#${id}"><span class="a-anchor__target" id="${id}"></span>${text}</a>`;
    };

    this.scrollToAnchor = function(href, callback) {

        if (href.length < 2) {
            return;
        }

        var $anchor = $(href);

        if ($anchor.length < 1) {
            return;
        }

        var top = $anchor.offset().top - this.headerHeight;
        console.log(top);
        this.$container.animate({
            scrollTop: top
        }, SCROLL_DELAY, SCROLL_EASE, callback);
    };

    this.setHash = function(value) {
        window.location.hash = value;
    }

}

var anchorer = new Anchorer();

//========================================

function handleMenuScroll() {

    function initScroll(menuItem) {
        var container = menuItem.querySelector('.sub-menu');
        if (container != null) {
            if (!container.classList.contains('ps') && container.clientHeight > window.innerHeight/2) {
                new PerfectScrollbar(container, {
                    useBothWheelAxes: false,
                    suppressScrollX: true
                });
                console.log('ps initialized')
            }
            return true;
        }
        if(!menuItem.classList.contains('has-children')) return true;
        console.log('initing ps.. fail');
        return false;
    }

    function mapMenuEvents(itemsList) {
        itemsList.forEach(function (item) {
            item.addEventListener('mouseenter', function (e) {
                var menuItem = e.currentTarget;
                var initInterval = setInterval(function(){
                    if(initScroll(menuItem)) clearInterval(initInterval);
                }, 20);
                var nextLevelMenuItems = menuItem.querySelectorAll('.sub-menu');
                nextLevelMenuItems.forEach(function (subItem) {
                    subItem.addEventListener('mouseenter', function (e) {
                        var subMenuItem = e.currentTarget;
                        var checkMenuInterval = setInterval(function () {
                            if (initScroll(subMenuItem)) {
                                clearInterval(checkMenuInterval);
                            }
                        }, 20)
                    })
                })
            })
        })
    }

    function checkMenuLoaded() {
        var interval = setInterval(function () {
            var menuItems = document.querySelectorAll('.navigation .has-children');
            if (menuItems != null) {
                mapMenuEvents(menuItems);
                clearInterval(interval);
            }
        }, 20);
    }

    var loadInterval = setInterval(function () {
        if(document.querySelector('.navigation .has-children') != null){
            checkMenuLoaded();
            clearInterval(loadInterval);
        }
    },50)
}

handleMenuScroll();

//========================================

function AsideNavCloser(bodyOverlay, container) {
    this.bodyOverlay = document.querySelector(bodyOverlay);
    this.container = document.getElementById(container);

    this.init = function () {
        var closeButton = this.createButton();
        this.container.appendChild(closeButton);
        this.mapEvents(closeButton);
    };

    this.mapEvents = function (elem) {
        var self = this;
        elem.addEventListener('click', function (e) {
            if(self.bodyOverlay == null){
                var context = self;
                var int = setInterval(function () {
                    if(context.bodyOverlay == null){
                        context.bodyOverlay = document.querySelector('.js-off-canvas-exit');
                    } else {
                        context.bodyOverlay.click();
                        clearInterval(int);
                    }
                }, 100);
            } else {
                self.bodyOverlay.click();
            }
        })
    };

    this.createButton = function () {
        var closeButton = document.createElement('span');
        closeButton.classList.add('aside-close-button');
        return closeButton;
    }
}

var asideNavCloseButton = new AsideNavCloser('.js-off-canvas-exit', 'offCanvas');

//========================================

function ToggleSearch() {

    this.search = document.querySelector('.home-page .main-section .search') ||
        document.querySelector('.top-bar .search') ||
        document.querySelector('.searchTopic .search') ||
        document.querySelector('.error-page-search .search');
    this.container = document.querySelector('.title-bar-section .menu-icon-container');
    this.toggleButton = document.createElement('span');
    this.toggleOverlay = document.createElement('div');

    this.init = function () {

        this.appendElements();
        this.mapEvents();
    };

    this.mapEvents = function () {
        this.toggleButton.addEventListener('click' , this.toggleButtonAction.bind(this));
        this.toggleOverlay.addEventListener('click', this.toggleButtonAction.bind(this));
    };

    this.toggleButtonAction = function (event) {
        event.stopPropagation();
        this.search.classList.toggle('is-visible');
        this.toggleOverlay.classList.toggle('active');

    };

    this.appendElements = function () {
        this.toggleButton.classList.add('search-toggle-button');
        this.toggleOverlay.classList.add('search-toggle-overlay');
        this.container.appendChild(this.toggleButton);
        document.body.appendChild(this.toggleOverlay);
    }
}

var showSearchButton = new ToggleSearch();

//========================================


function GridHelper() {

    this.checkGrid = function(containerSelector, tilesSelector) {

        this.container = document.querySelector(containerSelector);
        if(this.container == null) return;
        this.tiles = this.container.querySelectorAll(tilesSelector);

        switch (this.tiles.length) {
            case 2:
                addClassToItems(this.tiles, 'col--6');
                break;
            case 3:
                addClassToItems(this.tiles, 'col--4');
                break;
            case 4:
                addClassToItems(this.tiles, 'col--3');
                break;
            default:
                break;
        }
    };

    function addClassToItems(items, className) {
        items.forEach((item)=>{
            item.classList.add(className);
        })
    }
}

new GridHelper().checkGrid('.fl-container', '.fl-tile');
new GridHelper().checkGrid('.mr-container', '.mr-col');

//============================================

function TogglerAppender() {

    function checkElementHeight(containers, height) {
        containers.forEach(elem => {
            if (countHeight(elem) > height) {
                addToggleButton(elem);
            }
        });
    }

    function countHeight(container) {
        var count = 0;
        Array.prototype.forEach.call(container.children, function (item) {
            count += item.clientHeight;
        });
        return count;
    }

    function addToggleButton(container) {
        container.setAttribute('expandable', true);
        container.appendChild(createToggleButton(container));
    }

    function createToggleButton(tile) {
        var button = document.createElement('div');
        button.classList.add('toggle-btn');
        button.innerHTML = 'View All';
        button.addEventListener('click', function () {
            tile.classList.toggle('expanded');
            if (tile.classList.contains('expanded')) {
                button.innerHTML = 'Hide';
                return button;
            }
            button.innerHTML = 'View All'
        });
        return button;
    }

    this.init = function () {
        this.linksContainers = document.querySelectorAll('.js-expandable-container');
        if(this.linksContainers != null) {
            checkElementHeight(this.linksContainers, 400);
        }
    }
}

var flHandler = new TogglerAppender();

//========================================

function HomeSliderIniter () {
    this.init = function () {
        var sliderContainer = document.getElementById('slider-home-page');
        if(sliderContainer == null) return;
        $(sliderContainer).slick({
            infinite: true,
            dots: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        autoplay: false
                    }
                }]
        });
    }
}

var sliderInit = new HomeSliderIniter();

//========================================

function SearchResultMessage() {

    if(document.querySelector('.searchTopic') != null){
        var isSearchPage = true;
        var loadEvent = new CustomEvent('elementLoaded', {
            bubbles: true
        });
        var elementsCount = 0;

        this.originalMess = document.querySelector('.search-result-message');
        this.resultsCount = this.originalMess.querySelector('.total-results');
        this.query = this.originalMess.querySelector('.query');
        getAsyncElement(this.originalMess, '.total-results', 'resultsCount');
        getAsyncElement(this.originalMess, '.query', 'query')
    }

    function appendNewMessage(originalMessage, query) {
        originalMessage.innerHTML = "Sorry, we couldn't find any results matching " + query.innerHTML;
    }

    function setAsyncElem(elem, prop) {
        this[prop] = elem;
    }

    function getAsyncElement(parent, selector, prop){
        var interval = setInterval(()=>{
            var elem = parent.querySelector(selector);
            if(elem.innerHTML !== ''){
                elementsCount++;
                setAsyncElem(elem, prop);
                document.dispatchEvent(loadEvent);
                clearInterval(interval);
            }
        },20);
    }

    function initLogic() {
        if(this.resultsCount.innerHTML == "0") {appendNewMessage.call(this, this.originalMess, this.query)}
    }

    function checkElementsCount() {
        if(elementsCount >= 2){
            initLogic.call(this);
        }
    }

    this.init = function () {
        if(!isSearchPage) return;
        document.addEventListener('elementLoaded', checkElementsCount.bind(this));
    };
}

var searchResultMessageChecker = new SearchResultMessage();


function MobileHeaderScroll (){

    var scrollPosition = 0;

    this.container = document.querySelector('.title-bar-container.sticky-container');

    function checkScrollDirection() {
        if((document.body.getBoundingClientRect()).top > scrollPosition){
            this.container.classList.remove('scrolled-down');
        }else{
            this.container.classList.add('scrolled-down');
        }
        scrollPosition = (document.body.getBoundingClientRect()).top;
    }

    this.init = function () {
        var interval = setInterval(()=>{
            this.container = document.querySelector('.title-bar-container.sticky-container');
            if(this.container != null){
                document.addEventListener('scroll', checkScrollDirection.bind(this));
                document.addEventListener('touchmove', checkScrollDirection.bind(this));
                clearInterval(interval);
            }
        },20);
    }
}

var mobileHeaderScrollToggler = new MobileHeaderScroll();


//===============================================================


function ModuleRefGridHelper (){

    this.mrLists = document.querySelectorAll('.mr-list');

    function checkLists(lists) {
        lists.forEach((list)=>{
            if(list.innerText == ""){
                list.parentElement.remove()
            }
        })
    }

    this.init = function () {
        if(document.querySelector('.mr-container') == null) return;
        checkLists(this.mrLists);
    }
}

var moduleRefContent = new ModuleRefGridHelper();

//========================================

function versionsElemToggle () {

    var versionElem = document.querySelector('.MCHelpControl.MCHelpControl-Related.relatedTopics');

    var init = ()=>{
        if(versionElem == null) return;
        versionElem.addEventListener('click', function(e) {
            e.currentTarget.classList.toggle('active');
        })
    };


    var findElem = ()=>{
        var interval = setInterval(()=>{
            versionElem = document.querySelector('.MCHelpControl.MCHelpControl-Related.relatedTopics');
            if(versionElem !== null){
                init();
                clearInterval(interval);
            }
        }, 100)
    };

    versionElem ? init() : findElem();
}

function imageMapster () {

    function init() {
        if ($ === undefined) {
            console.log('$ is not defined');
            return;
        }
        if (!document.querySelector('.mapster-image')) {
            console.log('no mapster image');
            return;
        }
        if(!mapsterConfigs) {
            console.log('no mapster config');
            return;
        }

        var mapsters = document.querySelectorAll('.mapster-image');

        mapsters.forEach((mapster, index)=>{
            $(mapster).mapster(mapsterConfigs[index])
        });
    }

    init();
}



document.addEventListener("DOMContentLoaded", function (){
    topScroll.init();
    anchorer.init();
    asideNavCloseButton.init();
    showSearchButton.init();
    flHandler.init();
    sliderInit.init();
    searchResultMessageChecker.init();
    mobileHeaderScrollToggler.init();
    moduleRefContent.init();
    versionsElemToggle();
	imageMapster();
} );

