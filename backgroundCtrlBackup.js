
//var canvas = new fabric.Canvas('mainCanvas');

fabric.Image.fromURL('assets/Billy Docks.svg', function(img) {
  img.scale(6).set({
    left: 0,
    top: 0,
  });

console.log(canvas);
  canvas.add(img).setActiveObject(img);

  canvas.on('object:moving', function(options) {
    imgBottom = options.target.top + options.target.height;

    if(options.target.left > 0)
    {
      options.target.left = 0;
    }
    else {
      options.target.left = options.target.left;
    }

    if(options.target.top > getMainCanvasXPosition().top){
      options.target.top = 0;
    }
    else {
      options.target.top = options.target.top
    }

    //if(imgBottom <  )

    console.log(options);
    //getMainCanvasXTopPosition();
  });

});

function getMainCanvasXPosition(){
  var x = $("#mainCanvas").position();
  console.log(x);
  return x;
}
