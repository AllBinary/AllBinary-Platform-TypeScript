
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { AllBinaryGameLayer } from '../../../../org/allbinary/game/layer/AllBinaryGameLayer.js';
      //not GWT import const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;

      
//not plain js import { BasicDecimal } from '../../../../org/allbinary/logic/math/BasicDecimal.js';
      const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface MovementInterface {
        

    init(speedBasicDecimal: BasicDecimal, angle: number, otherAngle: number)

                //@Throws(Exception.constructor)
            
    process(layer: AllBinaryGameLayer)

    stop()

}



