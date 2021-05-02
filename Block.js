class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0
          
      }

     
      this.box = loadImage("block.png");
      this.Visibility = 255;


      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
    if(this.body.speed < 3){
      display();
    }else{
      World.remove(world, this.body);
      push();
      this.Visiblity -= 5;
      tint(255, this.Visibility);
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.box, this.body.position.x, this.body.position.y);
       rect(pos.x,pos.y,this.width, this.height);
       pop();
    }

      //var pos= this.body.position;    
    }
}