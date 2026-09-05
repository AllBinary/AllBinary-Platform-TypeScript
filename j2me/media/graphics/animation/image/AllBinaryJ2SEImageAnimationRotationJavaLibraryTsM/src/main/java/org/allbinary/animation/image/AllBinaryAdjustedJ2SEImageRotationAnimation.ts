
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryJ2SEImageRotationAnimation } from './AllBinaryJ2SEImageRotationAnimation.js';
//not GWT import - same folder const AllBinaryJ2SEImageRotationAnimation = globalThis.org.allbinary.animation.image.AllBinaryJ2SEImageRotationAnimation;

                
export class AllBinaryAdjustedJ2SEImageRotationAnimation extends AllBinaryJ2SEImageRotationAnimation {
        

    private dx: number= 0;

    private dy: number= 0;

public constructor (originalImage: Image, image: Image, angleInfo: AngleInfo, totalAngle: number, dx: number, dy: number, animationBehavior: AnimationBehavior){
            super(originalImage, image, angleInfo, totalAngle, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.init(dx, dy);
    
}


                //@Throws(Exception.constructor)
            
    public init(dx: number, dy: number){
this.dx= dx;
    
this.dy= dy;
    
}


    public setDx(dx: number){
this.dx= dx;
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dx;
    
}


    public setDy(dy: number){
this.dy= dy;
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dy;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
super.paintXY(graphics, x +this.dx, y +this.dy);
    
}


}



