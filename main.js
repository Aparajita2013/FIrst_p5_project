function preload() {
    
}

function setup() {
    canvas = createCanvas(700, 600)
    canvas.position(159, 180)
    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    fill("#28c5d4")
    stroke("#17e391")
    circle(50, 50, 80)
    circle(650, 50, 80)
    circle(650, 550, 80)
    circle(50, 550, 80)
    fill("#9a11f5")
    stroke("#9a11f5")
    rect(90, 35, 520, 35)
    rect(90, 530, 520, 35)
    rect(35, 82, 35, 430)
    rect(635, 82, 35, 430)
    image(video,200,130,350,350)
}

function take_snapshot() {
    save("p5.js.png")
}



