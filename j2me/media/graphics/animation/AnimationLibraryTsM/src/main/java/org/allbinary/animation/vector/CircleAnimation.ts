
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
      
import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CircleAnimation extends Animation implements ColorCompositeInterface {
        

    readonly TOTAL_ANGLE: number = Math.round(AngleFactory.getInstance()!.TOTAL_ANGLE);

    width: number

    height: number
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
    
graphics.drawArc(x, y, this.width, this.height, 0, this.TOTAL_ANGLE);
    
}


}
                
            

