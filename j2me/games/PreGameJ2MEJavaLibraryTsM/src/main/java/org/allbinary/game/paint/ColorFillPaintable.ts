
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

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ColorFillBasePaintable } from "./ColorFillBasePaintable.js";

export class ColorFillPaintable extends ColorFillBasePaintable {
        

    readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
public constructor (basicColor: BasicColor)                        

                            : super(basicColor){

            super();
            var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public paint(graphics: Graphics){
var graphics = graphics
graphics.setColor(this.colorP);
    
graphics.fillRect(0, 0, this.displayInfoSingleton!.getLastWidth(), this.displayInfoSingleton!.getLastHeight());
    
}


}
                
            

