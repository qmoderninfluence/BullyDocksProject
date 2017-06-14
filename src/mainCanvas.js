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
var backgroundGroup = new fabric.Group([]);



function getMainCanvasXPosition(){
  var x = $("#mainCanvas").position();
  console.log(x);
  return x;
}
