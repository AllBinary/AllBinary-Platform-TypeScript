
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
        



import { StoreFrontFactory } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { BasicItemData } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { BasicItemValidation } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItemValidation.js";

    
import { MoneyException } from "../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    
import { InventoryEntityFactory } from "../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { GLOBALS2 } from "../../../org/allbinary/globals/GLOBALS2.js";

    
import { URLGLOBALS } from "../../../org/allbinary/globals/URLGLOBALS.js";

    
import { HttpFileUploadUtil } from "../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js";

    
import { UploadMediaSingleton } from "../../../org/allbinary/logic/communication/http/file/upload/media/UploadMediaSingleton.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { AbFile } from "../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileData } from "../../../org/allbinary/logic/io/file/FileData.js";

    
import { PathUtil } from "../../../org/allbinary/logic/io/path/PathUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { FileItem } from "../../../org/apache/commons/fileupload/FileItem.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    

export class AddFileValidationView extends InventoryItemView
                , ValidationComponentInterface {
        

    private static readonly ADDPRODUCT: string = "Add Product";
        
        

    private static readonly NEXTSTEP: string = "Next Step";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{

        try {
            
    var command: string = this.getRequestHashMap()!.get(GLOBALS2.ADMINCOMMAND) as String;
        
        


    
                        if(StringValidationUtil.getInstance()!.isEmpty(command) || (command.compareTo(ADDPRODUCT) != 0 && command.compareTo(NEXTSTEP) != 0))
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Invalid AdminCommand: ")
append(command)
append(" must be: ")
append(ADDPRODUCT)
append(" or ")
append(NEXTSTEP)
put(stringBuffer!.toString(), this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var basicItemValidation: BasicItemValidation = new BasicItemValidation(this.itemInterface);
        
        


    
                        if(basicItemValidation!.isValid() == Boolean.FALSE)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put(basicItemValidation!.validationInfo(), this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;
        
        

setCategory(storeFrontInterface!.getCategoryPath() +this.itemInterface!.getCategory())

    var fullCategory: string = StringMaker().
                            append(URLGLOBALS.getWebappPath())!.append(storeFrontInterface!.getCurrentHostNamePath())!.append(this.itemInterface!.getCategory())!.toString()!;
        
        


    var categoryFile: AbFile = new AbFile(fullCategory);
        
        


    
                        if(!categoryFile!.isDirectory())
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("Category Does Not Exist: " +fullCategory, this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    
                        if(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.getItem(this.itemInterface!.getId()) != 
                                    null
                                )
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("Item Already Exists", this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var imageFileItemObject: any = {} = this.getRequestHashMap()!.get(BasicItemData.IMAGE)!;
        
        


    
                        if(HttpFileUploadUtil.getInstance()!.isValid(imageFileItemObject))
                        
                                    {
                                    
    var fileItem: FileItem = imageFileItemObject as FileItem;
        
        


    var fileName: string = fileItem!.getName()!;
        
        


    var size: number = fileItem!.getSize()!;
        
        

log(fileItem)

    
                        if(this.isValid(fileName, size) == Boolean.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    put("Exception in validation", this, commonStrings!.IS_VALID, e)

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
        
        


    
                        if(StringValidationUtil.getInstance()!.isEmpty(command) || (command.compareTo(ADDPRODUCT) != 0 && command.compareTo(NEXTSTEP) != 0))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                                    }
                                

    var basicItemValidation: BasicItemValidation = new BasicItemValidation(this.itemInterface);
        
        


    
                        if(basicItemValidation!.isValid() == Boolean.FALSE)
                        
                                    {
                                    append(basicItemValidation!.validationInfo())
append("<br/>")

                                    }
                                

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;
        
        


    var fullCategory: string = StringMaker().
                            append(URLGLOBALS.getWebappPath())!.append(storeFrontInterface!.getCurrentHostNamePath())!.append(this.itemInterface!.getCategory())!.toString()!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("Category: " +fullCategory, this, "validationInfo()")

                                    }
                                

    var categoryFile: AbFile = new AbFile(fullCategory);
        
        


    
                        if(!categoryFile!.isDirectory())
                        
                                    {
                                    append("Category ")
append(this.itemInterface!.getCategory())
append(" does not exist.<br />")

                                    }
                                

        try {
            
    
                        if(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.getItem(this.itemInterface!.getId()) != 
                                    null
                                )
                        
                                    {
                                    append("Id is already in use. Refresh the page for a valid id.<br/>")

                                    }
                                
} catch(e: MoneyException)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("Existing Item With MoneyException", this, "validationInfo()")

                                    }
                                
}


    var anyType: any = {} = this.getRequestHashMap()!.get(BasicItemData.IMAGE)!;
        
        


    
                        if(HttpFileUploadUtil.getInstance()!.isValid(anyType))
                        
                                    {
                                    
    var fileItem: FileItem = anyType as FileItem;
        
        


    var fileName: string = fileItem!.getName()!;
        
        


    var fileItemFieldName: string = fileItem!.getFieldName()!;
        
        


    var size: number = fileItem!.getSize()!;
        
        

this.validationInfo(stringBuffer, fileName, fileItemFieldName, size)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    put("Failed to generate validation error info", this, "validationInfo()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Getting Validation Info";
    
}

}


                @Throws(Exception::class)
            
    isValid(fileName: string, size: number): Boolean{
var fileName = fileName
var size = size

    var fileData: FileData = FileData.getInstance()!;
        
        


    
                        if(size > fileData!.MINIMAGEFILESIZE)
                        
                                    {
                                    
    
                        if(size < fileData!.MAXIMAGEFILESIZE)
                        
                                    {
                                    
    
                        if(!StringValidationUtil.getInstance()!.isValidRequired(fileName, fileData!.MINLEN, fileData!.MAXLEN))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
                        else {
                            
    var pathUtil: PathUtil = PathUtil.getInstance()!;
        
        


    var extension: string = pathUtil!.getExtension(fileName)!;
        
        


    var uploadMedia: UploadMediaSingleton = UploadMediaSingleton.getInstance()!;
        
        


    
                        if(!uploadMedia!.isWriterSupported(extension) && !uploadMedia!.isReaderSupported(extension))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("File Size To Large: ")
appendlong(size)
append(">")
appendint(fileData!.MAXIMAGEFILESIZE)
put(stringBuffer!.toString(), this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                        }
                            
this.processImageFiles()

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("File Size To Small: ")
appendlong(size)
append(">")
appendint(fileData!.MINIMAGEFILESIZE)
put(stringBuffer!.toString(), this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    validationInfo(stringBuffer: StringMaker, fileName: string, fileItemFieldName: string, size: number){
    //var stringBuffer = stringBuffer
    //var fileName = fileName
    //var fileItemFieldName = fileItemFieldName
    //var size = size

    var fileData: FileData = FileData.getInstance()!;
        
        


    
                        if(size > fileData!.MINIMAGEFILESIZE)
                        
                                    {
                                    
    
                        if(fileItemFieldName!.compareTo(BasicItemData.IMAGE) == 0)
                        
                                    {
                                    
    
                        if(size < fileData!.MAXIMAGEFILESIZE)
                        
                                    {
                                    
    
                        if(!StringValidationUtil.getInstance()!.isValidRequired(fileName, fileData!.MINLEN, fileData!.MAXLEN))
                        
                                    {
                                    append("FileName must be >")
appendint(fileData!.MINLEN)
append(" and <")
appendint(fileData!.MAXLEN)
append("<br/>")

                                    }
                                
                        else {
                            
    var pathUtil: PathUtil = PathUtil.getInstance()!;
        
        


    var extension: string = pathUtil!.getExtension(fileName)!;
        
        


    var uploadMedia: UploadMediaSingleton = UploadMediaSingleton.getInstance()!;
        
        


    
                        if(!uploadMedia!.isWriterSupported(extension) && !uploadMedia!.isReaderSupported(extension))
                        
                                    {
                                    append("Image type: ")
append(extension)
append(" not supported.<br />")

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            append("Image File Is To Large. ")
appendint(fileData!.MINIMAGEFILESIZE)
append(" < > ")
appendint(fileData!.MAXIMAGEFILESIZE)
append("<br/>")

                        }
                            

                                    }
                                

                                    }
                                
                        else {
                            append("Image File Is To Small. ")
appendint(fileData!.MINIMAGEFILESIZE)
append(" < > ")
appendint(fileData!.MAXIMAGEFILESIZE)
append("<br/>")

                        }
                            
}


}
                
            

