
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
        
import { CompleteMotionGestureInputEvent } from '../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js';
      //not GWT import const CompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEvent;

      
import { CompleteMotionGestureInputEventHandler } from '../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventHandler.js';
      //not GWT import const CompleteMotionGestureInputEventHandler = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventHandler;

      
import { CompleteMotionGestureInputEventListenerInterface } from '../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListenerInterface.js';
      //not GWT import const CompleteMotionGestureInputEventListenerInterface = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventListenerInterface;

      
import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
      //not GWT import const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
import { InputMappingInterface } from '../../../../../org/allbinary/game/input/mapping/InputMappingInterface.js';
      //not GWT import const InputMappingInterface = globalThis.org.allbinary.game.input.mapping.InputMappingInterface;

      
import { GameKeyCompleteMotionGestureInputEvent } from '../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEvent.js';
      //not GWT import const GameKeyCompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { ProcessPaintable } from '../../../../../org/allbinary/graphics/paint/ProcessPaintable.js';
      //not GWT import const ProcessPaintable = globalThis.org.allbinary.graphics.paint.ProcessPaintable;

      
import { MotionGestureInput } from '../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      //not GWT import const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
import { TouchMotionGestureFactory } from '../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      //not GWT import const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not plain js import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonsMappingPaintable } from './TouchButtonsMappingPaintable.js';
//not GWT import const TouchButtonsMappingPaintable = globalThis.org.allbinary.input.motion.button.TouchButtonsMappingPaintable;

                
export class TouchButtonsPaintableComposite extends ProcessPaintable implements CompleteMotionGestureInputEventListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private inputMappingInterface: InputMappingInterface;

    touchButtonsPaintable: TouchButtonsMappingPaintable;

    private timeHelper: TimeDelayHelper = new TimeDelayHelper(250);

    private released: boolean = true;

public constructor (inputMappingInterface: InputMappingInterface, basicColor: BasicColor){

            super();
        this.inputMappingInterface= inputMappingInterface;
    
CompleteMotionGestureInputEventHandler.getInstance()!.addListenerInterface(this);
    
this.touchButtonsPaintable= new TouchButtonsMappingPaintable(basicColor);
    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    private readonly METHOD_NAME: string = "onCompleteMotionGestureInputEvent";

    private readonly RELEASE: string = "Ignoring: MotionGestureInput Release";

    private readonly FAST_REPEAT: string = "Ignoring: MotionGestureInput Repeated To Quickly";

    private readonly IGNORE: string = "Ignoring: Until Released";

    public onCompleteMotionGestureInputEvent(completeMotionGestureInputEvent: CompleteMotionGestureInputEvent){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "onCompleteMotionGestureInputEvent");
    

    var touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;;
    

    var gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent = completeMotionGestureInputEvent as GameKeyCompleteMotionGestureInputEvent;;
    

    var gameKey: GameKey = gameKeyCompleteMotionGestureInputEvent!.getGameKey()!;;
    

    var motionGestureInput: MotionGestureInput = completeMotionGestureInputEvent!.getMotionGestureInput()!;;
    

                        if(motionGestureInput == touchMotionGestureFactory!.RELEASED)
                        
                                    {
                                    this.logUtil!.putF(this.RELEASE, this, this.METHOD_NAME);
    
this.released= true;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(motionGestureInput == TouchMotionGestureFactory.getInstance()!.NO_MOTION && !this.timeHelper!.isTimeTNT())
                        
                                    {
                                    this.logUtil!.putF(this.FAST_REPEAT, this, this.METHOD_NAME);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(!this.released)
                        
                                    {
                                    this.logUtil!.putF(this.IGNORE, this, this.METHOD_NAME);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.released= false;
    
this.logUtil!.putF(new StringMaker().append("GameKey: ")!.append(StringUtil.getInstance()!.toString(gameKey))!.append(" MotionGestureInput: ")!.append(StringUtil.getInstance()!.toString(motionGestureInput))!.toString(), this, this.METHOD_NAME);
    
this.inputMappingInterface!.processInputMapping(gameKey, motionGestureInput);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.METHOD_NAME, e);
    
}

}


    public process(){
CompleteMotionGestureInputEventHandler.getInstance()!.removeListener(this);
    
}


}



