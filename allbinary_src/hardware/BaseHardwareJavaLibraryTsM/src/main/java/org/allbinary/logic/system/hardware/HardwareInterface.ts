
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

        


import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { HardwareComponentInterface } from '../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js';
      //not GWT import const HardwareComponentInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface HardwareInterface {
        

    getComponent(index: number): HardwareComponentInterface

    toString(): string

    compareTo(hardwareInterface: HardwareInterface): boolean

    difference(hardwareInterface: HardwareInterface): Hashtable<any, any>

}



