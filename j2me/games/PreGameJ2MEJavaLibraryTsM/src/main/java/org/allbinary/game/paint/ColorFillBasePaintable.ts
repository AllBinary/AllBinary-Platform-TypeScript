
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

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { ColorCompositeInterface } from "../../../../org/allbinary/graphics/color/ColorCompositeInterface.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ColorFillBasePaintable extends Paintable implements ColorCompositeInterface {
        

    basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;
        
        

    colorP: number= 0
public constructor (basicColor: BasicColor){

            super();
            var basicColor = basicColor
this.setBasicColorP(basicColor);
    
}


    public setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
this.basicColor= basicColor;
    
this.setColor(this.getBasicColorP()!.toInt());
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


    getColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorP;
    
}


    setColor(color: number){
var color = color
this.colorP= color;
    
}


    public paint(graphics: Graphics){
var graphics = graphics
}


}
                
            

