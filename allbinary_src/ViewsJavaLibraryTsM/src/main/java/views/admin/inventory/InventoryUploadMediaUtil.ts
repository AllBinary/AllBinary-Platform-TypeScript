
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
        



import { ByteArrayInputStream } from "../../../java/io/ByteArrayInputStream.js";

    
import { StoreFrontInterface } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { ItemInterface } from "../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { URLGLOBALS } from "../../../org/allbinary/globals/URLGLOBALS.js";

    
import { UploadMediaSingleton } from "../../../org/allbinary/logic/communication/http/file/upload/media/UploadMediaSingleton.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFile } from "../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileUtil } from "../../../org/allbinary/logic/io/file/FileUtil.js";

    
import { AbPathData } from "../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { MediaData } from "../../../org/allbinary/logic/visual/media/MediaData.js";

    
import { MediaTypeData } from "../../../org/allbinary/logic/visual/media/MediaTypeData.js";

    
import { MediaUtil } from "../../../org/allbinary/logic/visual/media/MediaUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class InventoryUploadMediaUtil
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly mediaUtil: MediaUtil = MediaUtil.getInstance()!;
        
        

    private readonly LARGEWIDTH: number = 1024;
        
        

    private readonly LARGEHEIGHT: number = 1024;
        
        

    private readonly MEDIUMWIDTH: number = 256;
        
        

    private readonly MEDIUMHEIGHT: number = 256;
        
        

    private readonly SMALLWIDTH: number = 128;
        
        

    private readonly SMALLHEIGHT: number = 128;
        
        

    private readonly SMALL: string = "Small";
        
        

    private readonly MEDIUM: string = "Medium";
        
        

    private readonly LARGE: string = "Large";
        
        

    private storeFrontInterface: StoreFrontInterface

    private itemInterface: ItemInterface
public constructor (storeFrontInterface: StoreFrontInterface, itemInterface: ItemInterface){

            super();
            var storeFrontInterface = storeFrontInterface
var itemInterface = itemInterface
this.storeFrontInterface= storeFrontInterface
this.itemInterface= itemInterface
}


                @Throws(Exception::class)
            
    public saveFiles(byteArray: ByteArray, fileName: string, mediaData: MediaData): ItemInterface{
var byteArray = byteArray
var fileName = fileName
var mediaData = mediaData

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    put("Start FileName: " +fileName, this, "saveFiles()")

                                    }
                                

    
                        if(StringValidationUtil.getInstance()!.isEmpty(fileName))
                        
                                    {
                                    


                            throw Exception("Image File Name Was Null")

                                    }
                                

    var fileUtil: FileUtil = FileUtil.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getWebappPath())
append(storeFrontInterface!.getCurrentHostNamePath())
append(itemInterface!.getCategory())

    var fullPath: string = stringBuffer!.toString()!;
        
        


    var imageDirectoryFile: AbFile = new AbFile(fullPath);
        
        


    
                        if(!imageDirectoryFile!.isDirectory())
                        
                                    {
                                    


                            throw Exception("Unable to save file to non existant directory")

                                    }
                                
delete(0, stringBuffer!.length())
append(fullPath)
append(fileName)
append(AbPathData.getInstance()!.EXTENSION_SEP)
append(mediaData!.getName())

    var originalImageFile: AbFile = new AbFile(stringBuffer!.toString());
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    put("Saving Original Image: " +originalImageFile, this, "saveFiles()")

                                    }
                                
createNewFile()
write(ByteArrayInputStream(byteArray), originalImageFile)

    var uploadMedia: UploadMediaSingleton = UploadMediaSingleton.getInstance()!;
        
        


    var isMediaSupported: boolean = uploadMedia!.isWriterSupported(mediaData!.getName()) || uploadMedia!.isReaderSupported(mediaData!.getName());
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append("Is Image Type: ")
append(mediaData!.getName())
append(" supported: ")
appendboolean(isMediaSupported)
put(stringBuffer!.toString(), this, "saveFiles()")

                                    }
                                

    var defaultMediaData: MediaData = MediaData.getDefault()!;
        
        

