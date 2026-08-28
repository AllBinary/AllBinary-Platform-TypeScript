
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
      const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not game specific package import { RenderedImage } from '../../../../../java/awt/image/RenderedImage.js';
      const RenderedImage = globalThis.java.awt.image.RenderedImage;

      
//not game specific package import { HashMap } from '../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { LogConfigTypeFactory } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
      const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;

      
//not game specific package import { LogConfigTypes } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
      const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;

      
//not game specific package import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { ImageUtil } from '../../../../../org/allbinary/media/image/ImageUtil.js';
      const ImageUtil = globalThis.org.allbinary.media.image.ImageUtil;

      
//not game specific package import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageIOUtil } from './ImageIOUtil.js';
import { MediaData } from './MediaData.js';
//import com.sun.imageio.plugins.common.ImageUtil;
export class MediaUtil
            extends Object
         {
        

    private static readonly instance: MediaUtil = new MediaUtil();

    public static getInstance(): MediaUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MediaUtil.instance;
    
}


    static getImageBufferPropertyHashMap(bufferedImage: BufferedImage): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var propertyStringArray: string[] = bufferedImage!.getPropertyNames()!;;
    

                        if(propertyStringArray != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;index < propertyStringArray!.length; index++)
        {

    var propertyObject: any = bufferedImage!.getProperty(propertyStringArray[index]!)!;;
    
hashMap!.put(propertyStringArray[index]!, propertyObject!.toString());
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public saveImageFile(originalImageFile: AbFile, newImageFileName: string, category: string, mediaData: MediaData, newWidth: number, newHeight: number){

                        if(originalImageFile == 
                                    null
                                 || !originalImageFile!.isFile())
                        
                                    {
                                    


                            throw new Exception("Original Image File Does Not Exist.");
                    

                                    }
                                

    var bufferedImage: BufferedImage = ImageIOUtil.read(originalImageFile)!;;
    

                        if(bufferedImage == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Unable to find ImageReader for this file.");
                    

                                    }
                                

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var hashMap: HashMap<any, any> = this.getImageBufferPropertyHashMap(bufferedImage)!;;
    
this.logUtil!.putF("Image Properties: " +hashMap!.toString(), this, "saveImageFile()");
    

                                    }
                                

    var imageFile: AbFile = AbFile.createAbFile(category +newImageFileName)!;;
    
imageFile!.createNewFile();
    

    var imageUtil: ImageUtil = ImageUtil.getInstance()!;;
    

    var newBufferedImage: BufferedImage = imageUtil!.createBufferedImageForSave(bufferedImage, newWidth, newHeight)!;;
    

    var isWritten: boolean = ImageIOUtil.write(newBufferedImage as RenderedImage, mediaData!.getName(), imageFile)!;;
    

                        if(!isWritten)
                        
                                    {
                                    


                            throw new Exception("Unable to write.");
                    

                                    }
                                

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Get Path: ");
    
stringBuffer!.append(originalImageFile!.getPath());
    
stringBuffer!.append("\nNewImageFileName: ");
    
stringBuffer!.append(newImageFileName);
    
stringBuffer!.append("\nCategory: ");
    
stringBuffer!.append(category);
    
stringBuffer!.append("\nSave File Type: ");
    
stringBuffer!.append(mediaData!.getName());
    
stringBuffer!.append("\nNew")!.append(commonLabels!.WIDTH_LABEL);
    
stringBuffer!.appendint(newWidth);
    
stringBuffer!.append("\nNew")!.append(commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(newHeight);
    
stringBuffer!.append("\nFile Length: ");
    
stringBuffer!.appendlong(originalImageFile!.length());
    
stringBuffer!.append("\nNew File Length: ");
    
stringBuffer!.appendlong(imageFile!.length());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "saveImageFile()");
    

                                    }
                                
}


}



