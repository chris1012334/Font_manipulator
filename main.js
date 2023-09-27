
difference = 0;
rightWristX= 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw() {
    background('#969A97');

    document.getElementById("font_size").innerHTML = "Width and Height of font-size will be = " + difference +"px";
    fill('#F90093');
 textSize(difference);
 text('hi',50,400);
}

function gotPoses(results)
{
    if(results.length> 0)
    {
        console.log(results);
        

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        
        
    }
}