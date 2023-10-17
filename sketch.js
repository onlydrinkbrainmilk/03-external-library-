let volumeSlider;
let  feedbackSlider;
let reverbSlider;


function preload() {
  img1 = loadImage('radicals/雨.png');
  img2 = loadImage('radicals/子.png');
  img3 = loadImage('radicals/knife.png');
}

function setup() {
  createCanvas (600,600);
  background (147, 147, 147);
  fill(164, 14, 14 );
  textSize(20)
  textStyle(BOLD);
  text('create your own horror halloween sound:', 20,40)
  textStyle(NORMAL);
  text('please set the volume:', 20,80)
  text('please set the feedback:', 20, 100)
  text('please set the distortion:', 20, 120)
  text('please choose the sound you want to include:', 20, 160)
  text('(please press the button again to update)', 20, 180)
  


  
  button1=createButton('rain');
  button1.position (30,210);
  button1.mousePressed(rain)
  
  button2=createButton('children playing')
  button2.position(30,240);
  button2.mousePressed(childrenPlaying);

  button1=createButton('knife sliding');
  button1.position (30,270);
  button1.mousePressed(knifeSliding);

  volumeSlider = createSlider(-20,20,0);
  volumeSlider.position(300, 60);
  volumeSlider.style('width', '80px');
  
  feedbackSlider = createSlider(-1,1,0,0.01);
  feedbackSlider.position(300, 80);
  feedbackSlider.style('width', '80px');
  
  reverbSlider = createSlider(0,5,0);
  reverbSlider.position(300, 100);
  reverbSlider.style('width', '80px');
}


function rain(){
  let volumeVal = volumeSlider.value();
  let feedbackVal= feedbackSlider.value();
  let distortionVal = reverbSlider.value();
  
  const volume = new Tone.Volume(volumeVal);
  const feedback = new Tone.FeedbackDelay(feedbackVal,0.5);
  const distortion = new Tone.Distortion(distortionVal);
  
const player = new Tone.Player("sounds/rain.mp3");
Tone.loaded().then(() => {
player.start();
});
player.connect(volume);
volume.connect(feedback);
feedback.connect(distortion);
distortion.toMaster();

image(img1,300,230); 
 }


function childrenPlaying(){
 let volumeVal = volumeSlider.value();
  let feedbackVal= feedbackSlider.value();
  let distortionVal = reverbSlider.value();
  
  const volume = new Tone.Volume(volumeVal);
  const feedback = new Tone.FeedbackDelay(feedbackVal,0.5);
  const distortion = new Tone.Distortion(distortionVal);
  
const player2 = new Tone.Player("sounds/childrenPlaying.mp3");
Tone.loaded().then(() => {
	player2.start();
});
player2.connect(volume);
volume.connect(feedback);
feedback.connect(distortion);
distortion.toMaster();

// effect1.connect(effect2);
// effect2.connect(effect3);
// effect3.toMaster();
  image(img2, 260,300);
}

function knifeSliding(){
  let volumeVal = volumeSlider.value();
   let feedbackVal= feedbackSlider.value();
   let distortionVal = reverbSlider.value();
   
   const volume = new Tone.Volume(volumeVal);
   const feedback = new Tone.FeedbackDelay(feedbackVal,0.5);
   const distortion = new Tone.Distortion(distortionVal);
   
 const player2 = new Tone.Player("sounds/knifeSliding.mp3");
 Tone.loaded().then(() => {
   player2.start();
 });
 player2.connect(volume);
 volume.connect(feedback);
 feedback.connect(distortion);
 distortion.toMaster();
 
 // effect1.connect(effect2);
 // effect2.connect(effect3);
 // effect3.toMaster();
   image(img3, 350,300);
 }