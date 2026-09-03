
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
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { PaymentGatewayData } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
      //not GWT import const PaymentGatewayData = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayData;

      
import { PaymentGatewayInterfaceFactoryInterface } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterfaceFactoryInterface.js';
      //not GWT import const PaymentGatewayInterfaceFactoryInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayInterfaceFactoryInterface;

      
import { PaymentGatewayDomNodeFactoryInterface } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/modules/gateway/PaymentGatewayDomNodeFactoryInterface.js';
      //not GWT import const PaymentGatewayDomNodeFactoryInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.modules.gateway.PaymentGatewayDomNodeFactoryInterface;

      
import { StdUtil } from '../../../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { AbPathData } from '../../../../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
import { Replace } from '../../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js';
      //not GWT import const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
//not plain js import { CommonSeps } from '../../../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicPaymentTypeUtil } from './BasicPaymentTypeUtil.js';
//not GWT import const BasicPaymentTypeUtil = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentTypeUtil;

                
export class BasicPaymentType
            extends Object
         {
        

    private name: string;

    private value: string;

    private paymentGatewayInterfaceFactoryInterface: PaymentGatewayInterfaceFactoryInterface;

    private paymentGatewayDomNodeFactoryInterface: PaymentGatewayDomNodeFactoryInterface;

protected constructor (paymentMethod: string){

            super();
        this.init(paymentMethod);
    
}


protected constructor (paymentMethod: string, paymentGatewayInterfaceFactoryInterface: PaymentGatewayInterfaceFactoryInterface, paymentGatewayDomNodeFactoryInterface: PaymentGatewayDomNodeFactoryInterface){

            super();
        this.init(paymentMethod);
    
this.paymentGatewayInterfaceFactoryInterface= paymentGatewayInterfaceFactoryInterface;
    
this.paymentGatewayDomNodeFactoryInterface= paymentGatewayDomNodeFactoryInterface;
    
}


    init(paymentMethod: string){

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    var UNDERSCORE: string = "_";;
    
hashMap!.put(CommonSeps.getInstance()!.SPACE, UNDERSCORE);
    
hashMap!.put(AbPathData.getInstance()!.EXTENSION_SEP, UNDERSCORE);
    
hashMap!.put("-", UNDERSCORE);
    

    var replace: Replace = new Replace(hashMap);;
    
this.name= replace.all(paymentMethod);
    
this.value= paymentMethod;
    
BasicPaymentTypeUtil.getInstance()!.add(this);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getValue(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
}


                //@Throws(Exception.constructor)
            
    public getPaymentGatewayInterfaceFactoryInterface(): PaymentGatewayInterfaceFactoryInterface{

                        if(this.paymentGatewayInterfaceFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("PaymentGatewayInterfaceFactoryInterface is Null");
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentGatewayInterfaceFactoryInterface;
    
}


                //@Throws(Exception.constructor)
            
    public getPaymentGatewayDomNodeFactoryInterface(): PaymentGatewayDomNodeFactoryInterface{

                        if(this.paymentGatewayDomNodeFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("PaymentGatewayDomNodeFactoryInterface is Null");
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentGatewayDomNodeFactoryInterface;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName();;
    
}


    public toVector(): BasicArrayList{

    var vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(this.name);
    
vector.add(this.value);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(PaymentGatewayData.NAME.toString(), this.name);
    
hashMap!.put(PaymentGatewayData.VALUE.toString(), this.value);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


}



