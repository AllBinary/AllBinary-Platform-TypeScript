
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
        
//not game specific package import { CompleteMotionGestureInputEvent } from '../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js';
      const CompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEvent;

      
//not game specific package import { CompleteMotionGestureInputEventHandler } from '../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventHandler.js';
      const CompleteMotionGestureInputEventHandler = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventHandler;

      
//not game specific package import { CompleteMotionGestureInputEventListenerInterface } from '../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListenerInterface.js';
      const CompleteMotionGestureInputEventListenerInterface = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventListenerInterface;

      
//not game specific package import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
      const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
//not game specific package import { InputMappingInterface } from '../../../../../org/allbinary/game/input/mapping/InputMappingInterface.js';
      const InputMappingInterface = globalThis.org.allbinary.game.input.mapping.InputMappingInterface;

      
//not game specific package import { GameKeyCompleteMotionGestureInputEvent } from '../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEvent.js';
      const GameKeyCompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { ProcessPaintable } from '../../../../../org/allbinary/graphics/paint/ProcessPaintable.js';
      const ProcessPaintable = globalThis.org.allbinary.graphics.paint.ProcessPaintable;

      
//not game specific package import { MotionGestureInput } from '../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
//not game specific package import { TouchMotionGestureFactory } from '../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonsMappingPaintable } from './TouchButtonsMappingPaintable.js';

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
                
            

