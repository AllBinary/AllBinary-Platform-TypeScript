
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
        



import { Font } from "../../../../javax/microedition/lcdui/Font.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    

export class FontDebugFactory
            extends Object
         {
        

    private static readonly instance: FontDebugFactory = new FontDebugFactory();
        
        

    public static getInstance(): FontDebugFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public setFont(font: Font, graphics: Graphics){
    //var font = font
    //var graphics = graphics
graphics.setFont(font);
    
}


}
                
            

