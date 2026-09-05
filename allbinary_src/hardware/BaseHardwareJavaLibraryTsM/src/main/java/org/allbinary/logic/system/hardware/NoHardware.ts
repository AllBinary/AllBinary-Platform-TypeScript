
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
        
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { HardwareComponentInterface } from '../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js';
//not GWT import const HardwareComponentInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface;

      
import { NoHardwareComponent } from '../../../../../org/allbinary/logic/system/hardware/components/interfaces/NoHardwareComponent.js';
//not GWT import const NoHardwareComponent = globalThis.org.allbinary.logic.system.hardware.components.interfaces.NoHardwareComponent;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HardwareInterface } from './HardwareInterface.js';
//not GWT import - same folder const HardwareInterface = globalThis.org.allbinary.logic.system.hardware.HardwareInterface;

                
export class NoHardware
            extends Object
         implements HardwareInterface {
        

    private static readonly instance: HardwareInterface = new NoHardware();

    public static getInstance(): HardwareInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoHardware.instance;
    
}


    public getComponent(index: number): HardwareComponentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoHardwareComponent.getInstance();;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "No Hardware";
    
}


    public compareTo(hardwareInterface: HardwareInterface): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public difference(hardwareInterface: HardwareInterface): ABHashtable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StdUtil.getInstance()!.NULL_TABLE;
    
}


}



