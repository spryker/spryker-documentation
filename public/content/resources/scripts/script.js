function ScrollToTop () {

    const THRESHOLD = 500;
    const DIRECTION_UP = 'up';
    const DIRECTION_DOWN = 'down';
    const SCROLL_DELAY = 500;
    const SCROLL_EASE = 'swing';

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
topScroll.init();


function Anchorer () {

    const TEXT_TO_ID_REGEX = /(\W)/igm;
    const GO_TO_ANCHOR_DELAY = 100;
    const SCROLL_DELAY = 500;
    const SCROLL_EASE = 'swing';

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
        const that = this;
        const href = $(e.currentTarget).attr('href');

        this.scrollToAnchor(href, function () {
            that.setHash(href);
        });

        return false;
    };

    this.appendAnchors = function() {
        const that = this;

        this.$targets.each(function (index, element) {
            const $element = $(element);
            const text = $element.text().trim() || '';
            const id = that.normalize(text);

            $element.html(that.createAnchor(id, text));
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

        const $anchor = $(href);

        if ($anchor.length < 1) {
            return;
        }

        const top = $anchor.offset().top - this.headerHeight;
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
anchorer.init();


var menuItems;
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function(){
        menuItems = document.querySelectorAll('.navigation .has-children');

        menuItems.forEach(function (item) {
            item.addEventListener('mouseenter', function (e) {
                var menuItem = e.currentTarget;


                setTimeout(function () {
                    var container = menuItem.querySelector('.navigation .has-children > .sub-menu');

                    if(!container.classList.contains('ps') && container.clientHeight > window.innerHeight - 100){
                        var scrollbar = new PerfectScrollbar(container, {
                            useBothWheelAxes: false,
                            suppressScrollX: true
                        });
                    }
                },500)
            })
        });
        }, 500);
});
