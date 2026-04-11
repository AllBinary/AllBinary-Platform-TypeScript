
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
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

export class PrimitiveLongSingleton
            extends Object
         {
        

    private static readonly instance: PrimitiveLongSingleton = new PrimitiveLongSingleton();
        
        

    public static getInstance(): PrimitiveLongSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly UNK: string[] = charArrayOf('U','n','k');
        
        

    public readonly NUMBER_ARRAY: number[] = byteArrayOf(0,1,2,3,4,5,6,7,8,9);
        
        

    public readonly NUMBER_CHAR_ARRAY: string[] = charArrayOf('0','1','2','3','4','5','6','7','8','9');
        
        

    public readonly NUMBER_CHAR_ARRAYS: string[][] = 
                                                        [
                                                            charArrayOf('0'),charArrayOf('1'),charArrayOf('2'),charArrayOf('3'),charArrayOf('4'),charArrayOf('5'),charArrayOf('6'),charArrayOf('7'),charArrayOf('8'),charArrayOf('9')
                                                        ];
        
        

    public readonly ZERO: string[] = 
                                                        
                                                        charArrayOf(this.NUMBER_CHAR_ARRAY[0];
        
        )
                                                    ;
        
        

                //@Throws(Error::class)
            
    public getNumberFromChar(numberAsChar: string): number{
var numberAsChar = numberAsChar

    var size: number = NUMBER_CHAR_ARRAY.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(NUMBER_CHAR_ARRAY[index] == numberAsChar)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NUMBER_ARRAY[index]!;
    

                                    }
                                
}




                            throw Error(StringMaker().
                            append("numberAsChar was not in array: ")!.appendchar(numberAsChar)!.toString())
}


}
                
            

