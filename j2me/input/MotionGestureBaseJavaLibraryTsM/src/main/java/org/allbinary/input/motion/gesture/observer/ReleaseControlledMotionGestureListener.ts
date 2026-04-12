
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

    

export class ReleaseControlledMotionGestureListener
            extends Object
        
                , MotionGestureEventListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private currentMotionGesture: MotionGestureInput = TouchMotionGestureFactory.getInstance()!.NO_MOTION;
        
        

    private isMouseGestureOccurring: boolean = false;
        
        

    private motionGestureCollection: BasicArrayList = new BasicArrayList();
        
        

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
isMouseGestureOccurring= true;
    
currentMotionGesture= TouchMotionGestureFactory.getInstance()!.NO_MOTION;
    
this.onMotionGestureEvent(ev);
    
}


    public released(ev: MotionGestureEvent){
var ev = ev

        try {
            
                        if(isMouseGestureOccurring == false)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
isMouseGestureOccurring= false;
    
signed.onMotionGestureCompleted(motionGestureCollection);
    
motionGestureCollection!.clear();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(new StringMaker().
                            append(commonStrings!.EXCEPTION_LABEL)!.append(StringUtil.getInstance()!.toString(ev.getMotionGesture()))!.toString(), this, "release", e);
    
}

}


    public onMotionGestureEvent(ev: MotionGestureEvent){
var ev = ev

                        if(isMouseGestureOccurring == false)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

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
                            
                        if(currentMotionGesture != motionGestureInput)
                        
                                    {
                                    currentMotionGesture= motionGestureInput;
    
motionGestureCollection!.add(ev.getMotionGesture());
    

                                    }
                                

                        }
                            
}


}
                
            

