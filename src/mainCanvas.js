var canvas = new fabric.Canvas('mainCanvas',{
  preserveObjectStacking: true
});
 var AGroup = new fabric.Group();

var isGroupSelection = false

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

//canvas.add(displayGroup);
//canvas.setActiveObject(displayGroup);

loadBackgroundImage();
loadDockImage()
loadDockImage()




function selectAllCanvasObjects(){


    var objs = canvas.getObjects().map(function(o) {
		    return o.set('active', true);
	  });
	  var group = new fabric.Group(objs, {
	  });
    AGroup = group
  //  group.addWithUpdate(objs);
	  //canvas._activeObject = null;
    //canvas.clear().renderAll();
	  //canvas.setActiveGroup(AGroup.setCoords()).renderAll();
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
    canvas.add(items[i]);
  }
  canvas.renderAll();
}

function groupMovingAndScaling(group){
  group.on('moving', function() {
    var imgWidth = group.width * group.scaleX
    var imgHeight = group.height * group.scaleY

    var imgBottom = group.top + imgHeight;
    var imgRight = group.left + imgWidth;

    if(group.left > 0)
    {
      group.left = 0;
    }
    else {
      group.left = group.left;
    }

    if(imgRight < canvas.width){

      group.left = canvas.width - imgWidth;
    }
    else{
      group.left = group.left;

    }

    if(group.top > getMainCanvasPosition().top){
      group.top = 0;
    }
    else {
      group.top = group.top
    }

    if(imgBottom < canvas.height){
      group.top = canvas.height - imgHeight;
    }
    else{
      group.top = group.top;

    }

  });

  group.on('scaling',function(){

      var imgWidth = group.width * group.scaleX
      var imgHeight = group.height * group.scaleY

      var imgBottom = group.top + imgHeight;
      var imgRight = group.left + imgWidth;
  console.log("group",group.left)
  console.log(canvas.width)
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

      if(group.left > 0){
        group.left = 0
      }
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

  // group.on('modified',function(){
  //   console.log("modified",group)
  //   if (group.left > 0 ){
  //     group.left = 0
  //   }
  // })

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


// function getMainCanvasXPosition(){
//   var x = $("#mainCanvas").position();
//   console.log(x);
//   return x;
// }
