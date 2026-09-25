
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
        
            import { System } from '../../java/lang/System.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //None - Do not use
export class TsUtil
            extends Object
         {
        

    private static readonly instance: TsUtil = new TsUtil();

    public static getInstance(): TsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TsUtil.instance;
    
}


    public hashCode(anyType: any = {}): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType!.hashCode();;
    
}


                //@Throws(InterruptedException.constructor)
            
    public waitFor(any: any = {}, timeoutMillis: number){

    var anyType: any = any;;
    
anyType!.wait(timeoutMillis);
    
}


    public getRecord(anyType: any = {}, recordId: number): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


    public compareTo(a: string, b: string): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return a.compareTo(b);;
    
}


    public equalIgnoreCase(a: string, b: string): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return a.equalsIgnoreCase(b);;
    
}


    public equalsNotstring(anyType: any = {}, object2: any = {}): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType! === object2;;
    
}


    public toNumberFromChar(value: string): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(value);
    
}


    public toNumber(value: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


    public getByteArray(string: string): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return string.getBytes();;
    
}


    public isItemListener(owner: any = {}): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public printAvailableMethods(anyType: any = {}){
}


    public gc(){
System.gc();
    
}


}



