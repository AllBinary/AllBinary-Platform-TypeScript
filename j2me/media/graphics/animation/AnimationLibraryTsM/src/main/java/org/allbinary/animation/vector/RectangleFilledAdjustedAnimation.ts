
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
        



//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { ColorCompositeInterface } from '../../../../org/allbinary/graphics/color/ColorCompositeInterface.js';
      const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RectangleFilledAnimation } from './RectangleFilledAnimation.js';

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
                
            

