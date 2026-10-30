
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
        
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { LockedFeatureNotificationUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedFeatureNotificationUtil.js';
//not GWT import const LockedFeatureNotificationUtil

import { LockedUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
//not GWT import const LockedUtil

import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor

import { AllBinaryGameCanvas } from '../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
//not GWT import const AllBinaryGameCanvas

import { PreGameSelectorPaintable } from '../../../../org/allbinary/game/displayable/canvas/PreGameSelectorPaintable.js';
//not GWT import const PreGameSelectorPaintable

import { GameKeyEventHandler } from '../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
//not GWT import const GameKeyEventHandler

import { GameKeyEventUtil } from '../../../../org/allbinary/game/input/event/GameKeyEventUtil.js';
//not GWT import const GameKeyEventUtil

import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { SecondaryPlayerQueueFactory } from '../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
//not GWT import const SecondaryPlayerQueueFactory

import { SelectSound } from '../../../../org/allbinary/media/audio/SelectSound.js';
//not GWT import const SelectSound

import { MultiLevelRaceTrackGeographicMapInterfaceFactoryInterface } from '../../../../org/allbinary/media/graphics/geography/map/racetrack/MultiLevelRaceTrackGeographicMapInterfaceFactoryInterface.js';
//not GWT import const MultiLevelRaceTrackGeographicMapInterfaceFactoryInterface

import { ABRunnable } from '../../../../org/allbinary/thread/ABRunnable.js';
//not GWT import const ABRunnable

import { ThreadObjectUtil } from '../../../../org/allbinary/thread/ThreadObjectUtil.js';
//not GWT import const ThreadObjectUtil

import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameInputProcessorInterface } from './GameInputProcessorInterface.js';
//sameFolderImports - not GWT import - same folder const GameInputProcessorInterface
import { PlayerGameInputCompositeInterface } from './PlayerGameInputCompositeInterface.js';
//sameFolderImports - not GWT import - same folder const PlayerGameInputCompositeInterface
import { PlayerGameInput } from './PlayerGameInput.js';
//sameFolderImports - not GWT import - same folder const PlayerGameInput
import { GameInputProcessorComposite } from './GameInputProcessorComposite.js';
//sameFolderImports - not GWT import - same folder const GameInputProcessorComposite

export class MapSelectionGameInputProcessor extends Processor implements GameInputProcessorInterface, PlayerGameInputCompositeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly gameCanvas: AllBinaryGameCanvas;

    private readonly raceTrackGeographicMapInterfaceFactoryInterface: MultiLevelRaceTrackGeographicMapInterfaceFactoryInterface;

    private readonly preGameSelectorPaintable: PreGameSelectorPaintable;

    private readonly inputTimeHelper: TimeDelayHelper = new TimeDelayHelper(650);

    private readonly playerGameInput: PlayerGameInput;

    private readonly lockedIndex: number;

    private readonly abRunnable: ABRunnable = new class extends ABRunnable
                                {
                                
    public run(){

 try { this.setRunning(true);
    
SecondaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    

    let track: number = this.preGameSelectorPaintable!.getPreGameSelectionForm()!.getSelectedIndex() +1;;
    

    let wave: number = this.raceTrackGeographicMapInterfaceFactoryInterface!.getFirstWaveWithTrack(track)!;;
    
this.gameCanvas!.getLayerManager()!.getGameInfo()!.setCurrentLevel(wave);
    
this.gameCanvas!.buildGameInit(false);
    
GameKeyEventHandler.getInstance()!.removeListener(getPlayerGameInput());
    
this.setRunning(false);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.setRunning(false);
    

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    

 }
   }
 
}

                                }
                            ;

public constructor (gameCanvas: AllBinaryGameCanvas, raceTrackGeographicMapInterfaceFactoryInterface: MultiLevelRaceTrackGeographicMapInterfaceFactoryInterface, mapSelectorPaintable: PreGameSelectorPaintable, lockedIndex: number){

            super();
        this.gameCanvas= gameCanvas;
    
this.raceTrackGeographicMapInterfaceFactoryInterface= raceTrackGeographicMapInterfaceFactoryInterface;
    
this.preGameSelectorPaintable= mapSelectorPaintable;
    
this.playerGameInput= new GameInputProcessorComposite("Map Selection", this);
    
this.lockedIndex= lockedIndex;
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.getPlayerGameInput()!.update();
    
}


                //@Throws(Exception.constructor)
            
    public onInput(list: BasicArrayList){

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let anyType: any = list.get(index)!;;
    

    let key: number = GameKeyEventUtil.getKey(anyType)!;;
    

                        if(key == Canvas.LEFT || key == Canvas.RIGHT || key == Canvas.UP || key == Canvas.DOWN)
                        
                                    {
                                    
                        if(this.inputTimeHelper!.isTimeTNT())
                        
                                    {
                                    SecondaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    
this.preGameSelectorPaintable!.getPreGameSelectionForm()!.processInputKey(key);
    
break;

                    

                                    }
                                

                                    }
                                
                             else 
                        if(key == Canvas.KEY_NUM0)
                        
                                    {
                                    
    let selectedIndex: number = this.preGameSelectorPaintable!.getPreGameSelectionForm()!.getSelectedIndex()!;;
    

                        if(selectedIndex < this.lockedIndex || !LockedUtil.getInstance()!.isLocked())
                        
                                    {
                                    
                        if(!this.abRunnable!.isRunning())
                        
                                    {
                                    this.abRunnable!.setRunning(true);
    
ThreadObjectUtil.getInstance()!.processThread(abRunnable);
    

                                    }
                                
break;

                    

                                    }
                                
                        else {
                            LockedFeatureNotificationUtil.getInstance()!.fire();
    

                        }
                            

                                    }
                                
list.clear();
    
}

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

