
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
        



import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class IntArrayUtil
            extends Object
         {
        

    public static toString(array: IntArray): string{
var array = array

    var stringBuffer: StringMaker = new StringMaker();
        
        





                        for (
    var index: number = 0;
        
        
index < array.length; index++)
        {
appendint(array[index]!)

    
                        if(index < array.length)
                        
                                    {
                                    append(", ")

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public static toString(array: IntArray[]): string{
var array = array

    var stringBuffer: StringMaker = new StringMaker();
        
        





                        for (
    var index: number = 0;
        
        
index < array.length; index++)
        {
append("{")




                        for (
    var index2: number = 0;
        
        
index2 < array[index]!.length; index2++)
        {
appendint(array[index]![index2]!)

    
                        if(index2 < array[index]!.length -1)
                        
                                    {
                                    append(", ")

                                    }
                                
}

append("}")

    
                        if(index < array.length -1)
                        
                                    {
                                    append(", \n")

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public static toString(array: IntArray[][]): string{
var array = array

    var stringBuffer: StringMaker = new StringMaker();
        
        





                        for (
    var index: number = 0;
        
        
index < array.length; index++)
        {
append("{")




                        for (
    var index2: number = 0;
        
        
index2 < array[index]!.length; index2++)
        {
append("{")




                        for (
    var index3: number = 0;
        
        
index3 < array[index]![index2]!.length; index3++)
        {
appendint(array[index]![index2]![index3]!)

    
                        if(index3 < array[index]![index2]!.length -1)
                        
                                    {
                                    append(", ")

                                    }
                                
}

append("}")

    
                        if(index2 < array[index]!.length -1)
                        
                                    {
                                    append(", ")

                                    }
                                
}

append("}")

    
                        if(index < array.length -1)
                        
                                    {
                                    append(", \n")

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}

private constructor (){

            super();
            }


}
                
            

