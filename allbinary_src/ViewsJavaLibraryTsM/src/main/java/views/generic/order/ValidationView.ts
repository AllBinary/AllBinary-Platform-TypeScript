
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
        



import { OrderHistoryFactory } from "../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryFactory.js";

    
import { OrderItemsEntity } from "../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderItemsEntity.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { OrderView } from "./OrderView.js";

export class ValidationView extends OrderView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;
        
        
;
    

                        if(this.order.isIdValid() == Boolean.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
                        else {
                            this.orderHistory= OrderHistoryFactory.getInstance(this.order.getId());
    

                        if(this.orderHistory == 
                                    null
                                 || this.orderHistory!.isValid() == Boolean.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var orderItems: OrderItemsEntity = new OrderItemsEntity();
        
        
;
    
this.basketReview= orderItems!.getBasketReview(this.order.getId());
    

                        if(this.basketReview == 
                                    null
                                 || this.basketReview!.isValid() == Boolean.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(this.order.isIdValid() == Boolean.FALSE)
                        
                                    {
                                    stringBuffer!.append(this.order.getIdValidationInfo());
    

                                    }
                                
                        else {
                            this.orderHistory= OrderHistoryFactory.getInstance(this.order.getId());
    

                        if(this.orderHistory == 
                                    null
                                 || this.orderHistory!.isValid() == Boolean.FALSE)
                        
                                    {
                                    stringBuffer!.append("Order History data error for: ");
    
stringBuffer!.append(this.order.getId());
    
stringBuffer!.append("<br />");
    

                                    }
                                

    var orderItems: OrderItemsEntity = new OrderItemsEntity();
        
        
;
    
this.basketReview= orderItems!.getBasketReview(this.order.getId());
    

                        if(this.basketReview == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Order Items data error - does not exist for: ");
    
stringBuffer!.append(this.order.getId());
    
stringBuffer!.append("<br />");
    

                                    }
                                
                             else 
                        if(this.basketReview!.isValid() == Boolean.FALSE)
                        
                                    {
                                    stringBuffer!.append("Order Items data error - not valid for: ");
    
stringBuffer!.append(this.order.getId());
    
stringBuffer!.append("<br />");
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

