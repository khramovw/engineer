'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* js */

document.querySelector('.btn-js').addEventListener('click', function (e) {
            document.querySelector('.second').scrollIntoView();
});

var ScrollPage = function () {
            function ScrollPage() {
                        _classCallCheck(this, ScrollPage);

                        this.canGo = true;
                        this.pages;
                        this.currpage = 1;
                        this.newpage;
                        this.maxpage;

                        this.event();
            }

            _createClass(ScrollPage, [{
                        key: 'htmlColToObj',
                        value: function htmlColToObj(e) {
                                    return [].slice.call(e);
                        }
            }, {
                        key: 'event',
                        value: function event() {
                                    var _this = this;

                                    window.addEventListener('wheel', function (e) {
                                                e.preventDefault();

                                                // delayed event for touchpad
                                                if (!_this.canGo) return;
                                                _this.canGo = false;

                                                // get direction
                                                var direction = e.wheelDeltaY < 0 ? 1 : -1;

                                                // get number of next page
                                                _this.newpage = _this.currpage + direction;

                                                // set infinity scroll
                                                if (_this.newpage > _this.maxpage) _this.newpage = 1;
                                                if (_this.newpage < 1) _this.newpage = _this.maxpage;

                                                _this.pages = _this.htmlColToObj(document.getElementsByTagName('section'));

                                                _this.maxpage = _this.pages.length;

                                                // scroll to curent position
                                                _this.pages.filter(function (el, i) {

                                                            if (el.dataset.set == _this.newpage) {

                                                                        window.scroll(0, el.offsetTop);
                                                            }
                                                });

                                                // set number of current page
                                                _this.currpage = _this.newpage;

                                                setTimeout(function () {
                                                            _this.canGo = true;
                                                }, 1200);
                                    });
                        }
            }]);

            return ScrollPage;
}();

var scrolpage = new ScrollPage();