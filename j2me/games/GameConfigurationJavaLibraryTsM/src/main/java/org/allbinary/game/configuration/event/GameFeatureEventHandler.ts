
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
        import { GameFeatureListenerInterface } from './GameFeatureListenerInterface.js';
//not GWT import - same folder const GameFeatureListenerInterface = globalThis.org.allbinary.game.configuration.event.GameFeatureListenerInterface;

                import { GameFeatureEvent } from './GameFeatureEvent.js';
//not GWT import - same folder const GameFeatureEvent = globalThis.org.allbinary.game.configuration.event.GameFeatureEvent;

                
export class GameFeatureEventHandler extends BasicEventHandler {
        

    private static readonly gameKeyEventHandler: GameFeatureEventHandler = new GameFeatureEventHandler();

    public static getInstance(): GameFeatureEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameFeatureEventHandler.gameKeyEventHandler;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    var gameFeatureListenerInterface: GameFeatureListenerInterface = (eventListenerInterface as GameFeatureListenerInterface);;
    
gameFeatureListenerInterface!.onGameFeatureChange(eventObject as GameFeatureEvent);
    
}


}



