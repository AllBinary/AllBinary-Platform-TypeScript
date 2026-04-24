
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

    
import { Vector } from "../../../../java/util/Vector.js";

    
import { BasicItemData } from "../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { DownloadItemData } from "../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadItemData.js";

    
import { InventoryEntity } from "../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js";

    
import { InventoryEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { DownloadItemsEntity } from "../../../../org/allbinary/data/tables/user/commerce/inventory/item/downloads/DownloadItemsEntity.js";

    
import { DownloadItemsEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/inventory/item/downloads/DownloadItemsEntityFactory.js";

    
import { RequestParams } from "../../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { ValidationComponentInterface } from "../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DownloadableInventoryItemView } from "./DownloadableInventoryItemView.js";

export class DeleteFileValidationView extends DownloadableInventoryItemView implements ValidationComponentInterface {
        

    private downloadItemId: string
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
                        
                                    {
                                    


                            throw new Error("No Request Params Found")

                                    }
                                
this.id= hashMap!.get(BasicItemData.ID); as String;
    
this.downloadItemId= hashMap!.get(DownloadItemData.ID); as String;
    
}


    public isValid(): Boolean{

        try {
            
                        if(id == 
                                    null
                                 || !StringValidationUtil.getInstance()!.isNumber(this.id);)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var inventoryEntity: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;
        
        
;
    
this.itemInterface= inventoryEntity!.getItem(this.id);
    

                        if(this.itemInterface == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var downloadItemsEntity: DownloadItemsEntity = DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!;
        
        
;
    

    var vector: Vector = downloadItemsEntity!.getForItem(this.id, this.downloadItemId)!;
        
        
;
    

                        if(vector.length != 1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {



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
        
        
;
    

                        if(id == 
                                    null
                                 || !StringValidationUtil.getInstance()!.isNumber(this.id);)
                        
                                    {
                                    stringBuffer!.append("Id is not valid.<br />");
    

                                    }
                                

                        if(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.getItem(this.id) == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Item does not exist.<br />");
    

                                    }
                                

    var downloadItemsEntity: DownloadItemsEntity = DownloadItemsEntityFactory.getInstance()!.getDownloadItemsEntityInstance()!;
        
        
;
    

    var vector: Vector = downloadItemsEntity!.getForItem(this.id, this.downloadItemId)!;
        
        
;
    

                        if(vector.length == 0)
                        
                                    {
                                    stringBuffer!.append("DownloadItem does not exist.<br />");
    

                                    }
                                

                        if(vector.length > 1)
                        
                                    {
                                    stringBuffer!.append("To Many DownloadItems exist.<br />");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Unkown Validation Error.<br />";
    
}

}


}
                
            

