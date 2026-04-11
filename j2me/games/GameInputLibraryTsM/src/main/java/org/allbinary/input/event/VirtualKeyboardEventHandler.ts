
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { BasicEventHandler } from "../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class VirtualKeyboardEventHandler extends BasicEventHandler {
        

    private static readonly gameKeyEventHandler: VirtualKeyboardEventHandler = new VirtualKeyboardEventHandler();
        
        

    public static getInstance(): VirtualKeyboardEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return VirtualKeyboardEventHandler.gameKeyEventHandler;
    
}

private constructor (){

            super();
            }


    public readonly SHOW_EVENT: VirtualKeyboardEvent = new VirtualKeyboardEvent(BooleanFactory.getInstance()!.TRUE);
        
        

    public readonly HIDE_EVENT: VirtualKeyboardEvent = new VirtualKeyboardEvent(BooleanFactory.getInstance()!.FALSE);
        
        

                //@Throws(Error::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
    //var eventObject = eventObject
    //var eventListenerInterface = eventListenerInterface

    var virtualKeyboardEventListenerInterface: VirtualKeyboardEventListenerInterface = eventListenerInterface as VirtualKeyboardEventListenerInterface;
        
        
;
    
virtualKeyboardEventListenerInterface!.onVirtualKeyboardEvent(eventObject as VirtualKeyboardEvent);
    
}


    public open(){

        try {
            Thread.sleep(120);
    
this.fireEvent(this.SHOW_EVENT);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "open", e);
    
}

}


    public close(){

        try {
            Thread.sleep(120);
    
this.fireEvent(this.HIDE_EVENT);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CLOSE, e);
    
}

}


}
                
            

