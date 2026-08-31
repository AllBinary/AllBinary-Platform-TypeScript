
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

        


import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { DirectionalInterface } from '../../../org/allbinary/direction/DirectionalInterface.js';
      //not GWT import const DirectionalInterface = globalThis.org.allbinary.direction.DirectionalInterface;

      
//not plain js import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IndexedAnimationInterface } from './IndexedAnimationInterface.js';
//not GWT import const IndexedAnimationInterface = globalThis.org.allbinary.animation.IndexedAnimationInterface;

                
export interface RotationAnimationInterface extends IndexedAnimationInterface, DirectionalInterface {
        

    getAngleInfoP(): AngleInfo

    nextRotation()

    previousRotation()

}



