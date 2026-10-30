
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
        
import { PaymentTransactionInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/PaymentTransactionInterface.js';
//not GWT import const PaymentTransactionInterface

import { PaymentTransactionInterfaceRequestFactory } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/PaymentTransactionInterfaceRequestFactory.js';
//not GWT import const PaymentTransactionInterfaceRequestFactory

import { PaymentType } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentType.js';
//not GWT import const PaymentType

import { PaymentTypeUtil } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentTypeUtil.js';
//not GWT import const PaymentTypeUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { StringValidationUtil } from '../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { TransformInfoInterface } from '../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentProcessorInterfaceFactoryInterface } from './PaymentProcessorInterfaceFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const PaymentProcessorInterfaceFactoryInterface
import { PaymentProcessorInterface } from './PaymentProcessorInterface.js';
//sameFolderImports - not GWT import - same folder const PaymentProcessorInterface

export class PaymentProcessorInterfaceFactory
            extends Object
         {
        

    private static readonly instance: PaymentProcessorInterfaceFactory = new PaymentProcessorInterfaceFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): PaymentProcessorInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PaymentProcessorInterfaceFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getInstance$overload2(transformInfoInterface: TransformInfoInterface): PaymentProcessorInterface{

 try { 
    let paymentTransactionInterface: PaymentTransactionInterface = PaymentTransactionInterfaceRequestFactory.getInstance()!.getInstance(transformInfoInterface)!;;
    

    let gatewayName: string = paymentTransactionInterface!.getOrderHistory()!.getPaymentMethod()!;;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(gatewayName))
                        
                                    {
                                    
    let paymentType: PaymentType = PaymentTypeUtil.getInstance()!.get(gatewayName)!;;
    

    let paymentProcessorInterfaceFactoryInterface: PaymentProcessorInterfaceFactoryInterface = paymentType!.getPaymentProcessorInterfaceFactoryInterface()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentProcessorInterfaceFactoryInterface!.getInstance(transformInfoInterface, paymentTransactionInterface) as PaymentProcessorInterface;
    

                                    }
                                



                            throw new Exception("Error Getting PaymentProcessorInterface");
                    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

