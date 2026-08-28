
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
        
//not game specific package import { MotionGestureInput } from '../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
//not game specific package import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not game specific package import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionGestureEventListener } from './MotionGestureEventListener.js';
import { CompleteMotionGestureListenerInterface } from './CompleteMotionGestureListenerInterface.js';
import { MotionGestureEvent } from './MotionGestureEvent.js';

export class ReleaseControlledMotionGestureListener
            extends Object
         implements MotionGestureEventListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private currentMotionGesture: MotionGestureInput = TouchMotionGestureFactory.getInstance()!.NO_MOTION;

    private isMouseGestureOccurring: boolean = false;

    private motionGestureCollection: BasicArrayList = new BasicArrayListD();

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
this.isMouseGestureOccurring= true;
    
this.currentMotionGesture= TouchMotionGestureFactory.getInstance()!.NO_MOTION;
    
this.onMotionGestureEvent(ev);
    
}


    public onScrolledMotionGestureEvent(motionGestureEvent: MotionGestureEvent){
}


    public released(ev: MotionGestureEvent){

        try {
            
                        if(this.isMouseGestureOccurring == false)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
this.isMouseGestureOccurring= false;
    
this.signed.onMotionGestureCompleted(this.motionGestureCollection);
    
this.motionGestureCollection!.clear();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(new StringMaker().append(this.commonStrings!.EXCEPTION_LABEL)!.append(StringUtil.getInstance()!.toString(ev.getMotionGesture()))!.toString(), this, "release", e);
    
}

}


    public onMotionGestureEvent(ev: MotionGestureEvent){

                        if(this.isMouseGestureOccurring == false)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

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
                            
                        if(this.currentMotionGesture != motionGestureInput)
                        
                                    {
                                    this.currentMotionGesture= motionGestureInput;
    
this.motionGestureCollection!.add(ev.getMotionGesture());
    

                                    }
                                

                        }
                            
}


}



