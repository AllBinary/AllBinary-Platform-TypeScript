
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
        



            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
//not game specific package import { ByteArrayInputStream } from '../../../java/io/ByteArrayInputStream.js';
      const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
//not game specific package import { StoreFrontInterface } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { ItemInterface } from '../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
      const ItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemInterface;

      
//not game specific package import { URLGLOBALS } from '../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { UploadMediaSingleton } from '../../../org/allbinary/logic/communication/http/file/upload/media/UploadMediaSingleton.js';
      const UploadMediaSingleton = globalThis.org.allbinary.logic.communication.http.file.upload.media.UploadMediaSingleton;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbFile } from '../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { FileUtil } from '../../../org/allbinary/logic/io/file/FileUtil.js';
      const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;

      
//not game specific package import { AbPathData } from '../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
      const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not game specific package import { MediaData } from '../../../org/allbinary/logic/visual/media/MediaData.js';
      const MediaData = globalThis.org.allbinary.logic.visual.media.MediaData;

      
//not game specific package import { MediaTypeData } from '../../../org/allbinary/logic/visual/media/MediaTypeData.js';
      const MediaTypeData = globalThis.org.allbinary.logic.visual.media.MediaTypeData;

      
//not game specific package import { MediaUtil } from '../../../org/allbinary/logic/visual/media/MediaUtil.js';
      const MediaUtil = globalThis.org.allbinary.logic.visual.media.MediaUtil;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
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

    private storeFrontInterface: StoreFrontInterface;

    private itemInterface: ItemInterface;

public constructor (storeFrontInterface: StoreFrontInterface, itemInterface: ItemInterface){

            super();
        this.storeFrontInterface= storeFrontInterface;
    
this.itemInterface= itemInterface;
    
}


                //@Throws(Exception.constructor)
            
    public saveFiles(byteArray: number[], fileName: string, mediaData: MediaData): ItemInterface{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("Start FileName: " +fileName, this, "saveFiles()");
    

                                    }
                                

                        if(StringValidationUtil.getInstance()!.isEmpty(fileName))
                        
                                    {
                                    


                            throw new Exception("Image File Name Was Null");
                    

                                    }
                                

    var fileUtil: FileUtil = FileUtil.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(this.storeFrontInterface!.getCurrentHostNamePath());
    
stringBuffer!.append(this.itemInterface!.getCategory());
    

    var fullPath: string = stringBuffer!.toString()!;;
    

    var imageDirectoryFile: AbFile = AbFile.createAbFile(fullPath)!;;
    

                        if(!imageDirectoryFile!.isDirectory())
                        
                                    {
                                    


                            throw new Exception("Unable to save file to non existant directory");
                    

                                    }
                                
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(fullPath);
    
stringBuffer!.append(fileName);
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(mediaData!.getName());
    

    var originalImageFile: AbFile = AbFile.createAbFile(stringBuffer!.toString())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("Saving Original Image: " +originalImageFile, this, "saveFiles()");
    

                                    }
                                
originalImageFile!.createNewFile();
    
fileUtil!.write(new ByteArrayInputStream(byteArray), originalImageFile);
    

    var uploadMedia: UploadMediaSingleton = UploadMediaSingleton.getInstance()!;;
    

    var isMediaSupported: boolean = uploadMedia!.isWriterSupported(mediaData!.getName()) || uploadMedia!.isReaderSupported(mediaData!.getName());;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Is Image Type: ");
    
stringBuffer!.append(mediaData!.getName());
    
stringBuffer!.append(" supported: ");
    
stringBuffer!.appendboolean(isMediaSupported);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "saveFiles()");
    

                                    }
                                

    var defaultMediaData: MediaData = MediaData.getDefault()!;;
    
