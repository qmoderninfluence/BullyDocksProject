// var DockImage = new fabric.Image();


/////////////
function loadDockImage(){
  fabric.Image.fromURL('assets/Billy Docks.svg', function(img) {
    img.set({
      height:canvas.height / 10,
      width:canvas.width / 10,
      left: 0,
      top: 0,
      perPixelTargetFind: true
    });

    DockImage = img
  //  addDockImage(DockImage);

  //  img.sendToBack();
      img.on('moving', function() {
        img.bringToFront();
        var imgWidth = img.width * img.scaleX
        var imgHeight = img.height * img.scaleY

        var imgBottom = img.top + imgHeight;
        var imgRight = img.left + imgWidth;

      // console.log(img);
      });

    })
}

function addDockImage(img){
  //displayGroup.addWithUpdate(img);
  // allObjects.push(img)

  canvas.add(img).setActiveObject(img);
  img.bringToFront();

}

// function getMainCanvasPosition(){
//   var position = $("#mainCanvas").position();
//   console.log(position);
//   return position;
// }

// function addBackgroundImage(){
//   canvas.setBackgroundImage('assets/Billy Docks.svg', canvas.renderAll.bind(canvas));
// }
