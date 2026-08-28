
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
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { TouchMotionGestureFactory } from '../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not game specific package import { MotionGestureConfiguration } from '../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfiguration.js';
      const MotionGestureConfiguration = globalThis.org.allbinary.input.motion.gesture.configuration.MotionGestureConfiguration;

      
//not game specific package import { MotionGestureConfigurationFactory } from '../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfigurationFactory.js';
      const MotionGestureConfigurationFactory = globalThis.org.allbinary.input.motion.gesture.configuration.MotionGestureConfigurationFactory;

      
//not game specific package import { DiagonalDownLeftTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/DiagonalDownLeftTouchInputToGameKeyEventAction.js';
      const DiagonalDownLeftTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.DiagonalDownLeftTouchInputToGameKeyEventAction;

      
//not game specific package import { DiagonalDownRightTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/DiagonalDownRightTouchInputToGameKeyEventAction.js';
      const DiagonalDownRightTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.DiagonalDownRightTouchInputToGameKeyEventAction;

      
//not game specific package import { DiagonalUpLeftTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/DiagonalUpLeftTouchInputToGameKeyEventAction.js';
      const DiagonalUpLeftTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.DiagonalUpLeftTouchInputToGameKeyEventAction;

      
//not game specific package import { DiagonalUpRightTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/DiagonalUpRightTouchInputToGameKeyEventAction.js';
      const DiagonalUpRightTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.DiagonalUpRightTouchInputToGameKeyEventAction;

      
//not game specific package import { DownTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/DownTouchInputToGameKeyEventAction.js';
      const DownTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.DownTouchInputToGameKeyEventAction;

      
//not game specific package import { LeftTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/LeftTouchInputToGameKeyEventAction.js';
      const LeftTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.LeftTouchInputToGameKeyEventAction;

      
//not game specific package import { ReleaseTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/ReleaseTouchInputToGameKeyEventAction.js';
      const ReleaseTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.ReleaseTouchInputToGameKeyEventAction;

      
//not game specific package import { RightTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/RightTouchInputToGameKeyEventAction.js';
      const RightTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.RightTouchInputToGameKeyEventAction;

      
//not game specific package import { UpTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/UpTouchInputToGameKeyEventAction.js';
      const UpTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.UpTouchInputToGameKeyEventAction;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CompleteMotionGestureInputToGameMotionGestureInput
            extends Object
         {
        

    private static readonly instance: CompleteMotionGestureInputToGameMotionGestureInput = new CompleteMotionGestureInputToGameMotionGestureInput();

    public static getInstance(): CompleteMotionGestureInputToGameMotionGestureInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CompleteMotionGestureInputToGameMotionGestureInput.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public init(){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

        try {
            PreLogUtil.put("Compound Motion Gestures", this, commonStrings!.INIT);
    

    var motionGestureConfiguration: MotionGestureConfiguration = MotionGestureConfigurationFactory.getInstance()!;;
    

    var touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;;
    

    var list: BasicArrayList = new BasicArrayListD();;
    
list.add(touchMotionGestureFactory!.DIAGONAL_DOWN_LEFT);
    
motionGestureConfiguration!.addMotionGestureAction(list, DiagonalDownLeftTouchInputToGameKeyEventAction.getInstance());
    
list= new BasicArrayListD();
    
list.add(touchMotionGestureFactory!.DIAGONAL_DOWN_RIGHT);
    
motionGestureConfiguration!.addMotionGestureAction(list, DiagonalDownRightTouchInputToGameKeyEventAction.getInstance());
    
list= new BasicArrayListD();
    
list.add(touchMotionGestureFactory!.DIAGONAL_UP_LEFT);
    
motionGestureConfiguration!.addMotionGestureAction(list, DiagonalUpLeftTouchInputToGameKeyEventAction.getInstance());
    
list= new BasicArrayListD();
    
list.add(touchMotionGestureFactory!.DIAGONAL_UP_RIGHT);
    
motionGestureConfiguration!.addMotionGestureAction(list, DiagonalUpRightTouchInputToGameKeyEventAction.getInstance());
    
list= new BasicArrayListD();
    
list.add(touchMotionGestureFactory!.LEFT);
    
motionGestureConfiguration!.addMotionGestureAction(list, LeftTouchInputToGameKeyEventAction.getInstance());
    
list= new BasicArrayListD();
    
list.add(touchMotionGestureFactory!.RIGHT);
    
motionGestureConfiguration!.addMotionGestureAction(list, RightTouchInputToGameKeyEventAction.getInstance());
    
list= new BasicArrayListD();
    
list.add(touchMotionGestureFactory!.DOWN);
    
motionGestureConfiguration!.addMotionGestureAction(list, DownTouchInputToGameKeyEventAction.getInstance());
    
list= new BasicArrayListD();
    
list.add(touchMotionGestureFactory!.UP);
    
motionGestureConfiguration!.addMotionGestureAction(list, UpTouchInputToGameKeyEventAction.getInstance());
    
list= new BasicArrayListD();
    
list.add(touchMotionGestureFactory!.RELEASED);
    
motionGestureConfiguration!.addMotionGestureAction(list, ReleaseTouchInputToGameKeyEventAction.getInstance());
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    
}

}


}



