
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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

import { RTSGameStrings } from '../../../../org/allbinary/game/layer/RTSGameStrings.js';
//not GWT import const RTSGameStrings

import { RTSLayer } from '../../../../org/allbinary/game/layer/RTSLayer.js';
//not GWT import const RTSLayer

import { RTSLayerInfoPaintable } from '../../../../org/allbinary/game/layer/RTSLayerInfoPaintable.js';
//not GWT import const RTSLayerInfoPaintable

import { RTSPlayerLayerInterface } from '../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
//not GWT import const RTSPlayerLayerInterface

import { Capital } from '../../../../org/allbinary/game/layer/capital/Capital.js';
//not GWT import const Capital

import { DowngradeSound } from '../../../../org/allbinary/media/audio/DowngradeSound.js';
//not GWT import const DowngradeSound

import { UpgradeSound } from '../../../../org/allbinary/media/audio/UpgradeSound.js';
//not GWT import const UpgradeSound

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
type BasicArrayListUtil<T = any, U = any> = typeof BasicArrayListUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory

import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features

import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const InputFeatureFactory

import { GameKeyEvent } from '../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent

import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager

import { GameNotificationEvent } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
//not GWT import const GameNotificationEvent

import { GameNotificationEventHandler } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
//not GWT import const GameNotificationEventHandler

import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer

import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory

import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager

import { Visitor } from '../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor

import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory

import { ErrorSound } from '../../../../org/allbinary/media/audio/ErrorSound.js';
//not GWT import const ErrorSound

import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

import { GeographicMapCompositeInterface } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
//not GWT import const GeographicMapCompositeInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PlayerGameInput } from './PlayerGameInput.js';
//sameFolderImports - not GWT import - same folder const PlayerGameInput
import { InputFactory } from './InputFactory.js';
//sameFolderImports - not GWT import - same folder const InputFactory
import { GameInputProcessor } from './GameInputProcessor.js';
//sameFolderImports - not GWT import - same folder const GameInputProcessor
import { SelectRTSLayerVisitorFactoryInterface } from './SelectRTSLayerVisitorFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const SelectRTSLayerVisitorFactoryInterface
import { RTSPlayerGameInput } from './RTSPlayerGameInput.js';
//sameFolderImports - not GWT import - same folder const RTSPlayerGameInput
import { SelectedRTSLayersPlayerUpgradeGameInputProcessor } from './SelectedRTSLayersPlayerUpgradeGameInputProcessor.js';
//sameFolderImports - not GWT import - same folder const SelectedRTSLayersPlayerUpgradeGameInputProcessor
import { SelectedRTSLayersPlayerDowngradeGameInputProcessor } from './SelectedRTSLayersPlayerDowngradeGameInputProcessor.js';
//sameFolderImports - not GWT import - same folder const SelectedRTSLayersPlayerDowngradeGameInputProcessor
import { GameInputProcessorUtil } from './GameInputProcessorUtil.js';
//sameFolderImports - not GWT import - same folder const GameInputProcessorUtil

export class SelectedRTSLayersPlayerGameInput extends PlayerGameInput {
        

    readonly inputProcessorArray: GameInputProcessor[] = new Array(InputFactory.getInstance()!.MAX);

    private readonly list: BasicArrayList;

    readonly isSingleKeyProcessing: boolean = Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS) || Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_PRESS);

    private selectedRTSLayersList: BasicArrayList = new BasicArrayListD();

    private preSelectedRTSLayersList: BasicArrayList = new BasicArrayListD();

    private paintSelectedRTSLayersList: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;

    private rtsPlayerLayerInterface: RTSPlayerLayerInterface;

    private readonly selectRTSLayerVisitorInterface: Visitor;

    private readonly upgradeGameNotificationEvent: GameNotificationEvent;

    private readonly noMoneyGameNotificationEvent: GameNotificationEvent;

    private readonly downgradeGameNotificationEvent: GameNotificationEvent;

