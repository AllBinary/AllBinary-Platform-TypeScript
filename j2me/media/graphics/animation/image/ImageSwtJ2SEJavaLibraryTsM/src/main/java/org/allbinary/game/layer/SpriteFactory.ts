
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { Sprite } from '../../../../javax/microedition/lcdui/game/Sprite.js';
      const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js import { SpriteFactoryInterface } from './SpriteFactoryInterface.js';
const  = globalThis.org.allbinary.game.layer.SpriteFactoryInterface;

                
export class SpriteFactory
            extends Object
         implements SpriteFactoryInterface {
        

    private static readonly instance: SpriteFactory = new SpriteFactory();

    public static getInstance(): SpriteFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SpriteFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public createSprite(image: Image, frameWidth: number, frameHeight: number): Sprite{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Sprite(image, frameWidth, frameHeight);
    
}


}



