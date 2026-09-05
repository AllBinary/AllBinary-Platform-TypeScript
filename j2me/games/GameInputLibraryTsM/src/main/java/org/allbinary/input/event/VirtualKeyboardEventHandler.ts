
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Thread } from '../../../../java/lang/Thread.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventListenerInterface } from '../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VirtualKeyboardEvent } from './VirtualKeyboardEvent.js';
//not GWT import - same folder const VirtualKeyboardEvent = globalThis.org.allbinary.input.event.VirtualKeyboardEvent;

                import { VirtualKeyboardEventListenerInterface } from './VirtualKeyboardEventListenerInterface.js';
//not GWT import - same folder const VirtualKeyboardEventListenerInterface = globalThis.org.allbinary.input.event.VirtualKeyboardEventListenerInterface;

                
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

                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    var virtualKeyboardEventListenerInterface: VirtualKeyboardEventListenerInterface = eventListenerInterface as unknown as VirtualKeyboardEventListenerInterface;;
    
virtualKeyboardEventListenerInterface!.onVirtualKeyboardEvent(eventObject as VirtualKeyboardEvent);
    
}


    public open(){

        try {
            Thread.sleep(120);
    
this.fireEvent(this.SHOW_EVENT);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "open", e);
    
}

}


    public close(){

        try {
            Thread.sleep(120);
    
this.fireEvent(this.HIDE_EVENT);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CLOSE, e);
    
}

}


}



