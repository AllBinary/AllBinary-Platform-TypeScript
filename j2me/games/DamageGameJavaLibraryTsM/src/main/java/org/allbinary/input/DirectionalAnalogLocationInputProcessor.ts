
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
        



import { AnalogLocationInputProcessor } from "../../../org/allbinary/android/input/motion/AnalogLocationInputProcessor.js";

    
import { GameInputProcessor } from "../../../org/allbinary/game/input/GameInputProcessor.js";

    
import { GameKeyEventSourceInterface } from "../../../org/allbinary/game/input/GameKeyEventSourceInterface.js";

    
import { GameKeyFactory } from "../../../org/allbinary/game/input/GameKeyFactory.js";

    
import { AnalogLocationInput } from "../../../org/allbinary/game/input/analog/AnalogLocationInput.js";

    
import { GameKeyEvent } from "../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { GameKeyEventFactory } from "../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { CustomGPoint } from "../../../org/allbinary/graphics/CustomGPoint.js";

    
import { AllBinaryLayerManager } from "../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DirectionalAnalogLocationInputProcessor extends AnalogLocationInputProcessor implements GameKeyEventSourceInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly inputProcessorArray: GameInputProcessor[]

    private readonly gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;
        
        

    private leftGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;
        
        

    private rightGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;
        
        

    private upGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;
        
        

    private downGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;
        
        

    private leftTriggerGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;
        
        

    private rightTriggerGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;
        
        
public constructor (inputProcessorArray: GameInputProcessor[]){

            super();
            var inputProcessorArray = inputProcessorArray
this.inputProcessorArray= inputProcessorArray;
    

        try {
            this.leftGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstance(this, gameKeyFactory!.LEFT);
    
this.rightGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstance(this, gameKeyFactory!.RIGHT);
    
this.upGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstance(this, gameKeyFactory!.UP);
    
this.downGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstance(this, gameKeyFactory!.DOWN);
    
this.leftTriggerGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstance(this, gameKeyFactory!.KEY_NUM0);
    
this.rightTriggerGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstance(this, gameKeyFactory!.KEY_NUM5);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}


    public process(allbinaryLayerManager: AllBinaryLayerManager, analogLocationInput: AnalogLocationInput){
var allbinaryLayerManager = allbinaryLayerManager
var analogLocationInput = analogLocationInput

        try {
            
    var customGPoint: CustomGPoint
;
    
customGPoint= analogLocationInput!.getCustomGPoint();
    

    var x: number = customGPoint!.getX()!;
        
        
;
    

    var y: number = customGPoint!.getY()!;
        
        
;
    

    var leftTrigger: number = analogLocationInput!.getLeftTrigger()!;
        
        
;
    

    var rightTrigger: number = analogLocationInput!.getRightTrigger()!;
        
        
;
    

                        if(x < 0)
                        
                                    {
                                    inputProcessorArray[this.leftGameKeyEvent!.getKey()]!.process(allbinaryLayerManager, this.leftGameKeyEvent, x);
    

                                    }
                                
                             else 
                        if(x > 0)
                        
                                    {
                                    inputProcessorArray[this.rightGameKeyEvent!.getKey()]!.process(allbinaryLayerManager, this.rightGameKeyEvent, x);
    

                                    }
                                

                        if(y < 0)
                        
                                    {
                                    inputProcessorArray[this.downGameKeyEvent!.getKey()]!.process(allbinaryLayerManager, this.downGameKeyEvent, y);
    

                                    }
                                
                             else 
                        if(y > 0)
                        
                                    {
                                    inputProcessorArray[this.upGameKeyEvent!.getKey()]!.process(allbinaryLayerManager, this.upGameKeyEvent, y);
    

                                    }
                                

                        if(leftTrigger > 0)
                        
                                    {
                                    inputProcessorArray[this.leftTriggerGameKeyEvent!.getKey()]!.process(allbinaryLayerManager, this.leftTriggerGameKeyEvent, leftTrigger);
    

                                    }
                                

                        if(rightTrigger > 0)
                        
                                    {
                                    inputProcessorArray[this.rightTriggerGameKeyEvent!.getKey()]!.process(allbinaryLayerManager, this.rightTriggerGameKeyEvent, rightTrigger);
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put("Unable to process analog input", this, commonStrings!.PROCESS, e);
    
}

}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}
                
            

