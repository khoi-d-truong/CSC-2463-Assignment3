
// the 3 objects of the charSprite class
let spelunkSprite, greenSprite, purpleSprite;
// the array that will hold all of the objects
let characters;

//setting up the array and creating the 3 character objects at random spots on screen
function preload() {
  characters = [
    spelunkSprite = new charSprite(random(20,380),random(20,380),'assets/SpelunkyGuy.png'),
    greenSprite = new charSprite(random(20,380),random(20,380),'assets/Green.png'),
    purpleSprite = new charSprite(random(0,380),random(20,380),'assets/Purple.png')
    ];
  
  }

function setup() {
  createCanvas(400, 400);

}

// check keyboard for input
// if arrow keys or 'd'/'a' are pressed, move all the sprites in respective direction
// else, have them stop
function draw() {
  background(250);

  console.log(keyTyped);

  if (kb.pressing(RIGHT_ARROW) || kb.pressing('d'))
  {
    for (let i=0; i < characters.length; i++)
    characters[i].walkRight();
  }
  else if (kb.pressing(LEFT_ARROW) || kb.pressing('a'))
  {
    for (let i=0; i < characters.length; i++)
    characters[i].walkLeft();
  }
  else
  {
    for (let i=0; i < characters.length; i++)
    characters[i].stop();
  }
 }

 // class to create sprites-objects given a character sheet
class charSprite
{
  // constructor requires x and y coordinates to first draw the sprite
  // as well as the filepath to sprite sheet
  constructor(x,y,sprSheet)
  {
    this.sprite = new Sprite(x,y,80,80);
    this.sprite.spriteSheet = sprSheet;
    
    // designating which spots on the sprite sheet correspond to which animations
    let animations = 
    {
      stand: { row: 0, frames: 1},
      walkRight: { row: 0, col: 1, frames: 8},
    };

    // frame delay for smoother animations
    this.sprite.anis.frameDelay = 6;
    this.sprite.addAnis(animations);
  }

    // moves the sprite 
  walkRight()
  {
    this.sprite.changeAni('walkRight');
    this.sprite.vel.x = 1;
    this.sprite.scale.x = 1;
  }

  walkLeft()
  {
    this.sprite.changeAni('walkRight');
    this.sprite.vel.x = -1;
    this.sprite.scale.x = -1;
  }

  stop()
  {
    this.sprite.vel.x = 0;
    this.sprite.changeAni('stand');
  }
}


// checks for keypresses 
function keyTyped()
{}