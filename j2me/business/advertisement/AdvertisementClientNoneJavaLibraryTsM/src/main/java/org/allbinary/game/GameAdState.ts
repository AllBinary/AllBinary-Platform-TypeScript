
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
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GameAdStateBase } from '../../../org/allbinary/business/advertisement/GameAdStateBase.js';
      const GameAdStateBase = globalThis.org.allbinary.business.advertisement.GameAdStateBase;

      
//not game specific package import { AdConfiguration } from '../../../org/allbinary/business/advertisement/AdConfiguration.js';
      const AdConfiguration = globalThis.org.allbinary.business.advertisement.AdConfiguration;

      
//not game specific package import { VirtualKeyboardEvent } from '../../../org/allbinary/input/event/VirtualKeyboardEvent.js';
      const VirtualKeyboardEvent = globalThis.org.allbinary.input.event.VirtualKeyboardEvent;

      
//not game specific package import { VirtualKeyboardEventHandler } from '../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
      const VirtualKeyboardEventHandler = globalThis.org.allbinary.input.event.VirtualKeyboardEventHandler;

      
//not game specific package import { VirtualKeyboardEventListenerInterface } from '../../../org/allbinary/input/event/VirtualKeyboardEventListenerInterface.js';
      const VirtualKeyboardEventListenerInterface = globalThis.org.allbinary.input.event.VirtualKeyboardEventListenerInterface;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
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



