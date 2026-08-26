
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
        



//not game specific package import { MotionEvent } from '../../../../../android/view/MotionEvent.js';
      const MotionEvent = globalThis.android.view.MotionEvent;

      
//not game specific package import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
      const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;

      
//not game specific package import { GameMotionGestureListener } from '../../../../../org/allbinary/input/motion/gesture/observer/GameMotionGestureListener.js';
      const GameMotionGestureListener = globalThis.org.allbinary.input.motion.gesture.observer.GameMotionGestureListener;

      
//not game specific package import { MotionGestureReceiveInterfaceFactory } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureReceiveInterfaceFactory.js';
      const MotionGestureReceiveInterfaceFactory = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureReceiveInterfaceFactory;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionEventProcessor } from './MotionEventProcessor.js';

export class BaseGameInputMotionEventProcessor extends MotionEventProcessor {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly gameMotionGestureListener: GameMotionGestureListener;

protected constructor (){

            super();
        this.gameMotionGestureListener= new GameMotionGestureListener(MotionGestureReceiveInterfaceFactory.getInstance());
    
this.addListener();
    
}


    public process(motionEvent: MotionEvent){
}


    public addListener(){

    var motionGesturesHandler: BasicMotionGesturesHandler = BasicMotionGesturesHandler.getInstance()!;;
    
motionGesturesHandler!.addListenerInterface(this.gameMotionGestureListener);
    
}


}
                
            

