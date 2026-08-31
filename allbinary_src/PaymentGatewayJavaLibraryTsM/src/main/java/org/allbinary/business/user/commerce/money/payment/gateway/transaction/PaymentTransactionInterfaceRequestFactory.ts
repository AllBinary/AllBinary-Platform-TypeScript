
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

        


            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../../../../../../../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../../../../../../../../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { StoreFrontFactory } from '../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { StreetAddress } from '../../../../../../../../../org/allbinary/business/user/address/StreetAddress.js';
      //not GWT import const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
import { Basket } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/Basket.js';
      //not GWT import const Basket = globalThis.org.allbinary.business.user.commerce.inventory.basket.Basket;

      
import { OrderHistory } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
      //not GWT import const OrderHistory = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistory;

      
import { OrderInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js';
      //not GWT import const OrderInterface = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderInterface;

      
import { Money } from '../../../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
      //not GWT import const Money = globalThis.org.allbinary.business.user.commerce.money.Money;

      
import { Payment } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/Payment.js';
      //not GWT import const Payment = globalThis.org.allbinary.business.user.commerce.money.payment.Payment;

      
import { PaymentData } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js';
      //not GWT import const PaymentData = globalThis.org.allbinary.business.user.commerce.money.payment.PaymentData;

      
import { PaymentGatewayData } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
      //not GWT import const PaymentGatewayData = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayData;

      
import { TenderTypeFactory } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/TenderTypeFactory.js';
      //not GWT import const TenderTypeFactory = globalThis.org.allbinary.business.user.commerce.money.payment.types.TenderTypeFactory;

      
import { TransactionTypeFactory } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/TransactionTypeFactory.js';
      //not GWT import const TransactionTypeFactory = globalThis.org.allbinary.business.user.commerce.money.payment.types.TransactionTypeFactory;

      
import { OrderIdGenerator } from '../../../../../../../../../org/allbinary/data/generator/OrderIdGenerator.js';
      //not GWT import const OrderIdGenerator = globalThis.org.allbinary.data.generator.OrderIdGenerator;

      
import { OrderHistoryEntityFactory } from '../../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js';
      //not GWT import const OrderHistoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntityFactory;

      
import { OrderHistoryEntityInterface } from '../../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityInterface.js';
      //not GWT import const OrderHistoryEntityInterface = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntityInterface;

      
import { WeblisketSession } from '../../../../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      //not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringUtil } from '../../../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { TransformInfoHttpInterface } from '../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
      //not GWT import const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
import { TransformInfoInterface } from '../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not plain js import { CommonStrings } from '../../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentTransactionInterfaceFactory } from './PaymentTransactionInterfaceFactory.js';
//not GWT import const PaymentTransactionInterfaceFactory = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.transaction.PaymentTransactionInterfaceFactory;

                import { PaymentTransactionInterface } from './PaymentTransactionInterface.js';
