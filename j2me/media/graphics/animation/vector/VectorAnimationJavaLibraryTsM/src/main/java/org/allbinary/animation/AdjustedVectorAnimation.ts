
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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
        



import { Graphics } from "../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicColor } from "../../../org/allbinary/graphics/color/BasicColor.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { VectorAnimation } from "./VectorAnimation.js";

import { AnimationBehavior } from "./AnimationBehavior.js";

export class AdjustedVectorAnimation extends VectorAnimation {
        

    private dx: number

    private dy: number
public constructor (currentPoints: number[][][], basicColor: BasicColor, dx: number, dy: number, animationBehavior: AnimationBehavior){
            super(currentPoints, basicColor, animationBehavior);
                        //var currentPoints = currentPoints
    //var basicColor = basicColor
    //var dx = dx
    //var dy = dy
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.dx= dx;
    
this.dy= dy;
    
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
super.paint(graphics, x +this.dx, y +this.dy);
    
}


}
                
            

