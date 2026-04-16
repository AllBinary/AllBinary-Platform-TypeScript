
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        

import { INTEGER_ARRAY } from "./INTEGER_ARRAY.js";

import {  } from "./.js";

export class SmallIntegerSingletonFactory
            extends Object
         {
        

    private static readonly instance: SmallIntegerSingletonFactory = new SmallIntegerSingletonFactory();
        
        

    public static getInstance(): SmallIntegerSingletonFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly NEGATIVE_MAX: number = 500;
        
        

    public readonly POSITIVE_MAX: number = 0x2D1;
        
        

    private readonly INTEGER_ARRAY: Integer[] = new Array(NEGATIVE_MAX +POSITIVE_MAX);
        
        

    private readonly STRING_ARRAY: string[] = new Array(NEGATIVE_MAX +POSITIVE_MAX);
        
        

    public MIN: number = 0;
        
        

    public lastMin: number = 0;
        
        

    public lastNegativeMin: number = 0;
        
        

    public init(value: number, negativeValue: number){
var value = value
var negativeValue = negativeValue




                        for (
    var index: number = value -1;
        
        
index >= lastMin; index--)
        {
INTEGER_ARRAY[index +NEGATIVE_MAX]= new Integer(index);
    
}





                        for (
    var index: number = negativeValue -1;
        
        
index >= lastNegativeMin; index--)
        {
INTEGER_ARRAY[index]= new Integer( -index);
    
}


                        if(lastMin < value)
                        
                                    {
                                    lastMin= value;
    
MIN= value;
    

                                    }
                                

                        if(lastNegativeMin < negativeValue)
                        
                                    {
                                    lastNegativeMin= negativeValue;
    

                                    }
                                
}


    public init(){

                        if(lastMin < POSITIVE_MAX || lastNegativeMin < NEGATIVE_MAX)
                        
                                    {
                                    



                        for (
    var index: number = POSITIVE_MAX -1;
        
        
index >= lastMin; index--)
        {
INTEGER_ARRAY[index +NEGATIVE_MAX]= new Integer(index);
    
}





                        for (
    var index: number = NEGATIVE_MAX -1;
        
        
index >= lastNegativeMin; index--)
        {
INTEGER_ARRAY[index]= new Integer( -index);
    
}

lastMin= POSITIVE_MAX;
    
lastNegativeMin= NEGATIVE_MAX;
    

                                    }
                                
}

private constructor (){

            super();
            }


    public getInstance(index: number): Integer{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return INTEGER_ARRAY[index +NEGATIVE_MAX]!;
    
}


    public getInstanceNoThrow(index: number): Integer{
var index = index

                        if(index +NEGATIVE_MAX > this.INTEGER_ARRAY.length -1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return INTEGER_ARRAY[ -1 +NEGATIVE_MAX]!;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return INTEGER_ARRAY[index +NEGATIVE_MAX]!;
    
}


    public createInstance(index: number): Integer{
var index = index

    var integer: Integer = getInstance(index)!;
        
        
;
    

                        if(integer == 
                                    null
                                )
                        
                                    {
                                    integer= new Integer(index);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return integer;
    
}


    public getString(index: number): string{
var index = index

    var i: number = index +NEGATIVE_MAX;
        
        
;
    

                        if(STRING_ARRAY[i] == 
                                    null
                                )
                        
                                    {
                                    STRING_ARRAY[i]= this.INTEGER_ARRAY[i]!.toString();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return STRING_ARRAY[i]!;
    
}


}
                
            