public constructor (towerInfoPaintable: RTSLayerInfoPaintable, rtsPlayerLayerInterface: RTSPlayerLayerInterface, list: BasicArrayList, playerInputId: number, selectRTSLayerVisitorFactoryInterface: SelectRTSLayerVisitorFactoryInterface){
            super(list, new BasicArrayListD(), playerInputId);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initInputProcessors();
    
this.rtsPlayerLayerInterface= rtsPlayerLayerInterface;
    
this.list= list;
    
this.selectRTSLayerVisitorInterface= selectRTSLayerVisitorFactoryInterface!.create(this);
    

    let smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    let basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;;
    
this.upgradeGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.UPGRADE, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.noMoneyGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.NO_MONEY, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.downgradeGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.DOWNGRADE, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){

    let geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;;
    

    let geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
this.upgradeGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.noMoneyGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.downgradeGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
}


    public isSelected(rtsLayer: RTSLayer): boolean{

                        if(this.selectedRTSLayersList!.contains(rtsLayer))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    upgrade(){

    let anyChanged: boolean = false;;
    




                        for (
    let index: number = this.selectedRTSLayersList!.size() -1;index >= 0; index--)
        {

    let rtsLayer: RTSLayer = this.selectedRTSLayersList!.get(index) as RTSLayer;;
    

                        if(rtsLayer!.isUpgradeable())
                        
                                    {
                                    
    let capital: Capital = this.rtsPlayerLayerInterface!.getCapital()!;;
    

    let upgradeCost: number = rtsLayer!.getUpgradeCost()!;;
    

                        if(upgradeCost <= capital.getTotalMoney())
                        
                                    {
                                    anyChanged= true;
    
this.rtsPlayerLayerInterface!.add(UpgradeSound.getInstance());
    
rtsLayer!.upgrade();
    
capital.removeMoney(upgradeCost);
    

                        if(!this.rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.upgradeGameNotificationEvent);
    

                                    }
                                

                                    }
                                
                        else {
                            this.rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!this.rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.noMoneyGameNotificationEvent);
    

                                    }
                                

                        }
                            

                                    }
                                
}


                        if(anyChanged)
                        
                                    {
                                    
    let rtsPlayerGameInput: RTSPlayerGameInput = (this.rtsPlayerLayerInterface!.getPlayerGameInput() as RTSPlayerGameInput);;
    
rtsPlayerGameInput!.updatePaintable();
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    downgrade(){

    let anyChanged: boolean = false;;
    




                        for (
    let index: number = this.selectedRTSLayersList!.size()!;--index >= 0; )
        {

    let rtsLayer: RTSLayer = this.selectedRTSLayersList!.get(index) as RTSLayer;;
    

                        if(rtsLayer!.isDowngradeable())
                        
                                    {
                                    anyChanged= true;
    
this.rtsPlayerLayerInterface!.add(DowngradeSound.getInstance());
    

    let downgradeCost: number = rtsLayer!.getDowngradeCost()!;;
    
rtsLayer!.downgrade();
    

    let capital: Capital = this.rtsPlayerLayerInterface!.getCapital()!;;
    
capital.addMoney(downgradeCost);
    

                        if(!this.rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.downgradeGameNotificationEvent);
    

                                    }
                                

                                    }
                                
}


                        if(anyChanged)
                        
                                    {
                                    
    let rtsPlayerGameInput: RTSPlayerGameInput = (this.rtsPlayerLayerInterface!.getPlayerGameInput() as RTSPlayerGameInput);;
    
rtsPlayerGameInput!.updatePaintable();
    

                                    }
                                
}


    public initInputProcessors(){
this.inputProcessorArray[Canvas.KEY_NUM1]= new SelectedRTSLayersPlayerUpgradeGameInputProcessor(this);
    
this.inputProcessorArray[Canvas.KEY_NUM3]= new SelectedRTSLayersPlayerDowngradeGameInputProcessor(this);
    
GameInputProcessorUtil.init(this.inputProcessorArray);
    
}


                //@Throws(Exception.constructor)
            
    public processInputKey(key: number){

                        if(this.selectedRTSLayersList != 
                                    null
                                )
                        
                                    {
                                    this.inputProcessorArray[key]!.processEvent(AllBinaryGameLayerManager.getNullInstance(), GameKeyEvent.NONE);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public processInput(layerManager: AllBinaryLayerManager){

 try { 
    let size: number = this.list.size()!;;
    

    let key: number = 0;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let gameKeyEvent: GameKeyEvent = this.list.get(index) as GameKeyEvent;;
    
key= gameKeyEvent!.getKey();
    
this.processInputKey(key);
    
}


                        if(this.isSingleKeyProcessing)
                        
                                    {
                                    this.clear();
    

                                    }
                                
                        else {
                            this.update();
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.PROCESS_INPUT, e);
    

 }
   }
 
}


    public getSelectedBasicArrayList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selectedRTSLayersList;
    
}


    public addSelectedRTSLayer(selectedLayer: RTSLayer){
this.paintSelectedRTSLayersList= BasicArrayListUtil.getInstance()!.getImmutableInstance();
    

                        if(selectedLayer == CollidableDestroyableDamageableLayer.getNullInstance())
                        
                                    {
                                    this.deselectAll();
    
this.selectedRTSLayersList!.clear();
    

                                    }
                                
                        else {
                            
                        if(!this.selectedRTSLayersList!.contains(selectedLayer))
                        
                                    {
                                    this.selectedRTSLayersList!.add(selectedLayer);
    

                                    }
                                

                        }
                            
this.paintSelectedRTSLayersList= this.selectedRTSLayersList;
    
}


    public setSelectedRTSLayer(selectedLayer: CollidableDestroyableDamageableLayer){

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Selected Layer: ");
    

                        if(selectedLayer != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(selectedLayer!.getName());
    

                                    }
                                
this.logUtil!.putF(stringBuffer!.toString(), this, "setSelectedRTSLayer");
    
this.paintSelectedRTSLayersList= BasicArrayListUtil.getInstance()!.getImmutableInstance();
    
this.selectRTSLayerVisitorInterface!.visit(selectedLayer);
    
this.deselectAll();
    

                        if(this.selectedRTSLayersList!.size() > 0)
                        
                                    {
                                    this.getPreSelectedRTSLayersList()!.clear();
    

    let tempList: BasicArrayList = this.getPreSelectedRTSLayersList()!;;
    
this.preSelectedRTSLayersList= this.selectedRTSLayersList;
    
this.selectedRTSLayersList= tempList;
    
this.logUtil!.putF(new StringMaker().append("Preselected: ")!.append(this.preSelectedRTSLayersList!.toString())!.toString(), this, "setSelectedRTSLayer");
    

                                    }
                                

                        if(selectedLayer != CollidableDestroyableDamageableLayer.getNullInstance())
                        
                                    {
                                    this.selectedRTSLayersList!.add(selectedLayer);
    

                                    }
                                
this.paintSelectedRTSLayersList= this.selectedRTSLayersList;
    
}


    public getLastSelectedRtsLayer(): CollidableDestroyableDamageableLayer{

                        if(this.isAnyRTSLayerSelected())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selectedRTSLayersList!.get(this.selectedRTSLayersList!.size() -1) as CollidableDestroyableDamageableLayer;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CollidableDestroyableDamageableLayer.getNullInstance();;
    

                        }
                            
}


    public selectAllPreselected(){

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Select all Preselected: ");
    
stringBuffer!.append(this.preSelectedRTSLayersList!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "selectAllPreselected");
    




                        for (
    let index: number = this.preSelectedRTSLayersList!.size() -1;index >= 0; index--)
        {

    let rtsLayer: RTSLayer = this.preSelectedRTSLayersList!.get(index) as RTSLayer;;
    
rtsLayer!.select();
    
}

}


    public deselectAllPreselected(){

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Deselect all Preselected: ");
    
stringBuffer!.append(this.preSelectedRTSLayersList!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "deselectAllPreselected");
    




                        for (
    let index: number = this.preSelectedRTSLayersList!.size() -1;index >= 0; index--)
        {

    let rtsLayer: RTSLayer = this.preSelectedRTSLayersList!.get(index) as RTSLayer;;
    
rtsLayer!.deselect();
    
}

this.preSelectedRTSLayersList!.clear();
    
}


    public deselectAll(){




                        for (
    let index: number = this.selectedRTSLayersList!.size() -1;index >= 0; index--)
        {

    let rtsLayer: RTSLayer = this.selectedRTSLayersList!.get(index) as RTSLayer;;
    
rtsLayer!.deselect();
    
}

}


    public isAnyRTSLayerSelected(): boolean{

                        if(this.selectedRTSLayersList!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getPaintSelectedRTSLayersList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paintSelectedRTSLayersList;
    
}


    public getPreSelectedRTSLayersList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.preSelectedRTSLayersList;
    
}


}

