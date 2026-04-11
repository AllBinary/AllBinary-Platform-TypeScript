
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
        

//import { Vector } from "../../../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../../../javax/servlet/http/HttpServletRequest.js";

    
import { OrderData } from "../../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js";

    
import { OrderHistory } from "../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js";

    
import { OrderHistoryData } from "../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    
import { OrderHistoryEntity } from "../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntity.js";

    
import { DomNodeInterface } from "../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { GLOBALS2 } from "../../../../org/allbinary/globals/GLOBALS2.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

export class OrderHistoryView extends HttpStoreComponentView
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private request: HttpServletRequest

    private shipped: string

    private partiallyShipped: string

    private processing: string

    private preprocessing: string

    private cancelled: string
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.request= this.getPageContext()!.getRequest();

                         as HttpServletRequest;
    
this.preprocessing= request.getParameter(OrderHistoryData.PREPROCESSINGNAME);
    
this.shipped= request.getParameter(OrderHistoryData.SHIPPEDNAME);
    
this.partiallyShipped= request.getParameter(OrderHistoryData.PARTIALLYSHIPPEDNAME);
    
this.processing= request.getParameter(OrderHistoryData.PROCESSINGNAME);
    
this.cancelled= request.getParameter(OrderHistoryData.CANCELLEDNAME);
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
    //var document = document

        try {
            
    var node: Node = document.createElement(OrderData.ORDERS)!;
        
        
;
    

    var orderHistoryEntity: OrderHistoryEntity = new OrderHistoryEntity();
        
        
;
    

    var orderReviewVector: Vector = orderHistoryEntity!.getOrders(this.getWeblisketSession()!.getUserName())!;
        
        
;
    

    var size: number = orderReviewVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var orderHistory: OrderHistory = orderReviewVector!.get(index);

                         as OrderHistory;
        
        
;
    

    var orderHistoryNode: Node = orderHistory!.toXmlNode(document)!;
        
        
;
    

    var orderNode: Node = document.createElement(orderHistory!.getPaymentMethod())!;
        
        
;
    
node.appendChild(orderHistory!.toXmlNode(document));
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Attempt to View a users order history", this, "view");
    

                                    }
                                
node.appendChild(ModDomHelper.createNameValueNodes(document, OrderHistoryData.PREPROCESSINGNAME, OrderHistoryData.PREPROCESSING));
    
node.appendChild(ModDomHelper.createNameValueNodes(document, OrderHistoryData.PROCESSINGNAME, OrderHistoryData.PROCESSING));
    
node.appendChild(ModDomHelper.createNameValueNodes(document, OrderHistoryData.CANCELLEDNAME, OrderHistoryData.CANCELLED));
    
node.appendChild(ModDomHelper.createNameValueNodes(document, OrderHistoryData.PARTIALLYSHIPPEDNAME, OrderHistoryData.PARTIALLYSHIPPED));
    
node.appendChild(ModDomHelper.createNameValueNodes(document, OrderHistoryData.SHIPPEDNAME, OrderHistoryData.SHIPPED));
    
node.appendChild(ModDomHelper.createNameValueNodes(document, GLOBALS2.VIEWNAME, GLOBALS2.VIEW));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                            throw e
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

