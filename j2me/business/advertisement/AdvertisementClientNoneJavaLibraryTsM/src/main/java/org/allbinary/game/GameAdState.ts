
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
        



            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameAdStateBase } from '../../../org/allbinary/business/advertisement/GameAdStateBase.js';
      //not GWT import const GameAdStateBase = globalThis.org.allbinary.business.advertisement.GameAdStateBase;

      
import { AdConfiguration } from '../../../org/allbinary/business/advertisement/AdConfiguration.js';
      //not GWT import const AdConfiguration = globalThis.org.allbinary.business.advertisement.AdConfiguration;

      
import { VirtualKeyboardEvent } from '../../../org/allbinary/input/event/VirtualKeyboardEvent.js';
      //not GWT import const VirtualKeyboardEvent = globalThis.org.allbinary.input.event.VirtualKeyboardEvent;

      
import { VirtualKeyboardEventHandler } from '../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
      //not GWT import const VirtualKeyboardEventHandler = globalThis.org.allbinary.input.event.VirtualKeyboardEventHandler;

      
import { VirtualKeyboardEventListenerInterface } from '../../../org/allbinary/input/event/VirtualKeyboardEventListenerInterface.js';
      //not GWT import const VirtualKeyboardEventListenerInterface = globalThis.org.allbinary.input.event.VirtualKeyboardEventListenerInterface;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameAdState extends GameAdStateBase implements VirtualKeyboardEventListenerInterface {
        

public constructor (adConfiguration: AdConfiguration){
            super(adConfiguration);
                    

                            //For kotlin this is before the body of the constructor.
                    
VirtualKeyboardEventHandler.getInstance()!.addListenerInterface(this);
    
}


                //@Throws(Exception.constructor)
            
    public onVirtualKeyboardEvent(virtualKeyboardEvent: VirtualKeyboardEvent){
}


}



