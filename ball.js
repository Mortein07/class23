class Box{
    constructor(x,y,width,height){
        var box_options={
            restitution:1
          }
          this.box=Bodies.rectangle(x,y,width,height,box_options)
          this.width=width
          this.height = height
          World.add(world,this.box)
       
    }
    display(){
        var angle=this.box.angle
        var pos=this.box.position
        push ()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        
        rect(0,0,this.width,this.height)
        pop ()
    }
}
