
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { LockedFeatureNotificationUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedFeatureNotificationUtil.js';
//not GWT import const LockedFeatureNotificationUtil = globalThis.org.allbinary.logic.system.security.licensing.LockedFeatureNotificationUtil;

      
import { LockedUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
//not GWT import const LockedUtil = globalThis.org.allbinary.logic.system.security.licensing.LockedUtil;

      
import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;

      
import { AllBinaryGameCanvas } from '../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
//not GWT import const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
import { PreGameSelectorPaintable } from '../../../../org/allbinary/game/displayable/canvas/PreGameSelectorPaintable.js';
//not GWT import const PreGameSelectorPaintable = globalThis.org.allbinary.game.displayable.canvas.PreGameSelectorPaintable;

      
import { GameKeyEventHandler } from '../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
//not GWT import const GameKeyEventHandler = globalThis.org.allbinary.game.input.event.GameKeyEventHandler;

      
import { GameKeyEventUtil } from '../../../../org/allbinary/game/input/event/GameKeyEventUtil.js';
//not GWT import const GameKeyEventUtil = globalThis.org.allbinary.game.input.event.GameKeyEventUtil;

      
import { GameState } from '../../../../org/allbinary/game/state/GameState.js';
//not GWT import const GameState = globalThis.org.allbinary.game.state.GameState;

      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { SecondaryPlayerQueueFactory } from '../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
//not GWT import const SecondaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.SecondaryPlayerQueueFactory;

      
import { SelectSound } from '../../../../org/allbinary/media/audio/SelectSound.js';
//not GWT import const SelectSound = globalThis.org.allbinary.media.audio.SelectSound;

      
import { ABRunnable } from '../../../../org/allbinary/thread/ABRunnable.js';
//not GWT import const ABRunnable = globalThis.org.allbinary.thread.ABRunnable;

      
import { ThreadObjectUtil } from '../../../../org/allbinary/thread/ThreadObjectUtil.js';
//not GWT import const ThreadObjectUtil = globalThis.org.allbinary.thread.ThreadObjectUtil;

      
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameInputProcessorInterface } from './GameInputProcessorInterface.js';
//not GWT import - same folder const GameInputProcessorInterface = globalThis.org.allbinary.game.input.GameInputProcessorInterface;

                import { PlayerGameInputCompositeInterface } from './PlayerGameInputCompositeInterface.js';
//not GWT import - same folder const PlayerGameInputCompositeInterface = globalThis.org.allbinary.game.input.PlayerGameInputCompositeInterface;

                import { PlayerGameInput } from './PlayerGameInput.js';
//not GWT import - same folder const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;

                import { GameInputProcessorComposite } from './GameInputProcessorComposite.js';
//not GWT import - same folder const GameInputProcessorComposite = globalThis.org.allbinary.game.input.GameInputProcessorComposite;

                
export class PreGameSelectionGameInputProcessor extends Processor implements GameInputProcessorInterface, PlayerGameInputCompositeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly gameCanvas: AllBinaryGameCanvas;

    private readonly preGameSelectorPaintable: PreGameSelectorPaintable;

    private readonly inputTimeHelper: TimeDelayHelper = new TimeDelayHelper(650);

    private readonly nextGameState: GameState;

    private readonly playerGameInput: PlayerGameInput;

    private readonly lockedIndex: number;

    private readonly abRunnable: ABRunnable = new class extends ABRunnable
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
    

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}

                                }
                            ;

public constructor (gameCanvas: AllBinaryGameCanvas, preGameSelectorPaintable: PreGameSelectorPaintable, nextGameState: GameState, lockedIndex: number){

            super();
        this.gameCanvas= gameCanvas;
    
this.preGameSelectorPaintable= preGameSelectorPaintable;
    
this.nextGameState= nextGameState;
    
this.playerGameInput= new GameInputProcessorComposite("Pre Game Selection", this);
    
this.lockedIndex= lockedIndex;
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.getPlayerGameInput()!.update();
    
}


                //@Throws(Exception.constructor)
            
    public onInput(list: BasicArrayList){

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var anyType: any = list.get(index)!;;
    

    var key: number = GameKeyEventUtil.getKey(anyType)!;;
    

                        if(key == Canvas.LEFT || key == Canvas.RIGHT || key == Canvas.UP || key == Canvas.DOWN)
                        
                                    {
                                    
                        if(this.inputTimeHelper!.isTimeTNT())
                        
                                    {
                                    SecondaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    
this.getPreGameSelectorPaintable()!.getPreGameSelectionForm()!.processInputKey(key);
    
break;

                    

                                    }
                                

                                    }
                                
                             else 
                        if(key == Canvas.KEY_NUM0)
                        
                                    {
                                    
    var selectedIndex: number = this.preGameSelectorPaintable!.getPreGameSelectionForm()!.getSelectedIndex()!;;
    

                        if(selectedIndex < this.lockedIndex || !LockedUtil.getInstance()!.isLocked())
                        
                                    {
                                    
                        if(!abRunnable!.isRunning())
                        
                                    {
                                    abRunnable!.setRunning(true);
    
ThreadObjectUtil.getInstance()!.processThread(abRunnable);
    

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
                        return this.preGameSelectorPaintable;
    
}


                //@Throws(Exception.constructor)
            
    public processInput(layerManager: AllBinaryLayerManager){
}


    public initInputProcessors(){
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toString();;
    
}


    public getPlayerGameInput(): PlayerGameInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.playerGameInput;
    
}


}



