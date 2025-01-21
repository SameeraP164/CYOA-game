//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let cButton;
let font;
let d1Button;
let d2Button;

function preload() {
  font = loadFont('Silkscreen-Regular.ttf');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(15);
  noStroke();
  
  

  // Set up the home screen
  background("pink");
  textFont(font);
  text(
    "In a distant kingdom, you strived for\n justice and peace throughout the land. Of\n course, when you saw corruption within the\n monarchy, you didn't hesitate to kill the king\n for wronging the citizens. However, you have \nbeen accused of treason by the high court and\n you now have many mercenaries after you.\n As a result, you run away from the kingdom.",
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens
  enterButton = new Sprite(width/2, height/2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
  cButton = new Sprite(-250, -250);
  d1Button = new Sprite(-300, -300);
  d2Button = new Sprite(-350, -350);
}

/* DRAW LOOP REPEATS */
function draw() {
  textFont(font);
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "plum";
  enterButton.text = "Enter";

  // Check enter button
  if (enterButton.mouse.presses()) {
    showScreen1();
    screen = 1;
  }

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      //print("Display screen 2");
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()){
      //print("Display screen 5");
      showScreen5();
      screen = 5;
    }   
  } else if (screen == 2) {
    if (b1Button.mouse.presses()) {
      showScreen3();
    } else if (b2Button.mouse.presses()) {
      showScreen4();
      screen = 4;
    }
  }
   else if (screen == 4) {
    if (d1Button.mouse.presses()) {
      print("7buttonclicked");
      showScreen7();
    }
    else if (d2Button.mouse.presses()) {
      showScreen8();
    }
  } else if (screen == 5) {
    if (cButton.mouse.presses()) {
      showScreen6();
    }
  }
}


/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  print("pressed");
  background("paleturquoise");
  text("As you are running, you almost fall to your death\n off of a cliff. At this moment, a dragon emerges\n from the ravine in front of you and breathes\n fire, nearly cooking you alive. At the same time, you\n hear the mercenaries approching you at a rapid pace. \n\nWhat do you do? ", width/2, height/2 - 100);
  enterButton.pos = {x: -100, y: -100};

  // Add A1 button
  a1Button.pos = {x: width/2 - 100, y: height/2 + 100};
  a1Button.w = 150;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "plum";
  a1Button.text = "jump onto \nthe dragon";

  // Add A2 button
  a2Button.pos = {x: width/2 + 100, y: height/2 + 100};
  a2Button.w = 150;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "plum";
  a2Button.text = "jump off of \nthe cliff";
}

function showScreen2() {
  background("palegreen");
  text("After you take a leap of faith and jump onto \nthe dragon in a sad attempt of an attack, \nyou begin to question your life decisions. \nThe dragon suddenly takes off and starts flying \nover the ravine. Instead of seeing nothing \nas you had expected, you see lands that you \ndidn't even know existed. The dragon lands in a town \non the side of a mountain. The townsfolk greet you \nand welcome you to their home, but hesitate to let\n the dragon enter. \n\nWhat do you do with your dragon companion?", width/2, height/2 - 140);
  a1Button.pos = {x:-200, y:-200};
  a2Button.pos = {x:-50, y:-50};

  // Add B1 button
  b1Button.pos = {x: width/2 - 100, y: height/2 + 120};
  b1Button.w = 150;
  b1Button.h = 50;
  b1Button.collider = "k";
  b1Button.color = "plum";
  b1Button.text = "advocate for \nthe dragon";

  // Add B2 button
  b2Button.pos = {x: width/2 + 100, y: height/2 + 120};
  b2Button.w = 150;
  b2Button.h = 50;
  b2Button.collider = "k";
  b2Button.color = "plum";
  b2Button.text = "kill the \ndragon";
}
function showScreen3() {
  background("lavender");
  text("You tell the townsfolk that the dragon is nice,\n detailing your experience of being saved by the\n dragon after escaping mercenaries. The townsfolk deem \nthe dragon a hero and gladly allow it to enter the village\n as well. You settle in the village and open a\n blacksmith shop with your dragon friend to supply fire\n for your business. Everything is going well until you\n notice something strange about the town. There are shops\n for alchemy and potions, and you hear rumors of\n necromancy. How ridiculous! However, one regular day,\n you get pulled into an alley by a strange hooded person\n and get stabbed with the sword that you used to\n use when you were a soldier in your kingdom. Who was\n this strange person, and how did they get your\n sword? Your questions are forever unanswered.\n\n You die realizing you died at the hands of your clone:(", width/2, height/2 - 130);
  b1Button.pos = {x: -100, y:-100};
  b2Button.pos = {x: -150, y:-150};
}

