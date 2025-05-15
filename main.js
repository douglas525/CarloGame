  let player;
let playerX = 0;
let playerY = 390;

let avoid;

let score = 0;
let lives = 5;

function preload() {
    player = loadImage("https://res.cloudinary.com/dplyhv2xv/image/upload/c_pad,w_128,h_128/v1743079401/5228055c3a0be6380d900f3321d7a206-blue-marble-ball_k5dayx.png");
   avoidImage = loadImage("https://res.cloudinary.com/dplyhv2xv/image/upload/c_pad,w_128,h_128/v1743079505/1712701_hwgg6j.png");
}

function setup() {
    createCanvas(600, 500);
    noStroke();
    playerX = width/2;
  
  avoid = {
    image : avoidImage,
    x : 0,
    y : 0,
    visible : true,
  }
  
  textSize(32);
  fill(3, 177, 252);
}

function draw() {
    // clear the screen
    background(0, 0, 100);

    // draw the player
    image(player, playerX - player.width/2, playerY - player.height/2);
  if(avoid.visible){
    image(avoid.image, avoid.x - avoid.image.width/2, avoid.y - avoid.image.height/2);
}
  if(keyIsDown(65) && playerX > 50 || keyIsDown(37) && playerX > 50){
    playerX = playerX - 5 - score/15;
  } else if(keyIsDown(68) && playerX < 550 || keyIsDown(39) && playerX < 550){
    playerX = playerX + 5 + score/15;
  } else if(keyIsDown(87) && playerY > 125 || keyIsDown(38) && playerY > 125){
    playerY = playerY - 3 - score/15;
  } else if(keyIsDown(83) && playerY < 460 || keyIsDown(40) && playerY < 460){
    playerY = playerY + 3 + score/15;
  }
  
  avoid.y += 5 + score/5;
  if(avoid.y > height + avoid.image.height/2){
    if(avoid.visible){
    score += 1;
  }
    avoid.y = -50;
    avoid.x = random(0, width);
    avoid.visible = true;
  }
  
  if(isCollision(avoid)){
    textAlign(CENTER)
    text("You've been hit!", random(playerX-20,playerX+20), random(playerY-50,playerY-100));
    lives -= 1;
    avoid.visible = false;
  }
  textAlign(RIGHT);
  text(score, 560, 50);
  textAlign(LEFT)
  text("Lives: " + lives, 40, 50);
  if(lives <= 0){
    textAlign(CENTER);
    text("GAME OVER. Score: " + score, width/2, height/2 - 100);
    throw "";
  }
  
  //Score Rewards (with lives)
  if(score === 25){
  lives += 1;
  score += 1;
} else if(score === 50){
  lives += 1;
  score += 1;
} else if(score === 75){
  lives += 1;
  score += 1;
} else if(score === 100){
  lives += 1;
  score += 1;
} else if(score === 150){
  lives += 2;
  score += 1;
} else if(score === 200){
  lives += 2;
  score += 1;
} else if(score === 250){
  lives += 2;
  score += 1;
} else if(score === 300){
  lives += 2;
  score += 1;
} else if(score === 350){
  lives += 2;
  score += 1;
} else if(score === 400){
  lives += 2;
  score += 1;
} else if(score === 450){
  lives += 2;
  score += 1;
} else if(score === 500){
  lives += 2;
  score += 1;
} else if(score === 600){
  lives += 3;
  score += 1;
} else if(score === 700){
  lives += 3;
  score += 1;
} else if(score === 800){
  lives += 3;
  score += 1;
} else if(score === 900){
  lives += 3;
  score += 1;
} else if(score === 1000){
  lives += 3;
  score += 1;
}
}

function isCollision(avoid){
  const playerRadius = player.height/2;
  const avoidRadius = avoid.image.height/2;
  
return avoid.visible && sqrt(sq(avoid.x - playerX) + sq(avoid.y - playerY)) < playerRadius + avoidRadius;
}

