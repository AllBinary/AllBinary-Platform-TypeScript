
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { System } from '../../../../../java/lang/System.js';
        
import { Arrays } from '../../../../../java/util/Arrays.js';
//not GWT import const Arrays

import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil

import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ComparableObject } from './ComparableObject.js';
//sameFolderImports - not GWT import - same folder const ComparableObject
import { ObjectPermutationVisitor } from './ObjectPermutationVisitor.js';
//sameFolderImports - not GWT import - same folder const ObjectPermutationVisitor

export class OrderedObjectArrayPermutationUtil
            extends Object
         {
        

    private static readonly instance: OrderedObjectArrayPermutationUtil = new OrderedObjectArrayPermutationUtil();

    public static getInstance(): OrderedObjectArrayPermutationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OrderedObjectArrayPermutationUtil.instance;
    
}


    public static main(args: string[]){

    let TOTAL: number = 7;;
    

    let data: any[] = new Array(TOTAL);;
    




                        for (
    let i: number = 0;i < TOTAL; i++)
        {
data[i]= new ComparableObject();
    
}

Arrays.sort(data);
    

    let permutationVisitor: ObjectPermutationVisitor = new ObjectPermutationVisitor(data);;
    

    let ORIGINAL_DATA_LABEL: string = "Original Data: ";;
    
console.log(ORIGINAL_DATA_LABEL);
    
permutationVisitor!.visit(data);
    
OrderedObjectArrayPermutationUtil.getInstance()!.generate(data, permutationVisitor);
    
}


    private readonly TOTAL_ITERATIONS_TABLE: string = "Total Iterations: ";

    private readonly FINISHED: string = "\nFINISHED";

private constructor (){

            super();
        }


    public getNext(data: any[]){

    let length: number = data.length
                ;;
    

    let i: number = length -1;;
    

    let tsUtil: TsUtil = TsUtil.getInstance()!;;
    

        while(tsUtil!.hashCode(data[i -1]!) >= tsUtil!.hashCode(data[i]!))
        {
i= i -1;
    
}


    let j: number = length;;
    

        while(tsUtil!.hashCode(data[j -1]!) <= tsUtil!.hashCode(data[i -1]!))
        {
j= j -1;
    
}

this.swap(data, i -1, j -1);
    
i++;
    
j= length;
    

        while(i < j)
        {
this.swap(data, i -1, j -1);
    
i++;
    
j--;
    
}

}


    public swap(data: any[], a: number, b: number){

    let temp: any = data[a]!;;
    
data[a]= data[b]!;
    
data[b]= temp;
    
}


    public factorial(dataLength: number): number{

    let temp: number = 1;;
    

                        if(dataLength > 1)
                        
                                    {
                                    



                        for (
    let i: number = 1;i <= dataLength; i++)
        {
temp *= i;
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return temp;
    
}


    public generate(data: any[], visitor: Visitor){

    let iterations: number = this.factorial(data.length)!;;
    
console.log(this.TOTAL_ITERATIONS_TABLE);
    
console.log(iterations);
    




                        for (
    let count: number = 0;count < iterations -1; count++)
        {
this.getNext(data);
    
visitor.visit(this);
    
}

console.log(this.FINISHED);
    
}


}

