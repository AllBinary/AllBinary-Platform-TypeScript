
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
//not GWT import const StoreFrontFactory

import { StoreFrontInterface } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { BasicItemData } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData

import { BasicItemValidation } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemValidation.js';
//not GWT import const BasicItemValidation

import { MoneyException } from '../../../org/allbinary/business/user/commerce/money/MoneyException.js';
//not GWT import const MoneyException

import { InventoryEntity } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
//not GWT import const InventoryEntity

import { InventoryEntityFactory } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
//not GWT import const InventoryEntityFactory

import { GLOBALS2 } from '../../../org/allbinary/globals/GLOBALS2.js';
//not GWT import const GLOBALS2

import { URLGLOBALS } from '../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

import { HttpFileUploadUtil } from '../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js';
//not GWT import const HttpFileUploadUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { ValidationComponentInterface } from '../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
//not GWT import const ValidationComponentInterface

import { AbFile } from '../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { FileData } from '../../../org/allbinary/logic/io/file/FileData.js';
//not GWT import const FileData

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { FileItem } from '../../../org/apache/commons/fileupload/FileItem.js';
//not GWT import const FileItem

import { Document } from '../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InventoryItemView } from './InventoryItemView.js';
//not GWT import - same folder const InventoryItemView

export class UpdateFileValidationView extends InventoryItemView implements ValidationComponentInterface {
        

    private static readonly UPDATEPRODUCT: string = CommonStrings.getInstance()!.UPDATE;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

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
    

                        if(command == 
                                    null
                                 || command.compareTo(UpdateFileValidationView.UPDATEPRODUCT) != 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Invalid AdminCommand=" +command, this, this.commonStrings!.IS_VALID);
    

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
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(storeFrontInterface!.getCurrentHostNamePath());
    
stringBuffer!.append(this.itemInterface!.getCategory());
    

    let fullCategory: string = stringBuffer!.toString()!;;
    

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
                                

    let inventoryEntity: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;;
    

                        if(inventoryEntity!.getItem(this.itemInterface!.getId()) == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    let anyType: any = this.getRequestHashMap()!.get(basicItemData!.IMAGE)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(anyType))
                        
                                    {
                                    
    let fileItem: FileItem = anyType as FileItem;;
    

    let size: number = fileItem!.getSize()!;;
    

    let fileName: string = fileItem!.getName()!;;
    
HttpFileUploadUtil.log(fileItem);
    

                        if(this.isValid(fileName, size) == false)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
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
   
    if (args.length === 4 && typeof args[1] === 'string' && typeof args[2] === 'string' && typeof args[3] === 'number') return this.validationInfo$overload2(args[0], args[1], args[2], args[3]);
   
   throw new TypeError('No matching overload: validationInfo'); }
  
                //@Throws(Exception.constructor)
            
    public validationInfo$overload1(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

    let command: string = this.getRequestHashMap()!.get(GLOBALS2.ADMINCOMMAND) as string;;
    

                        if(command == 
                                    null
                                 || command.compareTo(UpdateFileValidationView.UPDATEPRODUCT) != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CommonSeps.getInstance()!.SPACE;
    

                                    }
                                
stringBuffer!.append(new BasicItemValidation(this.itemInterface).validationInfo());
    

    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;;
    

    let fullCategory: string = URLGLOBALS.getWebappPath() as string +storeFrontInterface!.getCurrentHostNamePath() +this.itemInterface!.getCategory();;
    

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
                                
 }
 catch (caught: any) {
 if (caught instanceof MoneyException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Existing Item With MoneyException", this, "validationInfo()");
    

                                    }
                                

 }
  else { throw caught; } }
 

    let anyType: any = this.getRequestHashMap()!.get(basicItemData!.IMAGE)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(anyType))
                        
                                    {
                                    
    let fileItem: FileItem = anyType as FileItem;;
    

    let size: number = fileItem!.getSize()!;;
    

    let fileName: string = fileItem!.getName()!;;
    

    let fileItemFieldName: string = fileItem!.getFieldName()!;;
    
this.validationInfo(stringBuffer, fileName, fileItemFieldName, size);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


                //@Throws(Exception.constructor)
            
    isValid$overload2(fileName: string, size: number): Boolean{

    let fileData: FileData = FileData.getInstance()!;;
    

                        if(size > fileData!.MINIMAGEFILESIZE)
                        
                                    {
                                    
                        if(size < fileData!.MAXIMAGEFILESIZE)
                        
                                    {
                                    
                        if(!StringValidationUtil.getInstance()!.isValidRequired(fileName, fileData!.MINLEN, fileData!.MAXLEN))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("File Size To Large: ");
    
stringBuffer!.appendlong(size);
    
stringBuffer!.append(">");
    
stringBuffer!.appendint(fileData!.MAXIMAGEFILESIZE);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
this.processImageFiles();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    validationInfo$overload2(stringBuffer: StringMaker, fileName: string, fileItemFieldName: string, size: number){

    let fileData: FileData = FileData.getInstance()!;;
    

                        if(size > fileData!.MINIMAGEFILESIZE)
                        
                                    {
                                    
                        if(fileItemFieldName!.compareTo(basicItemData!.IMAGE) == 0)
                        
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

