
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

        


//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VectorAnimation } from './VectorAnimation.js';
//not GWT import - same folder const VectorAnimation = globalThis.org.allbinary.animation.VectorAnimation;

                import { AnimationBehavior } from './AnimationBehavior.js';
//not GWT import - same folder const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

                
export class AdjustedVectorAnimation extends VectorAnimation {
        

    private dx: number;

    private dy: number;

public constructor (currentPoints: number[][][], basicColor: BasicColor, dx: number, dy: number, animationBehavior: AnimationBehavior){
            super(currentPoints, basicColor, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.dx= dx;
    
this.dy= dy;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
super.paintXY(graphics, x +this.dx, y +this.dy);
    
}


}



