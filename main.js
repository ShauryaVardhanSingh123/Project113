function setup() {
    canvas=createCanvas(600, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    circle(25,25,55);
    circle(575,25,55);
    circle(25,325,55);
    circle(575,325,55);
    rect(52.5,16,495,20);
    rect(52.5,316,495,20);
    rect(15,53,20,245);
    rect(565,53,20,245);
    image(video,0,0,600,500);
}

function takeSnapshot(){
    save("photo.png")
}