
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

    

export class GameInitializedEventHandler extends BasicEventHandler {
        

    private static readonly gameKeyEventHandler: GameInitializedEventHandler = new GameInitializedEventHandler();
        
        

    public static getInstance(): GameInitializedEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInitializedEventHandler.gameKeyEventHandler;
    
}

private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
var eventObject = eventObject
var eventListenerInterface = eventListenerInterface

    var gameInitializedListenerInterface: GameInitializedListenerInterface = (eventListenerInterface as GameInitializedListenerInterface);
        
        

onGameInitialized(eventObject as GameInitializedEvent)
}


}
                
            

