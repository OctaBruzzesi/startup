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
export{EventEmitter}
