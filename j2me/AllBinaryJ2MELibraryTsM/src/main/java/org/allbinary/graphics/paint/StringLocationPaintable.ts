
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LocationPaintable } from "./LocationPaintable.js";

export class StringLocationPaintable extends LocationPaintable {
        

    private readonly value: string
public constructor (value: string){

            super();
            //var value = value
this.value= value;
    
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
graphics.drawString(this.value, x, y, 0);
    
}


}
                
            

