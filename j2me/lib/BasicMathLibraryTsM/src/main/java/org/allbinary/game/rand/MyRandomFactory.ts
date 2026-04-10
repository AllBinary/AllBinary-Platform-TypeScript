
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
        



import { Random } from "../../../../java/util/Random.js";

    
import { MathUtil } from "../../../../org/allbinary/logic/math/MathUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    

export class MyRandomFactory
            extends Object
         {
        

    private static readonly instance: MyRandomFactory = new MyRandomFactory();
        
        

    public static getInstance(): MyRandomFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public static main(args: string[]){
    //var args = args

    var randomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;
        
        


    var stringBuilder: StringMaker = new StringMaker();
        
        


    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        


    var size2: number = 100;
        
        





                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {
stringBuilder!.appendint(randomFactory!.getAbsoluteNextInt(3))!.append(commonSeps!.COMMA)
}

System.out.println(stringBuilder!.toString())
stringBuilder!.delete(0, stringBuilder!.length())

    var intArray: IntArray = IntArray(52);
        
        


    var intArray2: IntArray = IntArray(52);
        
        


    var size: number = intArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
intArray[index]= index
intArray2[index]= index
}

randomFactory!.shuffle(intArray, intArray2)




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
stringBuilder!.appendint(intArray[index]!)!.append(commonSeps!.COMMA)
}

System.out.println(stringBuilder!.toString())
stringBuilder!.delete(0, stringBuilder!.length())




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
stringBuilder!.appendint(intArray2[index]!)!.append(commonSeps!.COMMA)
}

System.out.println(stringBuilder!.toString())

    var found: boolean= false





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
found= false




                        for (
    var index2: number = 0;
        
        
index2 < size; index2++)
        {

                        if(intArray[index2] == index)
                        
                                    {
                                    found= true

                                    }
                                
}


                        if(!found)
                        
                                    throw RuntimeException()
}

}


    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;
        
        

    private rand: Random
private constructor (){

            super();
            rand= Random(System.currentTimeMillis())
}


    public setSeed(seed: number){
var seed = seed
rand= Random(seed)
}


    public getNextInt(range: number): number{
var range = range

    var div: number = (Integer.MAX_VALUE /range) +1;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rand.nextInt() /div;
    
}


    public getAbsoluteNextInt(range: number): number{
var range = range



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mathUtil!.abs(this.getNextInt(range));
    
}


    public getAbsoluteNextIntAllowZero(range: number): number{
var range = range

                        if(range == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mathUtil!.abs(this.getNextInt(range));
    

                        }
                            
}


    public shuffle(intArray: IntArray){
    //var intArray = intArray
this.shuffle(intArray, intArray!.length *7)
}


    public shuffle(intArray: IntArray, shuffleTotal: number){
    //var intArray = intArray
    //var shuffleTotal = shuffleTotal

    var size: number = intArray!.length
                ;
        
        


    var randomIndex: number= 0


    var randomIndex2: number= 0


    var value: number= 0





                        for (
    var index: number = 0;
        
        
index < shuffleTotal; index++)
        {
randomIndex= this.getAbsoluteNextIntAllowZero(size)
randomIndex2= this.getAbsoluteNextIntAllowZero(size)
value= intArray[randomIndex]!
intArray[randomIndex]= intArray[randomIndex2]!
intArray[randomIndex2]= value
}

}


    public shuffle(intArray: IntArray, intArray2: IntArray){
    //var intArray = intArray
    //var intArray2 = intArray2
this.shuffle(intArray, intArray2, intArray!.length *7)
}


    public shuffle(intArray: IntArray, intArray2: IntArray, shuffleTotal: number){
    //var intArray = intArray
    //var intArray2 = intArray2
    //var shuffleTotal = shuffleTotal

    var size: number = intArray!.length
                ;
        
        


    var randomIndex: number= 0


    var randomIndex2: number= 0


    var value: number= 0


    var value2: number= 0





                        for (
    var index: number = 0;
        
        
index < shuffleTotal; index++)
        {
randomIndex= this.getAbsoluteNextIntAllowZero(size)
randomIndex2= this.getAbsoluteNextIntAllowZero(size)
value= intArray[randomIndex]!
value2= intArray2[randomIndex]!
intArray[randomIndex]= intArray[randomIndex2]!
intArray[randomIndex2]= value
intArray2[randomIndex]= intArray2[randomIndex2]!
intArray2[randomIndex2]= value2
}

}


}
                
            

