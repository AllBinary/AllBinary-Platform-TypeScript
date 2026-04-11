
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
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../org/allbinary/business/entry/EntryData.js";

    
import { UserData } from "../../org/allbinary/business/user/UserData.js";

    
import { BillingAddressData } from "../../org/allbinary/business/user/address/BillingAddressData.js";

    
import { ShippingAddressData } from "../../org/allbinary/business/user/address/ShippingAddressData.js";

    
import { OrderData } from "../../org/allbinary/business/user/commerce/inventory/order/OrderData.js";

    
import { OrderHistoryData } from "../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    
import { PaymentData } from "../../org/allbinary/business/user/commerce/money/payment/PaymentData.js";

    
import { ShippingMethodData } from "../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js";

    
import { OrderHistoryEntityFactory } from "../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class UpdateOrderHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private request: HttpServletRequest

    private entryId: string

    private orderId: string

    private userName: string

    private storeName: string

    private shipDate: string

    private orderDate: string

    private transDate: string

    private cancelDate: string

    private status: string

    private paymentMethod: string

    private name: string

    private type: string

    private expiration: string

    private number: string

    private encryption: string

    private billingName: string

    private billingStreet: string

    private billingCity: string

    private billingState: string

    private billingCode: string

    private billingCountry: string

    private shippingName: string

    private shippingStreet: string

    private shippingCity: string

    private shippingState: string

    private shippingCode: string

    private shippingCountry: string

    private shippingMethodName: string

    private subTotal: string

    private shippingCost: string

    private tax: string

    private total: string

    private special: string

    private userComment: string

    private userCancelComment: string

    private storeComment: string

    private storeCancelComment: string
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.request= pageContext!.getRequest();

                         as HttpServletRequest;
    
