
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
        



            import { Exception } from '../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { EntryData } from '../../org/allbinary/business/entry/EntryData.js';
      const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
//not game specific package import { UserData } from '../../org/allbinary/business/user/UserData.js';
      const UserData = globalThis.org.allbinary.business.user.UserData;

      
//not game specific package import { BillingAddressData } from '../../org/allbinary/business/user/address/BillingAddressData.js';
      const BillingAddressData = globalThis.org.allbinary.business.user.address.BillingAddressData;

      
//not game specific package import { ShippingAddressData } from '../../org/allbinary/business/user/address/ShippingAddressData.js';
      const ShippingAddressData = globalThis.org.allbinary.business.user.address.ShippingAddressData;

      
//not game specific package import { OrderData } from '../../org/allbinary/business/user/commerce/inventory/order/OrderData.js';
      const OrderData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderData;

      
//not game specific package import { OrderHistoryData } from '../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js';
      const OrderHistoryData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryData;

      
//not game specific package import { PaymentData } from '../../org/allbinary/business/user/commerce/money/payment/PaymentData.js';
      const PaymentData = globalThis.org.allbinary.business.user.commerce.money.payment.PaymentData;

      
//not game specific package import { ShippingMethodData } from '../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js';
      const ShippingMethodData = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodData;

      
//not game specific package import { OrderHistoryEntityFactory } from '../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js';
      const OrderHistoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntityFactory;

      
//not game specific package import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelper } from './TagHelper.js';

export class UpdateOrderHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private request: HttpServletRequest;

    private entryId: string;

    private orderId: string;

    private userName: string;

    private storeName: string;

    private shipDate: string;

    private orderDate: string;

    private transDate: string;

    private cancelDate: string;

    private status: string;

    private paymentMethod: string;

    private name: string;

    private type: string;

    private expiration: string;

    private number: string;

    private encryption: string;

    private billingName: string;

    private billingStreet: string;

    private billingCity: string;

    private billingState: string;

    private billingCode: string;

    private billingCountry: string;

    private shippingName: string;

    private shippingStreet: string;

    private shippingCity: string;

    private shippingState: string;

    private shippingCode: string;

    private shippingCountry: string;

    private shippingMethodName: string;

    private subTotal: string;

    private shippingCost: string;

    private tax: string;

    private total: string;

    private special: string;

    private userComment: string;

    private userCancelComment: string;

    private storeComment: string;

    private storeCancelComment: string;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.request= pageContext!.getRequest() as HttpServletRequest;
    
this.getFormData();
    
}


    getFormData(){
this.entryId= this.request.getParameter(EntryData.getInstance()!.ID);
    
this.orderId= this.request.getParameter(OrderData.ID);
    
this.userName= this.request.getParameter(UserData.USERNAME);
    
this.storeName= this.request.getParameter(StoreFrontData.getInstance()!.NAME);
    
this.shipDate= this.request.getParameter(OrderHistoryData.SHIPPEDDATE);
    
this.orderDate= this.request.getParameter(OrderHistoryData.ORDERDATE);
    
this.transDate= this.request.getParameter(OrderHistoryData.TRANSDATE);
    
this.cancelDate= this.request.getParameter(OrderHistoryData.CANCELDATE);
    
this.status= this.request.getParameter(OrderHistoryData.STATUS);
    
this.paymentMethod= this.request.getParameter(PaymentData.METHOD);
    
this.name= this.request.getParameter(PaymentData.NAME);
    
this.type= this.request.getParameter(PaymentData.TYPE);
    
this.expiration= this.request.getParameter(PaymentData.EXPIRATION);
    
this.number= this.request.getParameter(PaymentData.NUMBER);
    
this.encryption= this.request.getParameter(EntryData.getInstance()!.ENCRYPTION);
    
this.billingName= this.request.getParameter(BillingAddressData.NAME);
    
this.billingStreet= this.request.getParameter(BillingAddressData.STREET);
    
this.billingCity= this.request.getParameter(BillingAddressData.CITY);
    
this.billingState= this.request.getParameter(BillingAddressData.STATE);
    
this.billingCode= this.request.getParameter(BillingAddressData.CODE);
    
this.billingCountry= this.request.getParameter(BillingAddressData.COUNTRY);
    
this.shippingName= this.request.getParameter(ShippingAddressData.NAME);
    
this.shippingStreet= this.request.getParameter(ShippingAddressData.STREET);
    
this.shippingCity= this.request.getParameter(ShippingAddressData.CITY);
    
this.shippingState= this.request.getParameter(ShippingAddressData.STATE);
    
this.shippingCode= this.request.getParameter(ShippingAddressData.CODE);
    
this.shippingCountry= this.request.getParameter(ShippingAddressData.COUNTRY);
    
this.shippingMethodName= this.request.getParameter(ShippingMethodData.NAME);
    
this.subTotal= this.request.getParameter(OrderHistoryData.SUBTOTAL);
    
this.shippingCost= this.request.getParameter(OrderHistoryData.SHIPPINGCOST);
    
this.tax= this.request.getParameter(OrderHistoryData.TAX);
    
this.total= this.request.getParameter(OrderHistoryData.TOTAL);
    
this.special= this.request.getParameter(EntryData.getInstance()!.SPECIAL);
    
this.userComment= this.request.getParameter(OrderData.CUSTOMERCOMMENT);
    
this.userCancelComment= this.request.getParameter(OrderData.CUSTOMERCANCELCOMMENT);
    
this.storeComment= this.request.getParameter(OrderData.STORECOMMENT);
    
this.storeCancelComment= this.request.getParameter(OrderData.STORECANCELCOMMENT);
    
}


    public update(): string{

        try {
            
    var success: string = "Successful update";;
    

    var orderHashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var whereHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
orderHashMap!.put(EntryData.getInstance()!.ID, this.entryId);
    
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
    
orderHashMap!.put(EntryData.getInstance()!.SPECIAL, this.special);
    
orderHashMap!.put(OrderData.CUSTOMERCOMMENT, this.userComment);
    
orderHashMap!.put(OrderData.CUSTOMERCANCELCOMMENT, this.userCancelComment);
    
orderHashMap!.put(OrderData.STORECOMMENT, this.storeComment);
    
orderHashMap!.put(OrderData.STORECANCELCOMMENT, this.storeCancelComment);
    
whereHashMap!.put(OrderData.ID, orderId);
    
OrderHistoryEntityFactory.getInstance()!.update(whereHashMap, orderHashMap);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to update order table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



