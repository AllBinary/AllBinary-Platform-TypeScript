
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
        



import { AllMotionRecognizer } from "../../../org/allbinary/input/motion/AllMotionRecognizer.js";

    
import { BasicMotionGesturesHandler } from "../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js";

    
import { GameMotionGestureListener } from "../../../org/allbinary/input/motion/gesture/observer/GameMotionGestureListener.js";

    
import { MotionGestureReceiveInterfaceFactory } from "../../../org/allbinary/input/motion/gesture/observer/MotionGestureReceiveInterfaceFactory.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class TouchJ2ME
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly DEVICE_ID: number = 0;
        
        

    private motionRecognizer: AllMotionRecognizer = new AllMotionRecognizer();
        
        
public constructor (){

            super();
            
    var motionGesturesHandler: BasicMotionGesturesHandler = motionRecognizer!.getMotionGestureRecognizer()!.getMotionGesturesHandler()!;
        
        
;
    
motionGesturesHandler!.addListener(new GameMotionGestureListener(MotionGestureReceiveInterfaceFactory.getInstance()));
    
}


    public pointerDragged(x: number, y: number){
var x = x
var y = y

        try {
            motionRecognizer!.processDraggedMotionEvent(x, y, DEVICE_ID, 0);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, "pointerDragged", e);
    
}

}


    public pointerPressed(x: number, y: number){
var x = x
var y = y

        try {
            motionRecognizer!.processStartMotionEvent(x, y, DEVICE_ID, 0);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, "pointerPressed", e);
    
}

}


    public pointerReleased(x: number, y: number){
var x = x
var y = y

        try {
            motionRecognizer!.processEndMotionEvent(x, y, DEVICE_ID, 0);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, "pointerReleased", e);
    
}

}


}
                
            

