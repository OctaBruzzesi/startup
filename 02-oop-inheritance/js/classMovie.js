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
    this.cast = this.cast.concat(actor);
  }
}
export {classMovie}
