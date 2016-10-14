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

let Movie = new classMovie("Spider Man", "2016", "120");
console.log(Movie);
Movie.play();



class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }
  on(event, callback) {
    this.listeners.has(event) || this.listeners.set(event, []);
    this.listeners.get(event).push(callback);
  }
  removeListener(event, callback) {
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
  emit(event, ...args) {
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

var myEmitter = new EventEmitter;
myEmitter.on(Movie.play(), function (Movie) {console.log("Emitted " + Movie.title)});
myEmitter.emit(Movie.play(), Movie);
