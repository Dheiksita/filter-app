noseX=0;
noseY=0;
function preload(){
    lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup(){
    Canvas=createCanvas(360,350);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(360,350);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
}
function gotResults(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-25;
        noseY=results[0].pose.nose.y+15;
        console.log("nose x= "+noseX);
        console.log("nose y= "+noseY);
    }
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
    image(video,0,0,350,350);
    image(lipstick,noseX,noseY,40,20);
}
function takePic(){
    save('funnyNose.png');
}
function back(){
    window.location="index.html"
}