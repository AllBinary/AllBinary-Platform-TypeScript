
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { ColorCompositeInterface } from '../../../../org/allbinary/graphics/color/ColorCompositeInterface.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RectangleFilledAdjustedAnimation extends Animation implements ColorCompositeInterface {
        

    private width: number

    private height: number

    private offsetX: number

    private offsetY: number
public constructor (width: number, height: number, offsetX: number, offsetY: number, basicColor: BasicColor){

            super();
        this.width= width;
    
this.height= height;
    
this.offsetX= offsetX;
    
this.offsetY= offsetY;
    
this.setBasicColorP(basicColor);
    
}


    public nextFrame(){
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    
graphics.fillRect(x +this.offsetX, y +this.offsetY, this.width, this.height);
    
}


    public setWidth(width: number){
this.width= width;
    
}


    public setHeight(height: number){
this.height= height;
    
}


    public setOffsetX(offsetX: number){
this.offsetX= offsetX;
    
}


    public setOffsetY(offsetY: number){
this.offsetY= offsetY;
    
}


}
                
            

