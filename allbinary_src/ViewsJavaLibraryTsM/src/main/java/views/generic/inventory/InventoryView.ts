
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
        
            import { Integer } from '../../../java/lang/Integer.js';
        
import { Vector } from '../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { StoreFrontFactory } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { InventoryData } from '../../../org/allbinary/business/user/commerce/inventory/InventoryData.js';
      //not GWT import const InventoryData = globalThis.org.allbinary.business.user.commerce.inventory.InventoryData;

      
import { BasicItemView } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js';
      //not GWT import const BasicItemView = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemView;

      
import { ItemInterface } from '../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
      //not GWT import const ItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemInterface;

      
import { InventoryEntity } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
      //not GWT import const InventoryEntity = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntity;

      
import { InventoryEntityFactory } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
      //not GWT import const InventoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityFactory;

      
import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { SearchData } from '../../../org/allbinary/logic/control/search/SearchData.js';
      //not GWT import const SearchData = globalThis.org.allbinary.logic.control.search.SearchData;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      //not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InventoryView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Starting", this, "toXmlNode");
    

                                    }
                                

    var inventoryEntityInterface: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;;
    

    var inventoryNode: Node = document.createElement(InventoryData.INVENTORY)!;;
    

    var itemVector: Vector = inventoryEntityInterface!.getItems(StoreFrontFactory.getInstance(this.getTransformInfoInterface()!.getStoreName()))!;;
    
inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(document, SearchData.TOTAL_NUMBER_ITEMS_ON_THIS_PAGE, new Integer(itemVector!.length).toString()));
    

    var size: number = itemVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var itemInterface: ItemInterface = itemVector!.get(index) as ItemInterface;;
    

                        if(itemInterface != 
                                    null
                                )
                        
                                    {
                                    
    var node: Node = new BasicItemView(itemInterface, new Vector()).toXmlNode(document)!;;
    
inventoryNode!.appendChild(node);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Inventory", this, "toXmlNode");
    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inventoryNode;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                            throw e;
                    
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view Inventory";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



