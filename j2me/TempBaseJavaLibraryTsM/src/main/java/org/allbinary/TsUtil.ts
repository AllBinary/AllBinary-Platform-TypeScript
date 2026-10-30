
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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

        


            import { Object } from '../../java/lang/Object.js';
        
            import { InterruptedException } from '../../java/lang/InterruptedException.js';
        
            import { Float } from '../../java/lang/Float.js';
        
            //import { Double } from '../../java/lang/Double.js';
            const Double = globalThis.java.lang.Double;
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //TempBase
export class TsUtil
            extends Object
         {
        

    private static readonly instance: TsUtil = new TsUtil();

    public static getInstance(): TsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TsUtil.instance;
    
}


    public longBitsToDouble(bits: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return java.lang.Double.longBitsToDouble(bits);;
    
}


    public intBitsToFloat(bits: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return java.lang.Float.intBitsToFloat(bits);;
    
}


    public hashCode(anyType: any): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType!.hashCode();;
    
}


                //@Throws(InterruptedException.constructor)
            
    public waitFor(any: any, timeoutMillis: number){

    let anyType: any = any;;
    
anyType!.wait(timeoutMillis);
    
}


    public compareTo(a: string, b: string): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return a.compareTo(b);;
    
}


}

