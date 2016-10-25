function initialize () {
  let x =  0;
  let y = 5;
  let drawSpeedx = 3;
  let drawSpeedy = 4;

  function animateDraw() {
    let animationFrame = window.mRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame||
    window.oRequestAnimationFrame; // supports different browsers
    animationFrame(animateDraw);
    x += drawSpeedx;
    y += drawSpeedy;
    if(x <= 0 || x >= 350){
      drawSpeedx = -drawSpeedx;
    }
    if(y <= 0 || y >= 350){
      drawSpeedy = -drawSpeedy;
    }

      draw();
  }

  function draw() {
      let canvas  = document.getElementById("canvas");
      let context = canvas.getContext("2d");
      context.clearRect(0, 0, 500, 500);
      context.fillStyle = "#R89EE9";
      context.fillRect(x, y, 100, 30);
  }

  animateDraw();
}
