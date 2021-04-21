function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotposes);
}

function gotPoses(){
    if(result.length < 0){
        console.log(results);
    }
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    background('#FFD700');
}
