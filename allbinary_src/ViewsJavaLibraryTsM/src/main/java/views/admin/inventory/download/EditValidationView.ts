
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
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { BasicItemData } from '../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { DownloadItemData } from '../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadItemData.js';
      //not GWT import const DownloadItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.download.DownloadItemData;

      
import { DownloadableItem } from '../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js';
      //not GWT import const DownloadableItem = globalThis.org.allbinary.business.user.commerce.inventory.item.download.DownloadableItem;

      
import { MoneyException } from '../../../../org/allbinary/business/user/commerce/money/MoneyException.js';
      //not GWT import const MoneyException = globalThis.org.allbinary.business.user.commerce.money.MoneyException;

      
import { InventoryEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
      //not GWT import const InventoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityFactory;

      
import { DownloadItemsEntity } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/downloads/DownloadItemsEntity.js';
      //not GWT import const DownloadItemsEntity = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.downloads.DownloadItemsEntity;

      
import { DownloadItemsEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/downloads/DownloadItemsEntityFactory.js';
      //not GWT import const DownloadItemsEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.downloads.DownloadItemsEntityFactory;

      
import { RequestParams } from '../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      //not GWT import const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
import { ValidationComponentInterface } from '../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      //not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DownloadableInventoryItemView } from './DownloadableInventoryItemView.js';

export class EditValidationView extends DownloadableInventoryItemView implements ValidationComponentInterface {
        

    private downloadItemId: string;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface, StringUtil.getInstance()!.EMPTY_STRING);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.getFormData();
    
}


                //@Throws(Exception.constructor)
            
    public getFormData(){

    var hashMap: HashMap<any, any> = new RequestParams(request).toHashMap()!;;
    

                        if(hashMap == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("No Request Params Found");
                    

                                    }
                                
this.id= hashMap!.get(BasicItemData.ID) as string;
    
this.downloadItemId= hashMap!.get(DownloadItemData.ID) as string;
    
}


                //@Throws(Exception.constructor)
            
    public isValid(): Boolean{

                        if(id == 
                                    null
                                 || !StringValidationUtil.getInstance()!.isNumber(this.id))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
this.itemInterface= InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.getItem(this.id);
    

                        if(this.itemInterface == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var downloadable: number = Integer.parseInt(this.itemInterface!.getDownloads())!;;
    

                        if(downloadable != 0)
                        
                                    {
                                    
    var downloadItemsEntity: DownloadItemsEntity = DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!;;
    

    var vector: Vector = downloadItemsEntity!.getForItem(this.id, this.downloadItemId)!;;
    

                        if(vector.length != 1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
this.downloadableItem= vector.get(0) as DownloadableItem;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(MoneyException.constructor)
            
    public validationInfo(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

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
                                

    var downloadable: number = Integer.parseInt(this.itemInterface!.getDownloads())!;;
    

                        if(downloadable != 0)
                        
                                    {
                                    
                        if(this.downloadableItem == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("DownloadableItem does not exist for item.<br />");
    

                                    }
                                

                                    }
                                
                        else {
                            stringBuffer!.append("Item should not have DownloadableItem.<br />");
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



