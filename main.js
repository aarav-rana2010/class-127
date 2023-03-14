song="";
LeftWristX=0;
LeftWristY=0;
function preload(){
song=loadSound("Music.mp3");
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("Pose",gotposes);
}
function draw(){
image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function stop(){
    song.stop();
}
function modelLoaded() {
    console.log("PoseNet Is Loaded");
}
function gotposes(results) {
if(results.length > 0) {
    console.log(results);
    LeftWristX=results[0].pose.leftWrist.x;
    LeftWristY=results[0].pose.leftWrist.y;
    console.log("LeftWristX = "+LeftWristX);
    console.log("LeftWristY"+LeftWristY);
}
}