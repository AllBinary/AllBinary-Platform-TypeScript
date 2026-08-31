
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
        
import { RTSLayerEvent } from '../../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
      //not GWT import const RTSLayerEvent = globalThis.org.allbinary.game.layer.RTSLayerEvent;

      
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventListenerInterface } from '../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
      //not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      //not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BuildingEventListenerInterface } from './BuildingEventListenerInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.building.event.BuildingEventListenerInterface;

                
export class LocalPlayerBuildingEventHandler extends BasicEventHandler {
        

    private static eventHandler: LocalPlayerBuildingEventHandler = new LocalPlayerBuildingEventHandler();

    public static getInstance(): LocalPlayerBuildingEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LocalPlayerBuildingEventHandler.eventHandler;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    var buildingEventListenerInterface: BuildingEventListenerInterface = (eventListenerInterface as BuildingEventListenerInterface);;
    
buildingEventListenerInterface!.onBuildingEvent(eventObject as RTSLayerEvent);
    
}


}