this.setFileNames(fileName)

    
                        if(isMediaSupported)
                        
                                    {
                                    
    var isMediaResizable: boolean = uploadMedia!.isWriterMedia(mediaData!.getName(), MediaTypeData.getInstance()!.RESIZABLE_MEDIA)!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append("Is ")
append(mediaData!.toString())
append(" Image Resize Supported:")
appendboolean(uploadMedia!.isSupported(mediaData!.getName()))
append(" WriterMedia: ")
appendboolean(isMediaResizable)
put(stringBuffer!.toString(), this, "saveFiles()")

                                    }
                                

    
                        if(isMediaResizable)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    put("Saving Small Image: " +this.itemInterface!.getSmallImage(), this, "saveFiles()")

                                    }
                                
saveImageFile(originalImageFile, itemInterface!.getSmallImage(), fullPath, mediaData, this.SMALLWIDTH, this.SMALLHEIGHT)
saveImageFile(originalImageFile, itemInterface!.getMediumImage(), fullPath, mediaData, this.MEDIUMWIDTH, this.MEDIUMHEIGHT)
saveImageFile(originalImageFile, itemInterface!.getLargeImage(), fullPath, mediaData, this.LARGEWIDTH, this.LARGEHEIGHT)

                                    }
                                
                        else {
                            
    var isConvertable: boolean = mediaData!.isConvertableTo(defaultMediaData)!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append("Converting: ")
append(defaultMediaData!.getName())
append(" into ")
append(mediaData!.getName())
append(" if Convertable is it: ")
appendboolean(isConvertable)
put(stringBuffer!.toString(), this, "saveFiles()")

                                    }
                                

    
                        if(isConvertable)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    put("Saving Small Image: " +this.itemInterface!.getSmallImage(), this, "saveFiles()")

                                    }
                                
saveImageFile(originalImageFile, itemInterface!.getSmallImage(), fullPath, defaultMediaData, this.SMALLWIDTH, this.SMALLHEIGHT)
saveImageFile(originalImageFile, itemInterface!.getMediumImage(), fullPath, defaultMediaData, this.MEDIUMWIDTH, this.MEDIUMHEIGHT)
saveImageFile(originalImageFile, itemInterface!.getLargeImage(), fullPath, defaultMediaData, this.LARGEWIDTH, this.LARGEHEIGHT)

                                    }
                                
                        else {
                            
    var smallImageFile: AbFile = new AbFile(itemInterface!.getSmallImage());
        
        

createNewFile()
write(ByteArrayInputStream(byteArray), smallImageFile)

    var mediumImageFile: AbFile = new AbFile(itemInterface!.getMediumImage());
        
        

createNewFile()
write(ByteArrayInputStream(byteArray), mediumImageFile)

    var largeImageFile: AbFile = new AbFile(itemInterface!.getSmallImage());
        
        

createNewFile()
write(ByteArrayInputStream(byteArray), largeImageFile)

                        }
                            

                        }
                            

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.END, this, "saveFiles()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.itemInterface;
    
}


    setFileNames(fileName: string){
var fileName = fileName

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.itemInterface!.getId())
append(AbPathData.getInstance()!.EXTENSION_SEP)
append(MediaData.getDefault()!.getName())

    var END: string = stringBuffer!.toString()!;
        
        

delete(0, stringBuffer!.length())
append(fileName)
append(SMALL)
append(END)

    var newImageFileName: string = stringBuffer!.toString()!;
        
        

setSmallImage(newImageFileName)
delete(0, stringBuffer!.length())
append(fileName)
append(MEDIUM)
append(END)
newImageFileName= stringBuffer!.toString()
setMediumImage(newImageFileName)
delete(0, stringBuffer!.length())
append(fileName)
append(LARGE)
append(END)
newImageFileName= stringBuffer!.toString()
setLargeImage(newImageFileName)
}


}
                
            

