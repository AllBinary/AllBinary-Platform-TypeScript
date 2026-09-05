
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
        
import { BoundsChangeEvent } from '../../../org/allbinary/bounds/event/BoundsChangeEvent.js';
//not GWT import const BoundsChangeEvent = globalThis.org.allbinary.bounds.event.BoundsChangeEvent;

      
import { BoundsChangeEventListener } from '../../../org/allbinary/bounds/event/BoundsChangeEventListener.js';
//not GWT import const BoundsChangeEventListener = globalThis.org.allbinary.bounds.event.BoundsChangeEventListener;

      
import { Rectangle } from '../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AllBinaryEventObject } from '../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BoundsVisitorInterface } from './BoundsVisitorInterface.js';
//not GWT import - same folder const BoundsVisitorInterface = globalThis.org.allbinary.bounds.BoundsVisitorInterface;

                
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



