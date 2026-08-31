
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
        
import { StoreFront } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFront.js';
      //not GWT import const StoreFront = globalThis.org.allbinary.business.context.modules.storefront.StoreFront;

      
//not plain js import { StringMaker } from '../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } from '../../../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Serializable } from './Serializable.js';
//not GWT import const  = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.Serializable;

                import { PaymentGateway } from './PaymentGateway.js';
//not GWT import const  = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGateway;

                
export class PaymentGatewayPrimaryKey
            extends Object
         implements java.io.Serializable {
        

    private storeName: string;

    private name: string;

public constructor (storeName: string, gatewayName: string){

            super();
        this.setStoreName(storeName);
    
this.setName(gatewayName);
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeName;
    
}


    public setStoreName(storeName: string){
this.storeName= storeName;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(name: string){
this.name= name;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(PaymentGatewayPrimaryKey.constructor.toString()!);
    
stringBuffer!.append(StoreFront.constructor.toString()!);
    
stringBuffer!.append(" =");
    
stringBuffer!.append(this.getStoreName());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(PaymentGateway.constructor.toString()!);
    
stringBuffer!.append("=");
    
stringBuffer!.append(this.getName());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



