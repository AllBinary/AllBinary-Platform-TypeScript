
        /* Generated Code Do Not Modify */
        



import { MathUtil } from "../../../org/allbinary/logic/math/MathUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    

export class ArrayUtil
            extends Object
         {
        

    private static readonly instance: ArrayUtil = new ArrayUtil();
        
        

    public static getInstance(): ArrayUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;
        
        

    public copyOf(original: any[], newLength: number): any[]{
    //var original = original
    //var newLength = newLength



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copyOf(original, newLength, originalconstructor);

                        ;
    
}


    public copyOf(original: any[], newLength: number, newType: Function): any[]{
    //var original = original
    //var newLength = newLength
    //var newType = newType

    var copy: any[] = new Array(newLength);
        
        
;
    



        for (let i = 0; i < ; i++) {
            copy[0 + i] = original[i]!;
        }
    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOf(original: number[], newLength: number): number[]{
    //var original = original
    //var newLength = newLength

    var copy: number[] = new Array(newLength);
        
        
;
    



        for (let i = 0; i < ; i++) {
            copy[0 + i] = original[i]!;
        }
    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOf(original: number[], newLength: number): number[]{
var original = original
var newLength = newLength

    var copy: number[] = new Array(newLength);
        
        
;
    



        for (let i = 0; i < ; i++) {
            copy[0 + i] = original[i]!;
        }
    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOf(original: number[], newLength: number): number[]{
    //var original = original
    //var newLength = newLength

    var copy: number[] = new Array(newLength);
        
        
;
    



        for (let i = 0; i < ; i++) {
            copy[0 + i] = original[i]!;
        }
    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOf(original: number[], newLength: number): number[]{
    //var original = original
    //var newLength = newLength

    var copy: number[] = new Array(newLength);
        
        
;
    



        for (let i = 0; i < ; i++) {
            copy[0 + i] = original[i]!;
        }
    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOf(original: string[], newLength: number): string[]{
    //var original = original
    //var newLength = newLength

    var copy: string[] = 
                                                        
                                                        new Array(newLength)
                                                    ;
        
        
;
    



        for (let i = 0; i < ; i++) {
            copy[0 + i] = original[i]!;
        }
    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOf(original: number[], newLength: number): number[]{
    //var original = original
    //var newLength = newLength

    var copy: number[] = new Array(newLength);
        
        
;
    



        for (let i = 0; i < ; i++) {
            copy[0 + i] = original[i]!;
        }
    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOf(original: number[], newLength: number): number[]{
    //var original = original
    //var newLength = newLength

    var copy: number[] = new Array(newLength);
        
        
;
    



        for (let i = 0; i < ; i++) {
            copy[0 + i] = original[i]!;
        }
    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOf(original: boolean[], newLength: number): boolean[]{
    //var original = original
    //var newLength = newLength

    var copy: boolean[] = new Array(newLength);
        
        
;
    



        for (let i = 0; i < ; i++) {
            copy[0 + i] = original[i]!;
        }
    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public reverse(intArray: number[]){
    //var intArray = intArray

    var length: number = intArray!.length -1;
        
        
;
    

    var temp: number= 0
;
    

    var size: number = length /2;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index <= size; index++)
        {
temp= intArray[index]!;
    
intArray[index]= intArray[length -index]!;
    
intArray[length -index]= temp;
    
}

}


    public flip(intArray: number[], width: number, height: number){
    //var intArray = intArray
    //var width = width
    //var height = height

    var length: number = height -1;
        
        
;
    

    var temp: number= 0
;
    

    var index: number= 0
;
    

    var rowIndex: number= 0
;
    




                        for (
    var y: number = 0;
        
        
y <= length /2; y++)
        {




                        for (
    var x: number = 0;
        
        
x < width; x++)
        {
rowIndex= ((length -y) *width);
    
index= x +(y *width);
    
temp= intArray[index]!;
    
intArray[index]= intArray[rowIndex +x]!;
    
intArray[rowIndex +x]= temp;
    
}

}

}


    public toString(twoDimensionalIntArray: number[][]): string{
    //var twoDimensionalIntArray = twoDimensionalIntArray

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var endIndex: number = twoDimensionalIntArray!.length
                ;
        
        
;
    

    var endIndex2: number = twoDimensionalIntArray[0]!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < endIndex; index++)
        {
stringBuffer!.append(commonSeps!.BRACE_OPEN);
    




                        for (
    var index2: number = 0;
        
        
index2 < endIndex2; index2++)
        {
stringBuffer!.appendint(twoDimensionalIntArray[index]![index2]!);
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
}

stringBuffer!.append(commonSeps!.BRACE_CLOSE);
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public toString(objectArray: any[]): string{
    //var objectArray = objectArray

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < objectArray!.length; index++)
        {
stringBuffer!.append(StringUtil.getInstance()!.toString(objectArray[index]!));
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public toString(byteArray: number[]): string{
    //var byteArray = byteArray

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < byteArray!.length; index++)
        {
stringBuffer!.appendbyte(byteArray[index]!);
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

