
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

    
import { PaymentGatewayInterfaceFactoryInterface } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterfaceFactoryInterface.js";

    
import { PaymentGatewayDomNodeFactoryInterface } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/modules/gateway/PaymentGatewayDomNodeFactoryInterface.js";

    
import { AbPathData } from "../../../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { Replace } from "../../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { CommonSeps } from "../../../../../../../../org/allbinary/string/CommonSeps.js";

    

export class BasicPaymentType
            extends Object
         {
        

    private name: string

    private value: string

    private paymentGatewayInterfaceFactoryInterface: PaymentGatewayInterfaceFactoryInterface

    private paymentGatewayDomNodeFactoryInterface: PaymentGatewayDomNodeFactoryInterface
protected constructor (paymentMethod: string){

            super();
            var paymentMethod = paymentMethod
this.this.init(paymentMethod)
}

protected constructor (paymentMethod: string, paymentGatewayInterfaceFactoryInterface: PaymentGatewayInterfaceFactoryInterface, paymentGatewayDomNodeFactoryInterface: PaymentGatewayDomNodeFactoryInterface){

            super();
            var paymentMethod = paymentMethod
var paymentGatewayInterfaceFactoryInterface = paymentGatewayInterfaceFactoryInterface
var paymentGatewayDomNodeFactoryInterface = paymentGatewayDomNodeFactoryInterface
this.this.init(paymentMethod)
this.paymentGatewayInterfaceFactoryInterface= paymentGatewayInterfaceFactoryInterface
this.paymentGatewayDomNodeFactoryInterface= paymentGatewayDomNodeFactoryInterface
}


    init(paymentMethod: string){
var paymentMethod = paymentMethod

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var UNDERSCORE: string = "_";
        
        

hashMap!.put(CommonSeps.getInstance()!.SPACE, UNDERSCORE)
hashMap!.put(AbPathData.getInstance()!.EXTENSION_SEP, UNDERSCORE)
hashMap!.put("-", UNDERSCORE)

    var replace: Replace = new Replace(hashMap);
        
        

this.name= replace.all(paymentMethod)
this.value= paymentMethod
BasicPaymentTypeUtil.getInstance()!.add(this)
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getValue(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
}


                //@Throws(Error::class)
            
    public getPaymentGatewayInterfaceFactoryInterface(): PaymentGatewayInterfaceFactoryInterface{

                        if(this.paymentGatewayInterfaceFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error("PaymentGatewayInterfaceFactoryInterface is Null")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentGatewayInterfaceFactoryInterface;
    
}


                //@Throws(Error::class)
            
    public getPaymentGatewayDomNodeFactoryInterface(): PaymentGatewayDomNodeFactoryInterface{

                        if(this.paymentGatewayDomNodeFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error("PaymentGatewayDomNodeFactoryInterface is Null")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentGatewayDomNodeFactoryInterface;
    
}


    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName();
    
}


    public toVector(): Vector{

    var vector: Vector = new Vector();
        
        

vector.add(this.name)
vector.add(this.value)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toHashMap(): HashMap<Any, Any>{

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

hashMap!.put(PaymentGatewayData.NAME.toString(), this.name)
hashMap!.put(PaymentGatewayData.VALUE.toString(), this.value)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


}
                
            

