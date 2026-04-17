
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
        



import { MotionGestureInput } from "../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    
import { TouchMotionGestureFactory } from "../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { ForcedLogUtil } from "../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CompleteMotionGestureListenerInterface } from "./CompleteMotionGestureListenerInterface.js";

import { MotionGestureEvent } from "./MotionGestureEvent.js";

export class GameMotionGestureListener
            extends Object
         implements MotionGestureEventListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private motionGestureCollection: BasicArrayList = new BasicArrayList();
        
        

    private touchGestureCollection: BasicArrayList = new BasicArrayList();
        
        

    private signed: CompleteMotionGestureListenerInterface
public constructor (signed: CompleteMotionGestureListenerInterface){

            super();
            var signed = signed
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    
this.signed= signed;
    
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(commonStrings!.NOT_IMPLEMENTED, this);
    
}


    public onUpMotionGestureEvent(ev: MotionGestureEvent){
var ev = ev
onMotionGestureEvent(ev);
    
}


    public onDownMotionGestureEvent(ev: MotionGestureEvent){
var ev = ev
onMotionGestureEvent(ev);
    
}


    public onLeftMotionGestureEvent(ev: MotionGestureEvent){
var ev = ev
onMotionGestureEvent(ev);
    
}


    public onRightMotionGestureEvent(ev: MotionGestureEvent){
var ev = ev
onMotionGestureEvent(ev);
    
}


    public onDiagonalDownRightMotionGestureEvent(ev: MotionGestureEvent){
var ev = ev
onMotionGestureEvent(ev);
    
}


    public onDiagonalDownLeftMotionGestureEvent(ev: MotionGestureEvent){
var ev = ev
onMotionGestureEvent(ev);
    
}


    public onDiagonalUpRightMotionGestureEvent(ev: MotionGestureEvent){
var ev = ev
onMotionGestureEvent(ev);
    
}


    public onDiagonalUpLeftMotionGestureEvent(ev: MotionGestureEvent){
var ev = ev
onMotionGestureEvent(ev);
    
}


    public onPressedMotionGestureEvent(ev: MotionGestureEvent){
var ev = ev
touchGestureCollection!.add(ev.getMotionGesture());
    
}


    public released(ev: MotionGestureEvent){
var ev = ev

        try {
            touchGestureCollection!.add(ev.getMotionGesture());
    
signed.onMotionGestureCompleted(touchGestureCollection);
    
touchGestureCollection!.clear();
    

                //: 
} catch(e) 
            {

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(commonStrings!.EXCEPTION_LABEL);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(ev.getMotionGesture()));
    
this.logUtil!.put(stringBuffer!.toString(), this, "release", e);
    
}

}


    public onMotionGestureEvent(ev: MotionGestureEvent){
var ev = ev

        try {
            
    var motionGestureInput: MotionGestureInput = ev.getMotionGesture()!;
        
        
;
    

                        if(motionGestureInput == TouchMotionGestureFactory.getInstance()!.PRESSED)
                        
                                    {
                                    this.onPressedMotionGestureEvent(ev);
    

                                    }
                                
                             else 
                        if(motionGestureInput == TouchMotionGestureFactory.getInstance()!.RELEASED)
                        
                                    {
                                    this.released(ev);
    

                                    }
                                
                        else {
                            motionGestureCollection!.add(motionGestureInput);
    
signed.onMotionGestureCompleted(motionGestureCollection);
    
motionGestureCollection!.clear();
    
touchGestureCollection!.clear();
    

                        }
                            

                //: 
} catch(e) 
            {

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(commonStrings!.EXCEPTION_LABEL);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(ev.getMotionGesture()));
    
this.logUtil!.put(stringBuffer!.toString(), this, "onMotionGestureEvent", e);
    
}

}


}
                
            

