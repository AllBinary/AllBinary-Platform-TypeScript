
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
        
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventListenerInterface } from '../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { NullEventListener } from '../../../../../../org/allbinary/logic/util/event/NullEventListener.js';
//not GWT import const NullEventListener = globalThis.org.allbinary.logic.util.event.NullEventListener;

      
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameNotificationListenerInterface } from './GameNotificationListenerInterface.js';
//not GWT import - same folder const GameNotificationListenerInterface = globalThis.org.allbinary.game.layer.hud.event.GameNotificationListenerInterface;

                import { GameNotificationEvent } from './GameNotificationEvent.js';
//not GWT import - same folder const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

                
export class GameNotificationEventHandler extends BasicEventHandler {
        

    private static readonly instance: GameNotificationEventHandler = new GameNotificationEventHandler();

    public static getInstance(): GameNotificationEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameNotificationEventHandler.instance;
    
}


private constructor (){

            super();
        }


    public enabled: boolean = true;
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public removeAllListeners(){

    var eventListenerInterface: EventListenerInterface = NullEventListener.NULL_EVENT_LISTENER;;
    

    var list: BasicArrayList = this.eventListenerInterfaceList;;
    

                        if(list.size() > 0)
                        
                                    {
                                    eventListenerInterface= list.objectArray[0]! as EventListenerInterface;
    

                                    }
                                
super.removeAllListeners();
    

                        if(eventListenerInterface != NullEventListener.NULL_EVENT_LISTENER)
                        
                                    {
                                    this.addListenerInterface(eventListenerInterface);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

                        if(!this.enabled)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var gameNotificationListenerInterface: GameNotificationListenerInterface = eventListenerInterface as GameNotificationListenerInterface;;
    
gameNotificationListenerInterface!.onGameNotificationEvent(eventObject as GameNotificationEvent);
    
}


}



