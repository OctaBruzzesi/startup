import {EventEmitter} from './EventEmitter';
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
export {classMovie}
