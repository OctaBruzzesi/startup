import {EventEmitter} from './EventEmitter';
import {logger} from './logger';
import {classMovie} from './classMovie';
import {classActor} from './classActor';

let Social = {
  share: function (friendName) {
    console.log(`Share ${this.title} with ${friendName}`);
  },
  like: function (friendName) {
    console.log(`${friendName} liked ${this.title}`);
  }
}

let mylogger = new logger;

let Movie1 = new classMovie("Spider Man", "2016", "120");
let Movie2 = new classMovie("Iron Man", "2015", "95");

let actor1 = new classActor("Leonardo Di Caprio", 47);
let otherCast = [
  new classActor("Benedict Cumberbatch", 29),
  new classActor("Jennifer Lopez", 38)
  ]

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
