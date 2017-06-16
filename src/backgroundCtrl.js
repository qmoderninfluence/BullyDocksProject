
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
    img.selectable = false
    backgroundMovingAndScaling(img);

  });
}

function backgroundMovingAndScaling(img){
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
    }
    else{
      img.left = img.left;
      img.lockScalingX = false;
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
      img.lockScalingY = false;
    }

  });

  img.on('scaling',function(){
      console.log("scaling",img.getWidth)
      console.log("scaling img",img)
      var imgWidth = img.width * img.scaleX
      var imgHeight = img.height * img.scaleY

      var imgBottom = img.top + imgHeight;
      var imgRight = img.left + imgWidth;

      if(img.scaleX < 1){
        img.scaleX = 1
        img.lockScalingX = false;
      }
      else if(img.scaleY < 1){
        img.scaleY = 1
        img.lockScalingY = false;
      }
      else if(imgRight < canvas.width){
        img.lockScalingX = true;
      }
      else if(imgRight > canvas.width){
        img.lockScalingX = false;
      }
      if(img.left > 0)
      {
        img.left = 0;
      }
      else {
        img.left = img.left;
      }

      if(img.top > getMainCanvasPosition().top){
        img.top = 0;
      }
      else {
        img.top = img.top
      }

      if(imgBottom < canvas.height){
        img.scaleY = img.scaleX
        img.lockScalingY = true;
      }
      else {
        img.lockScalingY = false;
      }
  });

}

function addImage(img){

  //displayGroup.addWithUpdate(img);
  canvas.add(img).setActiveObject(img);
  //backgroundImage = canvas.getActiveObject();
}

function getMainCanvasPosition(){
  var position = $("#mainCanvas").position();
  return position;
}

// function addBackgroundImage(){
//   canvas.setBackgroundImage('assets/Billy Docks.svg', canvas.renderAll.bind(canvas));
// }
