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
  image(video, 50, 70, 540, 390);
  tint(tint_color);
  
  fill('pink');
  stroke('green');
  rect(55,30,540,40);
  rect(55,420,540,40);
  rect(35,30,30,430);
  rect(575,30,30,430);
  fill('purple');
  stroke('green');
  circle(50,50,40);
  circle(590,50,40);
  circle(50,440,40);
  circle(590,440,40);
}

function take_snapshot(){    
  save('myPhoto.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}

