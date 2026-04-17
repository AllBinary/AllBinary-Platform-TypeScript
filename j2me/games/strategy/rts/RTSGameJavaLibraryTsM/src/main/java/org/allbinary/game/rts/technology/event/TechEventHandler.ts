
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
        



import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { BasicEventHandler } from "../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TechEventHandler extends BasicEventHandler {
        

    private static readonly eventHandler: TechEventHandler = new TechEventHandler();
        
        

    public static getInstance(): TechEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TechEventHandler.eventHandler;
    
}

private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
var eventObject = eventObject
var eventListenerInterface = eventListenerInterface

    var techEventListenerInterface: TechEventListenerInterface = (eventListenerInterface as TechEventListenerInterface);
        
        
;
    
techEventListenerInterface!.onTechEvent(eventObject);
    
}


}
                
            

