
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { MotionGestureInput } from '../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
//not game specific package import { TouchMotionGestureFactory } from '../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CompleteMotionGestureInputInterface } from './CompleteMotionGestureInputInterface.js';

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
                
            

