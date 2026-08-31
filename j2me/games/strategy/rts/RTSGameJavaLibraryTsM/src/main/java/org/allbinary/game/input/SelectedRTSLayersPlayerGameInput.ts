
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
        
//not plain js import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { RTSGameStrings } from '../../../../org/allbinary/game/layer/RTSGameStrings.js';
      //not GWT import const RTSGameStrings = globalThis.org.allbinary.game.layer.RTSGameStrings;

      
import { RTSLayer } from '../../../../org/allbinary/game/layer/RTSLayer.js';
      //not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;

      
import { RTSLayerInfoPaintable } from '../../../../org/allbinary/game/layer/RTSLayerInfoPaintable.js';
      //not GWT import const RTSLayerInfoPaintable = globalThis.org.allbinary.game.layer.RTSLayerInfoPaintable;

      
import { RTSPlayerLayerInterface } from '../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      //not GWT import const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
import { Capital } from '../../../../org/allbinary/game/layer/capital/Capital.js';
      //not GWT import const Capital = globalThis.org.allbinary.game.layer.capital.Capital;

      
import { DowngradeSound } from '../../../../org/allbinary/media/audio/DowngradeSound.js';
      //not GWT import const DowngradeSound = globalThis.org.allbinary.media.audio.DowngradeSound;

      
import { UpgradeSound } from '../../../../org/allbinary/media/audio/UpgradeSound.js';
      //not GWT import const UpgradeSound = globalThis.org.allbinary.media.audio.UpgradeSound;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { BasicArrayListUtil } from '../../../../org/allbinary/util/BasicArrayListUtil.js';
      const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      //not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
      //not GWT import const InputFeatureFactory = globalThis.org.allbinary.game.configuration.feature.InputFeatureFactory;

      
import { GameKeyEvent } from '../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      //not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { GameNotificationEvent } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
      //not GWT import const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

      
import { GameNotificationEventHandler } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
      //not GWT import const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;

      
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      //not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { Visitor } from '../../../../org/allbinary/logic/util/visitor/Visitor.js';
      //not GWT import const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
import { ErrorSound } from '../../../../org/allbinary/media/audio/ErrorSound.js';
      //not GWT import const ErrorSound = globalThis.org.allbinary.media.audio.ErrorSound;

      
import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { GeographicMapCompositeInterface } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      //not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PlayerGameInput } from './PlayerGameInput.js';
//not GWT import const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;

                import { InputFactory } from './InputFactory.js';
//not GWT import const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

                import { GameInputProcessor } from './GameInputProcessor.js';
//not GWT import const GameInputProcessor = globalThis.org.allbinary.game.input.GameInputProcessor;

                import { SelectRTSLayerVisitorFactoryInterface } from './SelectRTSLayerVisitorFactoryInterface.js';
//not GWT import const SelectRTSLayerVisitorFactoryInterface = globalThis.org.allbinary.game.input.SelectRTSLayerVisitorFactoryInterface;

                import { RTSPlayerGameInput } from './RTSPlayerGameInput.js';
//not GWT import const RTSPlayerGameInput = globalThis.org.allbinary.game.input.RTSPlayerGameInput;

                import { SelectedRTSLayersPlayerUpgradeGameInputProcessor } from './SelectedRTSLayersPlayerUpgradeGameInputProcessor.js';
//not GWT import const SelectedRTSLayersPlayerUpgradeGameInputProcessor = globalThis.org.allbinary.game.input.SelectedRTSLayersPlayerUpgradeGameInputProcessor;

                import { SelectedRTSLayersPlayerDowngradeGameInputProcessor } from './SelectedRTSLayersPlayerDowngradeGameInputProcessor.js';
//not GWT import const SelectedRTSLayersPlayerDowngradeGameInputProcessor = globalThis.org.allbinary.game.input.SelectedRTSLayersPlayerDowngradeGameInputProcessor;

                import { GameInputProcessorUtil } from './GameInputProcessorUtil.js';
//not GWT import const GameInputProcessorUtil = globalThis.org.allbinary.game.input.GameInputProcessorUtil;

                
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
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;;
    
this.upgradeGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.UPGRADE, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.noMoneyGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.NO_MONEY, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.downgradeGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.DOWNGRADE, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
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

    var anyChanged: boolean = false;;
    




                        for (
    var index: number = this.selectedRTSLayersList!.size() -1;index >= 0; index--)
        {

    var rtsLayer: RTSLayer = this.selectedRTSLayersList!.get(index) as RTSLayer;;
    

                        if(rtsLayer!.isUpgradeable())
                        
                                    {
                                    
    var capital: Capital = this.rtsPlayerLayerInterface!.getCapital()!;;
    

    var upgradeCost: number = rtsLayer!.getUpgradeCost()!;;
    

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
                                    
    var rtsPlayerGameInput: RTSPlayerGameInput = (this.rtsPlayerLayerInterface!.getPlayerGameInput() as RTSPlayerGameInput);;
    
rtsPlayerGameInput!.updatePaintable();
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    downgrade(){

    var anyChanged: boolean = false;;
    




                        for (
    var index: number = this.selectedRTSLayersList!.size()!;--index >= 0; )
        {

    var rtsLayer: RTSLayer = this.selectedRTSLayersList!.get(index) as RTSLayer;;
    

                        if(rtsLayer!.isDowngradeable())
                        
                                    {
                                    anyChanged= true;
    
this.rtsPlayerLayerInterface!.add(DowngradeSound.getInstance());
    

    var downgradeCost: number = rtsLayer!.getDowngradeCost()!;;
    
rtsLayer!.downgrade();
    

    var capital: Capital = this.rtsPlayerLayerInterface!.getCapital()!;;
    
capital.addMoney(downgradeCost);
    

                        if(!this.rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.downgradeGameNotificationEvent);
    

                                    }
                                

                                    }
                                
}


                        if(anyChanged)
                        
                                    {
                                    
    var rtsPlayerGameInput: RTSPlayerGameInput = (this.rtsPlayerLayerInterface!.getPlayerGameInput() as RTSPlayerGameInput);;
    
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
            
    var size: number = this.list.size()!;;
    

    var key: number = 0;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var gameKeyEvent: GameKeyEvent = this.list.get(index) as GameKeyEvent;;
    
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
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.PROCESS_INPUT, e);
    
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

    var stringBuffer: StringMaker = new StringMaker();;
    
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
    

    var tempList: BasicArrayList = this.getPreSelectedRTSLayersList()!;;
    
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

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Select all Preselected: ");
    
stringBuffer!.append(this.preSelectedRTSLayersList!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "selectAllPreselected");
    




                        for (
    var index: number = this.preSelectedRTSLayersList!.size() -1;index >= 0; index--)
        {

    var rtsLayer: RTSLayer = this.preSelectedRTSLayersList!.get(index) as RTSLayer;;
    
rtsLayer!.select();
    
}

}


    public deselectAllPreselected(){

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Deselect all Preselected: ");
    
stringBuffer!.append(this.preSelectedRTSLayersList!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "deselectAllPreselected");
    




                        for (
    var index: number = this.preSelectedRTSLayersList!.size() -1;index >= 0; index--)
        {

    var rtsLayer: RTSLayer = this.preSelectedRTSLayersList!.get(index) as RTSLayer;;
    
rtsLayer!.deselect();
    
}

this.preSelectedRTSLayersList!.clear();
    
}


    public deselectAll(){




                        for (
    var index: number = this.selectedRTSLayersList!.size() -1;index >= 0; index--)
        {

    var rtsLayer: RTSLayer = this.selectedRTSLayersList!.get(index) as RTSLayer;;
    
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



