var canvas = new fabric.Canvas('mainCanvas',{
  preserveObjectStacking: true
});

//var displayGroup = new fabric.Group();
var allObjects = [];
//canvas.add(displayGroup);
//canvas.setActiveObject(displayGroup);

loadBackgroundImage();
// var backgrounImg = "";
loadDockImage()
loadDockImage()
//loadDockImage()

//loadBackgroundImage(getSlider());
console.log(allObjects[1])
// loadDockImage();
//loadDockImage();
//loadDockImage();
//addBackgroundImage()
// console.log("backgroundCtrl image: ", backgroundImg);


//
//
// canvas.forEachObject(function(o) {
//     console.log("group",o)
//       group.addWithUpdate(o);
//       canvas.remove(o);
//   });
//
//   console.log("backgroundImg",backgroundImage)
//
//   canvas.setActiveObject(group);
//   canvas.add(group);
// console.log("item",canvas.item(0))


//selectAllCanvasObjects()

function getMainCanvasXPosition(){
  var x = $("#mainCanvas").position();
  console.log(x);
  return x;
}