function showScreen4() {
  background("plum");
  text("You kill the dragon due to its potential of a safety\n hazard (or maybe for fun???). You enter the town \nwith the permission of the residents and become a farmer, \nputting your military strength and experience to \ngood use. When going to the market one day, you see an \nalchemy shop. Doubtful but curious, you go inside. \nYou learn that alchemy and potions are real and very \nuseful but more importantly, you learn that \nnecromancy and clones are real. With this knowledge \nyou decide to prepare for an event that your clone comes \nto kill you. One day you see your clone, a hooded \nfigure with the same sword that you used to own. \n\nWhat do you do?", width/2, height/2 - 160);
  b1Button.pos = {x: -100, y:-100};
  b2Button.pos = {x: -150, y:-150};
  
  d1Button.pos = {x: width/2 - 100, y: height/2 + 140};
  d1Button.w = 150;
  d1Button.h = 50;
  d1Button.collider = "k";
  d1Button.color = "paleturquoise";
  d1Button.text = "ignore your \nclone";

  d2Button.pos = {x: width/2 + 100, y: height/2 + 140};
  d2Button.w = 150;
  d2Button.h = 50;
  d2Button.collider = "k";
  d2Button.color = "paleturquoise";
  d2Button.text = "fight your \nclone";
}

function showScreen5() {
  background("palegreen");
  text("You charge towards the cliff and jump off,\n plunging into the icy waters below. Your \nlife flashes before your eyes and you can \nconfirm that pre-life-ending-flashing is not just \na thing that happens in fiction. \nThis is the end :(", width/2, height/2 - 100);
  a1Button.pos = {x:-200, y:-200};
  a2Button.pos = {x:-50, y:-50};
  cButton.pos = {x: width/2, y: height/2 + 100};
  cButton.w = 100;
  cButton.h = 50;
  cButton.color = "black";
  cButton.textColor = "white";
  cButton.text = "???";
}

function showScreen6() {
  background("black");
  fill("white");
  text("You wake up in a dark place and question if \nyou are in the afterlife. Suddenly, you hear a voice.", width/2, height/2 - 120);
  fill("red");
  text("\"You will live again.\"", width/2, height/2 - 70)
  fill("white");
  text("Could this be necromancy? It didn't \nmatter now, you were just grateful to be alive.", width/2, height/2 - 45);
  fill("red");
  text("\"However, there can only be one\n of you.\"", width/2, height/2 + 0);
  fill("white");
  text("Does this mean that you have to \nkill your clone?? You decide to do whatever it takes \nto be successful in your new life, no matter what it takes." , width/2, height/2 + 50);
  fill("red");
  text("\n\nRefresh to start your new life. ", width/2, height/2+80);
  cButton.pos = {x: -250, y: -250};
}
function showScreen7() {
  console.log("7clicked")
  background("black");
  fill("white");
  text("You decide to be safe and ignore your clone.\n However, your clone surprise attacks you and \nstabs you with the very sword you use to own.\n\nYou die :(", width/2, height/2 - 100);
  d1Button.pos = {x: -300, y:-300};
  d2Button.pos = {x: -350, y:-350};
}

function showScreen8() {
  background("black");
  fill("white");
  text("You decide to confront your clone and \nfight to the death. With your farming tools and poison \npotions that you bought from the market, you manage \nto defeat your clone. \n\nYou win :)", width/2, height/2 - 100);
  d1Button.pos = {x: -300, y:-300};
  d2Button.pos = {x: -350, y:-350};
}
