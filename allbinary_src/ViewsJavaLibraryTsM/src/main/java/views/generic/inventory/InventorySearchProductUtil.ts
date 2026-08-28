
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
        



            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
//not game specific package import { Vector } from '../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { BasicItemView } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js';
      const BasicItemView = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemView;

      
//not game specific package import { ItemInterface } from '../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
      const ItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemInterface;

      
//not game specific package import { InventoryEntity } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
      const InventoryEntity = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntity;

      
//not game specific package import { InventoryEntityFactory } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
      const InventoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityFactory;

      
//not game specific package import { DomDocumentHelper } from '../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { SearchRequest } from '../../../org/allbinary/logic/control/search/SearchRequest.js';
      const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
//not game specific package import { AbeClientInformationInterface } from '../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { StoreTransformer } from '../../../org/allbinary/logic/visual/transform/StoreTransformer.js';
      const StoreTransformer = globalThis.org.allbinary.logic.visual.transform.StoreTransformer;

      
//not game specific package import { TransformDocumentInterface } from '../../../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js';
      const TransformDocumentInterface = globalThis.org.allbinary.logic.visual.transform.data.TransformDocumentInterface;

      
//not game specific package import { TransformStoreDocumentFactory } from '../../../org/allbinary/logic/visual/transform/data/TransformStoreDocumentFactory.js';
      const TransformStoreDocumentFactory = globalThis.org.allbinary.logic.visual.transform.data.TransformStoreDocumentFactory;

      
//not game specific package import { TransformInfoHttpSearch } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpSearch.js';
      const TransformInfoHttpSearch = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpSearch;

      
//not game specific package import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InventorySearchProductUtil
            extends Object
         {
        

    private static readonly instance: InventorySearchProductUtil = new InventorySearchProductUtil();

    public static getInstance(): InventorySearchProductUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InventorySearchProductUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly ITEM_NOT_FOUND: string = "Item Not Found.";

                //@Throws(Exception.constructor)
            
    public getProduct(abeClientInformation: AbeClientInformationInterface, searchRequest: SearchRequest, product: string): string{

        try {
            
    var inventoryEntityInterface: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;;
    

    var itemInterface: ItemInterface = inventoryEntityInterface!.getItem(product)!;;
    

                        if(itemInterface != 
                                    null
                                )
                        
                                    {
                                    
    var viewDocumentInterface: TransformDocumentInterface = TransformStoreDocumentFactory.getInstance(searchRequest)!;;
    
viewDocumentInterface!.getBaseNode()!.appendChild(new BasicItemView(itemInterface, new Vector()).toXmlNode(viewDocumentInterface!.getDoc()));
    

    var success: string = DomDocumentHelper.toString(viewDocumentInterface!.getDoc())!;;
    

    var outputStr: string = new StoreTransformer(abeClientInformation, new TransformInfoHttpSearch(searchRequest) as TransformInfoInterface).translate(success)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outputStr;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ITEM_NOT_FOUND;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "getProduct", e);
    

                                    }
                                



                            throw new Exception("Failed to getProduct");
                    
}

}


}



