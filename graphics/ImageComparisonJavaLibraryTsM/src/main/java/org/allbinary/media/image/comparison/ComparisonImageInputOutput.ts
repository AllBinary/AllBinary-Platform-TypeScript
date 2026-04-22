
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
        



import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { ImageOutputData } from "../../../../../org/allbinary/input/automation/ImageOutputData.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LongUtil } from "../../../../../org/allbinary/logic/java/number/LongUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AutomaticCacheInterface } from "../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js";

    
import { MediaDataFactory } from "../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js";

    
import { ImagePersistanceUtil } from "../../../../../org/allbinary/media/image/ImagePersistanceUtil.js";

    
import { BufferedImageCacheable } from "../../../../../org/allbinary/media/image/cache/BufferedImageCacheable.js";

    
import { ImageIOInterface } from "../../../../../org/allbinary/media/image/io/ImageIOInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageComparisonResultCacheSingleton } from "./ImageComparisonResultCacheSingleton.js";

import { ChangedPixelsUtil } from "./ChangedPixelsUtil.js";

import { ImageComparisonResult } from "./ImageComparisonResult.js";

export class ComparisonImageInputOutput
            extends Object
         implements ImageIOInterface {
        

    private static readonly ROOT_NAME: string = "_Changed_";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public save(frame: Long){
    //var frame = frame

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

                        if(frame > 0)
                        
                                    {
                                    
    var imageComparisonResultFrameCacheable: ImageComparisonResultFrameCacheable = 
                                    (getInstance as AutomaticCacheInterface).get(frame);

                         as ImageComparisonResultFrameCacheable;
        
        
;
    

                        if(imageComparisonResultFrameCacheable != 
                                    null
                                )
                        
                                    {
                                    
    var imageComparisonResult: ImageComparisonResult = imageComparisonResultFrameCacheable!.getImageComparisonResult()!;
        
        
;
    
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


                //@Throws(Error::class)
            
    public save(imageComparisonResult: ImageComparisonResult, frame: Long){
    //var imageComparisonResult = imageComparisonResult
    //var frame = frame

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var filePathStringBuffer: StringMaker = new StringMaker();
        
        
;
    
filePathStringBuffer!.append(ImageOutputData.SAVE_PATH);
    
filePathStringBuffer!.append(LongUtil.fillIn(frame.toString()));
    
filePathStringBuffer!.append(ROOT_NAME);
    

    var filePathStringBuffer1: StringMaker = new StringMaker();
        
        
;
    
filePathStringBuffer1!.append(filePathStringBuffer!.toString());
    
filePathStringBuffer1!.append("_1");
    
filePathStringBuffer1!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    var filePath1: string = filePathStringBuffer1!.toString()!;
        
        
;
    

    var filePathStringBuffer2: StringMaker = new StringMaker();
        
        
;
    
filePathStringBuffer2!.append(filePathStringBuffer!.toString());
    
filePathStringBuffer2!.append("_2");
    
filePathStringBuffer2!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    var filePath2: string = filePathStringBuffer2!.toString()!;
        
        
;
    

    var bufferedImageCacheables: BufferedImageCacheable[] = ChangedPixelsUtil.generateBufferedImageChacheables(imageComparisonResult)!;
        
        
;
    
this.logUtil!.putF("Comparison Image File Path 1: " +filePath1, this, commonStrings!.SAVE);
    
this.logUtil!.putF("Comparison Image File Path 2: " +filePath2, this, commonStrings!.SAVE);
    

    var bufferedImageArray: BufferedImage[] = new Array(2);
        
        
;
    
bufferedImageArray[0]= bufferedImageCacheables[0]!.getBufferedImage();
    
bufferedImageArray[1]= bufferedImageCacheables[1]!.getBufferedImage();
    

    var imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;
        
        
;
    
imagePersistanceUtil!.saveWithImageIO(filePath1, bufferedImageArray[0]!);
    
imagePersistanceUtil!.saveWithImageIO(filePath2, bufferedImageArray[1]!);
    
}


}
                
            

