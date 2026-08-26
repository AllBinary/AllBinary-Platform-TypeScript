
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

      
//not game specific package import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { ColorCompositeInterface } from '../../../../org/allbinary/graphics/color/ColorCompositeInterface.js';
      const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RectangleAnimation extends Animation implements ColorCompositeInterface {
        

    private width: number;

    private height: number;

public constructor (width: number, height: number, basicColor: BasicColor){

            super();
        this.width= width;
    
this.height= height;
    
this.setBasicColorP(basicColor);
    
}


    public nextFrame(){
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    
graphics.drawRect(x, y, this.width, this.height);
    
}


    public setWidth(width: number){
this.width= width;
    
}


    public setHeight(height: number){
this.height= height;
    
}


}
                
            

