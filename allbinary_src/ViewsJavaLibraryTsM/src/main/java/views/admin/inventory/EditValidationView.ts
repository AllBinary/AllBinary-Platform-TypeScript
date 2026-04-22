
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
        



            import { Integer } from "../../../java/lang/Integer.js";
        
import { HashMap } from "../../../java/util/HashMap.js";

    
import { BasicItemData } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { MoneyException } from "../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    
import { InventoryEntityFactory } from "../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { DownloadItemsEntity } from "../../../org/allbinary/data/tables/user/commerce/inventory/item/downloads/DownloadItemsEntity.js";

    
import { DownloadItemsEntityFactory } from "../../../org/allbinary/data/tables/user/commerce/inventory/item/downloads/DownloadItemsEntityFactory.js";

    
import { RequestParams } from "../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { ValidationComponentInterface } from "../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { InventoryItemView } from "./InventoryItemView.js";

export class EditValidationView extends InventoryItemView implements ValidationComponentInterface {
        

    private id: string
public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface, StringUtil.getInstance()!.EMPTY_STRING);
                    var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.getFormData();
    
}


                //@Throws(Error::class)
            
    public getFormData(){

    var hashMap: HashMap<any, any> = new RequestParams(request).
                            toHashMap()!;
        
        
;
    

                        if(hashMap == 
                                    null
                                )
                        
                                    throw new Error("No Request Params Found")
this.id= hashMap!.get(BasicItemData.ID);

                         as String;
    
}


                //@Throws(Error::class)
            
    public isValid(): Boolean{

                        if(this.id == 
                                    null
                                 || !StringValidationUtil.getInstance()!.isNumber(this.id);

                        )
                        
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
                                

    var downloadable: number = Integer.parseInt(this.itemInterface!.getDownloads())!;
        
        
;
    

                        if(downloadable != 0)
                        
                                    {
                                    
    var downloadItemsEntity: DownloadItemsEntity = DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!;
        
        
;
    
this.downloadableItemVector= downloadItemsEntity!.getForItem(this.itemInterface!.getId());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
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


                //@Throws(MoneyException::class)
            
    public validationInfo(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(this.id == 
                                    null
                                 || !StringValidationUtil.getInstance()!.isNumber(this.id);

                        )
                        
                                    {
                                    stringBuffer!.append("Id is not valid.<br />");
    

                                    }
                                

                        if(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.getItem(this.id) == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Item does not exist.<br />");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

