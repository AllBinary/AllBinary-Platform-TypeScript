
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
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { Sprite } from '../../../../javax/microedition/lcdui/game/Sprite.js';
//not GWT import const Sprite

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpriteFactoryInterface } from './SpriteFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const SpriteFactoryInterface

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

