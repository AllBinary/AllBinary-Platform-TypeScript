
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

    
import { InventoryEntity } from "../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js";

    
import { InventoryEntityFactory } from "../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { GLOBALS2 } from "../../../org/allbinary/globals/GLOBALS2.js";

    
import { URLGLOBALS } from "../../../org/allbinary/globals/URLGLOBALS.js";

    
import { HttpFileUploadUtil } from "../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { AbFile } from "../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileData } from "../../../org/allbinary/logic/io/file/FileData.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { FileItem } from "../../../org/apache/commons/fileupload/FileItem.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    

export class UpdateFileValidationView extends InventoryItemView
                , ValidationComponentInterface {
        

    private static readonly UPDATEPRODUCT: string = CommonStrings.getInstance()!.UPDATE;
        
        

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
        
        


                        if(command == 
                                    null
                                 || command.compareTo(UPDATEPRODUCT) != 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Invalid AdminCommand=" +command, this, commonStrings!.IS_VALID)

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
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(URLGLOBALS.getWebappPath())
stringBuffer!.append(storeFrontInterface!.getCurrentHostNamePath())
stringBuffer!.append(this.itemInterface!.getCategory())

    var fullCategory: string = stringBuffer!.toString()!;
        
        


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
                                

    var inventoryEntity: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;
        
        


                        if(inventoryEntity!.getItem(this.itemInterface!.getId()) == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var anyType: any = {} = this.getRequestHashMap()!.get(BasicItemData.IMAGE)!;
        
        


                        if(HttpFileUploadUtil.getInstance()!.isValid(anyType))
                        
                                    {
                                    
    var fileItem: FileItem = anyType as FileItem;
        
        


    var size: number = fileItem!.getSize()!;
        
        


    var fileName: string = fileItem!.getName()!;
        
        

HttpFileUploadUtil.log(fileItem)

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

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
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


                //@Throws(Error::class)
            
    public validationInfo(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var command: string = this.getRequestHashMap()!.get(GLOBALS2.ADMINCOMMAND) as String;
        
        


                        if(command == 
                                    null
                                 || command.compareTo(UPDATEPRODUCT) != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CommonSeps.getInstance()!.SPACE;
    

                                    }
                                
stringBuffer!.append(BasicItemValidation(this.itemInterface).
                            validationInfo())

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;
        
        


    var fullCategory: string = URLGLOBALS.getWebappPath() as String +storeFrontInterface!.getCurrentHostNamePath() +this.itemInterface!.getCategory();
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Category: " +fullCategory, this, "validationInfo()")

                                    }
                                

        try {
            
                        if(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.getItem(this.itemInterface!.getId()) == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Item does not exist.<br>")

                                    }
                                
} catch(e: MoneyException)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Existing Item With MoneyException", this, "validationInfo()")

                                    }
                                
}


    var anyType: any = {} = this.getRequestHashMap()!.get(BasicItemData.IMAGE)!;
        
        


                        if(HttpFileUploadUtil.getInstance()!.isValid(anyType))
                        
                                    {
                                    
    var fileItem: FileItem = anyType as FileItem;
        
        


    var size: number = fileItem!.getSize()!;
        
        


    var fileName: string = fileItem!.getName()!;
        
        


    var fileItemFieldName: string = fileItem!.getFieldName()!;
        
        

this.this.validationInfo(stringBuffer, fileName, fileItemFieldName, size)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


                //@Throws(Error::class)
            
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
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("File Size To Large: ")
stringBuffer!.appendlong(size)
stringBuffer!.append(">")
stringBuffer!.appendint(fileData!.MAXIMAGEFILESIZE)
logUtil!.put(stringBuffer!.toString(), this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                        }
                            
this.this.processImageFiles()

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    validationInfo(stringBuffer: StringMaker, fileName: string, fileItemFieldName: string, size: number){
var stringBuffer = stringBuffer
var fileName = fileName
var fileItemFieldName = fileItemFieldName
var size = size

    var fileData: FileData = FileData.getInstance()!;
        
        


                        if(size > fileData!.MINIMAGEFILESIZE)
                        
                                    {
                                    
                        if(fileItemFieldName!.compareTo(BasicItemData.IMAGE) == 0)
                        
                                    {
                                    
                        if(size < fileData!.MAXIMAGEFILESIZE)
                        
                                    {
                                    
                        if(!StringValidationUtil.getInstance()!.isValidRequired(fileName, fileData!.MINLEN, fileData!.MAXLEN))
                        
                                    {
                                    stringBuffer!.append("FileName must be >")
stringBuffer!.appendint(fileData!.MINLEN)
stringBuffer!.append("and <")
stringBuffer!.appendint(fileData!.MAXLEN)
stringBuffer!.append("<br />")

                                    }
                                

                                    }
                                
                        else {
                            stringBuffer!.append("Image File Is Not The Right Size. ")
stringBuffer!.appendint(fileData!.MINIMAGEFILESIZE)
stringBuffer!.append("< > ")
stringBuffer!.appendint(fileData!.MAXIMAGEFILESIZE)
stringBuffer!.append("<br />")

                        }
                            

                                    }
                                

                                    }
                                
}


}
                
            

