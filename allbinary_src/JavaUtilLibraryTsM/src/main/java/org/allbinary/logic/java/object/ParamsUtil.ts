
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

    

export class ParamsUtil
            extends Object
         {
        

    public static viewParams(params: KClass<*>[]): string{
var params = params

                        if(params != 
                                    null
                                )
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        





                        for (
    var index: number = 0;
        
        
index < params.length; index++)
        {
stringBuffer!.append(" ")
stringBuffer!.append(params[index]!.getName())
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    

                                    }
                                
                             else 
                        if()
                        
}

private constructor (){

            super();
            }


}
                
            

