
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
        
//not game specific package import { MotionEvent } from '../../../../../../android/view/MotionEvent.js';
      const MotionEvent = globalThis.android.view.MotionEvent;

      
//not game specific package import { BaseGameInputMotionEventProcessor } from '../../../../../../org/allbinary/android/input/motion/BaseGameInputMotionEventProcessor.js';
      const BaseGameInputMotionEventProcessor = globalThis.org.allbinary.android.input.motion.BaseGameInputMotionEventProcessor;

      
//not game specific package import { AllMotionRecognizer } from '../../../../../../org/allbinary/input/motion/AllMotionRecognizer.js';
      const AllMotionRecognizer = globalThis.org.allbinary.input.motion.AllMotionRecognizer;

      
//not game specific package import { MotionRecognizer } from '../../../../../../org/allbinary/input/motion/MotionRecognizer.js';
      const MotionRecognizer = globalThis.org.allbinary.input.motion.MotionRecognizer;

      
//not game specific package import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameInputMotionEventProcessorAPI1 extends BaseGameInputMotionEventProcessor {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): GameInputMotionEventProcessorAPI1{

                        if(GameInputMotionEventProcessorAPI1.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    GameInputMotionEventProcessorAPI1.instance= new GameInputMotionEventProcessorAPI1();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInputMotionEventProcessorAPI1.instance as GameInputMotionEventProcessorAPI1;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly motionRecognizer: MotionRecognizer = new AllMotionRecognizer();

private constructor (){

            super();
        }


    public process(motionEvent: MotionEvent){

        try {
            
    var x: number = Math.round(motionEvent!.getX());;
    

    var y: number = Math.round(motionEvent!.getY());;
    

    var action: number = motionEvent!.getAction()!;;
    

                        if(action == MotionEvent.ACTION_DOWN)
                        
                                    {
                                    this.motionRecognizer!.processStartMotionEvent(x, y, motionEvent!.getDeviceId(), 0);
    

                                    }
                                
                             else 
                        if(action == MotionEvent.ACTION_UP || action == MotionEvent.ACTION_CANCEL)
                        
                                    {
                                    this.motionRecognizer!.processEndMotionEvent(x, y, motionEvent!.getDeviceId(), 0);
    

                                    }
                                
                             else 
                        if(action == MotionEvent.ACTION_MOVE)
                        
                                    {
                                    this.motionRecognizer!.processDraggedMotionEvent(x, y, motionEvent!.getDeviceId(), 0);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    
}

}


}



