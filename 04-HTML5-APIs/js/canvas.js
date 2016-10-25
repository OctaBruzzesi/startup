function generateRoundColor () {
  let r = 255*Math.random(),
      g = 255*Math.random(),
      b = 255*Math.random();
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function draw() {
  let drawCanvas = document.getElementById('canvas');
  let i, r, x, y, radius, angleInit, angleEnd, antiClockWise;
  if (canvas.getContext){
    let ctx = canvas.getContext('2d');

    for(i=0;i<5;i++){
      for(r=0;r<5;r++){
        ctx.beginPath();
        x = 50+r*50;
        y = 50+i*50;
        radius = 25;
        angleInit = 0;
        angleEnd = Math.PI+(Math.PI*r)/2;
        antiClockWise = i/2;
        ctx.arc(x, y, radius, angleInit, angleEnd, antiClockWise);
        if (i>1){
          ctx.fill();
          ctx.fillStyle = generateRoundColor(); //fix
          console.log(generateRoundColor());
          console.log(generateRoundColor());
                } else {
          ctx.stroke();
          ctx.strokeStyle=generateRoundColor();
        }
      }
    }
  }
}
