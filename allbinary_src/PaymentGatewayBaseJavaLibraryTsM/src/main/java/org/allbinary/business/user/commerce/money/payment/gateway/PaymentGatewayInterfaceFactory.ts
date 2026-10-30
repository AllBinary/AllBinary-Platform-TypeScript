
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { HttpServletRequest } from '../../../../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { BasicPaymentType } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js';
//not GWT import const BasicPaymentType

import { BasicPaymentTypeUtil } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js';
//not GWT import const BasicPaymentTypeUtil

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { RequestParams } from '../../../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
//not GWT import const RequestParams

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentGatewayInterfaceFactoryInterface } from './PaymentGatewayInterfaceFactoryInterface.js';
//not GWT import - same folder const PaymentGatewayInterfaceFactoryInterface
import { PaymentGatewayInterface } from './PaymentGatewayInterface.js';
//not GWT import - same folder const PaymentGatewayInterface
import { PaymentGatewayData } from './PaymentGatewayData.js';
//not GWT import - same folder const PaymentGatewayData

export class PaymentGatewayInterfaceFactory
            extends Object
         implements PaymentGatewayInterfaceFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }

getInstance(...args: any[]): any {
   
    if (args.length === 1) return this.getInstance$overload1(args[0]);
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
    if (args.length === 1) return this.getInstance$overload3(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(Exception.constructor)
            
    public getInstance$overload1(httpServletRequest: HttpServletRequest): PaymentGatewayInterface{

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF("Getting", this, commonStrings!.GET_INSTANCE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(new RequestParams(httpServletRequest).toHashMap());;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(HttpServletRequest)", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(paymentType: BasicPaymentType): PaymentGatewayInterface{

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(PaymentGatewayData.NAME.toString(), paymentType!.getName());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(hashMap);;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload3(hashMap: HashMap<any, any>): PaymentGatewayInterface{

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

 try { 
    let gatewayName: string = hashMap!.get(PaymentGatewayData.NAME.toString()) as string;;
    

    let paymentType: BasicPaymentType = BasicPaymentTypeUtil.getInstance()!.get(gatewayName)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF("Getting PaymentGatewayInterface for PaymentType: " +paymentType!.getName() +" with: " +hashMap, this, commonStrings!.GET_INSTANCE);
    

                                    }
                                

    let paymentGatewayInterfaceFactoryInterface: PaymentGatewayInterfaceFactoryInterface = paymentType!.getPaymentGatewayInterfaceFactoryInterface()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewayInterfaceFactoryInterface!.getInstance(hashMap);;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

