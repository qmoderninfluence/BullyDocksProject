var canvas = new fabric.Canvas('mainCanvas',{
  preserveObjectStacking: true
});
var DockImage = new fabric.Image();
loadBackgroundImage();
loadDockImage();


function init(DockImage) {
    var bg = new fabric.Rect({
          left: 0,
          top: 0,
          fill:  "#eee",
          width: canvas.width,
          height: canvas.height/10,
          lockRotation: true,
          // maxHeight: document.getElementById("fabriccanvas").height,
          // maxWidth: document.getElementById("fabriccanvas").width,
          selectable: false,
      });
      console.log(DockImage)
    // var squareBtn = new fabric.Rect({
    //     top: 10,
    //     left: 18,
    //     width: 40,
    //     height: 40,
    //     fill: '#af3',
    //     lockRotation: true,
    //     originX: 'left',
    //     originY: 'top',
    //     cornerSize: 15,
    //     hasRotatingPoint: false,
    //     perPixelTargetFind: true,
    // });

    //var dockBtn = DockImage
// console.log(dockBtn)

    var shadow = {
        color: 'rgba(0,0,0,0.6)',
        blur: 3,
        offsetX: 0,
        offsetY: 2,
        opacity: 0.6,
        fillShadow: true,
        strokeShadow: true
    };

   canvas.add(bg);
   bg.setShadow(shadow);
   //canvas.add(dockBtn);
   //DockImage.bringToFront()


   canvas.forEachObject(function (e) {
        e.hasControls = e.hasBorders = false; //remove borders/controls
    });

    function draggable(object) {
    //  console.log("draggable",object)
      object.on('mousedown', function() {
          var temp = object.cloneAsImage();

          temp.set({
              hasControls: false,
              hasBorders: false,
          });
          canvas.add(temp);
          //loadDockImage()
          draggable(temp);
      });
      object.on('mouseup', function() {
          // Remove an event handler
          this.off('mousedown');

          // Comment this will let the clone object able to be removed by drag it to menu bar
          // this.off('mouseup');

          // Remove the object if its position is in menu bar
          if(this.top<=75) {
              canvas.remove(this);
          }
      });
  }

  //draggable(squareBtn);
  draggable(DockImage);


}

//init(DockImage)


var AGroup = new fabric.Group();
var isGroupSelection = false

$("#loadDock").click(function(){
  //selectAllCanvasObjects();
  init();
});

$("#selectAll").click(function(){
  //selectAllCanvasObjects();
   if(isGroupSelection === false){
     isGroupSelection = true;
     selectAllCanvasObjects();
   }
   else{
     isGroupSelection = false;
     unSelectAllCanvasObjects();
   }
});

$("#FindGroup").click(function(){
  AGroup.left = 0
  AGroup.top = 0;
  canvas.renderAll();
});


//loadDockImage()
//loadDockImage()


function selectAllCanvasObjects(){
    var objs = canvas.getObjects().map(function(o) {
		    return o.set('active', true);
	  });
	  var group = new fabric.Group(objs, {
	  });
    AGroup = group
    canvas.clear().renderAll();
    canvas.add(AGroup);
    groupMovingAndScaling(AGroup);
    //console.log("canvas",canvas)
}

function unSelectAllCanvasObjects(){
  var items = AGroup.getObjects();
  AGroup._restoreObjectsState();
  AGroup.destroy();
  // AGroup.destroy();
  canvas.remove(AGroup);

  for(var i = 0; i < items.length; i++) {
    items[i].hasControls = true;
    canvas.add(items[i]).setActiveObject(items[i]);

  }
  canvas.renderAll();
}
canvas.on({
  'touch:gesture': function(object) {
    var imgWidth;
    var imgHeight;
    var imgBottom;
    var imgRight;
    if(object.target === AGroup){
      imgWidth = object.target.width * object.target.scaleX
      imgHeight = object.target.height * object.target.scaleY

      imgBottom = object.target.top + imgHeight;
      imgRight = object.target.left + imgWidth;

      if(object.target.left > 0)
      {
        object.target.left = 0;
        object.target.lockScalingX = false;
        object.target.lockScalingY = false;
      }
      if(object.target.top > getMainCanvasPosition().top){
        object.target.top = 0;
        object.target.lockScalingX = false;
        object.target.lockScalingY = false;
      }
      if(imgBottom < canvas.height){
        object.target.top = canvas.height * (1 - object.target.scaleY)
      }
      if(imgRight < canvas.width){
        object.target.left = canvas.width * (1 - object.target.scaleX)
      }
    }
  }
})

