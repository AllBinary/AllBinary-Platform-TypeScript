
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
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { AllMotionRecognizer } from '../../../org/allbinary/input/motion/AllMotionRecognizer.js';
      const AllMotionRecognizer = globalThis.org.allbinary.input.motion.AllMotionRecognizer;

      
//not game specific package import { BasicMotionGesturesHandler } from '../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
      const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;

      
//not game specific package import { GameMotionGestureListener } from '../../../org/allbinary/input/motion/gesture/observer/GameMotionGestureListener.js';
      const GameMotionGestureListener = globalThis.org.allbinary.input.motion.gesture.observer.GameMotionGestureListener;

      
//not game specific package import { MotionGestureReceiveInterfaceFactory } from '../../../org/allbinary/input/motion/gesture/observer/MotionGestureReceiveInterfaceFactory.js';
      const MotionGestureReceiveInterfaceFactory = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureReceiveInterfaceFactory;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
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
                
            

