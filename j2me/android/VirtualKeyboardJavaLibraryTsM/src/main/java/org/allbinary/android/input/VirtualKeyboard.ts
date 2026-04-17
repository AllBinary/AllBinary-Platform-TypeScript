
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
        



import { VirtualKeyboardEvent } from "../../../../org/allbinary/input/event/VirtualKeyboardEvent.js";

    
import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../org/allbinary/logic/util/event/EventStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class VirtualKeyboard
            extends Object
         {
        

    public static readonly NULL_VIRTUAL_KEYBOARD: VirtualKeyboard = new VirtualKeyboard();
        
        

    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onVirtualKeyboardEvent(virtualKeyboardEvent: VirtualKeyboardEvent){
var virtualKeyboardEvent = virtualKeyboardEvent
}


    public forceHide(){
}


    public hide(){
}


}
                
            

