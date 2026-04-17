
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
        



import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { BasicEventHandler } from "../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DisplayChangeEventHandler extends BasicEventHandler {
        

    private static readonly SINGLETON: DisplayChangeEventHandler = new DisplayChangeEventHandler();
        
        

    public static getInstance(): DisplayChangeEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}

private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
    //var eventObject = eventObject
    //var eventListenerInterface = eventListenerInterface

    var displayChangeEventListener: DisplayChangeEventListener = (eventListenerInterface as DisplayChangeEventListener);
        
        
;
    
displayChangeEventListener!.onDisplayChangeEvent(eventObject as DisplayChangeEvent);
    
}


}
                
            

