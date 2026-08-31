
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
        
import { Vector } from '../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { HttpServletRequest } from '../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { UserData } from '../../../org/allbinary/business/user/UserData.js';
      //not GWT import const UserData = globalThis.org.allbinary.business.user.UserData;

      
import { OrderData } from '../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js';
      //not GWT import const OrderData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderData;

      
import { OrderHistory } from '../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
      //not GWT import const OrderHistory = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistory;

      
import { OrderHistoryData } from '../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js';
      //not GWT import const OrderHistoryData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryData;

      
import { UserName } from '../../../org/allbinary/business/user/username/UserName.js';
      //not GWT import const UserName = globalThis.org.allbinary.business.user.username.UserName;

      
import { OrderHistoryEntity } from '../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntity.js';
      //not GWT import const OrderHistoryEntity = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntity;

      
import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { GLOBALS2 } from '../../../org/allbinary/globals/GLOBALS2.js';
      //not GWT import const GLOBALS2 = globalThis.org.allbinary.globals.GLOBALS2;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ValidationComponentInterface } from '../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      //not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      //not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UserNameOrderHistoryView extends HttpStoreComponentView implements ValidationComponentInterface, DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private request: HttpServletRequest;

    private userName: string;

    private shipped: string;

    private partiallyShipped: string;

    private processing: string;

    private preprocessing: string;

    private cancelled: string;

    private readonly ON: string = "on";

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.request= this.getPageContext()!.getRequest() as HttpServletRequest;
    
this.userName= this.request.getParameter(UserData.USERNAME);
    
this.preprocessing= this.request.getParameter(OrderHistoryData.PREPROCESSINGNAME);
    
this.shipped= this.request.getParameter(OrderHistoryData.SHIPPEDNAME);
    
this.partiallyShipped= this.request.getParameter(OrderHistoryData.PARTIALLYSHIPPEDNAME);
    
this.processing= this.request.getParameter(OrderHistoryData.PROCESSINGNAME);
    
this.cancelled= this.request.getParameter(OrderHistoryData.CANCELLEDNAME);
    
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


    public toXmlNode(document: Document): Node{

        try {
            
    var node: Node = document.createElement(OrderData.ORDERS)!;;
    

    var orderHistoryEntity: OrderHistoryEntity = new OrderHistoryEntity();;
    

    var orderReviewVector: Vector = orderHistoryEntity!.getOrders(this.userName)!;;
    

    var size: number = orderReviewVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var orderHistory: OrderHistory = orderReviewVector!.get(index) as OrderHistory;;
    

    var orderHistoryNode: Node = orderHistory!.toXmlNode(document)!;;
    

    var orderNode: Node = document.createElement(orderHistory!.getPaymentMethod())!;;
    
node.appendChild(orderHistory!.toXmlNode(document));
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Attempt to View a users order history", this, "view");
    

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
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public isValid(): Boolean{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Started", this, this.commonStrings!.IS_VALID);
    

                                    }
                                

                        if(UserName.getInstance()!.isValid(this.userName) == Boolean.TRUE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public validationInfo(): string{

                        if(this.userName == 
                                    null
                                )
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "No User Name Specified<br />";
    

                        if(UserName.getInstance()!.isValid(this.userName) == Boolean.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Invalid User Name<br />";
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Unknown Error<br />";
    
}


}



