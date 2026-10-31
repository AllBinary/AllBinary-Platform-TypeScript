
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
            //import { Class } from '../../../java/lang/Class.js';
            const Class = (globalThis.java?.lang?.Class ?? class {}) as typeof globalThis.java.lang.Class;
            type Class<T = any, U = any> = typeof Class extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Class;
        
            import { System } from '../../../java/lang/System.js';
        

//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
type MathUtil<T = any, U = any> = typeof MathUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MathUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;


















                                        
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

    let copy: any[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfbyte(original: number[], newLength: number): number[]{

    let copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfshort(original: number[], newLength: number): number[]{

    let copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfint(original: number[], newLength: number): number[]{

    let copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOflong(original: number[], newLength: number): number[]{

    let copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfchar(original: string[], newLength: number): string[]{

    let copy: string[] = 
                                                        
                                                        new Array(newLength)
                                                    ;;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOffloat(original: number[], newLength: number): number[]{

    let copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfdouble(original: number[], newLength: number): number[]{

    let copy: number[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public copyOfboolean(original: boolean[], newLength: number): boolean[]{

    let copy: boolean[] = new Array(newLength);;
    
System.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original.length, newLength));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return copy;
    
}


    public reverse(intArray: number[]){

    let length: number = intArray!.length -1;;
    

    let temp: number= 0;;
    

    let size: number = globalThis.Math.trunc(length /2);;
    




                        for (
    let index: number = 0;index <= size; index++)
        {
temp= intArray[index]!;
    
intArray[index]= intArray[length -index]!;
    
intArray[length -index]= temp;
    
}

}


    public flip(intArray: number[], width: number, height: number){

    let length: number = height -1;;
    

    let temp: number= 0;;
    

    let index: number= 0;;
    

    let rowIndex: number= 0;;
    




                        for (
    let y: number = 0;y <= globalThis.Math.trunc(length /2); y++)
        {




                        for (
    let x: number = 0;x < width; x++)
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

    let stringBuffer: StringMaker = new StringMaker();;
    

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    let endIndex: number = twoDimensionalIntArray!.length
                ;;
    

    let endIndex2: number = twoDimensionalIntArray[0]!.length
                ;;
    




                        for (
    let index: number = 0;index < endIndex; index++)
        {
stringBuffer!.append(commonSeps!.BRACE_OPEN);
    




                        for (
    let index2: number = 0;index2 < endIndex2; index2++)
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

    let stringBuffer: StringMaker = new StringMaker();;
    

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    




                        for (
    let index: number = 0;index < objectArray!.length; index++)
        {
stringBuffer!.append(StringUtil.getInstance()!.toString(objectArray[index]!));
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public toStringFromByteArray(byteArray: number[]): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    




                        for (
    let index: number = 0;index < byteArray!.length; index++)
        {
stringBuffer!.appendbyte(byteArray[index]!);
    
stringBuffer!.append(commonSeps!.COMMA_SEP);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

