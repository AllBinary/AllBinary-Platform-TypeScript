
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
      //not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
import { ImageOutputData } from '../../../../../../org/allbinary/input/automation/ImageOutputData.js';
      //not GWT import const ImageOutputData = globalThis.org.allbinary.input.automation.ImageOutputData;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { LongUtil } from '../../../../../../org/allbinary/logic/java/number/LongUtil.js';
      //not GWT import const LongUtil = globalThis.org.allbinary.logic.java.number.LongUtil;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AutomaticCacheInterface } from '../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js';
      //not GWT import const AutomaticCacheInterface = globalThis.org.allbinary.logic.util.cache.AutomaticCacheInterface;

      
import { MediaDataFactory } from '../../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js';
      //not GWT import const MediaDataFactory = globalThis.org.allbinary.logic.visual.media.MediaDataFactory;

      
import { ImagePersistanceUtil } from '../../../../../../org/allbinary/media/image/ImagePersistanceUtil.js';
      //not GWT import const ImagePersistanceUtil = globalThis.org.allbinary.media.image.ImagePersistanceUtil;

      
import { ImageUtil } from '../../../../../../org/allbinary/media/image/ImageUtil.js';
      //not GWT import const ImageUtil = globalThis.org.allbinary.media.image.ImageUtil;

      
import { BufferedImageFrameCacheable } from '../../../../../../org/allbinary/media/image/cache/BufferedImageFrameCacheable.js';
      //not GWT import const BufferedImageFrameCacheable = globalThis.org.allbinary.media.image.cache.BufferedImageFrameCacheable;

      
import { ImageIOInterface } from '../../../../../../org/allbinary/media/image/io/ImageIOInterface.js';
      //not GWT import const ImageIOInterface = globalThis.org.allbinary.media.image.io.ImageIOInterface;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CapturedBufferedImagesCacheSingleton } from './CapturedBufferedImagesCacheSingleton.js';

export class CapturedImageInputOutput
            extends Object
         implements ImageIOInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public save(frame: Long){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var capturedBufferedImageCacheable: BufferedImageFrameCacheable = ((getInstance as AutomaticCacheInterface).get(frame) as BufferedImageFrameCacheable);;
    
this.logUtil!.putF(("Saving: " +capturedBufferedImageCacheable!.toString()), this, commonStrings!.SAVE);
    
this.save(capturedBufferedImageCacheable!.getBufferedImage(), frame);
    
}


    public save(bufferedImage: BufferedImage, frame: Long){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var imageUtil: ImageUtil = ImageUtil.getInstance()!;;
    

    var filePathStringBuffer: StringMaker = new StringMaker();;
    
filePathStringBuffer!.append(ImageOutputData.SAVE_PATH);
    
filePathStringBuffer!.append(LongUtil.fillIn(frame.toString()));
    
filePathStringBuffer!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    var filePath: string = filePathStringBuffer!.toString()!;;
    
this.logUtil!.putF(("Image File Path: " +filePath +imageUtil!.toString(bufferedImage)), this, commonStrings!.SAVE);
    

    var imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;;
    
imagePersistanceUtil!.saveWithImageIO(filePath, bufferedImage);
    
}


}



