
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
        



            import { Object } from '../../../java/lang/Object.js';
        
//not game specific package import { BoundsChangeEvent } from '../../../org/allbinary/bounds/event/BoundsChangeEvent.js';
      const BoundsChangeEvent = globalThis.org.allbinary.bounds.event.BoundsChangeEvent;

      
//not game specific package import { BoundsChangeEventListener } from '../../../org/allbinary/bounds/event/BoundsChangeEventListener.js';
      const BoundsChangeEventListener = globalThis.org.allbinary.bounds.event.BoundsChangeEventListener;

      
//not game specific package import { Rectangle } from '../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { ForcedLogUtil } from '../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BoundsVisitorInterface } from './BoundsVisitorInterface.js';

export class LayerBounds
            extends Object
         implements BoundsChangeEventListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    rectangle: Rectangle;

protected constructor (rectangle: Rectangle){

            super();
        this.rectangle= rectangle;
    
}


    public getRectangleP(): Rectangle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangle;
    
}


    public visit(boundsVisitorInterface: BoundsVisitorInterface){
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onBoundsChangeEvent(boundsChangeEvent: BoundsChangeEvent){
this.rectangle= boundsChangeEvent!.getRectangle();
    
}


}
                
            

