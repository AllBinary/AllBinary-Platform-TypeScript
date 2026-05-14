
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
        
import { Vector } from '../../../../../../../../java/util/Vector.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicPaymentType } from './BasicPaymentType.js';

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


    private paymentTypeVector: Vector = new Vector();

    public add(paymentType: BasicPaymentType){
var paymentType = paymentType
this.paymentTypeVector!.add(paymentType);
    
}


                //@Throws(Exception.constructor)
            
    public get(paymentTypeString: string): BasicPaymentType{
var paymentTypeString = paymentTypeString

    var size: number = this.paymentTypeVector!.length!;
;
    




                        for (
    var i: number = 0;
i < size; i++)
        {

    var paymentType: BasicPaymentType = this.paymentTypeVector!.get(i) as BasicPaymentType;
;
    

                        if(paymentType!.getName()!.localeCompare(paymentTypeString) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentType;
    

                                    }
                                
}




                            throw new Exception("Unknown PaymentType: " +paymentTypeString);
                    
}


    public isContain(paymentType: BasicPaymentType): boolean{
var paymentType = paymentType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentTypeVector!.contains(paymentType);;
    
}


    public difference(a_PaymentTypeVector: Vector): Vector{
var a_PaymentTypeVector = a_PaymentTypeVector

    var diff: Vector = new Vector();
;
    

    var size: number = this.paymentTypeVector!.length!;
;
    




                        for (
    var i: number = 0;
i < size; i++)
        {

    var paymentType: BasicPaymentType = this.paymentTypeVector!.get(i) as BasicPaymentType;
;
    

                        if(!a_PaymentTypeVector!.contains(paymentType))
                        diff.add(paymentType)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return diff;
    
}


}
                
            

