
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { MotionEvent } from '../../../../../android/view/MotionEvent.js';
      const MotionEvent = globalThis.android.view.MotionEvent;

      
//not game specific package import { SingleKeyPressGameKeyFromMotionGestureEventListener } from '../../../../../org/allbinary/game/input/motion/action/SingleKeyPressGameKeyFromMotionGestureEventListener.js';
      const SingleKeyPressGameKeyFromMotionGestureEventListener = globalThis.org.allbinary.game.input.motion.action.SingleKeyPressGameKeyFromMotionGestureEventListener;

      
//not game specific package import { DownTrackballInputToGameKeyEventAction } from '../../../../../org/allbinary/input/motion/trackball/action/DownTrackballInputToGameKeyEventAction.js';
      const DownTrackballInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.trackball.action.DownTrackballInputToGameKeyEventAction;

      
//not game specific package import { LeftTrackballInputToGameKeyEventAction } from '../../../../../org/allbinary/input/motion/trackball/action/LeftTrackballInputToGameKeyEventAction.js';
      const LeftTrackballInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.trackball.action.LeftTrackballInputToGameKeyEventAction;

      
//not game specific package import { RightTrackballInputToGameKeyEventAction } from '../../../../../org/allbinary/input/motion/trackball/action/RightTrackballInputToGameKeyEventAction.js';
      const RightTrackballInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.trackball.action.RightTrackballInputToGameKeyEventAction;

      
//not game specific package import { UpTrackballInputToGameKeyEventAction } from '../../../../../org/allbinary/input/motion/trackball/action/UpTrackballInputToGameKeyEventAction.js';
      const UpTrackballInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.trackball.action.UpTrackballInputToGameKeyEventAction;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionEventProcessor } from './MotionEventProcessor.js';

export class TrackballGameInputMotionEventProcessor extends MotionEventProcessor {
        

    private static PROCESSOR: TrackballGameInputMotionEventProcessor = new TrackballGameInputMotionEventProcessor();

    public static getInstance(): TrackballGameInputMotionEventProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TrackballGameInputMotionEventProcessor.PROCESSOR;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly listener: SingleKeyPressGameKeyFromMotionGestureEventListener = new SingleKeyPressGameKeyFromMotionGestureEventListener();

private constructor (){

            super();
        }


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    public process(motionEvent: MotionEvent){

        try {
            
    var x: number = motionEvent!.getX()!;;
    

    var y: number = motionEvent!.getY()!;;
    

                        if(x < 0)
                        
                                    {
                                    this.listener.onCompleteMotionGestureInputEvent(LeftTrackballInputToGameKeyEventAction.getInstance());
    

                                    }
                                
                             else 
                        if(x > 0)
                        
                                    {
                                    this.listener.onCompleteMotionGestureInputEvent(RightTrackballInputToGameKeyEventAction.getInstance());
    

                                    }
                                

                        if(y < 0)
                        
                                    {
                                    this.listener.onCompleteMotionGestureInputEvent(UpTrackballInputToGameKeyEventAction.getInstance());
    

                                    }
                                
                             else 
                        if(y > 0)
                        
                                    {
                                    this.listener.onCompleteMotionGestureInputEvent(DownTrackballInputToGameKeyEventAction.getInstance());
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    
}

}


}
                
            

