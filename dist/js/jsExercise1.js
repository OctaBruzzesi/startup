'use strict';

import {EventEmitter} from "EventEmitter.js";

var EventEmitter = new EventEmitter(settings);

// var _EventEmitter = require('EventEmitter');
//
// var EventEmitter = _interopRequireWildcard(_EventEmitter);

var _classMovie = require('classMovie');

var classMovie = _interopRequireWildcard(_classMovie);

var _classActor = require('classActor');

var classActor = _interopRequireWildcard(_classActor);

var _logger = require('logger');

var logger = _interopRequireWildcard(_logger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Social = {
  share: function share(friendName) {
    console.log('Share ' + this.title + ' with ' + friendName);
  },
  like: function like(friendName) {
    console.log(friendName + ' liked ' + this.title);
  }
};

var mylogger = new logger();

var Movie1 = new classMovie("Spider Man", "2016", "120");
var Movie2 = new classMovie("Iron Man", "2015", "95");

var actor1 = new classActor("Leonardo Di Caprio", 47);
var otherCast = [new classActor("Benedict Cumberbatch", 29), new classActor("Jennifer Lopez", 38)];

Movie1.on('play', mylogger.log);
Movie1.play();

Movie1.on('resume', mylogger.log);
Movie1.resume();

Movie1.off('play', mylogger.log);
Movie1.play();

Object.assign(Movie1, Social);

Movie1.share("John Frusciante");
Movie1.like("John Frusciante");
Movie1.addCast(actor1);
Movie1.addCast(otherCast);
console.log(Movie1.cast);
//
// Movie1.pause();
//
// myEmitter.on(Movie2, mylogger.log);
// Movie2.play();
// Movie1.pause();
