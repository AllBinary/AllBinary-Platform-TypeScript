
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
        
//not game specific package import { Vector } from '../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { StoreFrontFactory } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { EntryData } from '../../../org/allbinary/business/entry/EntryData.js';
      const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
//not game specific package import { StreetAddress } from '../../../org/allbinary/business/user/address/StreetAddress.js';
      const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
//not game specific package import { BasketInterface } from '../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js';
      const BasketInterface = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketInterface;

      
//not game specific package import { OrderInterface } from '../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js';
      const OrderInterface = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderInterface;

      
//not game specific package import { Money } from '../../../org/allbinary/business/user/commerce/money/Money.js';
      const Money = globalThis.org.allbinary.business.user.commerce.money.Money;

      
//not game specific package import { TaxFactory } from '../../../org/allbinary/business/user/commerce/money/tax/TaxFactory.js';
      const TaxFactory = globalThis.org.allbinary.business.user.commerce.money.tax.TaxFactory;

      
//not game specific package import { ShippingMethods } from '../../../org/allbinary/business/user/commerce/shipping/ShippingMethods.js';
      const ShippingMethods = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethods;

      
//not game specific package import { ShippingMethodsData } from '../../../org/allbinary/business/user/commerce/shipping/ShippingMethodsData.js';
      const ShippingMethodsData = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodsData;

      
//not game specific package import { ShippingInterface } from '../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js';
      const ShippingInterface = globalThis.org.allbinary.business.user.commerce.shipping.modules.ShippingInterface;

      
//not game specific package import { StreetAddressesEntityInterface } from '../../../org/allbinary/data/tables/user/address/StreetAddressesEntityInterface.js';
      const StreetAddressesEntityInterface = globalThis.org.allbinary.data.tables.user.address.StreetAddressesEntityInterface;

      
//not game specific package import { ShippingAddressesEntityFactory } from '../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntityFactory.js';
      const ShippingAddressesEntityFactory = globalThis.org.allbinary.data.tables.user.address.shipping.ShippingAddressesEntityFactory;

      
//not game specific package import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { ModDomHelper } from '../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { Document } from '../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
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
    

    var shippingVector: Vector = this.shippingMethods!.get()!;;
    

    var size: number = shippingVector!.length!;;
    




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
                
            

