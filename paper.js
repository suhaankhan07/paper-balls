class Trash {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':0,
          'density':1.2,
          'isStatic':false
  
      }
      this.x=x;
     this.y=y;
      this.r=r
      
      
      this.body = Bodies.circle(this.x, this.y,this.r/2, options);
      this.image = loadImage("sprites/PAPER.png");
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
     
      push();
      
      translate(paperpos.x, paperpos.y);
     
     
  
      rectMode(CENTER)    
      fill("blue");
      ellipse(0,0,this.r,this.r)
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);

      pop();
   
    }
  };