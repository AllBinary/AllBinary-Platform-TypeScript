
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

      
import { CompleteMotionGestureInputEventListenerInterface } from '../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListenerInterface.js';
//not GWT import const CompleteMotionGestureInputEventListenerInterface = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventListenerInterface;

      
import { NoCompleteMotionGestureInputEventListener } from '../../../../org/allbinary/game/input/motion/action/NoCompleteMotionGestureInputEventListener.js';
//not GWT import const NoCompleteMotionGestureInputEventListener = globalThis.org.allbinary.game.input.motion.action.NoCompleteMotionGestureInputEventListener;

      
import { AllBinarySensor } from '../../../../org/allbinary/input/AllBinarySensor.js';
//not GWT import const AllBinarySensor = globalThis.org.allbinary.input.AllBinarySensor;

      
import { Orientation } from '../../../../org/allbinary/logic/math/Orientation.js';
//not GWT import const Orientation = globalThis.org.allbinary.logic.math.Orientation;

      
//not plain js import { PrimitiveFloatUtil } 
const PrimitiveFloatUtil = globalThis.org.allbinary.logic.math.PrimitiveFloatUtil;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinaryOrientationSensor extends AllBinarySensor {
        

    sensorDataFloatArray: number[] = PrimitiveFloatUtil.getArrayInstance()!;

    listener: CompleteMotionGestureInputEventListenerInterface = NoCompleteMotionGestureInputEventListener.getInstance()!;

    public setCompleteMotionGestureInputEventListener(completeMotionGestureInputEventListenerInterface: CompleteMotionGestureInputEventListenerInterface){
this.listener= completeMotionGestureInputEventListenerInterface;
    
}


protected constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getOrientation(): Orientation{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


}



