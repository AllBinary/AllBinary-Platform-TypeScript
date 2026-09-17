
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

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

import { PaymentGatewayData } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
//not GWT import const PaymentGatewayData

import { PaymentProcessorInterfaceFactoryInterface } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/processor/PaymentProcessorInterfaceFactoryInterface.js';
//not GWT import const PaymentProcessorInterfaceFactoryInterface

import { PaymentTransactionInterfaceFactoryInterface } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/PaymentTransactionInterfaceFactoryInterface.js';
//not GWT import const PaymentTransactionInterfaceFactoryInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicPaymentType } from './BasicPaymentType.js';
//not GWT import - same folder const BasicPaymentType
import { PaymentTypeUtil } from './PaymentTypeUtil.js';
//not GWT import - same folder const PaymentTypeUtil

export class PaymentType
            extends Object
         {
        

    private readonly basicPaymentType: BasicPaymentType;

    private readonly paymentTransactionInterfaceFactoryInterface: PaymentTransactionInterfaceFactoryInterface;

    private readonly paymentProcessorInterfaceFactoryInterface: PaymentProcessorInterfaceFactoryInterface;

protected constructor (basicPaymentType: BasicPaymentType){

            super();
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
        this.basicPaymentType= basicPaymentType;
    
this.paymentTransactionInterfaceFactoryInterface= paymentTransactionInterfaceFactoryInterface;
    
this.paymentProcessorInterfaceFactoryInterface= paymentProcessorInterfaceFactoryInterface;
    
PaymentTypeUtil.getInstance()!.add(this);
    
}


                //@Throws(Exception.constructor)
            
    public getPaymentTransactionInterfaceFactoryInterface(): PaymentTransactionInterfaceFactoryInterface{

                        if(this.paymentTransactionInterfaceFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("PaymentTransactionInterfaceFactoryInterface is Null");
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentTransactionInterfaceFactoryInterface;
    
}


                //@Throws(Exception.constructor)
            
    public getPaymentProcessorInterfaceFactoryInterface(): PaymentProcessorInterfaceFactoryInterface{

                        if(this.paymentProcessorInterfaceFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("PaymentProcessorInterfaceFactoryInterface is Null");
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentProcessorInterfaceFactoryInterface;
    
}


    public toVector(): BasicArrayList{

    var vector: BasicArrayList = new BasicArrayListD();;
    
vector.addAllList(this.getBasicPaymentType()!.toVector());
    

                        if(this.paymentTransactionInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    vector.add(this.paymentTransactionInterfaceFactoryInterface!.constructor.name.toString()!);
    

                                    }
                                

                        if(this.paymentProcessorInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    vector.add(this.paymentProcessorInterfaceFactoryInterface!.constructor.name.toString()!);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.putAll(this.getBasicPaymentType()!.toHashMap());
    

                        if(this.paymentTransactionInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    hashMap!.put(PaymentGatewayData.PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE.toString(), this.paymentTransactionInterfaceFactoryInterface!.constructor.name.toString()!);
    

                                    }
                                

                        if(this.paymentProcessorInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    hashMap!.put(PaymentGatewayData.PAYMENTPROCESSORINTERFACEFACTORYINTERFACE.toString(), this.paymentProcessorInterfaceFactoryInterface!.constructor.name.toString()!);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public getBasicPaymentType(): BasicPaymentType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicPaymentType;
    
}


}



