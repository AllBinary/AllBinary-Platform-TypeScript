
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *    Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { RTSLayerEvent } from '../../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
      const RTSLayerEvent = globalThis.org.allbinary.game.layer.RTSLayerEvent;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventListenerInterface } from '../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
      const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
//not game specific package import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WaypointEventListenerInterface } from './WaypointEventListenerInterface.js';

export class WaypointEventHandler extends BasicEventHandler {
        

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    var waypointEventListenerInterface: WaypointEventListenerInterface = (eventListenerInterface as WaypointEventListenerInterface);;
    
waypointEventListenerInterface!.onWaypointEvent(eventObject as RTSLayerEvent);
    
}


}
                
            

