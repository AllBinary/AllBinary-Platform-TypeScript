
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
        



            import { Object } from "../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../java/lang/Exception.js";
        
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { BasicEventHandler } from "../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CapitalEventListenerInterface } from "./CapitalEventListenerInterface.js";
import { CapitalEvent } from "./CapitalEvent.js";

export class CapitalEventHandler extends BasicEventHandler {
        
public constructor (){

            super();
        }


                //@Throws(Exception::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
var eventObject = eventObject
var eventListenerInterface = eventListenerInterface

    var capitalEventListenerInterface: CapitalEventListenerInterface = (eventListenerInterface as CapitalEventListenerInterface);
;
    
capitalEventListenerInterface!.onCapitalChangeEvent(eventObject as CapitalEvent);
    
}


}
                
            

