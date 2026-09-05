
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

      
import { ColorCompositeInterface } from '../../../org/allbinary/graphics/color/ColorCompositeInterface.js';
//not GWT import const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IndexedAnimationInterface } from './IndexedAnimationInterface.js';
//not GWT import - same folder const IndexedAnimationInterface = globalThis.org.allbinary.animation.IndexedAnimationInterface;

                
export interface VectorAnimationInterface extends IndexedAnimationInterface, ColorCompositeInterface {
        

    getPoints(frame: number): number[][]

}



