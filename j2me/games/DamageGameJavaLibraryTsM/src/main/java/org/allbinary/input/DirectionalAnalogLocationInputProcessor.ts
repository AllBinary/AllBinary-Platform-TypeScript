
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
        



            import { Exception } from '../../../java/lang/Exception.js';
        
//not game specific package import { AnalogLocationInputProcessor } from '../../../org/allbinary/android/input/motion/AnalogLocationInputProcessor.js';
      const AnalogLocationInputProcessor = globalThis.org.allbinary.android.input.motion.AnalogLocationInputProcessor;

      
//not game specific package import { GameInputProcessor } from '../../../org/allbinary/game/input/GameInputProcessor.js';
      const GameInputProcessor = globalThis.org.allbinary.game.input.GameInputProcessor;

      
//not game specific package import { GameKeyEventSourceInterface } from '../../../org/allbinary/game/input/GameKeyEventSourceInterface.js';
      const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;

      
//not game specific package import { GameKeyFactory } from '../../../org/allbinary/game/input/GameKeyFactory.js';
      const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;

      
//not game specific package import { AnalogLocationInput } from '../../../org/allbinary/game/input/analog/AnalogLocationInput.js';
      const AnalogLocationInput = globalThis.org.allbinary.game.input.analog.AnalogLocationInput;

      
//not game specific package import { GameKeyEvent } from '../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { GameKeyEventFactory } from '../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
      const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
//not game specific package import { CustomGPoint } from '../../../org/allbinary/graphics/CustomGPoint.js';
      const CustomGPoint = globalThis.org.allbinary.graphics.CustomGPoint;

      
//not game specific package import { AllBinaryLayerManager } from '../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DirectionalAnalogLocationInputProcessor extends AnalogLocationInputProcessor implements GameKeyEventSourceInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly inputProcessorArray: GameInputProcessor[];

    private readonly gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;

    private leftGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;

    private rightGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;

    private upGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;

    private downGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;

    private leftTriggerGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;

    private rightTriggerGameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;

public constructor (inputProcessorArray: GameInputProcessor[]){

            super();
        this.inputProcessorArray= inputProcessorArray;
    

        try {
            this.leftGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.LEFT);
    
this.rightGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.RIGHT);
    
this.upGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.UP);
    
this.downGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.DOWN);
    
this.leftTriggerGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.KEY_NUM0);
    
this.rightTriggerGameKeyEvent= GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.KEY_NUM5);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}


    public process(allbinaryLayerManager: AllBinaryLayerManager, analogLocationInput: AnalogLocationInput){

        try {
            
    var customGPoint: CustomGPoint;;
    
customGPoint= analogLocationInput!.getCustomGPoint();
    

    var x: number = customGPoint!.getX()!;;
    

    var y: number = customGPoint!.getY()!;;
    

    var leftTrigger: number = analogLocationInput!.getLeftTrigger()!;;
    

    var rightTrigger: number = analogLocationInput!.getRightTrigger()!;;
    

                        if(x < 0)
                        
                                    {
                                    this.inputProcessorArray[this.leftGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.leftGameKeyEvent, x);
    

                                    }
                                
                             else 
                        if(x > 0)
                        
                                    {
                                    this.inputProcessorArray[this.rightGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.rightGameKeyEvent, x);
    

                                    }
                                

                        if(y < 0)
                        
                                    {
                                    this.inputProcessorArray[this.downGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.downGameKeyEvent, y);
    

                                    }
                                
                             else 
                        if(y > 0)
                        
                                    {
                                    this.inputProcessorArray[this.upGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.upGameKeyEvent, y);
    

                                    }
                                

                        if(leftTrigger > 0)
                        
                                    {
                                    this.inputProcessorArray[this.leftTriggerGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.leftTriggerGameKeyEvent, leftTrigger);
    

                                    }
                                

                        if(rightTrigger > 0)
                        
                                    {
                                    this.inputProcessorArray[this.rightTriggerGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.rightTriggerGameKeyEvent, rightTrigger);
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put("Unable to process analog input", this, commonStrings!.PROCESS, e);
    
}

}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}
                
            

