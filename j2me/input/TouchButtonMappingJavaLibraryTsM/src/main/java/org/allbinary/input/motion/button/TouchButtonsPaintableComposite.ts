
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
        



import { CompleteMotionGestureInputEvent } from "../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js";

    
import { CompleteMotionGestureInputEventHandler } from "../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventHandler.js";

    
import { CompleteMotionGestureInputEventListenerInterface } from "../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListenerInterface.js";

    
import { GameKey } from "../../../../../org/allbinary/game/input/GameKey.js";

    
import { InputMappingInterface } from "../../../../../org/allbinary/game/input/mapping/InputMappingInterface.js";

    
import { GameKeyCompleteMotionGestureInputEvent } from "../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEvent.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { ProcessPaintable } from "../../../../../org/allbinary/graphics/paint/ProcessPaintable.js";

    
import { MotionGestureInput } from "../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    
import { TouchMotionGestureFactory } from "../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class TouchButtonsPaintableComposite extends ProcessPaintable
                , CompleteMotionGestureInputEventListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private inputMappingInterface: InputMappingInterface

    touchButtonsPaintable: TouchButtonsMappingPaintable

    private timeHelper: TimeDelayHelper = new TimeDelayHelper(250);
        
        

    private released: boolean = true;
        
        
public constructor (inputMappingInterface: InputMappingInterface, basicColor: BasicColor){

            super();
                //var inputMappingInterface = inputMappingInterface
    //var basicColor = basicColor
this.inputMappingInterface= inputMappingInterface
addListener(this)
this.touchButtonsPaintable= TouchButtonsMappingPaintable(basicColor)
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this)
}


    private readonly METHOD_NAME: string = "onCompleteMotionGestureInputEvent";
        
        

    private readonly RELEASE: string = "Ignoring: MotionGestureInput Release";
        
        

    private readonly FAST_REPEAT: string = "Ignoring: MotionGestureInput Repeated To Quickly";
        
        

    private readonly IGNORE: string = "Ignoring: Until Released";
        
        

    public onCompleteMotionGestureInputEvent(completeMotionGestureInputEvent: CompleteMotionGestureInputEvent){
    //var completeMotionGestureInputEvent = completeMotionGestureInputEvent

        try {
            put(commonStrings!.START, this, "onCompleteMotionGestureInputEvent")

    var touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;
        
        


    var gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent = completeMotionGestureInputEvent as GameKeyCompleteMotionGestureInputEvent;
        
        


    var gameKey: GameKey = gameKeyCompleteMotionGestureInputEvent!.getGameKey()!;
        
        


    var motionGestureInput: MotionGestureInput = completeMotionGestureInputEvent!.getMotionGestureInput()!;
        
        


    
                        if(motionGestureInput == touchMotionGestureFactory!.RELEASED)
                        
                                    {
                                    put(RELEASE, this, METHOD_NAME)
released= true



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    
                        if(motionGestureInput == TouchMotionGestureFactory.getInstance()!.NO_MOTION && !this.timeHelper!.isTime())
                        
                                    {
                                    put(FAST_REPEAT, this, METHOD_NAME)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    
                        if(!released)
                        
                                    {
                                    put(IGNORE, this, METHOD_NAME)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
released= false
put(StringMaker().
                            append("GameKey: ")!.append(StringUtil.getInstance()!.toString(gameKey))!.append(" MotionGestureInput: ")!.append(StringUtil.getInstance()!.toString(motionGestureInput))!.toString(), this, METHOD_NAME)
process(gameKey, motionGestureInput)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, METHOD_NAME, e)
}

}


    public process(){
removeListener(this)
}


}
                
            

