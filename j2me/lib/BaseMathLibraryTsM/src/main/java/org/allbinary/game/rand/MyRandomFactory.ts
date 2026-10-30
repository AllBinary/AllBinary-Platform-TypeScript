
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
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
            import { System } from '../../../../java/lang/System.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { Random } from '../../../../java/util/Random.js';
//not GWT import const Random




//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
type MathUtil<T = any, U = any> = typeof MathUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MathUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //Do not use in client code for money related things.
export class MyRandomFactory
            extends Object
         {
        

    private static readonly instance: MyRandomFactory = new MyRandomFactory();

    public static getInstance(): MyRandomFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MyRandomFactory.instance;
    
}


    public static main(args: string[]){

    let randomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;;
    

    let stringBuilder: StringMaker = new StringMaker();;
    

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    let size2: number = 100;;
    




                        for (
    let index: number = 0;index < size2; index++)
        {
stringBuilder!.appendint(randomFactory!.getAbsoluteNextInt(3))!.append(commonSeps!.COMMA);
    
}

console.log(stringBuilder!.toString());
    
stringBuilder!.delete(0, stringBuilder!.length());
    

    let intArray: number[] = new Array(52);;
    

    let intArray2: number[] = new Array(52);;
    

    let size: number = intArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
intArray[index]= index;
    
intArray2[index]= index;
    
}

randomFactory!.shuffle2(intArray, intArray2);
    




                        for (
    let index: number = 0;index < size; index++)
        {
stringBuilder!.appendint(intArray[index]!)!.append(commonSeps!.COMMA);
    
}

console.log(stringBuilder!.toString());
    
stringBuilder!.delete(0, stringBuilder!.length());
    




                        for (
    let index: number = 0;index < size; index++)
        {
stringBuilder!.appendint(intArray2[index]!)!.append(commonSeps!.COMMA);
    
}

console.log(stringBuilder!.toString());
    

    let found: boolean= false;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
found= false;
    




                        for (
    let index2: number = 0;index2 < size; index2++)
        {

                        if(intArray[index2] == index)
                        
                                    {
                                    found= true;
    

                                    }
                                
}


                        if(!found)
                        
                                    throw new RuntimeException();
                                
}

}


    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;

    private rand: Random;

private constructor (){

            super();
        this.rand= new Random(Date.now());
    
}


    public setSeed(seed: number){
this.rand= new Random(seed);
    
}


    public getNextInt(range: number): number{

    let div: number = (Integer.MAX_VALUE /range) +1;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return globalThis.Math.trunc((this.rand.nextInt() /div));
    
}


    public getAbsoluteNextInt(range: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mathUtil!.abs(this.getNextInt(range));;
    
}


    public getAbsoluteNextIntAllowZero(range: number): number{

                        if(range == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mathUtil!.abs(this.getNextInt(range));;
    

                        }
                            
}


    public shuffle(intArray: number[]){
this.shuffleTotal(intArray, intArray!.length *7);
    
}


    public shuffleTotal(intArray: number[], shuffleTotal: number){

    let size: number = intArray!.length
                ;;
    

    let randomIndex: number= 0;;
    

    let randomIndex2: number= 0;;
    

    let value: number= 0;;
    




                        for (
    let index: number = 0;index < shuffleTotal; index++)
        {
randomIndex= this.getAbsoluteNextIntAllowZero(size);
    
randomIndex2= this.getAbsoluteNextIntAllowZero(size);
    
value= intArray[randomIndex]!;
    
intArray[randomIndex]= intArray[randomIndex2]!;
    
intArray[randomIndex2]= value;
    
}

}


    public shuffle2(intArray: number[], intArray2: number[]){
this.shuffle2Total(intArray, intArray2, intArray!.length *7);
    
}


    public shuffle2Total(intArray: number[], intArray2: number[], shuffleTotal: number){

    let size: number = intArray!.length
                ;;
    

    let randomIndex: number= 0;;
    

    let randomIndex2: number= 0;;
    

    let value: number= 0;;
    

    let value2: number= 0;;
    




                        for (
    let index: number = 0;index < shuffleTotal; index++)
        {
randomIndex= this.getAbsoluteNextIntAllowZero(size);
    
randomIndex2= this.getAbsoluteNextIntAllowZero(size);
    
value= intArray[randomIndex]!;
    
value2= intArray2[randomIndex]!;
    
intArray[randomIndex]= intArray[randomIndex2]!;
    
intArray[randomIndex2]= value;
    
intArray2[randomIndex]= intArray2[randomIndex2]!;
    
intArray2[randomIndex2]= value2;
    
}

}


}

