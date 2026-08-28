
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { CompleteMotionGestureInputEvent } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js';
      const CompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEvent;

      
//not game specific package import { CompleteMotionGestureInputEventListener } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListener.js';
      const CompleteMotionGestureInputEventListener = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventListener;

      
//not game specific package import { DownGameKeyEventHandler } from '../../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
      const DownGameKeyEventHandler = globalThis.org.allbinary.game.input.event.DownGameKeyEventHandler;

      
//not game specific package import { GameKeyEvent } from '../../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { UpGameKeyEventHandler } from '../../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
      const UpGameKeyEventHandler = globalThis.org.allbinary.game.input.event.UpGameKeyEventHandler;

      
//not game specific package import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameKeyCompleteMotionGestureInputEvent } from './GameKeyCompleteMotionGestureInputEvent.js';

export class GameKeyFromMotionGestureEventListener extends CompleteMotionGestureInputEventListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private previousGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;

    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onCompleteMotionGestureInputEvent(completeMotionGestureInputEvent: CompleteMotionGestureInputEvent){

        try {
            
    var gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent = completeMotionGestureInputEvent as GameKeyCompleteMotionGestureInputEvent;;
    

    var gameKeyEvent: GameKeyEvent = gameKeyCompleteMotionGestureInputEvent!.getGameKeyEvent()!;;
    

                        if(gameKeyEvent != this.previousGameKeyEvent)
                        
                                    {
                                    
                        if(this.previousGameKeyEvent != GameKeyEvent.NONE)
                        
                                    {
                                    UpGameKeyEventHandler.getInstance()!.fireEvent(this.previousGameKeyEvent);
    

                                    }
                                
this.previousGameKeyEvent= gameKeyEvent;
    

                        if(gameKeyEvent != 
                                    null
                                 && gameKeyEvent != GameKeyEvent.NONE)
                        
                                    {
                                    DownGameKeyEventHandler.getInstance()!.fireEvent(gameKeyEvent);
    

                                    }
                                

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "onCompleteMotionGestureInputEvent", e);
    
}

}


}



