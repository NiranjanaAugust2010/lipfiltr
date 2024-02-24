nosex=0
nosey=0




function preload(){

  clownnose=loadImage("https://i.postimg.cc/K8hV8xyg/lips.png")
}
function setup(){
 canvas=createCanvas(300,300)
 canvas.center()

 camera=createCapture(VIDEO)
 camera.size(300,300)
 camera.hide()
 poseNet=ml5.poseNet(camera,modelLoaded)
 poseNet.on('pose',gotPoses)
}
function draw(){
 image(camera,0,0,300,300)
 image(clownnose,nosex,nosey,60,30)

}
function modelLoaded(){
 console.log("poseNet is initialised")
}
function gotPoses(results){
  if(results.length>0){
    console.log(results)
    nosex=results[0].pose.nose.x-22
    nosey=results[0].pose.nose.y+8
  }


 
}

function takesnapshot(){
  save('filter.png')
}