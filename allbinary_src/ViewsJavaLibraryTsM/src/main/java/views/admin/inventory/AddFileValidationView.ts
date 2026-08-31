
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

      
import { InventoryEntityFactory } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
      //not GWT import const InventoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityFactory;

      
import { GLOBALS2 } from '../../../org/allbinary/globals/GLOBALS2.js';
      //not GWT import const GLOBALS2 = globalThis.org.allbinary.globals.GLOBALS2;

      
import { URLGLOBALS } from '../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
import { HttpFileUploadUtil } from '../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js';
      //not GWT import const HttpFileUploadUtil = globalThis.org.allbinary.logic.communication.http.file.upload.HttpFileUploadUtil;

      
import { UploadMediaSingleton } from '../../../org/allbinary/logic/communication/http/file/upload/media/UploadMediaSingleton.js';
      //not GWT import const UploadMediaSingleton = globalThis.org.allbinary.logic.communication.http.file.upload.media.UploadMediaSingleton;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ValidationComponentInterface } from '../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      //not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
import { AbFile } from '../../../org/allbinary/logic/io/file/AbFile.js';
      //not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { FileData } from '../../../org/allbinary/logic/io/file/FileData.js';
      //not GWT import const FileData = globalThis.org.allbinary.logic.io.file.FileData;

      
//not plain js import { AbPathData } from '../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
import { PathUtil } from '../../../org/allbinary/logic/io/path/PathUtil.js';
      //not GWT import const PathUtil = globalThis.org.allbinary.logic.io.path.PathUtil;

      
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { FileItem } from '../../../org/apache/commons/fileupload/FileItem.js';
      //not GWT import const FileItem = globalThis.org.apache.commons.fileupload.FileItem;

      
import { Document } from '../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InventoryItemView } from './InventoryItemView.js';

export class AddFileValidationView extends InventoryItemView implements ValidationComponentInterface {
        

    private static readonly ADDPRODUCT: string = "Add Product";

    private static readonly NEXTSTEP: string = "Next Step";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{

        try {
            
    var command: string = this.getRequestHashMap()!.get(GLOBALS2.ADMINCOMMAND) as string;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(command) || (command.compareTo(AddFileValidationView.ADDPRODUCT) != 0 && command.compareTo(NEXTSTEP) != 0))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Invalid AdminCommand: ");
    
stringBuffer!.append(command);
    
stringBuffer!.append(" must be: ");
    
stringBuffer!.append(AddFileValidationView.ADDPRODUCT);
    
stringBuffer!.append(" or ");
    
stringBuffer!.append(AddFileValidationView.NEXTSTEP);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var basicItemValidation: BasicItemValidation = new BasicItemValidation(this.itemInterface);;
    

                        if(basicItemValidation!.isValid() == Boolean.FALSE)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(basicItemValidation!.validationInfo(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;;
    
this.itemInterface!.setCategory(storeFrontInterface!.getCategoryPath() +this.itemInterface!.getCategory());
    

    var fullCategory: string = new StringMaker().append(URLGLOBALS.getWebappPath())!.append(storeFrontInterface!.getCurrentHostNamePath())!.append(this.itemInterface!.getCategory())!.toString()!;;
    

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
                                

                        if(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.getItem(this.itemInterface!.getId()) != 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Item Already Exists", this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var imageFileItemObject: any = this.getRequestHashMap()!.get(BasicItemData.IMAGE)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(imageFileItemObject))
                        
                                    {
                                    
    var fileItem: FileItem = imageFileItemObject as FileItem;;
    

    var fileName: string = fileItem!.getName()!;;
    

    var size: number = fileItem!.getSize()!;;
    
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

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
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


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    

    var command: string = this.getRequestHashMap()!.get(GLOBALS2.ADMINCOMMAND) as string;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(command) || (command.compareTo(AddFileValidationView.ADDPRODUCT) != 0 && command.compareTo(NEXTSTEP) != 0))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                                    }
                                

    var basicItemValidation: BasicItemValidation = new BasicItemValidation(this.itemInterface);;
    

                        if(basicItemValidation!.isValid() == Boolean.FALSE)
                        
                                    {
                                    stringBuffer!.append(basicItemValidation!.validationInfo());
    
stringBuffer!.append("<br/>");
    

                                    }
                                

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;;
    

    var fullCategory: string = new StringMaker().append(URLGLOBALS.getWebappPath())!.append(storeFrontInterface!.getCurrentHostNamePath())!.append(this.itemInterface!.getCategory())!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Category: " +fullCategory, this, "validationInfo()");
    

                                    }
                                

    var categoryFile: AbFile = AbFile.createAbFile(fullCategory)!;;
    

                        if(!categoryFile!.isDirectory())
                        
                                    {
                                    stringBuffer!.append("Category ");
    
stringBuffer!.append(this.itemInterface!.getCategory());
    
stringBuffer!.append(" does not exist.<br />");
    

                                    }
                                

        try {
            
                        if(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.getItem(this.itemInterface!.getId()) != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Id is already in use. Refresh the page for a valid id.<br/>");
    

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
    

    var fileName: string = fileItem!.getName()!;;
    

    var fileItemFieldName: string = fileItem!.getFieldName()!;;
    

    var size: number = fileItem!.getSize()!;;
    
this.validationInfo(stringBuffer, fileName, fileItemFieldName, size);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Getting Validation Info";
    
}

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
                                
                        else {
                            
    var pathData: AbPathData = AbPathData.getInstance()!;;
    

    var extension: string = pathData!.getExtension(fileName)!;;
    

    var uploadMedia: UploadMediaSingleton = UploadMediaSingleton.getInstance()!;;
    

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
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("File Size To Small: ");
    
stringBuffer!.appendlong(size);
    
stringBuffer!.append(">");
    
stringBuffer!.appendint(fileData!.MINIMAGEFILESIZE);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

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
    
stringBuffer!.append(" and <");
    
stringBuffer!.appendint(fileData!.MAXLEN);
    
stringBuffer!.append("<br/>");
    

                                    }
                                
                        else {
                            
    var pathData: AbPathData = AbPathData.getInstance()!;;
    

    var extension: string = pathData!.getExtension(fileName)!;;
    

    var uploadMedia: UploadMediaSingleton = UploadMediaSingleton.getInstance()!;;
    

                        if(!uploadMedia!.isWriterSupported(extension) && !uploadMedia!.isReaderSupported(extension))
                        
                                    {
                                    stringBuffer!.append("Image type: ");
    
stringBuffer!.append(extension);
    
stringBuffer!.append(" not supported.<br />");
    

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            stringBuffer!.append("Image File Is To Large. ");
    
stringBuffer!.appendint(fileData!.MINIMAGEFILESIZE);
    
stringBuffer!.append(" < > ");
    
stringBuffer!.appendint(fileData!.MAXIMAGEFILESIZE);
    
stringBuffer!.append("<br/>");
    

                        }
                            

                                    }
                                

                                    }
                                
                        else {
                            stringBuffer!.append("Image File Is To Small. ");
    
stringBuffer!.appendint(fileData!.MINIMAGEFILESIZE);
    
stringBuffer!.append(" < > ");
    
stringBuffer!.appendint(fileData!.MAXIMAGEFILESIZE);
    
stringBuffer!.append("<br/>");
    

                        }
                            
}


}



