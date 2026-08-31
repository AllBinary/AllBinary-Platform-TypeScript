
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
        
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventListenerInterface } from '../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
      //not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { BasicEventHandler } from '../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      //not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameInitializedListenerInterface } from './GameInitializedListenerInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.configuration.event.GameInitializedListenerInterface;

                import { GameInitializedEvent } from './GameInitializedEvent.js';
//not GWT import const  = globalThis.org.allbinary.game.configuration.event.GameInitializedEvent;

                
export class GameInitializedEventHandler extends BasicEventHandler {
        

    private static readonly gameKeyEventHandler: GameInitializedEventHandler = new GameInitializedEventHandler();

    public static getInstance(): GameInitializedEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInitializedEventHandler.gameKeyEventHandler;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    var gameInitializedListenerInterface: GameInitializedListenerInterface = (eventListenerInterface as GameInitializedListenerInterface);;
    
gameInitializedListenerInterface!.onGameInitialized(eventObject as GameInitializedEvent);
    
}


}



