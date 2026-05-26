
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Class } from '../../../java/lang/Class.js';
        
            import { System } from '../../../java/lang/System.js';
        
import { MathUtil } from '../../../org/allbinary/logic/math/MathUtil.js';
      
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      
import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ArrayUtil
            extends Object
         {
        

    private static readonly instance: ArrayUtil = new ArrayUtil();

    public static getInstance(): ArrayUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ArrayUtil.instance;
    
}


    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;

    public copyOf(original: any[], newLength: number): any[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.copyOfType(original, newLength, original.constructor);;
    
}


    public copyOfType(original: any[], newLength: number, newType: Function): any[]{

    var copy: any[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfbyte(original: number[], newLength: number): number[]{

    var copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfshort(original: number[], newLength: number): number[]{

    var copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfint(original: number[], newLength: number): number[]{

    var copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOflong(original: number[], newLength: number): number[]{

    var copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfchar(original: string[], newLength: number): string[]{

    var copy: string[] = 
                                                        
                                                        new Array(newLength)
                                                    ;;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOffloat(original: number[], newLength: number): number[]{

    var copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfdouble(original: number[], newLength: number): number[]{

    var copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfboolean(original: boolean[], newLength: number): boolean[]{

    var copy: boolean[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public reverse(intArray: number[]){

    var length: number = intArray!.length -1;;
    

    var temp: number= 0;;
    

    var size: number = length /2;;
    




                        for (
    var index: number = 0;index <= size; index++)
        {
temp= intArray[index]!;
    
intArray[index]= intArray[length -index]!;
    
intArray[length -index]= temp;
    
}

}


    public flip(intArray: number[], width: number, height: number){

    var length: number = height -1;;
    

    var temp: number= 0;;
    

    var index: number= 0;;
    

    var rowIndex: number= 0;;
    




                        for (
    var y: number = 0;y <= length /2; y++)
        {




                        for (
    var x: number = 0;x < width; x++)
        {
rowIndex= ((length -y) *width);
    
index= x +(y *width);
    
temp= intArray[index]!;
    
intArray[index]= intArray[rowIndex +x]!;
    
intArray[rowIndex +x]= temp;
    
}

}

}


    public toStringFromTwoDimensionaArray(twoDimensionalIntArray: number[][]): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var endIndex: number = twoDimensionalIntArray!.length
                ;;
    

    var endIndex2: number = twoDimensionalIntArray[0]!.length
                ;;
    




                        for (
    var index: number = 0;index < endIndex; index++)
        {
stringBuffer!.append(commonSeps!.BRACE_OPEN);
    




                        for (
    var index2: number = 0;index2 < endIndex2; index2++)
        {
stringBuffer!.appendint(twoDimensionalIntArray[index]![index2]!);
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
}

stringBuffer!.append(commonSeps!.BRACE_CLOSE);
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public toStringFromObjectArray(objectArray: any[]): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    




                        for (
    var index: number = 0;index < objectArray!.length; index++)
        {
stringBuffer!.append(StringUtil.getInstance()!.toString(objectArray[index]!));
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public toStringFromByteArray(byteArray: number[]): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    




                        for (
    var index: number = 0;index < byteArray!.length; index++)
        {
stringBuffer!.appendbyte(byteArray[index]!);
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

