
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../java/lang/Long.js';
        
import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { ImageOutputData } from '../../../../../org/allbinary/input/automation/ImageOutputData.js';
//not GWT import const ImageOutputData

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { LongUtil } from '../../../../../org/allbinary/logic/java/number/LongUtil.js';
//not GWT import const LongUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AutomaticCacheInterface } from '../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js';
//not GWT import const AutomaticCacheInterface

import { MediaDataFactory } from '../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js';
//not GWT import const MediaDataFactory

import { ImagePersistanceUtil } from '../../../../../org/allbinary/media/image/ImagePersistanceUtil.js';
//not GWT import const ImagePersistanceUtil

import { BufferedImageCacheable } from '../../../../../org/allbinary/media/image/cache/BufferedImageCacheable.js';
//not GWT import const BufferedImageCacheable

import { ImageIOInterface } from '../../../../../org/allbinary/media/image/io/ImageIOInterface.js';
//not GWT import const ImageIOInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageComparisonResultCacheSingleton } from './ImageComparisonResultCacheSingleton.js';
//not GWT import - same folder const ImageComparisonResultCacheSingleton
import { ImageComparisonResultFrameCacheable } from './ImageComparisonResultFrameCacheable.js';
//not GWT import - same folder const ImageComparisonResultFrameCacheable
import { ImageComparisonResult } from './ImageComparisonResult.js';
//not GWT import - same folder const ImageComparisonResult
import { ChangedPixelsUtil } from './ChangedPixelsUtil.js';
//not GWT import - same folder const ChangedPixelsUtil

export class ComparisonImageInputOutput
            extends Object
         implements ImageIOInterface {
        

    private static readonly ROOT_NAME: string = "_Changed_";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }

save(...args: any[]): any {
   
    if (args.length === 1) return this.save$overload1(args[0]);
   
    if (args.length === 2) return this.save$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: save'); }
  
                //@Throws(Exception.constructor)
            
    public save$overload1(frame: Long){

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(frame > 0)
                        
                                    {
                                    
    let imageComparisonResultFrameCacheable: ImageComparisonResultFrameCacheable = (getInstance as AutomaticCacheInterface).get(frame) as ImageComparisonResultFrameCacheable;;
    

                        if(imageComparisonResultFrameCacheable != 
                                    null
                                )
                        
                                    {
                                    
    let imageComparisonResult: ImageComparisonResult = imageComparisonResultFrameCacheable!.getImageComparisonResult()!;;
    
this.save(imageComparisonResult, imageComparisonResultFrameCacheable!.getFrame());
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Comparison Results Not Available for Output: " +frame, this, commonStrings!.SAVE);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF("No Comparison Results: for first frame: " +frame, this, commonStrings!.SAVE);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public save$overload2(imageComparisonResult: ImageComparisonResult, frame: Long){

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    let filePathStringBuffer: StringMaker = new StringMaker();;
    
filePathStringBuffer!.append(ImageOutputData.SAVE_PATH);
    
filePathStringBuffer!.append(LongUtil.fillIn(frame.toString()));
    
filePathStringBuffer!.append(ComparisonImageInputOutput.ROOT_NAME);
    

    let filePathStringBuffer1: StringMaker = new StringMaker();;
    
filePathStringBuffer1!.append(filePathStringBuffer!.toString());
    
filePathStringBuffer1!.append("_1");
    
filePathStringBuffer1!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    let filePath1: string = filePathStringBuffer1!.toString()!;;
    

    let filePathStringBuffer2: StringMaker = new StringMaker();;
    
filePathStringBuffer2!.append(filePathStringBuffer!.toString());
    
filePathStringBuffer2!.append("_2");
    
filePathStringBuffer2!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    let filePath2: string = filePathStringBuffer2!.toString()!;;
    

    let bufferedImageCacheables: BufferedImageCacheable[] = ChangedPixelsUtil.generateBufferedImageChacheables(imageComparisonResult)!;;
    
this.logUtil!.putF("Comparison Image File Path 1: " +filePath1, this, commonStrings!.SAVE);
    
this.logUtil!.putF("Comparison Image File Path 2: " +filePath2, this, commonStrings!.SAVE);
    

    let bufferedImageArray: BufferedImage[] = new Array(2);;
    
bufferedImageArray[0]= bufferedImageCacheables[0]!.getBufferedImage();
    
bufferedImageArray[1]= bufferedImageCacheables[1]!.getBufferedImage();
    

    let imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;;
    
imagePersistanceUtil!.saveWithImageIO(filePath1, bufferedImageArray[0]!);
    
imagePersistanceUtil!.saveWithImageIO(filePath2, bufferedImageArray[1]!);
    
}


}

