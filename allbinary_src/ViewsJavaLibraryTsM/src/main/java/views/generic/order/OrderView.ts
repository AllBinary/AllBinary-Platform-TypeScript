
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
        
import { HttpServletRequest } from '../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { Basket } from '../../../org/allbinary/business/user/commerce/inventory/basket/Basket.js';
      //not GWT import const Basket = globalThis.org.allbinary.business.user.commerce.inventory.basket.Basket;

      
import { BasketReview } from '../../../org/allbinary/business/user/commerce/inventory/basket/BasketReview.js';
      //not GWT import const BasketReview = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketReview;

      
import { Order } from '../../../org/allbinary/business/user/commerce/inventory/order/Order.js';
      //not GWT import const Order = globalThis.org.allbinary.business.user.commerce.inventory.order.Order;

      
import { OrderData } from '../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js';
      //not GWT import const OrderData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderData;

      
import { OrderHistory } from '../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
      //not GWT import const OrderHistory = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistory;

      
import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
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



