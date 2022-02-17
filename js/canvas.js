function checkIt() {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');


  function Pixel( x, y ) {

    this.x = x;
    this.y = y;
    this.hue = Math.floor( Math.random() * 360 );
    var direction = Math.random() > 0.5 ? -1 : 1;
    this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;

  }

  Pixel.prototype.update = function() {
    this.hue += this.velocity;
    console.log(this.hue);
  };

  Pixel.prototype.render = function( ctx ) {
    var hue = Math.round( this.hue );
    ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
    ctx.fillRect( this.x, this.y, ctx.canvas.width, ctx.canvas.height );

  }

  var pixels = [
    new Pixel( 0, 0 ),
    new Pixel( 1, 0 )
  ];

  pixels.forEach( function( pixel ) {
    console.log(pixel);
  });

  function animate() {
    pixels.forEach( function( pixel ) {

      // pixel.update();
      pixel.render( ctx );
    });
    requestAnimationFrame( animate );
  }

  animate();
}
if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined")
}else{
  window.onload = checkIt;
}
