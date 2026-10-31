
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
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { PaymentGatewayData } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
//not GWT import const PaymentGatewayData

import { PaymentGatewayInterfaceFactoryInterface } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterfaceFactoryInterface.js';
//not GWT import const PaymentGatewayInterfaceFactoryInterface

import { PaymentGatewayDomNodeFactoryInterface } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/modules/gateway/PaymentGatewayDomNodeFactoryInterface.js';
//not GWT import const PaymentGatewayDomNodeFactoryInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

import { Replace } from '../../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js';
//not GWT import const Replace

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicPaymentTypeUtil } from './BasicPaymentTypeUtil.js';
//sameFolderImports - not GWT import - same folder const BasicPaymentTypeUtil

export class BasicPaymentType
            extends Object
         {
        

    private name: string;

    private value: string;

    private paymentGatewayInterfaceFactoryInterface: PaymentGatewayInterfaceFactoryInterface;

    private paymentGatewayDomNodeFactoryInterface: PaymentGatewayDomNodeFactoryInterface;

    public constructor(...args: any[]) {
        super();
        if(args.length === 1) {
            this.constructor$0(args[0]);
        }
        else if(args.length === 3) {
            this.constructor$1(args[0], args[1], args[2]);
        }
        
    }
    
    private constructor$0(paymentMethod: string): void {
        this.init(paymentMethod);
    

    }
    
    private constructor$1(paymentMethod: string, paymentGatewayInterfaceFactoryInterface: PaymentGatewayInterfaceFactoryInterface, paymentGatewayDomNodeFactoryInterface: PaymentGatewayDomNodeFactoryInterface): void {
        this.init(paymentMethod);
    
this.paymentGatewayInterfaceFactoryInterface= paymentGatewayInterfaceFactoryInterface;
    
this.paymentGatewayDomNodeFactoryInterface= paymentGatewayDomNodeFactoryInterface;
    

    }
    
    init(paymentMethod: string){

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let UNDERSCORE: string = "_";;
    
hashMap!.put(CommonSeps.getInstance()!.SPACE, UNDERSCORE);
    
hashMap!.put(AbPathData.getInstance()!.EXTENSION_SEP, UNDERSCORE);
    
hashMap!.put("-", UNDERSCORE);
    

    let replace: Replace = new Replace(hashMap);;
    
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

    let vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(this.name);
    
vector.add(this.value);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toHashMap(): HashMap<any, any>{

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
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

