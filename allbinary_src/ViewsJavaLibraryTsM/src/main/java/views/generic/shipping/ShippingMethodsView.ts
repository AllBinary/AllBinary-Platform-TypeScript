
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
        



import { Vector } from "../../../java/util/Vector.js";

    
import { StoreFrontFactory } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { EntryData } from "../../../org/allbinary/business/entry/EntryData.js";

    
import { StreetAddress } from "../../../org/allbinary/business/user/address/StreetAddress.js";

    
import { BasketInterface } from "../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js";

    
import { OrderInterface } from "../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js";

    
import { Money } from "../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { TaxFactory } from "../../../org/allbinary/business/user/commerce/money/tax/TaxFactory.js";

    
import { ShippingMethods } from "../../../org/allbinary/business/user/commerce/shipping/ShippingMethods.js";

    
import { ShippingMethodsData } from "../../../org/allbinary/business/user/commerce/shipping/ShippingMethodsData.js";

    
import { ShippingInterface } from "../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js";

    
import { StreetAddressesEntityInterface } from "../../../org/allbinary/data/tables/user/address/StreetAddressesEntityInterface.js";

    
import { ShippingAddressesEntityFactory } from "../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntityFactory.js";

    
import { DomNodeInterface } from "../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

export class ShippingMethodsView extends HttpStoreComponentView
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private shippingMethods: ShippingMethods

    private storeFrontInterface: StoreFrontInterface
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.storeFrontInterface= StoreFrontFactory.getInstance(this.getTransformInfoInterface()!.getStoreName())
this.shippingMethods= ShippingMethods(this.abeClientInformation, storeFrontInterface)
}


                @Throws(Exception::class)
            
    public toXmlNode(document: Document): Node{
var document = document

        try {
            
    var shippingMethodsNode: Node = document.createElement(ShippingMethodsData.SHIPPINGMETHODSORDERSUMMARIES)!;
        
        


    var order: OrderInterface = this.getWeblisketSession()!.getOrder()!;
        
        


    var basket: BasketInterface = this.getWeblisketSession()!.getOrder()!.getBasket()!;
        
        


    var shippingAddressesEntityInterface: StreetAddressesEntityInterface = ShippingAddressesEntityFactory.getInstance()!.getInstance(this.getWeblisketSession()!.getUserName())!;
        
        


    var streetAddress: StreetAddress = shippingAddressesEntityInterface!.getDefault()!;
        
        


    var shippingVector: Vector = this.shippingMethods!.get()!;
        
        


    var size: number = shippingVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var shippingMethodNode: Node = document.createElement(ShippingMethodsData.SHIPPINGMETHODORDERSUMMARY)!;
        
        


    var shipping: ShippingInterface = shippingVector!.get(index) as ShippingInterface;
        
        


    var shippingView: DomNodeInterface = shipping as DomNodeInterface;
        
        

appendChild(shippingView!.toXmlNode(document))

    var shippingCost: Money = shipping.getCost(order)!;
        
        


    var subTotal: Money = basket.getSubTotal()!;
        
        


    var taxRate: Float = TaxFactory.getInstance()!.getInstance(this.abeClientInformation, storeFrontInterface)!.getTaxRate(streetAddress, storeFrontInterface)!;
        
        


    var tax: Money = new Money();
        
        


    var total: Money = new Money();
        
        

add(shippingCost!.toString())
add(subTotal!.toString())
add(total.toString())
multiply(taxRate)
add(tax.toString())
appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodsData.SHIPPINGCOST, shippingCost!.toString()))
appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodsData.TAXRATE, taxRate!.toString()))
appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodsData.SUBTOTAL, subTotal!.toString()))
appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodsData.TAX, tax.toString()))
appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodsData.TOTAL, total.toString()))
appendChild(ModDomHelper.createNameValueNodes(document, EntryData.getInstance()!.DEFAULT, this.shippingMethods!.getDefault()!.getName()))
appendChild(shippingMethodNode)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shippingMethodsNode;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "toXmlNode", e)

                                    }
                                



                            throw e
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface)
}


    public view(): string{

        try {
            this.addDomNodeInterfaces()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();
    
} catch(e: Exception)
            {

    var error: string = "Failed to view ShippingMethods";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "view()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

