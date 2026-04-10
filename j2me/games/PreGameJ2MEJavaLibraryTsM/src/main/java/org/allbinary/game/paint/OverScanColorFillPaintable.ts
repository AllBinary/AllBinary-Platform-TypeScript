
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

    

export class OverScanColorFillPaintable extends ColorFillPaintable {
        
public constructor (basicColor: BasicColor)                        

                            : super(basicColor){

            super();
            var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public paint(graphics: Graphics){
var graphics = graphics
setColor(this.colorP)
fillRect( -graphics.getClipX(),  -graphics.getClipY(), this.displayInfoSingleton!.getLastWidth() +(graphics.getClipX() *2), this.displayInfoSingleton!.getLastHeight() +(graphics.getClipY() *2))
}


}
                
            

