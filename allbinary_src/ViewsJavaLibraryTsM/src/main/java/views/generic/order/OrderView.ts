
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
        
//not game specific package import { HttpServletRequest } from '../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { Basket } from '../../../org/allbinary/business/user/commerce/inventory/basket/Basket.js';
      const Basket = globalThis.org.allbinary.business.user.commerce.inventory.basket.Basket;

      
//not game specific package import { BasketReview } from '../../../org/allbinary/business/user/commerce/inventory/basket/BasketReview.js';
      const BasketReview = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketReview;

      
//not game specific package import { Order } from '../../../org/allbinary/business/user/commerce/inventory/order/Order.js';
      const Order = globalThis.org.allbinary.business.user.commerce.inventory.order.Order;

      
//not game specific package import { OrderData } from '../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js';
      const OrderData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderData;

      
//not game specific package import { OrderHistory } from '../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
      const OrderHistory = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistory;

      
//not game specific package import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
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
        
export class OrderView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private request: HttpServletRequest;

    order: Order;

    orderHistory: OrderHistory;

    basketReview: BasketReview;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.request= this.getPageContext()!.getRequest() as HttpServletRequest;
    
this.getFormData();
    
}


                //@Throws(Exception.constructor)
            
    getFormData(){

    var id: string = this.request.getParameter(OrderData.ID)!;;
    

                        if(id == 
                                    null
                                )
                        
                                    {
                                    id= this.getWeblisketSession()!.getOrder()!.getId();
    

                                    }
                                
this.order= new Order(new Basket());
    
this.order.setId(id);
    
}


    public toXmlNode(document: Document): Node{

        try {
            
    var orderHistoryNode: Node = this.orderHistory!.toXmlNode(document)!;;
    

    var node: Node = document.createElement(this.orderHistory!.getPaymentMethod())!;;
    
orderHistoryNode!.appendChild(this.basketReview!.toXmlNode(document));
    
node.appendChild(orderHistoryNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
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
                
            

