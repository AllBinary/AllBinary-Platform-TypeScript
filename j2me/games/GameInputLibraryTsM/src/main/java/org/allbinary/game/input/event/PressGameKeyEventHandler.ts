
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
        



import { PlayerGameInput } from "../../../../../org/allbinary/game/input/PlayerGameInput.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { BasicEventHandler } from "../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PressGameKeyEventHandler extends BasicEventHandler {
        

    private static readonly instance: PressGameKeyEventHandler = new PressGameKeyEventHandler();
        
        

    public static getInstance(): PressGameKeyEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PressGameKeyEventHandler.instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();
        
        
private constructor (){

            super();
        }


    public addListener(playerGameInput: PlayerGameInput){
var playerGameInput = playerGameInput

                        if(!this.list.contains(playerGameInput);)
                        
                                    {
                                    this.list.add(playerGameInput);
    

                                    }
                                
}


    public removeAllListeners(){
this.list.clear();
    
super.removeAllListeners();
    
}


    public removeListener(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
this.list.remove(eventListenerInterface);
    
super.removeListener(eventListenerInterface);
    
}


                //@Throws(Error::class)
            
    public fireEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject




                        for (
    var index: number = this.list.size()!;
        
        
--index >= 0; )
        {

        try {
            
    var playerGameInput: PlayerGameInput = this.list.objectArray[index]! as PlayerGameInput;
        
        
;
    
playerGameInput!.onPressGameKeyEvent(eventObject as GameKeyEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}

super.fireEvent(eventObject);
    
}


                //@Throws(Error::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
var eventObject = eventObject
var eventListenerInterface = eventListenerInterface

    var pressGameKeyEventListenerInterface: PressGameKeyEventListenerInterface = (eventListenerInterface as PressGameKeyEventListenerInterface);
        
        
;
    
pressGameKeyEventListenerInterface!.onPressGameKeyEvent(eventObject as GameKeyEvent);
    
}


}
                
            

