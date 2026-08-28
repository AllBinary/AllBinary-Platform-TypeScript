
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PrimitiveLongSingleton
            extends Object
         {
        

    private static readonly instance: PrimitiveLongSingleton = new PrimitiveLongSingleton();

    public static getInstance(): PrimitiveLongSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveLongSingleton.instance;
    
}


    public readonly UNK: string[] = ['U','n','k'];

    public readonly NUMBER_ARRAY: number[] = [0,1,2,3,4,5,6,7,8,9];

    public readonly NUMBER_CHAR_ARRAY: string[] = ['0','1','2','3','4','5','6','7','8','9'];

    public readonly NUMBER_CHAR_ARRAYS: string[][] = 
                                                        [
                                                            ['0'],['1'],['2'],['3'],['4'],['5'],['6'],['7'],['8'],['9']
                                                        ];

    public readonly ZERO: string[] = 
                                                        
                                                        [this.NUMBER_CHAR_ARRAY[0]]
                                                    ;

                //@Throws(Exception.constructor)
            
    public getNumberFromChar(numberAsChar: string): number{

    var size: number = this.NUMBER_CHAR_ARRAY.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

                        if(this.NUMBER_CHAR_ARRAY[index] == numberAsChar)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NUMBER_ARRAY[index]!;
    

                                    }
                                
}




                            throw new Exception(new StringMaker().append("numberAsChar was not in array: ")!.appendchar(numberAsChar)!.toString());
                    
}


}



