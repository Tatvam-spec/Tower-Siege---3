class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/polygon.png");
      polygon = Bodies.circle(50, 200, 20)
      World.add(world, polygon);

      slingShot = new Slingshot(this.polygon,{x:100, y:200});
  
    }
  
    display() {
     imageMode(CENTER)
     image(polygon_img, polygon.position.x, polygon.position.y, 40, 40)
      super.display();
  
  
      }
    }
  
