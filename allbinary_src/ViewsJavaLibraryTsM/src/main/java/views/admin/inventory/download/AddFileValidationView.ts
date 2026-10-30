
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../java/lang/Long.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { StoreFrontFactory } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory

import { StoreFrontInterface } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { BasicItemData } from '../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData

import { BasicItemValidation } from '../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemValidation.js';
//not GWT import const BasicItemValidation

import { DownloadItemData } from '../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadItemData.js';
//not GWT import const DownloadItemData

import { DownloadableItem } from '../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js';
//not GWT import const DownloadableItem

import { DownloadableItemValidation } from '../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItemValidation.js';
//not GWT import const DownloadableItemValidation

import { MoneyException } from '../../../../org/allbinary/business/user/commerce/money/MoneyException.js';
//not GWT import const MoneyException

import { InventoryEntity } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
//not GWT import const InventoryEntity

import { InventoryEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
//not GWT import const InventoryEntityFactory

import { GLOBALS2 } from '../../../../org/allbinary/globals/GLOBALS2.js';
//not GWT import const GLOBALS2

import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

import { HttpFileUploadUtil } from '../../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js';
//not GWT import const HttpFileUploadUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { ValidationComponentInterface } from '../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
//not GWT import const ValidationComponentInterface

import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { FileData } from '../../../../org/allbinary/logic/io/file/FileData.js';
//not GWT import const FileData

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { FileItem } from '../../../../org/apache/commons/fileupload/FileItem.js';
//not GWT import const FileItem

import { Document } from '../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DownloadableInventoryItemView } from './DownloadableInventoryItemView.js';
//sameFolderImports - not GWT import - same folder const DownloadableInventoryItemView

export class AddFileValidationView extends DownloadableInventoryItemView implements ValidationComponentInterface {
        

    private static readonly ADDPRODUCT: string = "Finish";

    private static readonly ADDANOTHERDOWNLOADABLE: string = "Add Another";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}

isValid(...args: any[]): any {
   
    if (args.length === 0) return this.isValid$overload1();
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'number') return this.isValid$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: isValid'); }
  
    public isValid$overload1(): Boolean{

 try { 
    let command: string = this.getRequestHashMap()!.get(GLOBALS2.ADMINCOMMAND) as string;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(command) || (command.compareTo(AddFileValidationView.ADDPRODUCT) != 0 && command.compareTo(ADDANOTHERDOWNLOADABLE) != 0))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Invalid AdminCommand=" +command, this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

 try { 
    let inventoryEntity: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;;
    
this.itemInterface= inventoryEntity!.getItem(this.id);
    
 }
 catch (caught: any) {
 if (caught instanceof MoneyException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.put("Existing Item With MoneyException", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                

 }
  else { throw caught; } }
 

                        if(this.itemInterface == 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Item Does Not Exist", this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(new BasicItemValidation(this.itemInterface).isValid() == false)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("BasicItem is not valid", this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;;
    

    let fullCategory: string = new StringMaker().append(URLGLOBALS.getWebappPath())!.append(storeFrontInterface!.getCurrentHostNamePath())!.append(this.itemInterface!.getCategory())!.toString()!;;
    

    let categoryFile: AbFile = AbFile.createAbFile(fullCategory)!;;
    

                        if(!categoryFile!.isDirectory())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Category Does Not Exist: " +fullCategory, this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    let downloadableFileObject: any = this.getRequestHashMap()!.get(DownloadItemData.FILE)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(downloadableFileObject))
                        
                                    {
                                    
    let fileItem: FileItem = downloadableFileObject as FileItem;;
    

    let fileName: string = fileItem!.getName()!;;
    

    let size: number = fileItem!.getSize()!;;
    
HttpFileUploadUtil.log(fileItem);
    

                        if(this.isValid(fileName, size) == false)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            this.processFile(fileItem);
    
this.getRequestHashMap()!.put(DownloadItemData.SIZE, (size).toString());
    

                        }
                            

                                    }
                                
                        else {
                            this.getRequestHashMap()!.remove(DownloadItemData.FILE);
    

                        }
                            

    let licenseFileObject: any = this.getRequestHashMap()!.get(DownloadItemData.LICENSE_FILE)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(licenseFileObject))
                        
                                    {
                                    
    let fileItem: FileItem = licenseFileObject as FileItem;;
    

    let fileName: string = fileItem!.getName()!;;
    

    let size: number = fileItem!.getSize()!;;
    
HttpFileUploadUtil.log(fileItem);
    

                        if(this.isValid(fileName, size) == false)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.processFile(fileItem);
    

                        }
                            

                                    }
                                
                        else {
                            this.getRequestHashMap()!.remove(DownloadItemData.LICENSE_FILE);
    

                        }
                            

    let extraFilesObject: any = this.getRequestHashMap()!.get(DownloadItemData.EXTRA_FILES)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(extraFilesObject))
                        
                                    {
                                    
    let fileItem: FileItem = extraFilesObject as FileItem;;
    

    let fileName: string = fileItem!.getName()!;;
    

    let size: number = fileItem!.getSize()!;;
    
HttpFileUploadUtil.log(fileItem);
    

                        if(this.isValid(fileName, size) == false)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.processFile(fileItem);
    
this.unzip(fileItem);
    

                        }
                            

                                    }
                                
                        else {
                            this.getRequestHashMap()!.remove(DownloadItemData.EXTRA_FILES);
    

                        }
                            

    let hashMap: HashMap<any, any> = this.getRequestHashMap()!;;
    
