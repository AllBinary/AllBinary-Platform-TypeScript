
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
import { StoreFrontFactory } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { BasicItemData } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { BasicItemValidation } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemValidation.js';
      //not GWT import const BasicItemValidation = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemValidation;

      
import { MoneyException } from '../../../org/allbinary/business/user/commerce/money/MoneyException.js';
      //not GWT import const MoneyException = globalThis.org.allbinary.business.user.commerce.money.MoneyException;

      
import { InventoryEntity } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
      //not GWT import const InventoryEntity = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntity;

      
import { InventoryEntityFactory } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
      //not GWT import const InventoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityFactory;

      
import { GLOBALS2 } from '../../../org/allbinary/globals/GLOBALS2.js';
      //not GWT import const GLOBALS2 = globalThis.org.allbinary.globals.GLOBALS2;

      
import { URLGLOBALS } from '../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
import { HttpFileUploadUtil } from '../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js';
      //not GWT import const HttpFileUploadUtil = globalThis.org.allbinary.logic.communication.http.file.upload.HttpFileUploadUtil;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ValidationComponentInterface } from '../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      //not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
import { AbFile } from '../../../org/allbinary/logic/io/file/AbFile.js';
      //not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { FileData } from '../../../org/allbinary/logic/io/file/FileData.js';
      //not GWT import const FileData = globalThis.org.allbinary.logic.io.file.FileData;

      
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not plain js import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { FileItem } from '../../../org/apache/commons/fileupload/FileItem.js';
      //not GWT import const FileItem = globalThis.org.apache.commons.fileupload.FileItem;

      
import { Document } from '../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InventoryItemView } from './InventoryItemView.js';
//not GWT import const  = globalThis.views.admin.inventory.InventoryItemView;

                
export class UpdateFileValidationView extends InventoryItemView implements ValidationComponentInterface {
        

    private static readonly UPDATEPRODUCT: string = CommonStrings.getInstance()!.UPDATE;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{

        try {
            
    var command: string = this.getRequestHashMap()!.get(GLOBALS2.ADMINCOMMAND) as string;;
    

                        if(command == 
                                    null
                                 || command.compareTo(UpdateFileValidationView.UPDATEPRODUCT) != 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Invalid AdminCommand=" +command, this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(new BasicItemValidation(this.itemInterface).isValid() == Boolean.FALSE)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("BasicItem is not valid", this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(storeFrontInterface!.getCurrentHostNamePath());
    
stringBuffer!.append(this.itemInterface!.getCategory());
    

    var fullCategory: string = stringBuffer!.toString()!;;
    

    var categoryFile: AbFile = AbFile.createAbFile(fullCategory)!;;
    

                        if(!categoryFile!.isDirectory())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Category Does Not Exist: " +fullCategory, this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var inventoryEntity: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;;
    

                        if(inventoryEntity!.getItem(this.itemInterface!.getId()) == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var anyType: any = this.getRequestHashMap()!.get(BasicItemData.IMAGE)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(anyType))
                        
                                    {
                                    
    var fileItem: FileItem = anyType as FileItem;;
    

    var size: number = fileItem!.getSize()!;;
    

    var fileName: string = fileItem!.getName()!;;
    
HttpFileUploadUtil.log(fileItem);
    

                        if(this.isValid(fileName, size) == Boolean.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.put("Exception in validation", this, this.commonStrings!.IS_VALID, e);
    

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



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public validationInfo(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

    var command: string = this.getRequestHashMap()!.get(GLOBALS2.ADMINCOMMAND) as string;;
    

                        if(command == 
                                    null
                                 || command.compareTo(UpdateFileValidationView.UPDATEPRODUCT) != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CommonSeps.getInstance()!.SPACE;
    

                                    }
                                
stringBuffer!.append(new BasicItemValidation(this.itemInterface).validationInfo());
    

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;;
    

    var fullCategory: string = URLGLOBALS.getWebappPath() as string +storeFrontInterface!.getCurrentHostNamePath() +this.itemInterface!.getCategory();;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Category: " +fullCategory, this, "validationInfo()");
    

                                    }
                                

        try {
            
                        if(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.getItem(this.itemInterface!.getId()) == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Item does not exist.<br>");
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Existing Item With MoneyException", this, "validationInfo()");
    

                                    }
                                
}


    var anyType: any = this.getRequestHashMap()!.get(BasicItemData.IMAGE)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(anyType))
                        
                                    {
                                    
    var fileItem: FileItem = anyType as FileItem;;
    

    var size: number = fileItem!.getSize()!;;
    

    var fileName: string = fileItem!.getName()!;;
    

    var fileItemFieldName: string = fileItem!.getFieldName()!;;
    
this.validationInfo(stringBuffer, fileName, fileItemFieldName, size);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


                //@Throws(Exception.constructor)
            
    isValid(fileName: string, size: number): Boolean{

    var fileData: FileData = FileData.getInstance()!;;
    

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
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("File Size To Large: ");
    
stringBuffer!.appendlong(size);
    
stringBuffer!.append(">");
    
stringBuffer!.appendint(fileData!.MAXIMAGEFILESIZE);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                        }
                            
this.processImageFiles();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    validationInfo(stringBuffer: StringMaker, fileName: string, fileItemFieldName: string, size: number){

    var fileData: FileData = FileData.getInstance()!;;
    

                        if(size > fileData!.MINIMAGEFILESIZE)
                        
                                    {
                                    
                        if(fileItemFieldName!.compareTo(BasicItemData.IMAGE) == 0)
                        
                                    {
                                    
                        if(size < fileData!.MAXIMAGEFILESIZE)
                        
                                    {
                                    
                        if(!StringValidationUtil.getInstance()!.isValidRequired(fileName, fileData!.MINLEN, fileData!.MAXLEN))
                        
                                    {
                                    stringBuffer!.append("FileName must be >");
    
stringBuffer!.appendint(fileData!.MINLEN);
    
stringBuffer!.append("and <");
    
stringBuffer!.appendint(fileData!.MAXLEN);
    
stringBuffer!.append("<br />");
    

                                    }
                                

                                    }
                                
                        else {
                            stringBuffer!.append("Image File Is Not The Right Size. ");
    
stringBuffer!.appendint(fileData!.MINIMAGEFILESIZE);
    
stringBuffer!.append("< > ");
    
stringBuffer!.appendint(fileData!.MAXIMAGEFILESIZE);
    
stringBuffer!.append("<br />");
    

                        }
                            

                                    }
                                

                                    }
                                
}


}



