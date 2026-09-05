
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
        
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { Sprite } 
const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpriteFactoryInterface } from './SpriteFactoryInterface.js';
//not GWT import - same folder const SpriteFactoryInterface = globalThis.org.allbinary.game.layer.SpriteFactoryInterface;

                
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



