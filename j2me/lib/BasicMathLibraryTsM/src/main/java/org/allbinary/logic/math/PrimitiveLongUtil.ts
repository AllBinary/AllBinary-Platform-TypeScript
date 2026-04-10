
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class PrimitiveLongUtil
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private powerOfTen: number

    private maxValue: number

    private maxDigits: number

    private readonly charArray: string[]

    private currentTotalDigits: number= 0

    private readonly primitiveLongSingleton: PrimitiveLongSingleton = PrimitiveLongSingleton.getInstance()!;
        
        
public constructor (powerOfTen: number)                        

                            : this(powerOfTen, false){

            super();
            var powerOfTen = powerOfTen


                            //For kotlin this is before the body of the constructor.
                    

                        if(powerOfTen % 10 != 0)
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, Error("Max must be power of 10"))

                                    }
                                
}

public constructor (powerOfTen: number, throwException: boolean){

            super();
            var powerOfTen = powerOfTen
var throwException = throwException
this.maxDigits= MathUtil.getInstance()!.getTotalDigits(powerOfTen)
this.powerOfTen= powerOfTen
this.maxValue= (powerOfTen *10) -1
this.charArray= new Array(this.maxDigits)
}


    public getCharArray(value: number): string[]{
var value = value

                        if(value < 10)
                        
                                    {
                                    this.setCurrentTotalDigits(1)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.primitiveLongSingleton!.NUMBER_CHAR_ARRAYS[value]!;
    

                                    }
                                

                        if(value > maxValue)
                        
                                    {
                                    this.setCurrentTotalDigits(3)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.primitiveLongSingleton!.UNK;
    

                                    }
                                

    var index: number = 0;
        
        


    var div: number = powerOfTen;
        
        


    var lastValue: number = 0;
        
        


        while(div >= 1)
        {

    var digit: number = (value -lastValue) /div;
        
        


                        if(digit >= 0 && digit < 10)
                        
                                    {
                                    
                        if(digit == 0 && index == 0)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.charArray[index++]= this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY[digit]!

                        }
                            
lastValue += digit *div

                                    }
                                
div= div /10
}

this.setCurrentTotalDigits(index)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.charArray;
    
}


    setCurrentTotalDigits(currentTotalDigits: number){
var currentTotalDigits = currentTotalDigits
this.currentTotalDigits= currentTotalDigits
}


    public getCurrentTotalDigits(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentTotalDigits;
    
}


    public getMaxDigits(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxDigits;
    
}


}
                
            

