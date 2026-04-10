
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
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    

/*actual*/ export class Memory
            extends Object
         {
        

    /*actual*/ public static getInfo(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var maxUtilizedMemoryAvailable: number = Runtime.getRuntime()!.maxMemory()!;
        
        


    var memoryUsed: number = Runtime.getRuntime()!.totalMemory()!;
        
        

append("APK Memory: Available: ")
appendlong(maxUtilizedMemoryAvailable)
append("/")
appendlong(Runtime.getRuntime()!.maxMemory())
append(" Used: ")
appendlong(memoryUsed)
append(" Free: ")
appendlong(maxUtilizedMemoryAvailable -memoryUsed)
append("/")
appendlong(Runtime.getRuntime()!.maxMemory() -memoryUsed)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

