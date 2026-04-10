
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { PaymentGatewayData } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js";

    
import { PaymentProcessorInterfaceFactoryInterface } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/processor/PaymentProcessorInterfaceFactoryInterface.js";

    
import { PaymentTransactionInterfaceFactoryInterface } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/PaymentTransactionInterfaceFactoryInterface.js";

    

export class PaymentType
            extends Object
         {
        

    private readonly basicPaymentType: BasicPaymentType

    private readonly paymentTransactionInterfaceFactoryInterface: PaymentTransactionInterfaceFactoryInterface

    private readonly paymentProcessorInterfaceFactoryInterface: PaymentProcessorInterfaceFactoryInterface
protected constructor (basicPaymentType: BasicPaymentType){

            super();
            var basicPaymentType = basicPaymentType
this.basicPaymentType= basicPaymentType
this.paymentTransactionInterfaceFactoryInterface= 
                                        null
                                    
this.paymentProcessorInterfaceFactoryInterface= 
                                        null
                                    
add(this)
}

protected constructor (basicPaymentType: BasicPaymentType, paymentTransactionInterfaceFactoryInterface: PaymentTransactionInterfaceFactoryInterface, paymentProcessorInterfaceFactoryInterface: PaymentProcessorInterfaceFactoryInterface){

            super();
            var basicPaymentType = basicPaymentType
var paymentTransactionInterfaceFactoryInterface = paymentTransactionInterfaceFactoryInterface
var paymentProcessorInterfaceFactoryInterface = paymentProcessorInterfaceFactoryInterface
this.basicPaymentType= basicPaymentType
this.paymentTransactionInterfaceFactoryInterface= paymentTransactionInterfaceFactoryInterface
this.paymentProcessorInterfaceFactoryInterface= paymentProcessorInterfaceFactoryInterface
add(this)
}


                @Throws(Exception::class)
            
    public getPaymentTransactionInterfaceFactoryInterface(): PaymentTransactionInterfaceFactoryInterface{

    
                        if(this.paymentTransactionInterfaceFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("PaymentTransactionInterfaceFactoryInterface is Null")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentTransactionInterfaceFactoryInterface;
    
}


                @Throws(Exception::class)
            
    public getPaymentProcessorInterfaceFactoryInterface(): PaymentProcessorInterfaceFactoryInterface{

    
                        if(this.paymentProcessorInterfaceFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("PaymentProcessorInterfaceFactoryInterface is Null")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentProcessorInterfaceFactoryInterface;
    
}


    public toVector(): Vector{

    var vector: Vector = new Vector();
        
        

addAll(this.getBasicPaymentType()!.toVector())

    
                        if(this.paymentTransactionInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    add(this.paymentTransactionInterfaceFactoryInterface!.::class.toString()!)

                                    }
                                

    
                        if(this.paymentProcessorInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    add(this.paymentProcessorInterfaceFactoryInterface!.::class.toString()!)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toHashMap(): HashMap<Any, Any>{

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

putAll(this.getBasicPaymentType()!.toHashMap())

    
                        if(this.paymentTransactionInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    put(PaymentGatewayData.PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE.toString(), this.paymentTransactionInterfaceFactoryInterface!.::class.toString()!)

                                    }
                                

    
                        if(this.paymentProcessorInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    put(PaymentGatewayData.PAYMENTPROCESSORINTERFACEFACTORYINTERFACE.toString(), this.paymentProcessorInterfaceFactoryInterface!.::class.toString()!)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public getBasicPaymentType(): BasicPaymentType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicPaymentType;
    
}


}
                
            

