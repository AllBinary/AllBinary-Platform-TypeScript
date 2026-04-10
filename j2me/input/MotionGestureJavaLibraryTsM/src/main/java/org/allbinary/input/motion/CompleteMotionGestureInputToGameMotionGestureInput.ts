
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
        



import { TouchMotionGestureFactory } from "../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { MotionGestureConfiguration } from "../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfiguration.js";

    
import { MotionGestureConfigurationFactory } from "../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfigurationFactory.js";

    
import { DiagonalDownLeftTouchInputToGameKeyEventAction } from "../../../../org/allbinary/input/motion/touch/action/DiagonalDownLeftTouchInputToGameKeyEventAction.js";

    
import { DiagonalDownRightTouchInputToGameKeyEventAction } from "../../../../org/allbinary/input/motion/touch/action/DiagonalDownRightTouchInputToGameKeyEventAction.js";

    
import { DiagonalUpLeftTouchInputToGameKeyEventAction } from "../../../../org/allbinary/input/motion/touch/action/DiagonalUpLeftTouchInputToGameKeyEventAction.js";

    
import { DiagonalUpRightTouchInputToGameKeyEventAction } from "../../../../org/allbinary/input/motion/touch/action/DiagonalUpRightTouchInputToGameKeyEventAction.js";

    
import { DownTouchInputToGameKeyEventAction } from "../../../../org/allbinary/input/motion/touch/action/DownTouchInputToGameKeyEventAction.js";

    
import { LeftTouchInputToGameKeyEventAction } from "../../../../org/allbinary/input/motion/touch/action/LeftTouchInputToGameKeyEventAction.js";

    
import { ReleaseTouchInputToGameKeyEventAction } from "../../../../org/allbinary/input/motion/touch/action/ReleaseTouchInputToGameKeyEventAction.js";

    
import { RightTouchInputToGameKeyEventAction } from "../../../../org/allbinary/input/motion/touch/action/RightTouchInputToGameKeyEventAction.js";

    
import { UpTouchInputToGameKeyEventAction } from "../../../../org/allbinary/input/motion/touch/action/UpTouchInputToGameKeyEventAction.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class CompleteMotionGestureInputToGameMotionGestureInput
            extends Object
         {
        

    private static readonly instance: CompleteMotionGestureInputToGameMotionGestureInput = new CompleteMotionGestureInputToGameMotionGestureInput();
        
        

    public static getInstance(): CompleteMotionGestureInputToGameMotionGestureInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public init(){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


        try {
            PreLogUtil.put("Compound Motion Gestures", this, commonStrings!.INIT)

    var motionGestureConfiguration: MotionGestureConfiguration = MotionGestureConfigurationFactory.getInstance()!;
        
        


    var touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;
        
        


    var list: BasicArrayList = new BasicArrayList();
        
        

list.add(touchMotionGestureFactory!.DIAGONAL_DOWN_LEFT)
motionGestureConfiguration!.addMotionGestureAction(list, DiagonalDownLeftTouchInputToGameKeyEventAction.getInstance())
list= BasicArrayList()
list.add(touchMotionGestureFactory!.DIAGONAL_DOWN_RIGHT)
motionGestureConfiguration!.addMotionGestureAction(list, DiagonalDownRightTouchInputToGameKeyEventAction.getInstance())
list= BasicArrayList()
list.add(touchMotionGestureFactory!.DIAGONAL_UP_LEFT)
motionGestureConfiguration!.addMotionGestureAction(list, DiagonalUpLeftTouchInputToGameKeyEventAction.getInstance())
list= BasicArrayList()
list.add(touchMotionGestureFactory!.DIAGONAL_UP_RIGHT)
motionGestureConfiguration!.addMotionGestureAction(list, DiagonalUpRightTouchInputToGameKeyEventAction.getInstance())
list= BasicArrayList()
list.add(touchMotionGestureFactory!.LEFT)
motionGestureConfiguration!.addMotionGestureAction(list, LeftTouchInputToGameKeyEventAction.getInstance())
list= BasicArrayList()
list.add(touchMotionGestureFactory!.RIGHT)
motionGestureConfiguration!.addMotionGestureAction(list, RightTouchInputToGameKeyEventAction.getInstance())
list= BasicArrayList()
list.add(touchMotionGestureFactory!.DOWN)
motionGestureConfiguration!.addMotionGestureAction(list, DownTouchInputToGameKeyEventAction.getInstance())
list= BasicArrayList()
list.add(touchMotionGestureFactory!.UP)
motionGestureConfiguration!.addMotionGestureAction(list, UpTouchInputToGameKeyEventAction.getInstance())
list= BasicArrayList()
list.add(touchMotionGestureFactory!.RELEASED)
motionGestureConfiguration!.addMotionGestureAction(list, ReleaseTouchInputToGameKeyEventAction.getInstance())
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e)
}

}


}
                
            

