
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

      
import { MotionGestureInput } from '../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      //not GWT import const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
import { TouchMotionGestureFactory } from '../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      //not GWT import const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CompleteMotionGestureInputInterface } from './CompleteMotionGestureInputInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.input.CompleteMotionGestureInputInterface;

                
export class CompleteMotionGestureInputEvent extends AllBinaryEventObject implements CompleteMotionGestureInputInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;

    private motionGestureInput: MotionGestureInput = TouchMotionGestureFactory.getInstance()!.NO_MOTION;

public constructor (name: string, motionGestureInput: MotionGestureInput){
            super(motionGestureInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setName(name);
    

        try {
            this.setMotionGestureInput(motionGestureInput);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "InputToGameKeyEventAction", e);
    
}

}


    setName(name: string){
this.name= name;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setMotionGestureInput(motionGestureInput: MotionGestureInput){
this.motionGestureInput= motionGestureInput;
    
}


    public getMotionGestureInput(): MotionGestureInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.motionGestureInput;
    
}


}



