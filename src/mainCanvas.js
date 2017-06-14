var canvas = new fabric.Canvas('mainCanvas',{
  preserveObjectStacking: true
});
//loadBackgroundImage();
// var backgrounImg = "";
//loadDockImage()
//loadDockImage()
//loadDockImage()

loadBackgroundImage();
loadDockImage();
//loadDockImage();
//loadDockImage();
//addBackgroundImage()
// console.log("backgroundCtrl image: ", backgroundImg);


function getMainCanvasXPosition(){
  var x = $("#mainCanvas").position();
  console.log(x);
  return x;
}
