
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
        



import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { NullEventListener } from "../../../../../../org/allbinary/logic/util/event/NullEventListener.js";

    
import { BasicEventHandler } from "../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class GameNotificationEventHandler extends BasicEventHandler {
        

    private static readonly instance: GameNotificationEventHandler = new GameNotificationEventHandler();
        
        

    public static getInstance(): GameNotificationEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public enabled: boolean = true;
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removeAllListeners(){

    var eventListenerInterface: EventListenerInterface = NullEventListener.NULL_EVENT_LISTENER;
        
        


    var list: BasicArrayList = this.eventListenerInterfaceList;
        
        


                        if(list.size() > 0)
                        
                                    {
                                    eventListenerInterface= list.objectArray[0]! as EventListenerInterface

                                    }
                                
super.removeAllListeners()

                        if(eventListenerInterface != NullEventListener.NULL_EVENT_LISTENER)
                        
                                    {
                                    this.this.addListener(eventListenerInterface)

                                    }
                                
}


                //@Throws(Error::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
var eventObject = eventObject
var eventListenerInterface = eventListenerInterface

                        if(!enabled)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var gameNotificationListenerInterface: GameNotificationListenerInterface = eventListenerInterface as GameNotificationListenerInterface;
        
        

gameNotificationListenerInterface!.onGameNotificationEvent(eventObject as GameNotificationEvent)
}


}
                
            

