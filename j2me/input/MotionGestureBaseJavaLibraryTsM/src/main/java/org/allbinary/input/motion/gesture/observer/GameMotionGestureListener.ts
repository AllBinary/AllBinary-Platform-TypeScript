
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { MotionGestureInput } from '../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      //not GWT import const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      //not GWT import const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not plain js import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionGestureEventListener } from './MotionGestureEventListener.js';
//not GWT import const MotionGestureEventListener = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEventListener;

                import { CompleteMotionGestureListenerInterface } from './CompleteMotionGestureListenerInterface.js';
//not GWT import const CompleteMotionGestureListenerInterface = globalThis.org.allbinary.input.motion.gesture.observer.CompleteMotionGestureListenerInterface;

                import { MotionGestureEvent } from './MotionGestureEvent.js';
//not GWT import const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;

                
export class GameMotionGestureListener
            extends Object
         implements MotionGestureEventListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private motionGestureCollection: BasicArrayList = new BasicArrayListD();

    private touchGestureCollection: BasicArrayList = new BasicArrayListD();

    private signed: CompleteMotionGestureListenerInterface;

public constructor (signed: CompleteMotionGestureListenerInterface){

            super();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.signed= signed;
    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this);
    
}


    public onUpMotionGestureEvent(ev: MotionGestureEvent){
this.onMotionGestureEvent(ev);
    
}


    public onDownMotionGestureEvent(ev: MotionGestureEvent){
this.onMotionGestureEvent(ev);
    
}


    public onLeftMotionGestureEvent(ev: MotionGestureEvent){
this.onMotionGestureEvent(ev);
    
}


    public onRightMotionGestureEvent(ev: MotionGestureEvent){
this.onMotionGestureEvent(ev);
    
}


    public onDiagonalDownRightMotionGestureEvent(ev: MotionGestureEvent){
this.onMotionGestureEvent(ev);
    
}


    public onDiagonalDownLeftMotionGestureEvent(ev: MotionGestureEvent){
this.onMotionGestureEvent(ev);
    
}


    public onDiagonalUpRightMotionGestureEvent(ev: MotionGestureEvent){
this.onMotionGestureEvent(ev);
    
}


    public onDiagonalUpLeftMotionGestureEvent(ev: MotionGestureEvent){
this.onMotionGestureEvent(ev);
    
}


    public onPressedMotionGestureEvent(ev: MotionGestureEvent){
this.touchGestureCollection!.add(ev.getMotionGesture());
    
}


    public released(ev: MotionGestureEvent){

        try {
            this.touchGestureCollection!.add(ev.getMotionGesture());
    
this.signed.onMotionGestureCompleted(this.touchGestureCollection);
    
this.touchGestureCollection!.clear();
    

                //: 
} catch(e) 
            {

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.commonStrings!.EXCEPTION_LABEL);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(ev.getMotionGesture()));
    
this.logUtil!.put(stringBuffer!.toString(), this, "release", e);
    
}

}


    public onScrolledMotionGestureEvent(motionGestureEvent: MotionGestureEvent){
}


    public onMotionGestureEvent(ev: MotionGestureEvent){

        try {
            
    var motionGestureInput: MotionGestureInput = ev.getMotionGesture()!;;
    

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
                            this.motionGestureCollection!.add(motionGestureInput);
    
this.signed.onMotionGestureCompleted(this.motionGestureCollection);
    
this.motionGestureCollection!.clear();
    
this.touchGestureCollection!.clear();
    

                        }
                            

                //: 
} catch(e) 
            {

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.commonStrings!.EXCEPTION_LABEL);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(ev.getMotionGesture()));
    
this.logUtil!.put(stringBuffer!.toString(), this, "onMotionGestureEvent", e);
    
}

}


}



