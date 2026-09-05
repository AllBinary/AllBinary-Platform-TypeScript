
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseTouchInput } from './BaseTouchInput.js';
//not GWT import - same folder const BaseTouchInput = globalThis.org.allbinary.input.motion.button.BaseTouchInput;

                import { TouchButtonLocationHelper } from './TouchButtonLocationHelper.js';
//not GWT import - same folder const TouchButtonLocationHelper = globalThis.org.allbinary.input.motion.button.TouchButtonLocationHelper;

                import { BasicTouchButtonCellPositionFactory } from './BasicTouchButtonCellPositionFactory.js';
//not GWT import - same folder const BasicTouchButtonCellPositionFactory = globalThis.org.allbinary.input.motion.button.BasicTouchButtonCellPositionFactory;

                import { CommonButtons } from './CommonButtons.js';
//not GWT import - same folder const CommonButtons = globalThis.org.allbinary.input.motion.button.CommonButtons;

                import { TouchButton } from './TouchButton.js';
//not GWT import - same folder const TouchButton = globalThis.org.allbinary.input.motion.button.TouchButton;

                import { BasicTouchInputFactory } from './BasicTouchInputFactory.js';
//not GWT import - same folder const BasicTouchInputFactory = globalThis.org.allbinary.input.motion.button.BasicTouchInputFactory;

                
export class BasicNeededTouchButtonsBuilder extends BaseTouchInput {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public getList(): BasicArrayList{

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

    var list: BasicArrayList = new BasicArrayListD();;
    

    var touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();;
    

    var basicTouchButtonCellPositionFactory: BasicTouchButtonCellPositionFactory = new BasicTouchButtonCellPositionFactory();;
    

    var commonButtons: CommonButtons = CommonButtons.getInstance()!;;
    

    var animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;;
    

    var UP: TouchButton = new TouchButton(BasicTouchInputFactory.getInstance()!.UP, animationInterface, animationInterface, commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.SECOND_FROM_BOTTOM_LEFT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf());;
    

    var DOWN: TouchButton = new TouchButton(BasicTouchInputFactory.getInstance()!.DOWN, animationInterface, animationInterface, commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.BOTTOM_LEFT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf());;
    

    var LEFT: TouchButton = new TouchButton(BasicTouchInputFactory.getInstance()!.LEFT, animationInterface, animationInterface, commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.BOTTOM_SECOND_FROM_RIGHT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf());;
    

    var RIGHT: TouchButton = new TouchButton(BasicTouchInputFactory.getInstance()!.RIGHT, animationInterface, animationInterface, commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.BOTTOM_RIGHT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf());;
    
list.add(UP);
    
list.add(DOWN);
    
list.add(LEFT);
    
list.add(RIGHT);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_LIST, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();;
    
}

}


}



