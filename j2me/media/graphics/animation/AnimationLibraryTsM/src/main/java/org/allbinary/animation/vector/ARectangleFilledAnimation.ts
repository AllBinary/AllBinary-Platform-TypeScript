
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

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { ColorCompositeInterface } from "../../../../org/allbinary/graphics/color/ColorCompositeInterface.js";

    

export class ARectangleFilledAnimation extends Animation
                , ColorCompositeInterface {
        

    public x: number= 0

    public y: number= 0

    public width: number= 0

    public height: number= 0
public constructor (){

            super();
            this.setBasicColorP(BasicColorFactory.getInstance()!.BLACK);
    
}


    public nextFrame(){
}


    public paint(graphics: Graphics, unusedX: number, unusedY: number){
    //var graphics = graphics
    //var unusedX = unusedX
    //var unusedY = unusedY
graphics.fillRect(x, y, width, height);
    
}


}
                
            

