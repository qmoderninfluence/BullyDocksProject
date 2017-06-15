function loadDockImage(){
  fabric.Image.fromURL('assets/Billy Docks.svg', function(img) {
    img.set({
      height:canvas.height / 10,
      width:canvas.width / 10,
      left: 0,
      top: 0,
    });

    addDockImage(img);
    console.log(img)
  //  img.sendToBack();
    img.on('moving', function() {
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
  allObjects.push(img)
  console.log(allObjects.length)
   canvas.add(img).setActiveObject(img);
}

// function getMainCanvasPosition(){
//   var position = $("#mainCanvas").position();
//   console.log(position);
//   return position;
// }

// function addBackgroundImage(){
//   canvas.setBackgroundImage('assets/Billy Docks.svg', canvas.renderAll.bind(canvas));
// }
