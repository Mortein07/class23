class Ground {
    constructor(){
        var ground_options={
            isStatic:true
          }
           this.ground=Bodies.rectangle(400,height,800,10,ground_options)
          World.add(world,this.ground)
         
    }

    display(){
        rectMode(CENTER)
        rect(this.ground.position.x,this.ground.position.y,800,10)
    }
}