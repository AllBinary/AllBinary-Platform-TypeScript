
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

    
import { HardwareComponentInterface } from "../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface HardwareInterface {
        

    public getComponent(index: number): HardwareComponentInterface

    public toString(): string

    public compareTo(hardwareInterface: HardwareInterface): boolean

    public difference(hardwareInterface: HardwareInterface): Hashtable<any, any>

}
                
            

