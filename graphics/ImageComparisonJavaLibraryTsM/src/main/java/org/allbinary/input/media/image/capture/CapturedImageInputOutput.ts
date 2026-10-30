
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { ImageOutputData } from '../../../../../../org/allbinary/input/automation/ImageOutputData.js';
//not GWT import const ImageOutputData

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { LongUtil } from '../../../../../../org/allbinary/logic/java/number/LongUtil.js';
//not GWT import const LongUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AutomaticCacheInterface } from '../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js';
//not GWT import const AutomaticCacheInterface

import { MediaDataFactory } from '../../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js';
//not GWT import const MediaDataFactory

import { ImagePersistanceUtil } from '../../../../../../org/allbinary/media/image/ImagePersistanceUtil.js';
//not GWT import const ImagePersistanceUtil

import { ImageUtil } from '../../../../../../org/allbinary/media/image/ImageUtil.js';
//not GWT import const ImageUtil

import { BufferedImageFrameCacheable } from '../../../../../../org/allbinary/media/image/cache/BufferedImageFrameCacheable.js';
//not GWT import const BufferedImageFrameCacheable

import { ImageIOInterface } from '../../../../../../org/allbinary/media/image/io/ImageIOInterface.js';
//not GWT import const ImageIOInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CapturedBufferedImagesCacheSingleton } from './CapturedBufferedImagesCacheSingleton.js';
//not GWT import - same folder const CapturedBufferedImagesCacheSingleton

export class CapturedImageInputOutput
            extends Object
         implements ImageIOInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
save(...args: any[]): any {
   
    if (args.length === 1) return this.save$overload1(args[0]);
   
    if (args.length === 2) return this.save$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: save'); }
  
                //@Throws(Exception.constructor)
            
    public save$overload1(frame: Long){

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    let capturedBufferedImageCacheable: BufferedImageFrameCacheable = ((getInstance as AutomaticCacheInterface).get(frame) as BufferedImageFrameCacheable);;
    
this.logUtil!.putF(("Saving: " +capturedBufferedImageCacheable!.toString()), this, commonStrings!.SAVE);
    
this.save(capturedBufferedImageCacheable!.getBufferedImage(), frame);
    
}


    public save$overload2(bufferedImage: BufferedImage, frame: Long){

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    let imageUtil: ImageUtil = ImageUtil.getInstance()!;;
    

    let filePathStringBuffer: StringMaker = new StringMaker();;
    
filePathStringBuffer!.append(ImageOutputData.SAVE_PATH);
    
filePathStringBuffer!.append(LongUtil.fillIn(frame.toString()));
    
filePathStringBuffer!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    let filePath: string = filePathStringBuffer!.toString()!;;
    
this.logUtil!.putF(("Image File Path: " +filePath +imageUtil!.toString(bufferedImage)), this, commonStrings!.SAVE);
    

    let imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;;
    
imagePersistanceUtil!.saveWithImageIO(filePath, bufferedImage);
    
}


}