function groupMovingAndScaling(group){
  var imgMovingWidth;
  var imgMovingHeight;
  var imgMovingBottom;
  var imgMovingRight

  var imgScalingWidth
  var imgScalingHeight
  var imgScalingBottom
  var imgScalingRight

  group.on('moving', function() {

    imgMovingWidth = group.width * group.scaleX;
    imgMovingHeight = group.height * group.scaleY;

    imgMovingBottom = group.top + imgMovingHeight;
    imgMovingRight = group.left + imgMovingWidth;

    if(group.left > 0)
    {
      group.left = 0;
      group.lockScalingX = false;
      group.lockScalingY = false;
    }
    else {
      group.left = group.left;
    }

    if(imgMovingRight < canvas.width){

      group.left = canvas.width - imgMovingWidth;
    }
    else{
      group.left = group.left;

    }

    if(group.top > getMainCanvasPosition().top){
      group.top = 0;
      group.lockScalingX = false;
      group.lockScalingY = false;
    }
    else {
      group.top = group.top
    }

    if(imgMovingBottom < canvas.height){
      group.top = canvas.height - imgMovingHeight;
    }
    else{
      group.top = group.top;

    }

  });

  group.on('scaling',function(){
    console.log("scaling",group)
      imgScalingWidth = group.width * group.scaleX
      imgScalingHeight = group.height * group.scaleY

      imgScalingBottom = group.top + imgScalingHeight;
      imgScalingRight = group.left + imgScalingWidth;
      if(group.scaleX < 3){
        if((group.width / canvas.width) === 1){
          if(group.scaleX < 1){
            group.scaleX = 1;
            group.scaleY = group.scaleX
          }
        }
        if(group.scaleX < (canvas.width / group.width)){
          group.scaleX = canvas.width / group.width
          group.scaleY = canvas.height / group.height
        }
      }
      else{
        group.scaleX = 3
        group.scaleY = 3
      }

      // if(group.left > 0)
      // {
      //   group.left = 0;
      // }
////////////



///////
      // if(group.scaleX < 1){
      //   group.scaleX = 1
      //   group.scaleY =  group.scaleX;
      //   group.lockScalingX = false;
      //   group.lockScalingY = false;
      // }
      // else{
      //   group.scaleY =  group.scaleX;
      // }
      //
      // if(group.scaleY < 1){
      //   group.scaleY = 1
      //   group.scaleX =  group.scaleY;
      //   group.lockScalingY = false;
      //   group.lockScalingX = false;
      // }
      // else{
      //   group.scaleX =  group.scaleY;
      // }

        // if(group.left > 0){
        //     group.left = 0;
        //   }


      // if(group.scaleX >= 1 ||group.scaleY >=1 ){
      //   if(group.left > 0){
      //     group.left = 0;
      //   }
      //   else{
      //     group.lockScalingX = false;
      //     group.lockScalingY = false;
      //   }
      //   if(imgRight < canvas.width){
      //     group.scaleY = group.scaleX
      //     group.lockScalingX = true;
      //     group.lockScalingY = true;
      //   }
      //   else{
      //     group.lockScalingX = false;
      //     group.lockScalingY = false;
      //   }
      //   if(group.top > getMainCanvasPosition().top){
      //     group.top = 0;
      //   }
      //   else{
      //     group.lockScalingX = false;
      //     group.lockScalingY = false;
      //   }
      //   if(imgBottom < canvas.height){
      //       group.scaleY = group.scaleX
      //       group.lockScalingY = true;
      //       group.lockScalingX = true;
      //   }
      //   else{
      //     group.lockScalingX = false;
      //     group.lockScalingY = false;
      //   }
      // //
      //  }
      // if(group.scaleX >= 1){
      //   group.scaleY =  group.scaleX;
      // }
      // if(group.scaleY >= 1)
      // {
      //   group.scaleX =  group.scaleY;
      // }
      // else if (group.left <= 0){
      //   group.left = group.left;
      //   group.scaleY =  group.scaleX;
      // }
      // if(imgRight < canvas.width){
      //   group.lockMovingX = true;
      //   group.lockMovingY = true;
      //   group.lockScalingX = true;
      //     group.lockScalingY = true;
      // }


      /////////////////////////
      //
      //   if(imgRight < canvas.width){
      //     group.scaleX = group.scaleY
      //     group.lockScalingX = true;
      //     group.lockScalingY = true;
      //   }
      //   else if(imgRight >= canvas.width){
      //     group.lockScalingX = false;
      //     group.lockScalingY = false;
      //   }
      //   else if(group.left > 0)
      //   {
      //     group.left = 0;
      //   }
      //   else if (group.left <= 0){
      //     group.left = group.left;
      //   }
      //   else if(group.top > getMainCanvasPosition().top){
      //     group.top = 0;
      //   }
      //   else if(group.top <= getMainCanvasPosition().top){
      //     group.top = group.top
      //   }
      //   else if(imgBottom < canvas.height){
      //     group.scaleY = group.scaleX
      //     group.lockScalingY = true;
      //     group.lockScalingX = true;
      //   }
      //   else {
      //     group.lockScalingY = false;
      //     group.lockScalingX = false;
      // }

  });


}

//
// var sliderValue;
// var slider = new Slider('#ex1', {
// 	formatter: function(value) {
// 		sliderValue = value;
// 		return 'Current value: ' + value;
// 	}
// });
//
// function getSlider(){
// 	console.log("sliderValue",sliderValue)
//   console.log(canvas)
// 	return sliderValue;
//
//
// }


function getMainCanvasXPosition(){
  var x = $("#mainCanvas").position();
  console.log(x);
  return x;
}
