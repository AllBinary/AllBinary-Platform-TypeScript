
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
        
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventListenerInterface } from '../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
      //not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      //not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CapitalEventListenerInterface } from './CapitalEventListenerInterface.js';
import { CapitalEvent } from './CapitalEvent.js';

export class CapitalEventHandler extends BasicEventHandler {
        

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    var capitalEventListenerInterface: CapitalEventListenerInterface = (eventListenerInterface as CapitalEventListenerInterface);;
    
capitalEventListenerInterface!.onCapitalChangeEvent(eventObject as CapitalEvent);
    
}


}



