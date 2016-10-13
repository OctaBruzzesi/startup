class classMovie{
  constructor(title, year, duration){
    this.title = title;
    this.year = year;
    this.duration = duration;
  }
  play(){
      console.log("aaa");
  }
  pause(){

  }
  resume(){

  }
}


let Movie = new classMovie("Spider Man", "2016", "120");
console.log(Movie);
Movie.play();

class EventEmitter{
  on(){

  }
  emit(){

  }
  off(){

  }
}
