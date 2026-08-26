
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
        
//not game specific package import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { LockedFeatureNotificationUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedFeatureNotificationUtil.js';
      const LockedFeatureNotificationUtil = globalThis.org.allbinary.logic.system.security.licensing.LockedFeatureNotificationUtil;

      
//not game specific package import { LockedUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
      const LockedUtil = globalThis.org.allbinary.logic.system.security.licensing.LockedUtil;

      
//not game specific package import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
      const Processor = globalThis.org.allbinary.canvas.Processor;

      
//not game specific package import { AllBinaryGameCanvas } from '../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
//not game specific package import { PreGameSelectorPaintable } from '../../../../org/allbinary/game/displayable/canvas/PreGameSelectorPaintable.js';
      const PreGameSelectorPaintable = globalThis.org.allbinary.game.displayable.canvas.PreGameSelectorPaintable;

      
//not game specific package import { GameKeyEventHandler } from '../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
      const GameKeyEventHandler = globalThis.org.allbinary.game.input.event.GameKeyEventHandler;

      
//not game specific package import { GameKeyEventUtil } from '../../../../org/allbinary/game/input/event/GameKeyEventUtil.js';
      const GameKeyEventUtil = globalThis.org.allbinary.game.input.event.GameKeyEventUtil;

      
//not game specific package import { GameState } from '../../../../org/allbinary/game/state/GameState.js';
      const GameState = globalThis.org.allbinary.game.state.GameState;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { SecondaryPlayerQueueFactory } from '../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
      const SecondaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.SecondaryPlayerQueueFactory;

      
//not game specific package import { SelectSound } from '../../../../org/allbinary/media/audio/SelectSound.js';
      const SelectSound = globalThis.org.allbinary.media.audio.SelectSound;

      
//not game specific package import { ABRunnable } from '../../../../org/allbinary/thread/ABRunnable.js';
      const ABRunnable = globalThis.org.allbinary.thread.ABRunnable;

      
//not game specific package import { ThreadObjectUtil } from '../../../../org/allbinary/thread/ThreadObjectUtil.js';
      const ThreadObjectUtil = globalThis.org.allbinary.thread.ThreadObjectUtil;

      
//not game specific package import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameInputProcessorInterface } from './GameInputProcessorInterface.js';
import { PlayerGameInputCompositeInterface } from './PlayerGameInputCompositeInterface.js';
import { PlayerGameInput } from './PlayerGameInput.js';
import { GameInputProcessorComposite } from './GameInputProcessorComposite.js';

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
                
            

