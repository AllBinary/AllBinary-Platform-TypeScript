
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
        
//not plain js import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StdUtil } from '../../../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicPaymentType } from './BasicPaymentType.js';
//not GWT import const BasicPaymentType = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentType;

                
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

    var size: number = this.paymentTypeVector!.size()!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var paymentType: BasicPaymentType = this.paymentTypeVector!.get(i) as BasicPaymentType;;
    

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

    var diff: BasicArrayList = new BasicArrayListD();;
    

    var size: number = this.paymentTypeVector!.size()!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var paymentType: BasicPaymentType = this.paymentTypeVector!.get(i) as BasicPaymentType;;
    

                        if(!a_PaymentTypeVector!.contains(paymentType))
                        diff.add(paymentType)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return diff;
    
}


}



