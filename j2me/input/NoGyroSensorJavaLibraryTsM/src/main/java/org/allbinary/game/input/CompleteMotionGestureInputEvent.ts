
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
        



import { MotionGestureInput } from "../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    
import { TouchMotionGestureFactory } from "../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class CompleteMotionGestureInputEvent extends AllBinaryEventObject
                , CompleteMotionGestureInputInterface {
        

    public static readonly NULL_COMPLETE_MOTION_GESTURE_INPUT_EVENT: CompleteMotionGestureInputEvent = new CompleteMotionGestureInputEvent(StringUtil.getInstance()!.EMPTY_STRING, TouchMotionGestureFactory.getInstance()!.NO_MOTION);
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private motionGestureInput: MotionGestureInput = TouchMotionGestureFactory.getInstance()!.NO_MOTION;
        
        
public constructor (name: string, motionGestureInput: MotionGestureInput)                        

                            : super(motionGestureInput){

            super();
            var name = name
var motionGestureInput = motionGestureInput


                            //For kotlin this is before the body of the constructor.
                    
this.setName(name)

        try {
            this.setMotionGestureInput(motionGestureInput)
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, "InputToGameKeyEventAction", e)
}

}


    setName(name: string){
var name = name
this.name= name
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public setMotionGestureInput(motionGestureInput: MotionGestureInput){
var motionGestureInput = motionGestureInput
this.motionGestureInput= motionGestureInput
}


    public getMotionGestureInput(): MotionGestureInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionGestureInput;
    
}


}
                
            