this.setFileNames(fileName);
    

                        if(isMediaSupported)
                        
                                    {
                                    
    var isMediaResizable: boolean = uploadMedia!.isWriterMedia(mediaData!.getName(), MediaTypeData.getInstance()!.RESIZABLE_MEDIA)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Is ");
    
stringBuffer!.append(mediaData!.toString());
    
stringBuffer!.append(" Image Resize Supported:");
    
stringBuffer!.appendboolean(uploadMedia!.isSupported(mediaData!.getName()));
    
stringBuffer!.append(" WriterMedia: ");
    
stringBuffer!.appendboolean(isMediaResizable);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "saveFiles()");
    

                                    }
                                

                        if(isMediaResizable)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("Saving Small Image: " +this.itemInterface!.getSmallImage(), this, "saveFiles()");
    

                                    }
                                
this.mediaUtil!.saveImageFile(originalImageFile, this.itemInterface!.getSmallImage(), fullPath, mediaData, this.SMALLWIDTH, this.SMALLHEIGHT);
    
this.mediaUtil!.saveImageFile(originalImageFile, this.itemInterface!.getMediumImage(), fullPath, mediaData, this.MEDIUMWIDTH, this.MEDIUMHEIGHT);
    
this.mediaUtil!.saveImageFile(originalImageFile, this.itemInterface!.getLargeImage(), fullPath, mediaData, this.LARGEWIDTH, this.LARGEHEIGHT);
    

                                    }
                                
                        else {
                            
    var isConvertable: boolean = mediaData!.isConvertableTo(defaultMediaData)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Converting: ");
    
stringBuffer!.append(defaultMediaData!.getName());
    
stringBuffer!.append(" into ");
    
stringBuffer!.append(mediaData!.getName());
    
stringBuffer!.append(" if Convertable is it: ");
    
stringBuffer!.appendboolean(isConvertable);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "saveFiles()");
    

                                    }
                                

                        if(isConvertable)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("Saving Small Image: " +this.itemInterface!.getSmallImage(), this, "saveFiles()");
    

                                    }
                                
this.mediaUtil!.saveImageFile(originalImageFile, this.itemInterface!.getSmallImage(), fullPath, defaultMediaData, this.SMALLWIDTH, this.SMALLHEIGHT);
    
this.mediaUtil!.saveImageFile(originalImageFile, this.itemInterface!.getMediumImage(), fullPath, defaultMediaData, this.MEDIUMWIDTH, this.MEDIUMHEIGHT);
    
this.mediaUtil!.saveImageFile(originalImageFile, this.itemInterface!.getLargeImage(), fullPath, defaultMediaData, this.LARGEWIDTH, this.LARGEHEIGHT);
    

                                    }
                                
                        else {
                            
    var smallImageFile: AbFile = AbFile.createAbFile(this.itemInterface!.getSmallImage())!;;
    
smallImageFile!.createNewFile();
    
fileUtil!.write(new ByteArrayInputStream(byteArray), smallImageFile);
    

    var mediumImageFile: AbFile = AbFile.createAbFile(this.itemInterface!.getMediumImage())!;;
    
smallImageFile!.createNewFile();
    
fileUtil!.write(new ByteArrayInputStream(byteArray), mediumImageFile);
    

    var largeImageFile: AbFile = AbFile.createAbFile(this.itemInterface!.getSmallImage())!;;
    
largeImageFile!.createNewFile();
    
fileUtil!.write(new ByteArrayInputStream(byteArray), largeImageFile);
    

                        }
                            

                        }
                            

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.END, this, "saveFiles()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.itemInterface;
    
}


    setFileNames(fileName: string){

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.itemInterface!.getId());
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(MediaData.getDefault()!.getName());
    

    var END: string = stringBuffer!.toString()!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(fileName);
    
stringBuffer!.append(this.SMALL);
    
stringBuffer!.append(END);
    

    var newImageFileName: string = stringBuffer!.toString()!;;
    
this.itemInterface!.setSmallImage(newImageFileName);
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(fileName);
    
stringBuffer!.append(this.MEDIUM);
    
stringBuffer!.append(END);
    
newImageFileName= stringBuffer!.toString();
    
this.itemInterface!.setMediumImage(newImageFileName);
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(fileName);
    
stringBuffer!.append(this.LARGE);
    
stringBuffer!.append(END);
    
newImageFileName= stringBuffer!.toString();
    
this.itemInterface!.setLargeImage(newImageFileName);
    
}


}
                
            

