
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { EventListenerInterface } from '../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameKeyEvent } from './GameKeyEvent.js';
//not GWT import - same folder const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

                
export interface PressGameKeyEventListenerInterface extends EventListenerInterface {
        

                //@Throws(Exception.constructor)
            
    onPressGameKeyEvent(gameKeyEvent: GameKeyEvent)

}



