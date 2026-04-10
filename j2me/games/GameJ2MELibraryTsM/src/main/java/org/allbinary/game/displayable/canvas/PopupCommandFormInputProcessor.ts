
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
        



import { MyCanvas } from "../../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { ScrollSelectionForm } from "../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js";

    
import { MotionGestureEvent } from "../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class PopupCommandFormInputProcessor extends CommandFormInputProcessor {
        
public constructor (gameKeyEventList: BasicArrayList, playerInputId: number, gameCanvas: MyCanvas, form: ScrollSelectionForm, popupMenuInputProcessor: PopupMenuInputProcessor)                        

                            : super(gameKeyEventList, playerInputId, gameCanvas, form){

            super();
            var gameKeyEventList = gameKeyEventList
var playerInputId = playerInputId
var gameCanvas = gameCanvas
var form = form
var popupMenuInputProcessor = popupMenuInputProcessor


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public processInput(key: number): number{
var key = key



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.processInput(key);
    
}


                //@Throws(Error::class)
            
    processMotionInput(motionGestureEvent: MotionGestureEvent){
var motionGestureEvent = motionGestureEvent
super.processMotionInput(motionGestureEvent)
}


}
                
            

