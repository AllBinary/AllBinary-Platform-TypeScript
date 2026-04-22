
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

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { ColorCompositeInterface } from "../../../../org/allbinary/graphics/color/ColorCompositeInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CircleFilledAnimation extends Animation implements ColorCompositeInterface {
        

    private width: number

    private height: number
public constructor (width: number, height: number, basicColor: BasicColor){
            super();
                        //var width = width
    //var height = height
    //var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
this.width= width;
    
this.height= height;
    
this.setBasicColorP(basicColor);
    
}


    public nextFrame(){
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    
graphics.fillRect(x, y, this.width, this.height);
    
}


}
                
            

