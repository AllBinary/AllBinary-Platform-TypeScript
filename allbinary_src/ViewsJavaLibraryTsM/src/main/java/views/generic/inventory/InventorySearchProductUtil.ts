
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../java/util/Vector.js";

    
import { BasicItemView } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js";

    
import { ItemInterface } from "../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { InventoryEntity } from "../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js";

    
import { InventoryEntityFactory } from "../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { DomDocumentHelper } from "../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SearchRequest } from "../../../org/allbinary/logic/control/search/SearchRequest.js";

    
import { AbeClientInformationInterface } from "../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { StoreTransformer } from "../../../org/allbinary/logic/visual/transform/StoreTransformer.js";

    
import { TransformDocumentInterface } from "../../../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js";

    
import { TransformStoreDocumentFactory } from "../../../org/allbinary/logic/visual/transform/data/TransformStoreDocumentFactory.js";

    
import { TransformInfoHttpSearch } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpSearch.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class InventorySearchProductUtil
            extends Object
         {
        

    private static readonly instance: InventorySearchProductUtil = new InventorySearchProductUtil();
        
        

    public static getInstance(): InventorySearchProductUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly ITEM_NOT_FOUND: string = "Item Not Found.";
        
        

                //@Throws(Error::class)
            
    public getProduct(abeClientInformation: AbeClientInformationInterface, searchRequest: SearchRequest, product: string): string{
    //var abeClientInformation = abeClientInformation
var searchRequest = searchRequest
var product = product

        try {
            
    var inventoryEntityInterface: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;
        
        
;
    

    var itemInterface: ItemInterface = inventoryEntityInterface!.getItem(product)!;
        
        
;
    

                        if(itemInterface != 
                                    null
                                )
                        
                                    {
                                    
    var viewDocumentInterface: TransformDocumentInterface = TransformStoreDocumentFactory.getInstance(searchRequest)!;
        
        
;
    
viewDocumentInterface!.getBaseNode()!.appendChild(new BasicItemView(itemInterface, new Vector()).
                            toXmlNode(viewDocumentInterface!.getDoc()));
    

    var success: string = DomDocumentHelper.toString(viewDocumentInterface!.getDoc())!;
        
        
;
    

    var outputStr: string = new StoreTransformer(abeClientInformation, new TransformInfoHttpSearch(searchRequest) as TransformInfoInterface).
                            translate(success)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outputStr;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ITEM_NOT_FOUND;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, "getProduct", e);
    

                                    }
                                



                            throw new Error("Failed to getProduct")
}

}


}
                
            

