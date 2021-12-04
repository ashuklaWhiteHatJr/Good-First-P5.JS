function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 0, 0, 640, 480);
  tint(tint_color);
  circle(100, 100, 180);
  ellipse(325, 360, 333, 15);
  ellipse(325, 125, 333, 15);

  ellipse(225, 250, 15, 333);
  ellipse(420, 250, 15, 333);
  rect(500, 440, 250, 240);
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}

