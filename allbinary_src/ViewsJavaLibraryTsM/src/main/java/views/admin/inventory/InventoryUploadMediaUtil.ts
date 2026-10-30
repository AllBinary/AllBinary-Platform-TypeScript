
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
        
import { ByteArrayInputStream } from '../../../java/io/ByteArrayInputStream.js';
//not GWT import const ByteArrayInputStream

import { StoreFrontInterface } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { ItemInterface } from '../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
//not GWT import const ItemInterface

import { URLGLOBALS } from '../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

import { UploadMediaSingleton } from '../../../org/allbinary/logic/communication/http/file/upload/media/UploadMediaSingleton.js';
//not GWT import const UploadMediaSingleton

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbFile } from '../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { FileUtil } from '../../../org/allbinary/logic/io/file/FileUtil.js';
//not GWT import const FileUtil

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { MediaData } from '../../../org/allbinary/logic/visual/media/MediaData.js';
//not GWT import const MediaData

import { MediaTypeData } from '../../../org/allbinary/logic/visual/media/MediaTypeData.js';
//not GWT import const MediaTypeData

import { MediaUtil } from '../../../org/allbinary/logic/visual/media/MediaUtil.js';
//not GWT import const MediaUtil

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
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
                                

    let fileUtil: FileUtil = FileUtil.getInstance()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(this.storeFrontInterface!.getCurrentHostNamePath());
    
stringBuffer!.append(this.itemInterface!.getCategory());
    

    let fullPath: string = stringBuffer!.toString()!;;
    

    let imageDirectoryFile: AbFile = AbFile.createAbFile(fullPath)!;;
    

                        if(!imageDirectoryFile!.isDirectory())
                        
                                    {
                                    


                            throw new Exception("Unable to save file to non existant directory");
                    

                                    }
                                
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(fullPath);
    
stringBuffer!.append(fileName);
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(mediaData!.getName());
    

    let originalImageFile: AbFile = AbFile.createAbFile(stringBuffer!.toString())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("Saving Original Image: " +originalImageFile, this, "saveFiles()");
    

                                    }
                                
originalImageFile!.createNewFile();
    
fileUtil!.write(new ByteArrayInputStream(byteArray), originalImageFile);
    

    let uploadMedia: UploadMediaSingleton = UploadMediaSingleton.getInstance()!;;
    

    let isMediaSupported: boolean = uploadMedia!.isWriterSupported(mediaData!.getName()) || uploadMedia!.isReaderSupported(mediaData!.getName());;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Is Image Type: ");
    
stringBuffer!.append(mediaData!.getName());
    
stringBuffer!.append(" supported: ");
    
stringBuffer!.appendboolean(isMediaSupported);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "saveFiles()");
    

                                    }
                                

    let defaultMediaData: MediaData = MediaData.getDefault()!;;
    
this.setFileNames(fileName);
    

                        if(isMediaSupported)
                        
                                    {
                                    
    let isMediaResizable: boolean = uploadMedia!.isWriterMedia(mediaData!.getName(), MediaTypeData.getInstance()!.RESIZABLE_MEDIA)!;;
    

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
                            
    let isConvertable: boolean = mediaData!.isConvertableTo(defaultMediaData)!;;
    

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
                            
    let smallImageFile: AbFile = AbFile.createAbFile(this.itemInterface!.getSmallImage())!;;
    
smallImageFile!.createNewFile();
    
fileUtil!.write(new ByteArrayInputStream(byteArray), smallImageFile);
    

    let mediumImageFile: AbFile = AbFile.createAbFile(this.itemInterface!.getMediumImage())!;;
    
smallImageFile!.createNewFile();
    
fileUtil!.write(new ByteArrayInputStream(byteArray), mediumImageFile);
    

    let largeImageFile: AbFile = AbFile.createAbFile(this.itemInterface!.getSmallImage())!;;
    
largeImageFile!.createNewFile();
    
fileUtil!.write(new ByteArrayInputStream(byteArray), largeImageFile);
    

                        }
                            

                        }
                            

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.END, this, "saveFiles()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.itemInterface;
    
}


    setFileNames(fileName: string){

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.itemInterface!.getId());
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(MediaData.getDefault()!.getName());
    

    let END: string = stringBuffer!.toString()!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(fileName);
    
stringBuffer!.append(this.SMALL);
    
stringBuffer!.append(END);
    

    let newImageFileName: string = stringBuffer!.toString()!;;
    
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

