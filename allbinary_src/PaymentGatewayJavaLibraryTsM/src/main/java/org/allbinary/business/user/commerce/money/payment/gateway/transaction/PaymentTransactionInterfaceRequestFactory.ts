
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
//not GWT import const HashMap

import { HttpServletRequest } from '../../../../../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { PageContext } from '../../../../../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { StoreFrontFactory } from '../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory

import { StoreFrontInterface } from '../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { StreetAddress } from '../../../../../../../../../org/allbinary/business/user/address/StreetAddress.js';
//not GWT import const StreetAddress

import { Basket } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/Basket.js';
//not GWT import const Basket

import { OrderHistory } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
//not GWT import const OrderHistory

import { OrderInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js';
//not GWT import const OrderInterface

import { Money } from '../../../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
//not GWT import const Money

import { Payment } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/Payment.js';
//not GWT import const Payment

import { PaymentData } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js';
//not GWT import const PaymentData

import { PaymentGatewayData } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
//not GWT import const PaymentGatewayData

import { TenderTypeFactory } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/TenderTypeFactory.js';
//not GWT import const TenderTypeFactory

import { TransactionTypeFactory } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/TransactionTypeFactory.js';
//not GWT import const TransactionTypeFactory

import { OrderIdGenerator } from '../../../../../../../../../org/allbinary/data/generator/OrderIdGenerator.js';
//not GWT import const OrderIdGenerator

import { OrderHistoryEntityFactory } from '../../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js';
//not GWT import const OrderHistoryEntityFactory

import { OrderHistoryEntityInterface } from '../../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityInterface.js';
//not GWT import const OrderHistoryEntityInterface

import { WeblisketSession } from '../../../../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { TransformInfoHttpInterface } from '../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
//not GWT import const TransformInfoHttpInterface

import { TransformInfoInterface } from '../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentTransactionInterfaceFactory } from './PaymentTransactionInterfaceFactory.js';
//not GWT import - same folder const PaymentTransactionInterfaceFactory
import { PaymentTransactionInterface } from './PaymentTransactionInterface.js';
//not GWT import - same folder const PaymentTransactionInterface

export class PaymentTransactionInterfaceRequestFactory
            extends Object
         {
        

    private static readonly instance: PaymentTransactionInterfaceRequestFactory = new PaymentTransactionInterfaceRequestFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): PaymentTransactionInterfaceRequestFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PaymentTransactionInterfaceRequestFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getInstance$overload2(transformInfoInterface: TransformInfoInterface): PaymentTransactionInterface{

 try { 
    let httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;;
    

    let pageContext: PageContext = httpTransformInfoInterface!.getPageContext()!;;
    

    let httpServletRequest: HttpServletRequest = pageContext!.getRequest() as HttpServletRequest;;
    

    let command: string = httpServletRequest!.getParameter(org.allbinary.globals.GLOBALS2.ADMINCOMMAND)!;;
    

                        if(command != 
                                    null
                                 && command.compareTo(org.allbinary.globals.GLOBALS2.AUTHORIZEFORMEVALBODYONERROR) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.generateFromTestData(transformInfoInterface);;
    

                                    }
                                
                        else {
                            
    let propertiesHashMap: HashMap<any, any> = httpTransformInfoInterface!.getPropertiesHashMap()!;;
    

    let weblisketSession: WeblisketSession = new WeblisketSession(propertiesHashMap, pageContext);;
    

    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(weblisketSession!.getStoreName())!;;
    

    let order: OrderInterface = weblisketSession!.getOrder()!;;
    

    let orderId: string = order.getId()!;;
    

    let orderHistoryEntityInterface: OrderHistoryEntityInterface = OrderHistoryEntityFactory.getInstance()!;;
    

    let orderReview: OrderHistory = orderHistoryEntityInterface!.getOrder(orderId)!;;
    

    let orderPaymentInfo: Payment = orderReview!.getPaymentInfo()!;;
    
orderPaymentInfo!.setTransactionType(TransactionTypeFactory.getInstance()!.SALE.toString());
    
orderPaymentInfo!.setTenderType(TenderTypeFactory.getInstance()!.CREDITCARD.toString());
    
orderReview!.setPaymentInfo(orderPaymentInfo);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF(orderReview!.getId(), this, "getPaymentTransactionInterface()");
    

                                    }
                                

    let paymentTransactionInterface: PaymentTransactionInterface = PaymentTransactionInterfaceFactory.getInstance()!.getInstance(orderReview)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentTransactionInterface;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getPaymentTransactionInterface()", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    generateFromTestData(transformInfoInterface: TransformInfoInterface): PaymentTransactionInterface{

 try { 
    let httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;;
    

    let propertiesHashMap: HashMap<any, any> = httpTransformInfoInterface!.getPropertiesHashMap()!;;
    

    let pageContext: PageContext = httpTransformInfoInterface!.getPageContext()!;;
    

    let weblisketSession: WeblisketSession = new WeblisketSession(propertiesHashMap, pageContext);;
    

    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(weblisketSession!.getStoreName())!;;
    

    let httpServletRequest: HttpServletRequest = pageContext!.getRequest() as HttpServletRequest;;
    

    let gatewayName: string = weblisketSession!.getPaymentMethod() as string;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(gatewayName))
                        
                                    {
                                    gatewayName= httpServletRequest!.getParameter(PaymentGatewayData.NAME.toString());
    

                                    }
                                

    let transactionType: string = httpServletRequest!.getParameter(PaymentData.TRANSACTIONTYPE)!;;
    

    let tenderType: string = httpServletRequest!.getParameter(PaymentData.TENDERTYPE)!;;
    

    let payment: Payment = new Payment();;
    
payment.setTransactionType(transactionType);
    
payment.setTenderType(tenderType);
    

    let orderReview: OrderHistory = new OrderHistory(new Basket());;
    
orderReview!.setStoreName(storeFrontInterface!.getName());
    
orderReview!.setPaymentMethod(gatewayName);
    
orderReview!.setUserName("testing");
    

    let orderId: string = httpServletRequest!.getParameter("orderNumber")!;;
    

                        if(orderId == 
                                    null
                                 || orderId!.compareTo(StringUtil.getInstance()!.EMPTY_STRING) == 0)
                        
                                    {
                                    orderId= new OrderIdGenerator().getNext();
    
orderReview!.setId(orderId);
    

    let account: string = httpServletRequest!.getParameter("account")!;;
    

    let expirationDate: string = httpServletRequest!.getParameter("expirationDate")!;;
    

    let checkNumber: string = httpServletRequest!.getParameter("checkNumber")!;;
    

    let driversLicense: string = httpServletRequest!.getParameter("driversLicense")!;;
    

    let magneticInkCheckReader: string = httpServletRequest!.getParameter("magneticInkCheckReader")!;;
    

    let aba: string = httpServletRequest!.getParameter("aba")!;;
    

    let accountType: string = httpServletRequest!.getParameter("accountType")!;;
    

    let name: string = httpServletRequest!.getParameter("name")!;;
    
payment.setName(name);
    
payment.setNumber(account);
    
payment.setExpiration(expirationDate);
    
payment.setCheckNumber(checkNumber);
    
payment.setDriversLicense(driversLicense);
    
payment.setMagneticInkCheckReader(magneticInkCheckReader);
    
payment.setAba(aba);
    
payment.setAccountType(accountType);
    

    let street: string = httpServletRequest!.getParameter("street")!;;
    

    let city: string = httpServletRequest!.getParameter("city")!;;
    

    let state: string = httpServletRequest!.getParameter("state")!;;
    

    let zip: string = httpServletRequest!.getParameter("zip")!;;
    

    let streetAddress: StreetAddress = new StreetAddress();;
    
streetAddress!.setName(name);
    
streetAddress!.setStreet(street);
    
streetAddress!.setCity(city);
    
streetAddress!.setState(state);
    
streetAddress!.setCode(zip);
    

    let email: string = httpServletRequest!.getParameter("email")!;;
    

    let amount: string = httpServletRequest!.getParameter("amount")!;;
    
orderReview!.setTotal(new Money(amount));
    
orderReview!.setBillingAddress(streetAddress);
    

                                    }
                                
                        else {
                            orderReview!.setId(orderId);
    

                        }
                            
orderReview!.setPaymentInfo(payment);
    

    let paymentTransactionInterface: PaymentTransactionInterface = PaymentTransactionInterfaceFactory.getInstance()!.getInstance(orderReview)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentTransactionInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generatePaymentTransactionInterfaceFromTestData()", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

