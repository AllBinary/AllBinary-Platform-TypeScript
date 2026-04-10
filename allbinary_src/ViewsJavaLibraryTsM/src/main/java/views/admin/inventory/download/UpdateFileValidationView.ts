
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { StoreFrontFactory } from "../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { BasicItemData } from "../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { BasicItemValidation } from "../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemValidation.js";

    
import { DownloadItemData } from "../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadItemData.js";

    
import { DownloadableItem } from "../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js";

    
import { DownloadableItemValidation } from "../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItemValidation.js";

    
import { MoneyException } from "../../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    
import { InventoryEntity } from "../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js";

    
import { InventoryEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { GLOBALS2 } from "../../../../org/allbinary/globals/GLOBALS2.js";

    
import { URLGLOBALS } from "../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { HttpFileUploadUtil } from "../../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileData } from "../../../../org/allbinary/logic/io/file/FileData.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { FileItem } from "../../../../org/apache/commons/fileupload/FileItem.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    

export class UpdateFileValidationView extends DownloadableInventoryItemView
                , ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{

        try {
            
    var command: string = this.getRequestHashMap()!.get(GLOBALS2.ADMINCOMMAND) as String;
        
        


                        if(StringValidationUtil.getInstance()!.isEmpty(command) || command.compareTo(this.commonStrings!.UPDATE) != 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Invalid AdminCommand=" +command, this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

        try {
            
    var inventoryEntity: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;
        
        

this.itemInterface= inventoryEntity!.getItem(id)
} catch(e: MoneyException)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Existing Item With MoneyException", this, commonStrings!.IS_VALID, e)

                                    }
                                
}


                        if(this.itemInterface == 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Item Does Not Exist", this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(BasicItemValidation(this.itemInterface).
                            isValid() == Boolean.FALSE)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("BasicItem is not valid", this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;
        
        


    var fullCategory: string = StringMaker().
                            append(URLGLOBALS.getWebappPath())!.append(storeFrontInterface!.getCurrentHostNamePath())!.append(this.itemInterface!.getCategory())!.toString()!;
        
        


    var categoryFile: AbFile = new AbFile(fullCategory);
        
        


                        if(!categoryFile!.isDirectory())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Category Does Not Exist: " +fullCategory, this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var downloadableFileObject: any = {} = this.getRequestHashMap()!.get(DownloadItemData.FILE)!;
        
        


                        if(HttpFileUploadUtil.getInstance()!.isValid(downloadableFileObject))
                        
                                    {
                                    
    var fileItem: FileItem = downloadableFileObject as FileItem;
        
        


    var fileName: string = fileItem!.getName()!;
        
        


    var size: number = fileItem!.getSize()!;
        
        

HttpFileUploadUtil.log(fileItem)

                        if(this.isValid(fileName, size) == Boolean.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
                        else {
                            this.processFile(fileItem)
this.getRequestHashMap()!.put(DownloadItemData.SIZE, (size).toString())

                        }
                            

                                    }
                                
                        else {
                            this.getRequestHashMap()!.remove(DownloadItemData.FILE)

                        }
                            

    var licenseFileObject: any = {} = this.getRequestHashMap()!.get(DownloadItemData.LICENSE_FILE)!;
        
        


                        if(HttpFileUploadUtil.getInstance()!.isValid(licenseFileObject))
                        
                                    {
                                    
    var fileItem: FileItem = licenseFileObject as FileItem;
        
        


    var fileName: string = fileItem!.getName()!;
        
        


    var size: number = fileItem!.getSize()!;
        
        

HttpFileUploadUtil.log(fileItem)

                        if(this.isValid(fileName, size) == Boolean.FALSE)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.processFile(fileItem)

                        }
                            

                                    }
                                
                        else {
                            this.getRequestHashMap()!.remove(DownloadItemData.LICENSE_FILE)

                        }
                            

    var extraFilesObject: any = {} = this.getRequestHashMap()!.get(DownloadItemData.EXTRA_FILES)!;
        
        


                        if(HttpFileUploadUtil.getInstance()!.isValid(extraFilesObject))
                        
                                    {
                                    
    var fileItem: FileItem = extraFilesObject as FileItem;
        
        


    var fileName: string = fileItem!.getName()!;
        
        


    var size: number = fileItem!.getSize()!;
        
        

HttpFileUploadUtil.log(fileItem)

                        if(this.isValid(fileName, size) == Boolean.FALSE)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.processFile(fileItem)
this.unzip(fileItem)

                        }
                            

                                    }
                                
                        else {
                            this.getRequestHashMap()!.remove(DownloadItemData.EXTRA_FILES)

                        }
                            

    var hashMap: HashMap<Any, Any> = this.getRequestHashMap()!;
        
        

hashMap!.put(BasicItemData.ID, this.itemInterface!.getId())

    var licenseObject: any = {} = hashMap!.get(DownloadItemData.LICENSE_FILE)!;
        
        


                        if(licenseObject != 
                                    null
                                )
                        
                                    {
                                    hashMap!.put(DownloadItemData.LICENSE_FILE, 
                                    (licenseObject as FileItem).getName())

                                    }
                                
                        else {
                            hashMap!.put(DownloadItemData.LICENSE_FILE, StringUtil.getInstance()!.EMPTY_STRING)

                        }
                            

    var fileObject: any = {} = hashMap!.get(DownloadItemData.FILE)!;
        
        


                        if(fileObject != 
                                    null
                                )
                        
                                    {
                                    hashMap!.put(DownloadItemData.FILE, 
                                    (fileObject as FileItem).getName())

                                    }
                                
                        else {
                            hashMap!.put(DownloadItemData.FILE, StringUtil.getInstance()!.EMPTY_STRING)

                        }
                            
this.downloadableItem= DownloadableItem(hashMap)

    var downloadableItemValidation: DownloadableItemValidation = new DownloadableItemValidation(this.downloadableItem);
        
        


                        if(downloadableItemValidation!.isValid() == Boolean.FALSE)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("DownloadableItem is not valid", this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Exception in validation", this, commonStrings!.IS_VALID, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        


    var command: string = this.getRequestHashMap()!.get(GLOBALS2.ADMINCOMMAND) as String;
        
        


                        if(StringValidationUtil.getInstance()!.isEmpty(command) || command.compareTo(this.commonStrings!.UPDATE) != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                                    }
                                

                        if(this.itemInterface == 
                                    null
                                )
                        
                                    {
                                    
    var ITEM_NOT_FOUND: string = "Item Does Not Exist";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put(ITEM_NOT_FOUND, this, "validationInfo()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ITEM_NOT_FOUND;
    

                                    }
                                

    var basicItemValidation: BasicItemValidation = new BasicItemValidation(this.itemInterface);
        
        


                        if(basicItemValidation!.isValid() == Boolean.FALSE)
                        
                                    {
                                    stringBuffer!.append(basicItemValidation!.validationInfo())
stringBuffer!.append("<br/>")

                                    }
                                

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;
        
        


    var fullCategory: string = StringMaker().
                            append(URLGLOBALS.getWebappPath())!.append(storeFrontInterface!.getCurrentHostNamePath())!.append(this.itemInterface!.getCategory())!.toString()!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Category: " +fullCategory, this, "validationInfo()")

                                    }
                                

    var categoryFile: AbFile = new AbFile(fullCategory);
        
        


                        if(!categoryFile!.isDirectory())
                        
                                    {
                                    stringBuffer!.append("Category ")
stringBuffer!.append(this.itemInterface!.getCategory())
stringBuffer!.append(" does not exist.")
stringBuffer!.append("<br />")

                                    }
                                

    var downloadableFileObject: any = {} = this.getRequestHashMap()!.get(DownloadItemData.FILE)!;
        
        


                        if(HttpFileUploadUtil.getInstance()!.isValid(downloadableFileObject))
                        
                                    {
                                    
    var fileItem: FileItem = downloadableFileObject as FileItem;
        
        


    var fileName: string = fileItem!.getName()!;
        
        


    var size: number = fileItem!.getSize()!;
        
        

this.validationInfo(stringBuffer, fileName, size)

                                    }
                                
                        else {
                            stringBuffer!.append("Download File Missing")
stringBuffer!.append("<br/>")

                        }
                            

    var licenseFileObject: any = {} = this.getRequestHashMap()!.get(DownloadItemData.LICENSE_FILE)!;
        
        


                        if(HttpFileUploadUtil.getInstance()!.isValid(licenseFileObject))
                        
                                    {
                                    
    var fileItem: FileItem = licenseFileObject as FileItem;
        
        


    var fileName: string = fileItem!.getName()!;
        
        


    var size: number = fileItem!.getSize()!;
        
        

this.validationInfo(stringBuffer, fileName, size)

                                    }
                                
                        else {
                            
                        }
                            

    var extraFilesObject: any = {} = this.getRequestHashMap()!.get(DownloadItemData.EXTRA_FILES)!;
        
        


                        if(HttpFileUploadUtil.getInstance()!.isValid(extraFilesObject))
                        
                                    {
                                    
    var fileItem: FileItem = extraFilesObject as FileItem;
        
        


    var fileName: string = fileItem!.getName()!;
        
        


    var size: number = fileItem!.getSize()!;
        
        

this.validationInfo(stringBuffer, fileName, size)

                                    }
                                
                        else {
                            
                        }
                            

                        if(this.downloadableItem != 
                                    null
                                )
                        
                                    {
                                    
    var downloadableItemValidation: DownloadableItemValidation = new DownloadableItemValidation(this.downloadableItem);
        
        


                        if(downloadableItemValidation!.isValid() == Boolean.FALSE)
                        
                                    {
                                    
    var log: string = downloadableItemValidation!.validationInfo()!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put(log, this, commonStrings!.IS_VALID)

                                    }
                                
stringBuffer!.append(log)
stringBuffer!.append("<br/>")

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Getting Validation Info";
    
}

}


                //@Throws(Error::class)
            
    isValid(fileName: string, size: number): Boolean{
var fileName = fileName
var size = size

    var fileData: FileData = FileData.getInstance()!;
        
        


                        if(size > fileData!.MINDOWNLOADABLEFILESIZE)
                        
                                    {
                                    
                        if(size < fileData!.MAXDOWNLOADABLEFILESIZE)
                        
                                    {
                                    
                        if(!StringValidationUtil.getInstance()!.isValidRequired(fileName, fileData!.MINLEN, fileData!.MAXLEN))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("File name is not valid: ")
stringBuffer!.append(fileName)
logUtil!.put(stringBuffer!.toString(), this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("File Size To Large: ")
stringBuffer!.appendlong(size)
stringBuffer!.append(">")
stringBuffer!.appendint(fileData!.MAXDOWNLOADABLEFILESIZE)
logUtil!.put(stringBuffer!.toString(), this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("File Size To Small: ")
stringBuffer!.appendlong(size)
stringBuffer!.append(">")
stringBuffer!.appendint(fileData!.MINDOWNLOADABLEFILESIZE)
logUtil!.put(stringBuffer!.toString(), this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    validationInfo(stringBuffer: StringMaker, fileName: string, size: number){
var stringBuffer = stringBuffer
var fileName = fileName
var size = size

    var fileData: FileData = FileData.getInstance()!;
        
        


                        if(size > fileData!.MINDOWNLOADABLEFILESIZE)
                        
                                    {
                                    
                        if(size < fileData!.MAXDOWNLOADABLEFILESIZE)
                        
                                    {
                                    
                        if(!StringValidationUtil.getInstance()!.isValidRequired(fileName, fileData!.MINLEN, fileData!.MAXLEN))
                        
                                    {
                                    stringBuffer!.append("File Name must be more than ")
stringBuffer!.appendint(fileData!.MINLEN)
stringBuffer!.append(" and less than ")
stringBuffer!.appendint(fileData!.MAXLEN)
stringBuffer!.append(" characters in length: ")
stringBuffer!.append(fileName)
stringBuffer!.append("<br/>")

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
                        else {
                            stringBuffer!.append("File Is Not The Right Size. ")
stringBuffer!.appendint(fileData!.MINDOWNLOADABLEFILESIZE)
stringBuffer!.append("< >")
stringBuffer!.appendint(fileData!.MAXDOWNLOADABLEFILESIZE)
stringBuffer!.append("<br/>")

                        }
                            

                                    }
                                
}


}
                
            

