
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
        
import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { EventListenerInterface } from '../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { JsMethod } from '../../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameNotificationEvent } from './GameNotificationEvent.js';
//not GWT import - same folder const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

                
export interface GameNotificationListenerInterface extends EventListenerInterface {
        

                //@Throws(Exception.constructor)
            
    onGameNotificationEvent(gameNotificationEvent: GameNotificationEvent)

}