hashMap!.put(this.basicItemData!.ID, this.itemInterface!.getId());
    

    let licenseObject: any = hashMap!.get(DownloadItemData.LICENSE_FILE)!;;
    

                        if(licenseObject != 
                                    null
                                )
                        
                                    {
                                    hashMap!.put(DownloadItemData.LICENSE_FILE, (licenseObject as FileItem).getName());
    

                                    }
                                
                        else {
                            hashMap!.put(DownloadItemData.LICENSE_FILE, StringUtil.getInstance()!.EMPTY_STRING);
    

                        }
                            

    let fileObject: any = hashMap!.get(DownloadItemData.FILE)!;;
    

                        if(fileObject != 
                                    null
                                )
                        
                                    {
                                    hashMap!.put(DownloadItemData.FILE, (fileObject as FileItem).getName());
    

                                    }
                                
                        else {
                            hashMap!.put(DownloadItemData.FILE, StringUtil.getInstance()!.EMPTY_STRING);
    

                        }
                            
this.downloadableItem= new DownloadableItem(hashMap);
    

    let downloadableItemValidation: DownloadableItemValidation = new DownloadableItemValidation(this.downloadableItem);;
    

                        if(downloadableItemValidation!.isValid() == false)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("DownloadableItem is not valid", this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Exception in validation", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

validationInfo(...args: any[]): any {
   
    if (args.length === 0) return this.validationInfo$overload1();
   
    if (args.length === 3 && typeof args[1] === 'string' && typeof args[2] === 'number') return this.validationInfo$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: validationInfo'); }
  
    public validationInfo$overload1(): string{

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    

    let command: string = this.getRequestHashMap()!.get(GLOBALS2.ADMINCOMMAND) as string;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(command) || (command.compareTo(AddFileValidationView.ADDPRODUCT) != 0 && command.compareTo(ADDANOTHERDOWNLOADABLE) != 0))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                                    }
                                

                        if(this.itemInterface == 
                                    null
                                )
                        
                                    {
                                    
    let ITEM_NOT_FOUND: string = "Item Does Not Exist";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(ITEM_NOT_FOUND, this, "validationInfo()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ITEM_NOT_FOUND;
    

                                    }
                                

    let basicItemValidation: BasicItemValidation = new BasicItemValidation(this.itemInterface);;
    

                        if(basicItemValidation!.isValid() == false)
                        
                                    {
                                    stringBuffer!.append(basicItemValidation!.validationInfo());
    
stringBuffer!.append("<br/>");
    

                                    }
                                

    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;;
    

    let fullCategory: string = new StringMaker().append(URLGLOBALS.getWebappPath())!.append(storeFrontInterface!.getCurrentHostNamePath())!.append(this.itemInterface!.getCategory())!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Category: " +fullCategory, this, "validationInfo()");
    

                                    }
                                

    let categoryFile: AbFile = AbFile.createAbFile(fullCategory)!;;
    

                        if(!categoryFile!.isDirectory())
                        
                                    {
                                    stringBuffer!.append("Category ");
    
stringBuffer!.append(this.itemInterface!.getCategory());
    
stringBuffer!.append(" does not exist.");
    
stringBuffer!.append("<br />");
    

                                    }
                                

    let downloadableFileObject: any = this.getRequestHashMap()!.get(DownloadItemData.FILE)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(downloadableFileObject))
                        
                                    {
                                    
    let fileItem: FileItem = downloadableFileObject as FileItem;;
    

    let fileName: string = fileItem!.getName()!;;
    

    let size: number = fileItem!.getSize()!;;
    
this.validationInfo(stringBuffer, fileName, size);
    

                                    }
                                
                        else {
                            stringBuffer!.append("Download File Missing");
    
stringBuffer!.append("<br/>");
    

                        }
                            

    let licenseFileObject: any = this.getRequestHashMap()!.get(DownloadItemData.LICENSE_FILE)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(licenseFileObject))
                        
                                    {
                                    
    let fileItem: FileItem = licenseFileObject as FileItem;;
    

    let fileName: string = fileItem!.getName()!;;
    

    let size: number = fileItem!.getSize()!;;
    
this.validationInfo(stringBuffer, fileName, size);
    

                                    }
                                
                        else {
                            
                        }
                            

    let extraFilesObject: any = this.getRequestHashMap()!.get(DownloadItemData.EXTRA_FILES)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(extraFilesObject))
                        
                                    {
                                    
    let fileItem: FileItem = extraFilesObject as FileItem;;
    

    let fileName: string = fileItem!.getName()!;;
    

    let size: number = fileItem!.getSize()!;;
    
this.validationInfo(stringBuffer, fileName, size);
    

                                    }
                                
                        else {
                            
                        }
                            

                        if(this.downloadableItem != 
                                    null
                                )
                        
                                    {
                                    
    let downloadableItemValidation: DownloadableItemValidation = new DownloadableItemValidation(this.downloadableItem);;
    

                        if(downloadableItemValidation!.isValid() == false)
                        
                                    {
                                    
    let log: string = downloadableItemValidation!.validationInfo()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(log, this, this.commonStrings!.IS_VALID);
    

                                    }
                                
stringBuffer!.append(log);
    
stringBuffer!.append("<br/>");
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Getting Validation Info";
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    isValid$overload2(fileName: string, size: number): Boolean{

    let fileData: FileData = FileData.getInstance()!;;
    

                        if(size > fileData!.MINDOWNLOADABLEFILESIZE)
                        
                                    {
                                    
                        if(size < fileData!.MAXDOWNLOADABLEFILESIZE)
                        
                                    {
                                    
                        if(!StringValidationUtil.getInstance()!.isValidRequired(fileName, fileData!.MINLEN, fileData!.MAXLEN))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("File name is not valid: ");
    
stringBuffer!.append(fileName);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("File Size To Large: ");
    
stringBuffer!.appendlong(size);
    
stringBuffer!.append(">");
    
stringBuffer!.appendint(fileData!.MAXDOWNLOADABLEFILESIZE);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("File Size To Small: ");
    
stringBuffer!.appendlong(size);
    
stringBuffer!.append(">");
    
stringBuffer!.appendint(fileData!.MINDOWNLOADABLEFILESIZE);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    validationInfo$overload2(stringBuffer: StringMaker, fileName: string, size: number){

    let fileData: FileData = FileData.getInstance()!;;
    

                        if(size > fileData!.MINDOWNLOADABLEFILESIZE)
                        
                                    {
                                    
                        if(size < fileData!.MAXDOWNLOADABLEFILESIZE)
                        
                                    {
                                    
                        if(!StringValidationUtil.getInstance()!.isValidRequired(fileName, fileData!.MINLEN, fileData!.MAXLEN))
                        
                                    {
                                    stringBuffer!.append("File Name must be more than ");
    
stringBuffer!.appendint(fileData!.MINLEN);
    
stringBuffer!.append(" and less than ");
    
stringBuffer!.appendint(fileData!.MAXLEN);
    
stringBuffer!.append(" characters in length: ");
    
stringBuffer!.append(fileName);
    
stringBuffer!.append("<br/>");
    

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
                        else {
                            stringBuffer!.append("File Is Not The Right Size. ");
    
stringBuffer!.appendint(fileData!.MINDOWNLOADABLEFILESIZE);
    
stringBuffer!.append("< >");
    
stringBuffer!.appendint(fileData!.MAXDOWNLOADABLEFILESIZE);
    
stringBuffer!.append("<br/>");
    

                        }
                            

                                    }
                                
}


}