//not GWT import const PaymentTransactionInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.transaction.PaymentTransactionInterface;

                
export class PaymentTransactionInterfaceRequestFactory
            extends Object
         {
        

    private static readonly instance: PaymentTransactionInterfaceRequestFactory = new PaymentTransactionInterfaceRequestFactory();

    public static getInstance(): PaymentTransactionInterfaceRequestFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PaymentTransactionInterfaceRequestFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getInstance(transformInfoInterface: TransformInfoInterface): PaymentTransactionInterface{

        try {
            
    var httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;;
    

    var pageContext: PageContext = httpTransformInfoInterface!.getPageContext()!;;
    

    var httpServletRequest: HttpServletRequest = pageContext!.getRequest() as HttpServletRequest;;
    

    var command: string = httpServletRequest!.getParameter(org.allbinary.globals.GLOBALS2.ADMINCOMMAND)!;;
    

                        if(command != 
                                    null
                                 && command.compareTo(org.allbinary.globals.GLOBALS2.AUTHORIZEFORMEVALBODYONERROR) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.generateFromTestData(transformInfoInterface);;
    

                                    }
                                
                        else {
                            
    var propertiesHashMap: HashMap<any, any> = httpTransformInfoInterface!.getPropertiesHashMap()!;;
    

    var weblisketSession: WeblisketSession = new WeblisketSession(propertiesHashMap, pageContext);;
    

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(weblisketSession!.getStoreName())!;;
    

    var order: OrderInterface = weblisketSession!.getOrder()!;;
    

    var orderId: string = order.getId()!;;
    

    var orderHistoryEntityInterface: OrderHistoryEntityInterface = OrderHistoryEntityFactory.getInstance()!;;
    

    var orderReview: OrderHistory = orderHistoryEntityInterface!.getOrder(orderId)!;;
    

    var orderPaymentInfo: Payment = orderReview!.getPaymentInfo()!;;
    
orderPaymentInfo!.setTransactionType(TransactionTypeFactory.getInstance()!.SALE.toString());
    
orderPaymentInfo!.setTenderType(TenderTypeFactory.getInstance()!.CREDITCARD.toString());
    
orderReview!.setPaymentInfo(orderPaymentInfo);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF(orderReview!.getId(), this, "getPaymentTransactionInterface()");
    

                                    }
                                

    var paymentTransactionInterface: PaymentTransactionInterface = PaymentTransactionInterfaceFactory.getInstance()!.getInstance(orderReview)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentTransactionInterface;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getPaymentTransactionInterface()", e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    generateFromTestData(transformInfoInterface: TransformInfoInterface): PaymentTransactionInterface{

        try {
            
    var httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;;
    

    var propertiesHashMap: HashMap<any, any> = httpTransformInfoInterface!.getPropertiesHashMap()!;;
    

    var pageContext: PageContext = httpTransformInfoInterface!.getPageContext()!;;
    

    var weblisketSession: WeblisketSession = new WeblisketSession(propertiesHashMap, pageContext);;
    

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(weblisketSession!.getStoreName())!;;
    

    var httpServletRequest: HttpServletRequest = pageContext!.getRequest() as HttpServletRequest;;
    

    var gatewayName: string = weblisketSession!.getPaymentMethod() as string;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(gatewayName))
                        
                                    {
                                    gatewayName= httpServletRequest!.getParameter(PaymentGatewayData.NAME.toString());
    

                                    }
                                

    var transactionType: string = httpServletRequest!.getParameter(PaymentData.TRANSACTIONTYPE)!;;
    

    var tenderType: string = httpServletRequest!.getParameter(PaymentData.TENDERTYPE)!;;
    

    var payment: Payment = new Payment();;
    
payment.setTransactionType(transactionType);
    
payment.setTenderType(tenderType);
    

    var orderReview: OrderHistory = new OrderHistory(new Basket());;
    
orderReview!.setStoreName(storeFrontInterface!.getName());
    
orderReview!.setPaymentMethod(gatewayName);
    
orderReview!.setUserName("testing");
    

    var orderId: string = httpServletRequest!.getParameter("orderNumber")!;;
    

                        if(orderId == 
                                    null
                                 || orderId!.compareTo(StringUtil.getInstance()!.EMPTY_STRING) == 0)
                        
                                    {
                                    orderId= new OrderIdGenerator().getNext();
    
orderReview!.setId(orderId);
    

    var account: string = httpServletRequest!.getParameter("account")!;;
    

    var expirationDate: string = httpServletRequest!.getParameter("expirationDate")!;;
    

    var checkNumber: string = httpServletRequest!.getParameter("checkNumber")!;;
    

    var driversLicense: string = httpServletRequest!.getParameter("driversLicense")!;;
    

    var magneticInkCheckReader: string = httpServletRequest!.getParameter("magneticInkCheckReader")!;;
    

    var aba: string = httpServletRequest!.getParameter("aba")!;;
    

    var accountType: string = httpServletRequest!.getParameter("accountType")!;;
    

    var name: string = httpServletRequest!.getParameter("name")!;;
    
payment.setName(name);
    
payment.setNumber(account);
    
payment.setExpiration(expirationDate);
    
payment.setCheckNumber(checkNumber);
    
payment.setDriversLicense(driversLicense);
    
payment.setMagneticInkCheckReader(magneticInkCheckReader);
    
payment.setAba(aba);
    
payment.setAccountType(accountType);
    

    var street: string = httpServletRequest!.getParameter("street")!;;
    

    var city: string = httpServletRequest!.getParameter("city")!;;
    

    var state: string = httpServletRequest!.getParameter("state")!;;
    

    var zip: string = httpServletRequest!.getParameter("zip")!;;
    

    var streetAddress: StreetAddress = new StreetAddress();;
    
streetAddress!.setName(name);
    
streetAddress!.setStreet(street);
    
streetAddress!.setCity(city);
    
streetAddress!.setState(state);
    
streetAddress!.setCode(zip);
    

    var email: string = httpServletRequest!.getParameter("email")!;;
    

    var amount: string = httpServletRequest!.getParameter("amount")!;;
    
orderReview!.setTotal(new Money(amount));
    
orderReview!.setBillingAddress(streetAddress);
    

                                    }
                                
                        else {
                            orderReview!.setId(orderId);
    

                        }
                            
orderReview!.setPaymentInfo(payment);
    

    var paymentTransactionInterface: PaymentTransactionInterface = PaymentTransactionInterfaceFactory.getInstance()!.getInstance(orderReview)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentTransactionInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generatePaymentTransactionInterfaceFromTestData()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



