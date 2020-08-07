class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
  
     

      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
        width = this.width;
        height = this.height;
      
      rectMode(CENTER);
      fill("brown");
      rect(x,y, this.width, this.height);
    
    }
  }