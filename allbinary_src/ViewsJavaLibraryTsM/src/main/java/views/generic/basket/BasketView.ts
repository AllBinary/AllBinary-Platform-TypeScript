
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
        
import { HashMap } from '../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Set } from '../../../java/util/Set.js';
//not GWT import const Set = globalThis.java.util.Set;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { HttpServletRequest } from '../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { BasketData } from '../../../org/allbinary/business/user/commerce/inventory/basket/BasketData.js';
//not GWT import const BasketData = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketData;

      
import { BasketInterface } from '../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js';
//not GWT import const BasketInterface = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketInterface;

      
import { BasicItemView } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js';
//not GWT import const BasicItemView = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemView;

      
import { ItemInterface } from '../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
//not GWT import const ItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemInterface;

      
import { Money } from '../../../org/allbinary/business/user/commerce/money/Money.js';
//not GWT import const Money = globalThis.org.allbinary.business.user.commerce.money.Money;

      
import { InventoryEntity } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
//not GWT import const InventoryEntity = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntity;

      
import { InventoryEntityFactory } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
//not GWT import const InventoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityFactory;

      
import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { LogUtil } 
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
        
export class BasketView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly request: HttpServletRequest;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.request= this.getPageContext()!.getRequest() as HttpServletRequest;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

        try {
            
    var inventoryEntity: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;;
    

    var basketInterface: BasketInterface = this.getWeblisketSession()!.getOrder()!.getBasket()!;;
    

    var basketNode: Node = document.createElement(BasketData.BASKET)!;;
    

    var itemsAndNumberInBasket: HashMap<any, any> = basketInterface!.getItems()!;;
    

    var numberOfResults: number = 1;;
    

    var items: Set = itemsAndNumberInBasket!.keySet()!;;
    

    var productArray: any[] = items.toArray()!;;
    

    var size: number = productArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var product: string = .toCharArray();;
    

    var itemInterface: ItemInterface = inventoryEntity!.getItem(product)!;;
    

                        if(itemInterface != 
                                    null
                                )
                        
                                    {
                                    
    var basicItemView: BasicItemView = new BasicItemView(itemInterface, new BasicArrayListD());;
    

    var node: Node = basicItemView!.toXmlNode(document)!;;
    

    var numberInBasket: string = basketInterface!.getNumberOf(product)!.toString()!;;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, BasketData.ITEMTOTALINBASKET, numberInBasket));
    

    var itemPrice: Money = itemInterface!.getPrice()!;;
    

    var itemTotal: Money = new Money(itemPrice);;
    
itemTotal!.multiply(basketInterface!.getNumberOf(product)!.intValue());
    
node.appendChild(ModDomHelper.createNameValueNodes(document, BasketData.ITEMTOTAL, itemTotal!.toString()));
    
basketNode!.appendChild(node);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Product Failed: " +product, this, "toXmlNode");
    

                        }
                            
numberOfResults++;
    
}


    var totalNumberNode: Node = document.createElement(SearchData.TOTAL_NUMBER_ITEMS)!;;
    

    var totalNumberTextNode: Node = document.createTextNode(basketInterface!.getNumberOfItems()!.toString())!;;
    
totalNumberNode!.appendChild(totalNumberTextNode);
    

    var totalWeightNode: Node = document.createElement(BasketData.TOTALWEIGHT)!;;
    

    var totalWeightTextNode: Node = document.createTextNode(basketInterface!.getTotalWeight()!.toString())!;;
    
totalWeightNode!.appendChild(totalWeightTextNode);
    

    var subTotalNode: Node = document.createElement(BasketData.SUBTOTAL)!;;
    

    var subTotalTextNode: Node = document.createTextNode(basketInterface!.getSubTotal()!.toString())!;;
    
subTotalNode!.appendChild(subTotalTextNode);
    
basketNode!.appendChild(totalNumberNode);
    
basketNode!.appendChild(totalWeightNode);
    
basketNode!.appendChild(subTotalNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basketNode;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                            throw e;
                    
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



