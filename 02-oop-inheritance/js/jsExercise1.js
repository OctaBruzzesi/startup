class EventEmitter {
 constructor () {
   this.listeners = [];
 }

 on (event, callback) {
   if(this.listeners[event] != callback){
     this.listeners[event] = callback
   }
 }

 off (event, callback) {
   if(this.listeners[event]) this.listeners[event] = undefined;
 }

 emit (movie, event) {
    if(this.listeners[event]) this.listeners[event](movie, event);
  }
}

class logger {
  constructor(){

  }

  log(info, functionName){
      console.log(info.title + ' ' + functionName)
  }
}

let myEmitter = new EventEmitter;
let mylogger = new logger;

class classMovie extends EventEmitter{
 constructor(title, year, duration){
   super();
   this.title = title;
   this.year = year;
   this.duration = duration;
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
}

let Movie1 = new classMovie("Spider Man", "2016", "120");
let Movie2 = new classMovie("Iron Man", "2015", "95");
console.log(Movie1);


Movie1.on('play', mylogger.log);
Movie1.play();

Movie1.on('resume', mylogger.log);
Movie1.resume();

Movie1.off('play', mylogger.log);
Movie1.play();

//
// Movie1.pause();
//
// myEmitter.on(Movie2, mylogger.log);
// Movie2.play();
// Movie1.pause();
