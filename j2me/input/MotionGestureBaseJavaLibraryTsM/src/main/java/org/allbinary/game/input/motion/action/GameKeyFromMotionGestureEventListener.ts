
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
        
import { CompleteMotionGestureInputEvent } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js';
//not GWT import const CompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEvent;

      
import { CompleteMotionGestureInputEventListener } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListener.js';
//not GWT import const CompleteMotionGestureInputEventListener = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventListener;

      
import { DownGameKeyEventHandler } from '../../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
//not GWT import const DownGameKeyEventHandler = globalThis.org.allbinary.game.input.event.DownGameKeyEventHandler;

      
import { GameKeyEvent } from '../../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
import { UpGameKeyEventHandler } from '../../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
//not GWT import const UpGameKeyEventHandler = globalThis.org.allbinary.game.input.event.UpGameKeyEventHandler;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameKeyCompleteMotionGestureInputEvent } from './GameKeyCompleteMotionGestureInputEvent.js';
//not GWT import - same folder const GameKeyCompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent;

                
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



