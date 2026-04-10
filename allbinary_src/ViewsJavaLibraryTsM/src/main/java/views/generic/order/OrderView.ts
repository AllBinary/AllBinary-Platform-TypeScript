
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
        



import { HttpServletRequest } from "../../../javax/servlet/http/HttpServletRequest.js";

    
import { Basket } from "../../../org/allbinary/business/user/commerce/inventory/basket/Basket.js";

    
import { BasketReview } from "../../../org/allbinary/business/user/commerce/inventory/basket/BasketReview.js";

    
import { Order } from "../../../org/allbinary/business/user/commerce/inventory/order/Order.js";

    
import { OrderData } from "../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js";

    
import { OrderHistory } from "../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js";

    
import { DomNodeInterface } from "../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

export class OrderView extends HttpStoreComponentView
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private request: HttpServletRequest

    order: Order

    orderHistory: OrderHistory

    basketReview: BasketReview
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.request= this.getPageContext()!.getRequest() as HttpServletRequest
this.this.getFormData()
}


                //@Throws(Error::class)
            
    getFormData(){

    var id: string = request.getParameter(OrderData.ID)!;
        
        


                        if(id == 
                                    null
                                )
                        
                                    {
                                    id= this.getWeblisketSession()!.getOrder()!.getId()

                                    }
                                
this.order= Order(Basket())
this.order.setId(id)
}


    public toXmlNode(document: Document): Node{
var document = document

        try {
            
    var orderHistoryNode: Node = orderHistory!.toXmlNode(document)!;
        
        


    var node: Node = document.createElement(orderHistory!.getPaymentMethod())!;
        
        

orderHistoryNode!.appendChild(basketReview!.toXmlNode(document))
node.appendChild(orderHistoryNode)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public addDomNodeInterfaces(){
this.this.addDomNodeInterface(this as DomNodeInterface)
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            this.this.addDomNodeInterfaces()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e)

                                    }
                                



                            throw e
}

}


}
                
            

