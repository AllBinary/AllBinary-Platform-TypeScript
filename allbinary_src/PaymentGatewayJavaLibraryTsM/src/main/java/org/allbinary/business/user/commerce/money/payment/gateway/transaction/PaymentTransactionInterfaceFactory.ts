
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
        
import { OrderHistory } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
//not GWT import const OrderHistory

import { PaymentType } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentType.js';
//not GWT import const PaymentType

import { PaymentTypeUtil } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentTypeUtil.js';
//not GWT import const PaymentTypeUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentTransactionInterfaceFactoryInterface } from './PaymentTransactionInterfaceFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const PaymentTransactionInterfaceFactoryInterface
import { PaymentTransactionInterface } from './PaymentTransactionInterface.js';
//sameFolderImports - not GWT import - same folder const PaymentTransactionInterface

export class PaymentTransactionInterfaceFactory
            extends Object
         {
        

    private static readonly instance: PaymentTransactionInterfaceFactory = new PaymentTransactionInterfaceFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): PaymentTransactionInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PaymentTransactionInterfaceFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(orderReview: OrderHistory): PaymentTransactionInterface{

 try { 
    let gatewayName: string = orderReview!.getPaymentMethod()!;;
    

                        if(gatewayName != 
                                    null
                                )
                        
                                    {
                                    
    let paymentType: PaymentType = PaymentTypeUtil.getInstance()!.get(gatewayName)!;;
    

    let paymentTransactionInterfaceFactoryInterface: PaymentTransactionInterfaceFactoryInterface = paymentType!.getPaymentTransactionInterfaceFactoryInterface()!;;
    

    let paymentTransactionInterface: PaymentTransactionInterface = paymentTransactionInterfaceFactoryInterface!.getInstance(orderReview)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentTransactionInterface;
    

                                    }
                                



                            throw new Exception("Failed to create PaymentTransactionInterface: " +"GatewayName is: " +gatewayName);
                    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put("Failed to generate test data", this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

