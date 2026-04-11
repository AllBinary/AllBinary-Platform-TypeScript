
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
        



            import Vector from "@ohos.util.Vector";
        
import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../../../../java/util/Vector.js";

    
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
this.basicPaymentType= basicPaymentType;
    
this.paymentTransactionInterfaceFactoryInterface= 
                                        null
                                    ;
    
this.paymentProcessorInterfaceFactoryInterface= 
                                        null
                                    ;
    
PaymentTypeUtil.getInstance()!.add(this);
    
}

protected constructor (basicPaymentType: BasicPaymentType, paymentTransactionInterfaceFactoryInterface: PaymentTransactionInterfaceFactoryInterface, paymentProcessorInterfaceFactoryInterface: PaymentProcessorInterfaceFactoryInterface){

            super();
            var basicPaymentType = basicPaymentType
var paymentTransactionInterfaceFactoryInterface = paymentTransactionInterfaceFactoryInterface
var paymentProcessorInterfaceFactoryInterface = paymentProcessorInterfaceFactoryInterface
this.basicPaymentType= basicPaymentType;
    
this.paymentTransactionInterfaceFactoryInterface= paymentTransactionInterfaceFactoryInterface;
    
this.paymentProcessorInterfaceFactoryInterface= paymentProcessorInterfaceFactoryInterface;
    
PaymentTypeUtil.getInstance()!.add(this);
    
}


                //@Throws(Error::class)
            
    public getPaymentTransactionInterfaceFactoryInterface(): PaymentTransactionInterfaceFactoryInterface{

                        if(this.paymentTransactionInterfaceFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("PaymentTransactionInterfaceFactoryInterface is Null")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentTransactionInterfaceFactoryInterface;
    
}


                //@Throws(Error::class)
            
    public getPaymentProcessorInterfaceFactoryInterface(): PaymentProcessorInterfaceFactoryInterface{

                        if(this.paymentProcessorInterfaceFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("PaymentProcessorInterfaceFactoryInterface is Null")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentProcessorInterfaceFactoryInterface;
    
}


    public toVector(): Vector{

    var vector: Vector = new Vector();
        
        
;
    
vector.addAll(this.getBasicPaymentType()!.toVector());
    

                        if(this.paymentTransactionInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    vector.add(this.paymentTransactionInterfaceFactoryInterface!..constructor.name.toString()!);
    

                                    }
                                

                        if(this.paymentProcessorInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    vector.add(this.paymentProcessorInterfaceFactoryInterface!..constructor.name.toString()!);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.putAll(this.getBasicPaymentType()!.toHashMap());
    

                        if(this.paymentTransactionInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    hashMap!.put(PaymentGatewayData.PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE.toString(), this.paymentTransactionInterfaceFactoryInterface!..constructor.name.toString()!);
    

                                    }
                                

                        if(this.paymentProcessorInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    hashMap!.put(PaymentGatewayData.PAYMENTPROCESSORINTERFACEFACTORYINTERFACE.toString(), this.paymentProcessorInterfaceFactoryInterface!..constructor.name.toString()!);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public getBasicPaymentType(): BasicPaymentType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicPaymentType;
    
}


}
                
            

