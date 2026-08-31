
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { GenericOperatingSystem } from '../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
      //not GWT import const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;

      
import { OperatingSystems } from '../../../../../org/allbinary/logic/system/os/OperatingSystems.js';
      //not GWT import const OperatingSystems = globalThis.org.allbinary.logic.system.os.OperatingSystems;

      
import { LinuxHardware } from '../../../../../org/allbinary/logic/system/hardware/linux/LinuxHardware.js';
      //not GWT import const LinuxHardware = globalThis.org.allbinary.logic.system.hardware.linux.LinuxHardware;

      
import { WindowsHardware } from '../../../../../org/allbinary/logic/system/hardware/windows/WindowsHardware.js';
      //not GWT import const WindowsHardware = globalThis.org.allbinary.logic.system.hardware.windows.WindowsHardware;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HardwareInterface } from './HardwareInterface.js';
//not GWT import const  = globalThis.org.allbinary.logic.system.hardware.HardwareInterface;

                
export class HardwareFactory
            extends Object
         {
        

    private static readonly instance: HardwareFactory = new HardwareFactory();

    public static getInstance(): HardwareFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HardwareFactory.instance;
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance(os: GenericOperatingSystem): HardwareInterface{

        try {
            
    var operatingSystems: OperatingSystems = OperatingSystems.getInstance()!;;
    

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
                                



                            throw new Exception("No Hardware Imp for: " +os.getName());
                    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


private constructor (){

            super();
        }


}



