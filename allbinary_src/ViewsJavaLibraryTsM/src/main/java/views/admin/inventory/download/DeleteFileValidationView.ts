
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
        
import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { BasicItemData } from '../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData

import { DownloadItemData } from '../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadItemData.js';
//not GWT import const DownloadItemData

import { InventoryEntity } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
//not GWT import const InventoryEntity

import { InventoryEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
//not GWT import const InventoryEntityFactory

import { DownloadItemsEntity } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/downloads/DownloadItemsEntity.js';
//not GWT import const DownloadItemsEntity

import { DownloadItemsEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/downloads/DownloadItemsEntityFactory.js';
//not GWT import const DownloadItemsEntityFactory

import { RequestParams } from '../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
//not GWT import const RequestParams

import { ValidationComponentInterface } from '../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
//not GWT import const ValidationComponentInterface

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

import { Document } from '../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DownloadableInventoryItemView } from './DownloadableInventoryItemView.js';
//sameFolderImports - not GWT import - same folder const DownloadableInventoryItemView

export class DeleteFileValidationView extends DownloadableInventoryItemView implements ValidationComponentInterface {
        

    private downloadItemId: string;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface, StringUtil.getInstance()!.EMPTY_STRING);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.getFormData();
    
}


                //@Throws(Exception.constructor)
            
    public getFormData(){

    let hashMap: HashMap<any, any> = new RequestParams(request).toHashMap()!;;
    

                        if(hashMap == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("No Request Params Found");
                    

                                    }
                                
this.id= hashMap!.get(basicItemData!.ID) as string;
    
this.downloadItemId= hashMap!.get(DownloadItemData.ID) as string;
    
}


    public isValid(): Boolean{

 try { 
                        if(id == 
                                    null
                                 || !StringValidationUtil.getInstance()!.isNumber(this.id))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    let inventoryEntity: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;;
    
this.itemInterface= inventoryEntity!.getItem(this.id);
    

                        if(this.itemInterface == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    let downloadItemsEntity: DownloadItemsEntity = DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!;;
    

    let vector: BasicArrayList = downloadItemsEntity!.getForItem(this.id, this.downloadItemId)!;;
    

                        if(vector.size() != 1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



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


    public validationInfo(): string{

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    

                        if(this.id == 
                                    null
                                 || !StringValidationUtil.getInstance()!.isNumber(this.id))
                        
                                    {
                                    stringBuffer!.append("Id is not valid.<br />");
    

                                    }
                                

                        if(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.getItem(this.id) == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Item does not exist.<br />");
    

                                    }
                                

    let downloadItemsEntity: DownloadItemsEntity = DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!;;
    

    let vector: BasicArrayList = downloadItemsEntity!.getForItem(this.id, this.downloadItemId)!;;
    

                        if(vector.size() == 0)
                        
                                    {
                                    stringBuffer!.append("DownloadItem does not exist.<br />");
    

                                    }
                                

                        if(vector.size() > 1)
                        
                                    {
                                    stringBuffer!.append("To Many DownloadItems exist.<br />");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Unkown Validation Error.<br />";
    

 }
   }
 
}


}

