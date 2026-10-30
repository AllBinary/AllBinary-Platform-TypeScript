
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PrimitiveLongSingleton } from './PrimitiveLongSingleton.js';
//sameFolderImports - not GWT import - same folder const PrimitiveLongSingleton
//not plain js - same folder import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;

export class PrimitiveLongUtil
            extends Object
         {
        

    public static createPowerOfTen(powerOfTen: number): PrimitiveLongUtil{

    let primitiveLongUtil: PrimitiveLongUtil = new PrimitiveLongUtil(powerOfTen, NullUtil.getInstance()!.NULL_OBJECT);;
    

                        if(powerOfTen % 10 != 0)
                        
                                    {
                                    
    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, primitiveLongUtil, commonStrings!.CONSTRUCTOR, new Exception("Max must be power of 10"));
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return primitiveLongUtil;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private powerOfTen: number;

    private maxValue: number;

    private maxDigits: number;

    private readonly charArray: string[];

    private currentTotalDigits: number= 0;

    private readonly primitiveLongSingleton: PrimitiveLongSingleton = PrimitiveLongSingleton.getInstance()!;

public constructor (powerOfTen: number, unused: any){

            super();
        this.maxDigits= MathUtil.getInstance()!.getTotalDigits(powerOfTen);
    
this.powerOfTen= powerOfTen;
    
this.maxValue= (powerOfTen *10) -1;
    
this.charArray= new Array(this.maxDigits);
    
}


    public getCharArray(value: number): string[]{

                        if(value < 10)
                        
                                    {
                                    this.setCurrentTotalDigits(1);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.primitiveLongSingleton!.NUMBER_CHAR_ARRAYS[value]!;
    

                                    }
                                

                        if(value > this.maxValue)
                        
                                    {
                                    this.setCurrentTotalDigits(3);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.primitiveLongSingleton!.UNK;
    

                                    }
                                

    let index: number = 0;;
    

    let div: number = this.powerOfTen;;
    

    let lastValue: number = 0;;
    

        while(div >= 1)
        {

    let digit: number = globalThis.Math.trunc((value -lastValue) /div);;
    

                        if(digit >= 0 && digit < 10)
                        
                                    {
                                    
                        if(digit == 0 && index == 0)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.charArray[index++]= this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY[digit]!;
    

                        }
                            
lastValue += digit *div;
    

                                    }
                                
div= globalThis.Math.trunc(div /10);
    
}

this.setCurrentTotalDigits(index);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.charArray;
    
}


    setCurrentTotalDigits(currentTotalDigits: number){
this.currentTotalDigits= currentTotalDigits;
    
}


    public getCurrentTotalDigits(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentTotalDigits;
    
}


    public getMaxDigits(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxDigits;
    
}


}

