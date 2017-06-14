//var backgroundImage;
//console.log('model first?');
function loadBackgroundImage(){
  fabric.Image.fromURL('assets/Billy Docks.svg', function(img) {
    img.set({
      height:canvas.height,
      width:canvas.width,
      left: 0,
      top: 0,
    });
    //img.active = true
  //  addBackgroundImage(img)
    addImage(img);
    img.lockRotation = true;
console.log(img)
  img.sendToBack();
  img.on('moving', function() {
    var imgWidth = img.width * img.scaleX
    var imgHeight = img.height * img.scaleY

    var imgBottom = img.top + imgHeight;
    var imgRight = img.left + imgWidth;

    if(img.left > 0)
    {
      img.left = 0;
    }
    else {
      img.left = img.left;
    }

    if(imgRight < canvas.width){

      img.left = canvas.width - imgWidth;
      console.log("imgRight",imgRight);
    }
    else{
      img.left = img.left;
    }

    if(img.top > getMainCanvasPosition().top){
      img.top = 0;
    }
    else {
      img.top = img.top
    }

    if(imgBottom < canvas.height){
      img.top = canvas.height - imgHeight;
    }
    else{
      img.top = img.top;
    }

    console.log("img.aCoords.br.x",img.aCoords.br.x);
    console.log("canvas.width",canvas.width);
    console.log(img);
  });

  img.on('scaling')

  })
}


function addImage(img){
  canvas.add(img).setActiveObject(img);
}

function getMainCanvasPosition(){
  var position = $("#mainCanvas").position();
  console.log(position);
  return position;
}



// function addBackgroundImage(){
//   canvas.setBackgroundImage('assets/Billy Docks.svg', canvas.renderAll.bind(canvas));
// }
