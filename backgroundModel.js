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
    console.log("backgroundImg", img)

  })
//  return backgroundImage;
}

function loadDockImage(){
  fabric.Image.fromURL('assets/Billy Docks.svg', function(img) {
    img.scale(0.5).set({
      left: 0,
      top: 0,
    });
    addImage(img);

  })
}

function addImage(img){
  canvas.add(img).setActiveObject(img);
}

// function addBackgroundImage(){
//   canvas.setBackgroundImage('assets/Billy Docks.svg', canvas.renderAll.bind(canvas));
// }
