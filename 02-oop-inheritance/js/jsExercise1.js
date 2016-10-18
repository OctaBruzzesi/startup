class EventEmitter {
  constructor () {
    this.listeners = {};
  }

  on (event, callback) {
    if(this.listeners[event] !== callback){
      this.listeners[event] = callback
    }
  }

  off (event, callback) {
    if(this.listeners[event]) {
      delete this.listeners[event];
    }
  }

  emit (movie, event) {
    if(this.listeners[event]) {
      this.listeners[event](movie, event)
    }
  }
}

class logger {
  constructor(){

  }

  log(info, functionName){
      console.log(info.title + ' ' + functionName)
  }
}

class classMovie extends EventEmitter{
  constructor(title, year, duration){
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }
  play(){
    super.emit(this, 'play');
  }
  pause(){
    super.emit(this, 'pause');
  }
  resume(){
    super.emit(this, 'resume');
  }
  addCast(actor){
    if(actor.length === undefined) {
      console.log("a");
       this.cast.push(actor);
    }
    else {
      let i;
      for(i = 0; i < actor.length; i++){
        this.cast.push(actor[i])
      }
    }
  }
}

let Social = {

  share: function (friendName) {
    console.log("Share " + this.title + " with " + friendName);
  },
  like: function (friendName) {
    console.log(friendName + " liked " + this.title);
  }
}

class classActor {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }
}

let mylogger = new logger;

let Movie1 = new classMovie("Spider Man", "2016", "120");
let Movie2 = new classMovie("Iron Man", "2015", "95");

let actor1 = new classActor("Leonardo Di Caprio", 47);
let actor2 = new classActor("Benedict Cumberbatch", 29);
let actor3 = new classActor("Jennifer Lopez", 38);
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
