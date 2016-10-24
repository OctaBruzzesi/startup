"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

export var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, callback) {
      if (this.listeners[event] !== callback) {
        this.listeners[event] = callback;
      }
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      if (this.listeners[event]) {
        delete this.listeners[event];
      }
    }
  }, {
    key: "emit",
    value: function emit(movie, event) {
      if (this.listeners[event]) {
        this.listeners[event](movie, event);
      }
    }
  }]);

  return EventEmitter;
}();
