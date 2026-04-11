
        /* Generated Code Do Not Modify */
        



import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { RenderedImage } from "../../../../../java/awt/image/RenderedImage.js";

    
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { LogConfigTypes } from "../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ImageUtil } from "../../../../../org/allbinary/media/image/ImageUtil.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    

export class MediaUtil
            extends Object
         {
        

    private static readonly instance: MediaUtil = new MediaUtil();
        
        

    public static getInstance(): MediaUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    static getImageBufferPropertyHashMap(bufferedImage: BufferedImage): HashMap<any, any>{
    //var bufferedImage = bufferedImage

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var propertyStringArray: string[] = bufferedImage!.getPropertyNames()!;
        
        
;
    

                        if(propertyStringArray != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < propertyStringArray!.length; index++)
        {

    var propertyObject: any = {} = bufferedImage!.getProperty(propertyStringArray[index]!)!;
        
        
;
    
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


                //@Throws(Error::class)
            
    public saveImageFile(originalImageFile: AbFile, newImageFileName: string, category: string, mediaData: MediaData, newWidth: number, newHeight: number){
var originalImageFile = originalImageFile
var newImageFileName = newImageFileName
var category = category
var mediaData = mediaData
var newWidth = newWidth
var newHeight = newHeight

                        if(originalImageFile == 
                                    null
                                 || !originalImageFile!.isFile();

                        )
                        
                                    {
                                    


                            throw Error("Original Image File Does Not Exist.")

                                    }
                                

    var bufferedImage: BufferedImage = ImageIOUtil.read(originalImageFile)!;
        
        
;
    

                        if(bufferedImage == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error("Unable to find ImageReader for this file.")

                                    }
                                

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var hashMap: HashMap<any, any> = this.getImageBufferPropertyHashMap(bufferedImage)!;
        
        
;
    
logUtil!.put("Image Properties: " +hashMap!.toString(), this, "saveImageFile()");
    

                                    }
                                

    var imageFile: AbFile = new AbFile(category +newImageFileName);
        
        
;
    
imageFile!.createNewFile();
    

    var imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        
;
    

    var newBufferedImage: BufferedImage = imageUtil!.createBufferedImage(bufferedImage, newWidth, newHeight)!;
        
        
;
    

    var isWritten: boolean = ImageIOUtil.write(newBufferedImage as RenderedImage, mediaData!.getName(), imageFile)!;
        
        
;
    

                        if(!isWritten)
                        
                                    {
                                    


                            throw Error("Unable to write.")

                                    }
                                

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
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
    
logUtil!.put(stringBuffer!.toString(), this, "saveImageFile()");
    

                                    }
                                
}


}
                
            

