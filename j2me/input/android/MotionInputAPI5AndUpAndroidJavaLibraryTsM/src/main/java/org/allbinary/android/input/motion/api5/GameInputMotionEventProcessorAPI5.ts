
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2009 AllBinary
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { MotionEvent } from '../../../../../../android/view/MotionEvent.js';
      //not GWT import const MotionEvent = globalThis.android.view.MotionEvent;

      
import { BaseGameInputMotionEventProcessor } from '../../../../../../org/allbinary/android/input/motion/BaseGameInputMotionEventProcessor.js';
      //not GWT import const BaseGameInputMotionEventProcessor = globalThis.org.allbinary.android.input.motion.BaseGameInputMotionEventProcessor;

      
import { DisplayInfoSingleton } from '../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      //not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { ScalableListener } from '../../../../../../org/allbinary/graphics/displayable/ScalableListener.js';
      //not GWT import const ScalableListener = globalThis.org.allbinary.graphics.displayable.ScalableListener;

      
import { AllMotionRecognizer } from '../../../../../../org/allbinary/input/motion/AllMotionRecognizer.js';
      //not GWT import const AllMotionRecognizer = globalThis.org.allbinary.input.motion.AllMotionRecognizer;

      
import { MotionRecognizer } from '../../../../../../org/allbinary/input/motion/MotionRecognizer.js';
      //not GWT import const MotionRecognizer = globalThis.org.allbinary.input.motion.MotionRecognizer;

      
//not plain js import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameInputMotionInfoAPI5 } from './GameInputMotionInfoAPI5.js';

export class GameInputMotionEventProcessorAPI5 extends BaseGameInputMotionEventProcessor {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): GameInputMotionEventProcessorAPI5{

                        if(GameInputMotionEventProcessorAPI5.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    GameInputMotionEventProcessorAPI5.instance= new GameInputMotionEventProcessorAPI5();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInputMotionEventProcessorAPI5.instance as GameInputMotionEventProcessorAPI5;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private readonly motionRecognizerArray: MotionRecognizer[];

    private readonly TOTAL_MINUS_ONE: number;

private constructor (){

            super();
        
    var size: number = GameInputMotionInfoAPI5.getInstance()!.MAX_POINTERS;;
    
this.motionRecognizerArray= new Array(size);
    
this.TOTAL_MINUS_ONE= size;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.motionRecognizerArray[index]= new AllMotionRecognizer();
    
}

}


    isValid(pointerId: number): boolean{

                        if(pointerId > this.TOTAL_MINUS_ONE)
                        
                                    {
                                    
    var message: string = "Log that the pointer Ids are not what would be expected or Android has more than what I set my stuff to support pointerId: ";;
    
ForcedLogUtil.log(message +pointerId, this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public process(motionEvent: MotionEvent){

        try {
            
    var action: number = motionEvent!.getAction()!;;
    

    var total: number = this.motionRecognizerArray!.length
                ;;
    

                        if(total > motionEvent!.getPointerCount())
                        
                                    {
                                    total= motionEvent!.getPointerCount();
    

                                    }
                                
                        else {
                            
    var message: string = "Log that Android has more pointers than I have expected so increase it motionEvent.getPointerCount(): ";;
    
ForcedLogUtil.log(message +motionEvent!.getPointerCount(), this);
    

                        }
                            

    var totalMinusOne: number = total -1;;
    

                        if(action == MotionEvent.ACTION_DOWN)
                        
                                    {
                                    



                        for (
    var pointerIndex: number = totalMinusOne;pointerIndex >= 0; pointerIndex--)
        {

    var pointerId: number = motionEvent!.getPointerId(pointerIndex)!;;
    

                        if(this.isValid(pointerId))
                        
                                    {
                                    
    var scalableListener: ScalableListener = this.displayInfo!.getScalableListener()!;;
    

    var x: number = Math.round(((motionEvent!.getX(pointerIndex) -this.displayInfo!.getLeft()) /scalableListener!.getRatio(this.displayInfo!.getRatio())));;
    

    var y: number = Math.round(((motionEvent!.getY(pointerIndex) -this.displayInfo!.getTop()) /scalableListener!.getRatio(this.displayInfo!.getRatio())));;
    
this.motionRecognizerArray[pointerId]!.processStartMotionEvent(x, y, motionEvent!.getDeviceId(), 0);
    

                                    }
                                
}


                                    }
                                
                             else 
                        if(action == MotionEvent.ACTION_UP || action == MotionEvent.ACTION_CANCEL)
                        
                                    {
                                    



                        for (
    var pointerIndex: number = totalMinusOne;pointerIndex >= 0; pointerIndex--)
        {

    var pointerId: number = motionEvent!.getPointerId(pointerIndex)!;;
    

                        if(this.isValid(pointerId))
                        
                                    {
                                    
    var scalableListener: ScalableListener = this.displayInfo!.getScalableListener()!;;
    

    var x: number = Math.round(((motionEvent!.getX(pointerIndex) -this.displayInfo!.getLeft()) /scalableListener!.getRatio(this.displayInfo!.getRatio())));;
    

    var y: number = Math.round(((motionEvent!.getY(pointerIndex) -this.displayInfo!.getTop()) /scalableListener!.getRatio(this.displayInfo!.getRatio())));;
    
this.motionRecognizerArray[pointerId]!.processEndMotionEvent(x, y, motionEvent!.getDeviceId(), 0);
    

                                    }
                                
}


                                    }
                                
                             else 
                        if(action == MotionEvent.ACTION_MOVE)
                        
                                    {
                                    



                        for (
    var pointerIndex: number = totalMinusOne;pointerIndex >= 0; pointerIndex--)
        {

    var pointerId: number = motionEvent!.getPointerId(pointerIndex)!;;
    

                        if(this.isValid(pointerId))
                        
                                    {
                                    
    var scalableListener: ScalableListener = this.displayInfo!.getScalableListener()!;;
    

    var x: number = Math.round(((motionEvent!.getX(pointerIndex) -this.displayInfo!.getLeft()) /scalableListener!.getRatio(this.displayInfo!.getRatio())));;
    

    var y: number = Math.round(((motionEvent!.getY(pointerIndex) -this.displayInfo!.getTop()) /scalableListener!.getRatio(this.displayInfo!.getRatio())));;
    
this.motionRecognizerArray[pointerId]!.processDraggedMotionEvent(x, y, motionEvent!.getDeviceId(), 0);
    

                                    }
                                
}


                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    
}

}


}



