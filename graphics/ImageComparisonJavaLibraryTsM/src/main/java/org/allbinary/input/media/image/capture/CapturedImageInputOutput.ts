
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
        



import { BufferedImage } from "../../../../../../java/awt/image/BufferedImage.js";

    
import { ImageOutputData } from "../../../../../../org/allbinary/input/automation/ImageOutputData.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LongUtil } from "../../../../../../org/allbinary/logic/java/number/LongUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AutomaticCacheInterface } from "../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js";

    
import { MediaDataFactory } from "../../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js";

    
import { ImagePersistanceUtil } from "../../../../../../org/allbinary/media/image/ImagePersistanceUtil.js";

    
import { ImageUtil } from "../../../../../../org/allbinary/media/image/ImageUtil.js";

    
import { BufferedImageFrameCacheable } from "../../../../../../org/allbinary/media/image/cache/BufferedImageFrameCacheable.js";

    
import { ImageIOInterface } from "../../../../../../org/allbinary/media/image/io/ImageIOInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class CapturedImageInputOutput
            extends Object
        
                , ImageIOInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public save(frame: Long){
var frame = frame

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var capturedBufferedImageCacheable: BufferedImageFrameCacheable = (
                                    (getInstance as AutomaticCacheInterface).get(frame);

                         as Object as BufferedImageFrameCacheable);
        
        
;
    
logUtil!.put(("Saving: " +capturedBufferedImageCacheable!.toString()), this, commonStrings!.SAVE);
    
save(capturedBufferedImageCacheable!.getBufferedImage(), frame);
    
}


    public save(bufferedImage: BufferedImage, frame: Long){
var bufferedImage = bufferedImage
var frame = frame

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        
;
    

    var filePathStringBuffer: StringMaker = new StringMaker();
        
        
;
    
filePathStringBuffer!.append(ImageOutputData.SAVE_PATH);
    
filePathStringBuffer!.append(LongUtil.fillIn(frame.toString()));
    
filePathStringBuffer!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    var filePath: string = filePathStringBuffer!.toString()!;
        
        
;
    
logUtil!.put(("Image File Path: " +filePath +imageUtil!.toString(bufferedImage)), this, commonStrings!.SAVE);
    

    var imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;
        
        
;
    
imagePersistanceUtil!.saveWithImageIO(filePath, bufferedImage);
    
}


}
                
            

