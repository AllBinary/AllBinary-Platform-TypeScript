
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { AllBinaryEventObjectFactoryInterface } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObjectFactoryInterface.js';
//not GWT import const AllBinaryEventObjectFactoryInterface = globalThis.org.allbinary.logic.util.event.AllBinaryEventObjectFactoryInterface;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TrackingEvent } from './TrackingEvent.js';
//not GWT import - same folder const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

                import { TrackingEventHandler } from './TrackingEventHandler.js';
//not GWT import - same folder const TrackingEventHandler = globalThis.org.allbinary.game.tracking.TrackingEventHandler;

                
export class TrackingEventFactory
            extends Object
         implements AllBinaryEventObjectFactoryInterface {
        

public constructor (){

            super();
        }


    public getInstance(): AllBinaryEventObject{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TrackingEvent(TrackingEventHandler.getInstance());
    
}


}



