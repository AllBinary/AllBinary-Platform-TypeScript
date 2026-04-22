
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
        



import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { LockedFeatureNotificationUtil } from "../../../../org/allbinary/logic/system/security/licensing/LockedFeatureNotificationUtil.js";

    
import { LockedUtil } from "../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js";

    
import { Processor } from "../../../../org/allbinary/canvas/Processor.js";

    
import { AllBinaryGameCanvas } from "../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { PreGameSelectorPaintable } from "../../../../org/allbinary/game/displayable/canvas/PreGameSelectorPaintable.js";

    
import { GameInputProcessorComposite } from "../../../../org/allbinary/game/input/GameInputProcessorComposite.js";

    
import { GameInputProcessorInterface } from "../../../../org/allbinary/game/input/GameInputProcessorInterface.js";

    
import { PlayerGameInput } from "../../../../org/allbinary/game/input/PlayerGameInput.js";

    
import { PlayerGameInputCompositeInterface } from "../../../../org/allbinary/game/input/PlayerGameInputCompositeInterface.js";

    
import { GameKeyEventHandler } from "../../../../org/allbinary/game/input/event/GameKeyEventHandler.js";

    
import { GameKeyEventUtil } from "../../../../org/allbinary/game/input/event/GameKeyEventUtil.js";

    
import { GameState } from "../../../../org/allbinary/game/state/GameState.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { SecondaryPlayerQueueFactory } from "../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js";

    
import { SelectSound } from "../../../../org/allbinary/media/audio/SelectSound.js";

    
import { ABRunnable } from "../../../../org/allbinary/thread/ABRunnable.js";

    
import { SecondaryThreadPool } from "../../../../org/allbinary/thread/SecondaryThreadPool.js";

    
import { SoundThreadPool } from "../../../../org/allbinary/thread/SoundThreadPool.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PreGameSelectionGameInputProcessor extends Processor implements GameInputProcessorInterface, PlayerGameInputCompositeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly gameCanvas: AllBinaryGameCanvas

    private readonly preGameSelectorPaintable: PreGameSelectorPaintable

    private readonly inputTimeHelper: TimeDelayHelper = new TimeDelayHelper(650);
        
        

    private readonly nextGameState: GameState

    private readonly playerGameInput: PlayerGameInput

    private readonly lockedIndex: number

    private readonly abRunnable: ABRunnable = new object: ABRunnable()
                                {
                                
    public run(){

        try {
            this.setRunning(true);
    
SecondaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    
gameCanvas!.setGameState(nextGameState);
    
GameKeyEventHandler.getInstance()!.removeListener(getPlayerGameInput());
    
this.setRunning(false);
    

                //: 
} catch(e) 
            {
this.setRunning(false);
    

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}

                                }
                            ;
        
        
public constructor (gameCanvas: AllBinaryGameCanvas, preGameSelectorPaintable: PreGameSelectorPaintable, nextGameState: GameState, lockedIndex: number){

            super();
        var gameCanvas = gameCanvas
var preGameSelectorPaintable = preGameSelectorPaintable
var nextGameState = nextGameState
var lockedIndex = lockedIndex
this.gameCanvas= gameCanvas;
    
this.preGameSelectorPaintable= preGameSelectorPaintable;
    
this.nextGameState= nextGameState;
    
this.playerGameInput= new GameInputProcessorComposite("Pre Game Selection", this);
    
this.lockedIndex= lockedIndex;
    
}


                //@Throws(Error::class)
            
    public process(){
this.getPlayerGameInput()!.update();
    
}


                //@Throws(Error::class)
            
    public onInput(list: BasicArrayList){
var list = list

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var anyType: any = list.get(index)!;
        
        
;
    

    var key: number = GameKeyEventUtil.getKey(anyType)!;
        
        
;
    

                        if(key == Canvas.LEFT || key == Canvas.RIGHT || key == Canvas.UP || key == Canvas.DOWN)
                        
                                    {
                                    
                        if(this.inputTimeHelper!.isTime())
                        
                                    {
                                    SecondaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    
this.getPreGameSelectorPaintable()!.getPreGameSelectionForm()!.processInput(key);
    
break;

                    

                                    }
                                

                                    }
                                
                             else 
                        if(key == Canvas.KEY_NUM0)
                        
                                    {
                                    
    var selectedIndex: number = this.preGameSelectorPaintable!.getPreGameSelectionForm()!.getSelectedIndex()!;
        
        
;
    

                        if(selectedIndex < this.lockedIndex || !LockedUtil.getInstance()!.isLockedFeature();

                        )
                        
                                    {
                                    
                        if(!abRunnable!.isRunning();

                        )
                        
                                    {
                                    abRunnable!.setRunning(true);
    

    var thread: Thread = new Thread(abRunnable);
        
        
;
    
thread.start();
    

                                    }
                                
break;

                    

                                    }
                                
                        else {
                            LockedFeatureNotificationUtil.getInstance()!.fire();
    

                        }
                            

                                    }
                                
}

list.clear();
    
}


    public getPreGameSelectorPaintable(): PreGameSelectorPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return preGameSelectorPaintable;
    
}


                //@Throws(Error::class)
            
    public processInput(layerManager: AllBinaryLayerManager){
var layerManager = layerManager
}


    public initInputProcessors(){
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toString();

                        ;
    
}


    public getPlayerGameInput(): PlayerGameInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return playerGameInput;
    
}


}
                
            