this.getFormData();
    
}


    getFormData(){
this.entryId= request.getParameter(EntryData.getInstance()!.ID);
    
this.orderId= request.getParameter(OrderData.ID);
    
this.userName= request.getParameter(UserData.USERNAME);
    
this.storeName= request.getParameter(StoreFrontData.getInstance()!.NAME);
    
this.shipDate= request.getParameter(OrderHistoryData.SHIPPEDDATE);
    
this.orderDate= request.getParameter(OrderHistoryData.ORDERDATE);
    
this.transDate= request.getParameter(OrderHistoryData.TRANSDATE);
    
this.cancelDate= request.getParameter(OrderHistoryData.CANCELDATE);
    
this.status= request.getParameter(OrderHistoryData.STATUS);
    
this.paymentMethod= request.getParameter(PaymentData.METHOD);
    
this.name= request.getParameter(PaymentData.NAME);
    
this.type= request.getParameter(PaymentData.TYPE);
    
this.expiration= request.getParameter(PaymentData.EXPIRATION);
    
this.number= request.getParameter(PaymentData.NUMBER);
    
this.encryption= request.getParameter(EntryData.getInstance()!.ENCRYPTION);
    
this.billingName= request.getParameter(BillingAddressData.NAME);
    
this.billingStreet= request.getParameter(BillingAddressData.STREET);
    
this.billingCity= request.getParameter(BillingAddressData.CITY);
    
this.billingState= request.getParameter(BillingAddressData.STATE);
    
this.billingCode= request.getParameter(BillingAddressData.CODE);
    
this.billingCountry= request.getParameter(BillingAddressData.COUNTRY);
    
this.shippingName= request.getParameter(ShippingAddressData.NAME);
    
this.shippingStreet= request.getParameter(ShippingAddressData.STREET);
    
this.shippingCity= request.getParameter(ShippingAddressData.CITY);
    
this.shippingState= request.getParameter(ShippingAddressData.STATE);
    
this.shippingCode= request.getParameter(ShippingAddressData.CODE);
    
this.shippingCountry= request.getParameter(ShippingAddressData.COUNTRY);
    
this.shippingMethodName= request.getParameter(ShippingMethodData.NAME);
    
this.subTotal= request.getParameter(OrderHistoryData.SUBTOTAL);
    
this.shippingCost= request.getParameter(OrderHistoryData.SHIPPINGCOST);
    
this.tax= request.getParameter(OrderHistoryData.TAX);
    
this.total= request.getParameter(OrderHistoryData.TOTAL);
    
this.special= request.getParameter(EntryData.getInstance()!.SPECIAL);
    
this.userComment= request.getParameter(OrderData.CUSTOMERCOMMENT);
    
this.userCancelComment= request.getParameter(OrderData.CUSTOMERCANCELCOMMENT);
    
this.storeComment= request.getParameter(OrderData.STORECOMMENT);
    
this.storeCancelComment= request.getParameter(OrderData.STORECANCELCOMMENT);
    
}


    public update(): string{

        try {
            
    var success: string = "Successful update";
        
        
;
    

    var orderHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var whereHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
orderHashMap!.put(EntryData.getInstance()!.ID, entryId);
    
orderHashMap!.put(OrderData.ID, this.orderId);
    
orderHashMap!.put(UserData.USERNAME, userName);
    
orderHashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    
orderHashMap!.put(OrderHistoryData.SHIPPEDDATE, shipDate);
    
orderHashMap!.put(OrderHistoryData.ORDERDATE, orderDate);
    
orderHashMap!.put(OrderHistoryData.TRANSDATE, transDate);
    
orderHashMap!.put(OrderHistoryData.CANCELDATE, cancelDate);
    
orderHashMap!.put(OrderHistoryData.STATUS, status);
    
orderHashMap!.put(PaymentData.METHOD, paymentMethod);
    
orderHashMap!.put(PaymentData.NAME, name);
    
orderHashMap!.put(PaymentData.TYPE, type);
    
orderHashMap!.put(PaymentData.EXPIRATION, expiration);
    
orderHashMap!.put(BillingAddressData.NAME, billingName);
    
orderHashMap!.put(BillingAddressData.STREET, billingStreet);
    
orderHashMap!.put(BillingAddressData.CITY, billingCity);
    
orderHashMap!.put(BillingAddressData.STATE, billingState);
    
orderHashMap!.put(BillingAddressData.CODE, billingCode);
    
orderHashMap!.put(BillingAddressData.COUNTRY, billingCountry);
    
orderHashMap!.put(ShippingAddressData.NAME, shippingName);
    
orderHashMap!.put(ShippingAddressData.STREET, shippingStreet);
    
orderHashMap!.put(ShippingAddressData.CITY, shippingCity);
    
orderHashMap!.put(ShippingAddressData.STATE, shippingState);
    
orderHashMap!.put(ShippingAddressData.CODE, shippingCode);
    
orderHashMap!.put(ShippingAddressData.COUNTRY, shippingCountry);
    
orderHashMap!.put(ShippingMethodData.NAME, this.shippingMethodName);
    
orderHashMap!.put(OrderHistoryData.SUBTOTAL, this.subTotal);
    
orderHashMap!.put(OrderHistoryData.SHIPPINGCOST, this.shippingCost);
    
orderHashMap!.put(OrderHistoryData.TAX, this.tax);
    
orderHashMap!.put(OrderHistoryData.TOTAL, this.total);
    
orderHashMap!.put(EntryData.getInstance()!.SPECIAL, special);
    
orderHashMap!.put(OrderData.CUSTOMERCOMMENT, this.userComment);
    
orderHashMap!.put(OrderData.CUSTOMERCANCELCOMMENT, this.userCancelComment);
    
orderHashMap!.put(OrderData.STORECOMMENT, this.storeComment);
    
orderHashMap!.put(OrderData.STORECANCELCOMMENT, this.storeCancelComment);
    
whereHashMap!.put(OrderData.ID, orderId);
    
OrderHistoryEntityFactory.getInstance()!.update(whereHashMap, orderHashMap);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to update order table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

