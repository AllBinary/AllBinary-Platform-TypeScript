
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
        



import { Vector } from "../../../../../../../../java/util/Vector.js";

    

export class BasicPaymentTypeUtil
            extends Object
         {
        

    private static readonly instance: BasicPaymentTypeUtil = new BasicPaymentTypeUtil();
        
        

                init{
}

    public static getInstance(): BasicPaymentTypeUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    private paymentTypeVector: Vector = new Vector();
        
        

    public add(paymentType: BasicPaymentType){
var paymentType = paymentType
this.paymentTypeVector!.add(paymentType);
    
}


                //@Throws(Error::class)
            
    public get(paymentTypeString: string): BasicPaymentType{
var paymentTypeString = paymentTypeString

    var size: number = paymentTypeVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var paymentType: BasicPaymentType = paymentTypeVector!.get(i);

                         as BasicPaymentType;
        
        
;
    

                        if(paymentType!.getName()!.compareTo(paymentTypeString) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentType;
    

                                    }
                                
}




                            throw new Error("Unknown PaymentType: " +paymentTypeString)
}


    public isContain(paymentType: BasicPaymentType): boolean{
var paymentType = paymentType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentTypeVector!.contains(paymentType);

                        ;
    
}


    public difference(a_PaymentTypeVector: Vector): Vector{
var a_PaymentTypeVector = a_PaymentTypeVector

    var diff: Vector = new Vector();
        
        
;
    

    var size: number = paymentTypeVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var paymentType: BasicPaymentType = paymentTypeVector!.get(i);

                         as BasicPaymentType;
        
        
;
    

                        if(!a_PaymentTypeVector!.contains(paymentType);

                        )
                        diff.add(paymentType);

                        
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return diff;
    
}


}
                
            

