
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
        



import { Visitor } from "../../../../../org/allbinary/logic/util/visitor/Visitor.js";

    

export class OrderedIntArrayPermutationUtil
            extends Object
         {
        

    private static readonly instance: OrderedIntArrayPermutationUtil = new OrderedIntArrayPermutationUtil();
        
        

    public static getInstance(): OrderedIntArrayPermutationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public static main(args: string[]){
var args = args

    var TOTAL: number = 3;
        
        
;
    

    var data: number[] = new Array(TOTAL);
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < TOTAL; i++)
        {
data[i]= i;
    
}


    var permutationVisitor: IntPermutationVisitor = new IntPermutationVisitor(data);
        
        
;
    

    var ORIGINAL_DATA_LABEL: string = "Original Data: ";
        
        
;
    
System.out.print(ORIGINAL_DATA_LABEL);
    
permutationVisitor!.print(data);
    
OrderedIntArrayPermutationUtil.getInstance()!.generate(data, permutationVisitor);
    
}


    private readonly TOTAL_ITERATIONS_TABLE: string = "Total Iterations: ";
        
        

    private readonly FINISHED: string = "\nFINISHED";
        
        
private constructor (){

            super();
            }


    public getNext(data: number[]){
var data = data

    var length: number = data.length
                ;
        
        
;
    

    var i: number = length -1;
        
        
;
    

        while(data[i -1] >= data[i])
        {
i= i -1;
    
}


    var j: number = length;
        
        
;
    

        while(data[j -1] <= data[i -1])
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


    public swap(data: number[], a: number, b: number){
var data = data
var a = a
var b = b

    var temp: number = data[a]!;
        
        
;
    
data[a]= data[b]!;
    
data[b]= temp;
    
}


    public factorial(dataLength: number): number{
var dataLength = dataLength

    var temp: number = 1;
        
        
;
    

                        if(dataLength > 1)
                        
                                    {
                                    



                        for (
    var i: number = 1;
        
        
i <= dataLength; i++)
        {
temp *= i;
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return temp;
    
}


    public generate(data: number[], visitor: Visitor){
var data = data
var visitor = visitor

    var iterations: number = this.factorial(data.length)!;
        
        
;
    
System.out.print(TOTAL_ITERATIONS_TABLE);
    
System.out.println(iterations);
    




                        for (
    var count: number = 0;
        
        
count < iterations -1; count++)
        {
this.getNext(data);
    
visitor.visit(this);
    
}

System.out.println(FINISHED);
    
}


}
                
            

