class classMovie{
  constructor(title, year, duration){
    this.title = title;
    this.year = year;
    this.duration = duration;
  }
  play(){

  }
  pause(){

  }
  resume(){

  }
}

class EventEmitter {
  constructor () {
    this.listeners = new Map();
  }
  on (event, callback) {
    this.listeners.has(event) || this.listeners.set(event, []);
    this.listeners.get(event).push(callback);
  }
  off (event, callback) {
    let isFunction = function(obj) {
    return typeof obj == 'function' || false;
    };

    let listeners = this.listeners.get(event),
        index;

    if (listeners && listeners.length) {
        index = listeners.reduce((i, listener, index) => {
            return (isFunction(listener) && listener === callback) ?
                i = index :
                i;
        }, -1);

        if (index > -1) {
            listeners.splice(index, 1);
            this.listeners.set(event, listeners);
            return true;
        }
    }
    return false;
  }

  emit (event, ...args) {
    let listeners = this.listeners.get(event);

    if (listeners && listeners.length) {
        listeners.forEach((listener) => {
            listener(...args);
        });
        return true;
    }
    return false;
  }
}

let Movie1 = new classMovie("Spider Man", "2016", "120");
let Movie2 = new classMovie("Jumanji", "1999", "115");
let Movie3 = new classMovie("Jurassic Park", "1996", "90");
console.log(Movie1);
Movie1.play();

function showTitle (movie) {
  console.log("Emitted " + movie.title)
}

var myEmitter = new EventEmitter;
myEmitter.on(Movie1, showTitle(Movie1));
myEmitter.emit(Movie1);
myEmitter.on(Movie3, showTitle(Movie3));
myEmitter.emit(Movie3);
myEmitter.off(Movie1, showTitle(Movie1));
myEmitter.emit(Movie1, Movie1);
