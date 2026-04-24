
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { HardwareComponentInterface } from "../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js";

    
import { NoHardwareComponent } from "../../../../../org/allbinary/logic/system/hardware/components/interfaces/NoHardwareComponent.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { HardwareInterface } from "./HardwareInterface.js";

export class NoHardware
            extends Object
         implements HardwareInterface {
        

    private static readonly instance: HardwareInterface = new NoHardware();
        
        

    public static getInstance(): HardwareInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getComponent(index: number): HardwareComponentInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoHardwareComponent.getInstance();;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "No Hardware";
    
}


    public compareTo(hardwareInterface: HardwareInterface): boolean{
var hardwareInterface = hardwareInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public difference(hardwareInterface: HardwareInterface): Hashtable<any, any>{
var hardwareInterface = hardwareInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_TABLE;
    
}


}
                
            

