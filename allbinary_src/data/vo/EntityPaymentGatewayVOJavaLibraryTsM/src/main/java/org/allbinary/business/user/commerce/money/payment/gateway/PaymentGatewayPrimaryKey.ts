
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
//not GWT import const StoreFront

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Serializable } from './Serializable.js';
//sameFolderImports - not GWT import - same folder const Serializable
import { PaymentGateway } from './PaymentGateway.js';
//sameFolderImports - not GWT import - same folder const PaymentGateway

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

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(PaymentGatewayPrimaryKey.toString()!);
    
stringBuffer!.append(StoreFront.toString()!);
    
stringBuffer!.append(" =");
    
stringBuffer!.append(this.getStoreName());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(PaymentGateway.toString()!);
    
stringBuffer!.append("=");
    
stringBuffer!.append(this.getName());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

