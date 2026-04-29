
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
        



import { GameAdStateBase } from "../../../org/allbinary/business/advertisement/GameAdStateBase.js";

    
import { AdConfiguration } from "../../../org/allbinary/business/advertisement/AdConfiguration.js";

    
import { VirtualKeyboardEvent } from "../../../org/allbinary/input/event/VirtualKeyboardEvent.js";

    
import { VirtualKeyboardEventHandler } from "../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js";

    
import { VirtualKeyboardEventListenerInterface } from "../../../org/allbinary/input/event/VirtualKeyboardEventListenerInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameAdState extends GameAdStateBase implements VirtualKeyboardEventListenerInterface {
        
public constructor (adConfiguration: AdConfiguration){
            super(adConfiguration);
                    var adConfiguration = adConfiguration


                            //For kotlin this is before the body of the constructor.
                    
VirtualKeyboardEventHandler.getInstance()!.addListener(this);
    
}


                //@Throws(Error::class)
            
    public onVirtualKeyboardEvent(virtualKeyboardEvent: VirtualKeyboardEvent){
var virtualKeyboardEvent = virtualKeyboardEvent
}


}
                
            

