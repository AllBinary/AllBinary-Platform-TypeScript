
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
        
            import { Float } from '../../../java/lang/Float.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StoreFrontFactory } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { EntryData } from '../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { StreetAddress } from '../../../org/allbinary/business/user/address/StreetAddress.js';
//not GWT import const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
import { BasketInterface } from '../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js';
//not GWT import const BasketInterface = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketInterface;

      
import { OrderInterface } from '../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js';
//not GWT import const OrderInterface = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderInterface;

      
import { Money } from '../../../org/allbinary/business/user/commerce/money/Money.js';
//not GWT import const Money = globalThis.org.allbinary.business.user.commerce.money.Money;

      
import { TaxFactory } from '../../../org/allbinary/business/user/commerce/money/tax/TaxFactory.js';
//not GWT import const TaxFactory = globalThis.org.allbinary.business.user.commerce.money.tax.TaxFactory;

      
import { ShippingMethods } from '../../../org/allbinary/business/user/commerce/shipping/ShippingMethods.js';
//not GWT import const ShippingMethods = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethods;

      
import { ShippingMethodsData } from '../../../org/allbinary/business/user/commerce/shipping/ShippingMethodsData.js';
//not GWT import const ShippingMethodsData = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodsData;

      
import { ShippingInterface } from '../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js';
//not GWT import const ShippingInterface = globalThis.org.allbinary.business.user.commerce.shipping.modules.ShippingInterface;

      
import { StreetAddressesEntityInterface } from '../../../org/allbinary/data/tables/user/address/StreetAddressesEntityInterface.js';
//not GWT import const StreetAddressesEntityInterface = globalThis.org.allbinary.data.tables.user.address.StreetAddressesEntityInterface;

      
import { ShippingAddressesEntityFactory } from '../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntityFactory.js';
//not GWT import const ShippingAddressesEntityFactory = globalThis.org.allbinary.data.tables.user.address.shipping.ShippingAddressesEntityFactory;

      
import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
//not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ShippingMethodsView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private shippingMethods: ShippingMethods;

    private storeFrontInterface: StoreFrontInterface;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.storeFrontInterface= StoreFrontFactory.getInstance(this.getTransformInfoInterface()!.getStoreName());
    
this.shippingMethods= new ShippingMethods(this.abeClientInformation, this.storeFrontInterface);
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

        try {
            
    var shippingMethodsNode: Node = document.createElement(ShippingMethodsData.SHIPPINGMETHODSORDERSUMMARIES)!;;
    

    var order: OrderInterface = this.getWeblisketSession()!.getOrder()!;;
    

    var basket: BasketInterface = this.getWeblisketSession()!.getOrder()!.getBasket()!;;
    

    var shippingAddressesEntityInterface: StreetAddressesEntityInterface = ShippingAddressesEntityFactory.getInstance()!.getInstance(this.getWeblisketSession()!.getUserName())!;;
    

    var streetAddress: StreetAddress = shippingAddressesEntityInterface!.getDefault()!;;
    

    var shippingVector: BasicArrayList = this.shippingMethods!.get()!;;
    

    var size: number = shippingVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var shippingMethodNode: Node = document.createElement(ShippingMethodsData.SHIPPINGMETHODORDERSUMMARY)!;;
    

    var shipping: ShippingInterface = shippingVector!.get(index) as ShippingInterface;;
    

    var shippingView: DomNodeInterface = shipping as DomNodeInterface;;
    
shippingMethodNode!.appendChild(shippingView!.toXmlNode(document));
    

    var shippingCost: Money = shipping.getCost(order)!;;
    

    var subTotal: Money = basket.getSubTotal()!;;
    

    var taxRate: number = TaxFactory.getInstance()!.getInstance(this.abeClientInformation, storeFrontInterface)!.getTaxRate(streetAddress, storeFrontInterface)!;;
    

    var tax: Money = new Money();;
    

    var total: Money = new Money();;
    
total.add(shippingCost!.toString());
    
total.add(subTotal!.toString());
    
tax.add(total.toString());
    
tax.multiply(taxRate);
    
total.add(tax.toString());
    
shippingMethodNode!.appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodsData.SHIPPINGCOST, shippingCost!.toString()));
    
shippingMethodNode!.appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodsData.TAXRATE, taxRate!.toString()));
    
shippingMethodNode!.appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodsData.SUBTOTAL, subTotal!.toString()));
    
shippingMethodNode!.appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodsData.TAX, tax.toString()));
    
shippingMethodNode!.appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodsData.TOTAL, total.toString()));
    
shippingMethodNode!.appendChild(ModDomHelper.createNameValueNodes(document, EntryData.getInstance()!.DEFAULT, this.shippingMethods!.getDefault()!.getName()));
    
shippingMethodsNode!.appendChild(shippingMethodNode);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shippingMethodsNode;
    

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


    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view ShippingMethods";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



