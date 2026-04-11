
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
        



import { CompleteMotionGestureInputEvent } from "../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js";

    
import { CompleteMotionGestureInputEventListener } from "../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListener.js";

    
import { DownGameKeyEventHandler } from "../../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js";

    
import { GameKeyEvent } from "../../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { UpGameKeyEventHandler } from "../../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js";

    
import { ForcedLogUtil } from "../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class GameKeyFromMotionGestureEventListener extends CompleteMotionGestureInputEventListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private previousGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;
        
        

    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onCompleteMotionGestureInputEvent(completeMotionGestureInputEvent: CompleteMotionGestureInputEvent){
var completeMotionGestureInputEvent = completeMotionGestureInputEvent

        try {
            
    var gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent = completeMotionGestureInputEvent as GameKeyCompleteMotionGestureInputEvent;
        
        
;
    

    var gameKeyEvent: GameKeyEvent = gameKeyCompleteMotionGestureInputEvent!.getGameKeyEvent()!;
        
        
;
    

                        if(gameKeyEvent != previousGameKeyEvent)
                        
                                    {
                                    
                        if(previousGameKeyEvent != GameKeyEvent.NONE)
                        
                                    {
                                    UpGameKeyEventHandler.getInstance()!.fireEvent(previousGameKeyEvent);
    

                                    }
                                
previousGameKeyEvent= gameKeyEvent;
    

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

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, "onCompleteMotionGestureInputEvent", e);
    
}

}


}
                
            

