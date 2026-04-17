
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
        



import { BoundsChangeEvent } from "../../../org/allbinary/bounds/event/BoundsChangeEvent.js";

    
import { BoundsChangeEventListener } from "../../../org/allbinary/bounds/event/BoundsChangeEventListener.js";

    
import { Rectangle } from "../../../org/allbinary/graphics/Rectangle.js";

    
import { ForcedLogUtil } from "../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../org/allbinary/logic/util/event/EventStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BoundsVisitorInterface } from "./BoundsVisitorInterface.js";

export class LayerBounds
            extends Object
         implements BoundsChangeEventListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    rectangle: Rectangle
protected constructor (rectangle: Rectangle){

            super();
            var rectangle = rectangle
this.rectangle= rectangle;
    
}


    public getRectangleP(): Rectangle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangle;
    
}


    public visit(boundsVisitorInterface: BoundsVisitorInterface){
var boundsVisitorInterface = boundsVisitorInterface
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onBoundsChangeEvent(boundsChangeEvent: BoundsChangeEvent){
var boundsChangeEvent = boundsChangeEvent
this.rectangle= boundsChangeEvent!.getRectangle();
    
}


}
                
            

