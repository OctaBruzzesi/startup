class logger {
  constructor(){

  }

  log(movie, functionName){
      console.log(`${movie.title} ${functionName}`)
  }
}
export {logger}
