
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
        
import { BasicColor } from "./BasicColor.js";

export class BasicColorSetUtil
            extends Object
         {
        

    private static readonly instance: BasicColorSetUtil = new BasicColorSetUtil();
        
        

    public static getInstance(): BasicColorSetUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

protected constructor (){

            super();
            }


    public setBasicColorP(graphics: Graphics, basicColor: BasicColor){
var graphics = graphics
var basicColor = basicColor
graphics.setColor(basicColor!.toInt());
    
}


    public setBasicColorP(graphics: Graphics, basicColor: BasicColor, value: number){
var graphics = graphics
var basicColor = basicColor
var value = value
graphics.setColor(value);
    
}


}
                
            

