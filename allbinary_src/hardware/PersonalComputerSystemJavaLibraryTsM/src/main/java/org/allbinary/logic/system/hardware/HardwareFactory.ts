
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
        



import { GenericOperatingSystem } from "../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { OperatingSystems } from "../../../../../org/allbinary/logic/system/os/OperatingSystems.js";

    
import { LinuxHardware } from "../../../../../org/allbinary/logic/system/hardware/linux/LinuxHardware.js";

    
import { WindowsHardware } from "../../../../../org/allbinary/logic/system/hardware/windows/WindowsHardware.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { HardwareInterface } from "./HardwareInterface.js";

export class HardwareFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(os: GenericOperatingSystem): HardwareInterface{
var os = os

        try {
            
    var operatingSystems: OperatingSystems = OperatingSystems.getInstance()!;
        
        
;
    

                        if(os.getName()!.compareTo(operatingSystems!.LINUX) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LinuxHardware() as HardwareInterface;
    

                                    }
                                
                             else 
                        if(os.getName()!.indexOf(operatingSystems!.WINDOWS) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new WindowsHardware() as HardwareInterface;
    

                                    }
                                



                            throw new Error("No Hardware Imp for: " +os.getName())

                //: 
} catch(e) 
            {



                            throw e
}

}

private constructor (){

            super();
            }


}
                
            

