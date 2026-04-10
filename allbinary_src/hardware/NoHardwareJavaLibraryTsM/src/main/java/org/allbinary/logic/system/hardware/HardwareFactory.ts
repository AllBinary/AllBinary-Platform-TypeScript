
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
        



import { OperatingSystemInterface } from "../../../../../org/allbinary/logic/system/os/OperatingSystemInterface.js";

    

export class HardwareFactory
            extends Object
         {
        

    private static readonly instance: HardwareFactory = new HardwareFactory();
        
        

    public static getInstance(): HardwareFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly SINGLETON: HardwareInterface = NoHardware.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(os: OperatingSystemInterface): HardwareInterface{
var os = os

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
} catch(e: Exception)
            {



                            throw e
}

}


}
                
            

