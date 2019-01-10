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


function Anchorer () {

    var TEXT_TO_ID_REGEX = /(\W)/igm;
    var GO_TO_ANCHOR_DELAY = 100;
    var SCROLL_DELAY = 500;
    var SCROLL_EASE = 'swing';

    this.$container = $('html, body');
    this.$el = $('.js-anchorer');
    this.$targets = $('h1, h2, h3', this.$el);
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


var menuItems;
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function(){
        menuItems = document.querySelectorAll('.navigation .has-children');

        menuItems.forEach(function (item) {
            item.addEventListener('mouseenter', function (e) {
                var menuItem = e.currentTarget;


                setTimeout(function () {
                    var container = menuItem.querySelector('.has-children > .sub-menu');
                    console.log(container);
                    if(!container.classList.contains('ps') && container.clientHeight > window.innerHeight/2){
                        console.log('initing');
                        container.classList.add('scroll-backup');
                        var scrollbar = new PerfectScrollbar(container, {
                            useBothWheelAxes: false,
                            suppressScrollX: true
                        });
                        console.log('inited');
                    }
                },500)
            })
        });
        }, 500);
});

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



function ToggleSearch() {

    this.search = document.querySelector('.main-section .search');
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
        this.search.parentNode.appendChild(this.toggleOverlay);
    }
}

var showSearchButton = new ToggleSearch();


function TextTooltipCleaner() {

    this.containers = [];

    this.findContainers = function (toolTips) {
        var self = this;
        var prevParent = '';
        toolTips.forEach(function (item) {
            var currParent = item.parentElement;
            prevParent === currParent ? '' : self.containers.push(currParent);
            prevParent = item.parentElement;
        });
    };

     this.cleanUpContainers = function(containers, containerClass) {
        containers.forEach(function (item) {
            item.classList.contains(containerClass) ? true : item.classList.add(containerClass);

            item.childNodes.forEach(function (elem) {
                elem.nodeType == 3 ? elem.remove() : '';
            })
        })
    };

    this.init = function(){

        var toolTips = document.querySelectorAll('.MCTextPopup');
        var containerClass = 'MCTextPopupContainer';

        this.findContainers(toolTips);
        this.cleanUpContainers(this.containers, containerClass);

    };
}

var textTooltipCleaner = new TextTooltipCleaner();


function FeatureLinksHandler() {

    function checkElementHeight(elems, height) {
        elems.forEach(elem => {
            if (countHeight(elem) > height) {
                addToggleButton(elem);
            }
        });
    }

    function checkTilesGrid(tiles, container) {
        if(tiles.length == 4) container.classList.add('fl-container-2');
    }

    function countHeight(tile) {
        var count = 0;
        Array.prototype.forEach.call(tile.children, function (item) {
            count += item.clientHeight;
        });
        return count;
    }

    function addToggleButton(tile) {
        tile.setAttribute('expandable', true);
        tile.appendChild(createToggleButton(tile));
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
        this.linksContainer = document.querySelector('.fl-container');
        if(this.linksContainer != null) {
            this.links = this.linksContainer.querySelectorAll('.fl-tile');
            checkTilesGrid(this.links, this.linksContainer);
            checkElementHeight(this.links, 400);
        }
        this.moduleReference = document.querySelectorAll('.js-mr-container');
        if(this.moduleReference != null) checkElementHeight(this.moduleReference, 345);
    }
}

var flHandler = new FeatureLinksHandler();

 function HomeSliderIniter () {
    this.init = function () {
        var sliderContainer = document.getElementById('slider-home-page');
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

document.addEventListener("DOMContentLoaded", function (){
    topScroll.init();
    anchorer.init();
    asideNavCloseButton.init();
    textTooltipCleaner.init();
    showSearchButton.init();
    flHandler.init();
    sliderInit.init();
} );

