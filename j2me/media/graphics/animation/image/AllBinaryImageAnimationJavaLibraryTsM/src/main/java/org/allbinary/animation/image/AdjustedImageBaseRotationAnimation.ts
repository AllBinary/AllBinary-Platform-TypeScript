
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageBaseRotationAnimation } from "./ImageBaseRotationAnimation.js";

export class AdjustedImageBaseRotationAnimation extends ImageBaseRotationAnimation {
        

    private dx: number= 0

    private dy: number= 0
public constructor (image: Image, angleInfo: AngleInfo, totalAngle: number, dx: number, dy: number, animationBehavior: AnimationBehavior)                        

                            : super(image, angleInfo, totalAngle, animationBehavior){

            super();
                //var image = image
    //var angleInfo = angleInfo
    //var totalAngle = totalAngle
    //var dx = dx
    //var dy = dy
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.init(dx, dy);
    
}


                //@Throws(Error::class)
            
    public init(dx: number, dy: number){
    //var dx = dx
    //var dy = dy
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
                
            

