
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { AllMotionRecognizer } from '../../../org/allbinary/input/motion/AllMotionRecognizer.js';
//not GWT import const AllMotionRecognizer = globalThis.org.allbinary.input.motion.AllMotionRecognizer;

      
import { BasicMotionGesturesHandler } from '../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
//not GWT import const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;

      
import { GameMotionGestureListener } from '../../../org/allbinary/input/motion/gesture/observer/GameMotionGestureListener.js';
//not GWT import const GameMotionGestureListener = globalThis.org.allbinary.input.motion.gesture.observer.GameMotionGestureListener;

      
import { MotionGestureReceiveInterfaceFactory } from '../../../org/allbinary/input/motion/gesture/observer/MotionGestureReceiveInterfaceFactory.js';
//not GWT import const MotionGestureReceiveInterfaceFactory = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureReceiveInterfaceFactory;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //TouchJ2ME
export class TouchJ2ME
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly DEVICE_ID: number = 0;

    private motionRecognizer: AllMotionRecognizer = new AllMotionRecognizer();

public constructor (){

            super();
        
    var motionGesturesHandler: BasicMotionGesturesHandler = this.motionRecognizer!.getMotionGestureRecognizer()!.getMotionGesturesHandler()!;;
    
motionGesturesHandler!.addListenerInterface(new GameMotionGestureListener(MotionGestureReceiveInterfaceFactory.getInstance()));
    
}


    public pointerDragged(x: number, y: number){

        try {
            this.motionRecognizer!.processDraggedMotionEvent(x, y, DEVICE_ID, 0);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "pointerDragged", e);
    
}

}


    public pointerPressed(x: number, y: number){

        try {
            this.motionRecognizer!.processStartMotionEvent(x, y, DEVICE_ID, 0);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "pointerPressed", e);
    
}

}


    public pointerReleased(x: number, y: number){

        try {
            this.motionRecognizer!.processEndMotionEvent(x, y, DEVICE_ID, 0);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "pointerReleased", e);
    
}

}


}



