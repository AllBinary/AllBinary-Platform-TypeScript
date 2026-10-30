
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicPaymentType } from './BasicPaymentType.js';
//sameFolderImports - not GWT import - same folder const BasicPaymentType

export class BasicPaymentTypeUtil
            extends Object
         {
        

    private static readonly instance: BasicPaymentTypeUtil = new BasicPaymentTypeUtil();

                private static initResult: number = BasicPaymentTypeUtil.init();
                private static init(): number { 
                    


                    return 0;
                }
            
    public static getInstance(): BasicPaymentTypeUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicPaymentTypeUtil.instance;
    
}


private constructor (){

            super();
        }


    private paymentTypeVector: BasicArrayList = new BasicArrayListD();

    public add(paymentType: BasicPaymentType){
this.paymentTypeVector!.add(paymentType);
    
}


                //@Throws(Exception.constructor)
            
    public get(paymentTypeString: string): BasicPaymentType{

    let size: number = this.paymentTypeVector!.size()!;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let paymentType: BasicPaymentType = this.paymentTypeVector!.get(i) as BasicPaymentType;;
    

                        if(paymentType!.getName()!.compareTo(paymentTypeString) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentType;
    

                                    }
                                
}




                            throw new Exception("Unknown PaymentType: " +paymentTypeString);
                    
}


    public isContain(paymentType: BasicPaymentType): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentTypeVector!.contains(paymentType);;
    
}


    public difference(a_PaymentTypeVector: BasicArrayList): BasicArrayList{

    let diff: BasicArrayList = new BasicArrayListD();;
    

    let size: number = this.paymentTypeVector!.size()!;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let paymentType: BasicPaymentType = this.paymentTypeVector!.get(i) as BasicPaymentType;;
    

                        if(!a_PaymentTypeVector!.contains(paymentType))
                        diff.add(paymentType)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return diff;
    
}


}

