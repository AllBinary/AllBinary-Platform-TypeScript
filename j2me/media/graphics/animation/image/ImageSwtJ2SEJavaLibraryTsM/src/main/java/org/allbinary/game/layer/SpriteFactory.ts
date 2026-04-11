
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Sprite } from "../../../../javax/microedition/lcdui/game/Sprite.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class SpriteFactory
            extends Object
         {
        

    private static readonly instance: SpriteFactory = new SpriteFactory();
        
        

    public static getInstance(): SpriteFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public create(image: Image, frameWidth: number, frameHeight: number): Sprite{
    //var image = image
    //var frameWidth = frameWidth
    //var frameHeight = frameHeight



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Sprite(image, frameWidth, frameHeight);
    
}


}
                
            

