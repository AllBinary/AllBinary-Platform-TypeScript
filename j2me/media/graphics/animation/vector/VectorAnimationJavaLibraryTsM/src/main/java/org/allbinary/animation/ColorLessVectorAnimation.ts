
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

    
import { BasicColorFactory } from "../../../org/allbinary/graphics/color/BasicColorFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { VectorAnimation } from "./VectorAnimation.js";

import { AnimationBehavior } from "./AnimationBehavior.js";

export class ColorLessVectorAnimation extends VectorAnimation {
        
public constructor (currentPoints: number[][][], animationBehavior: AnimationBehavior){
            super(currentPoints, BasicColorFactory.getInstance()!.WHITE, animationBehavior);
                        //var currentPoints = currentPoints
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (currentPoints: number[][], animationBehavior: AnimationBehavior){
            super(currentPoints, BasicColorFactory.getInstance()!.WHITE, animationBehavior);
                        //var currentPoints = currentPoints
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
this.paintVectors(graphics, x, y);
    
}


}
                
            

