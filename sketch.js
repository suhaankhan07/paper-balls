const Engine = Matter.Engine;
   const World = Matter.World;
   const Bodies = Matter.Bodies;
   const Body = Matter.Body;
   
   var dustbinObj, paperObject;	
   var world;
   var groundObj;
   
   function setup() {
	   createCanvas(1600, 700);
	   rectMode(CENTER);
   
   
	   engine = Engine.create();
	   world = engine.world;

	   
     
	   
   
	   Engine.run(engine);
		 
	 //  groundObj = new Ground(300,670,600,30);
	   dustbinObj = new Dustbin(1200,650);
	   paperObject = new Trash(200,450,40);
	   
	   
	 

   }
   
   
   function draw() {
	 rectMode(CENTER);
	 background(0);

	 	 
	
	
	 dustbinObj.display();
	 paperObject.display();
	 //groundObject.display();
	 

	 
	
	 
	 
	
   }
   
   function keyPressed() {
		 if (keyCode === UP_ARROW ) {
   
		   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-100});
	   
		 }
   }




