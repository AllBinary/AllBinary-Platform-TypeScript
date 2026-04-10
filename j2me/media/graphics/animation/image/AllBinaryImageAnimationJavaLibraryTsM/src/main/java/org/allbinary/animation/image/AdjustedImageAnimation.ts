
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *   
                *  Created By: Travis Berthelot    
        */
        
        /* Generated Code Do Not Modify */
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    

export class AdjustedImageAnimation extends ImageAnimation {
        

    private dx: number= 0

    private dy: number= 0
public constructor (image: Image, dx: number, dy: number, animationBehavior: AnimationBehavior)                        

                            : super(image, animationBehavior){

            super();
                //var image = image
    //var dx = dx
    //var dy = dy
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.init(dx, dy)
}


                //@Throws(Error::class)
            
    public init(dx: number, dy: number){
    //var dx = dx
    //var dy = dy
this.setDx(dx)
this.setDy(dy)
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
super.paint(graphics, x +this.dx, y +this.dy)
}


    public setDx(dx: number){
var dx = dx
this.dx= dx
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dx;
    
}


    public setDy(dy: number){
var dy = dy
this.dy= dy
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dy;
    
}


}
                
            

