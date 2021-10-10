class Drop{
    constructor(x,y,radius){
            var options={
             restitution: 0.5,
             friction: 0.002
          };
        //  shape of the body
        this.body = ellipse(x,y,radius,options);
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
    //make fall function to add speed 
    fall(speed){
        this.y += speed;
    }
  // display function to guve the x,y,radius and color
    display(){
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.radius);
        pop();
    }
  }
