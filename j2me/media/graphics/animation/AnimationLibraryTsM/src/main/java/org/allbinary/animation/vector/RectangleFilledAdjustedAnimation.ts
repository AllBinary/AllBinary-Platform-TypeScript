
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

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { ColorCompositeInterface } from '../../../../org/allbinary/graphics/color/ColorCompositeInterface.js';
//not GWT import const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RectangleFilledAnimation } from './RectangleFilledAnimation.js';
//not GWT import - same folder const RectangleFilledAnimation = globalThis.org.allbinary.animation.vector.RectangleFilledAnimation;

                
export class RectangleFilledAdjustedAnimation extends RectangleFilledAnimation implements ColorCompositeInterface {
        

    private offsetX: number;

    private offsetY: number;

public constructor (width: number, height: number, offsetX: number, offsetY: number, basicColor: BasicColor){
            super(width, height, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.offsetX= offsetX;
    
this.offsetY= offsetY;
    
this.setBasicColorP(basicColor);
    
}


    public nextFrame(){
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    
super.paintXY(graphics, x +this.offsetX, y +this.offsetY);
    
}


    public setOffsetX(offsetX: number){
this.offsetX= offsetX;
    
}


    public setOffsetY(offsetY: number){
this.offsetY= offsetY;
    
}


}



