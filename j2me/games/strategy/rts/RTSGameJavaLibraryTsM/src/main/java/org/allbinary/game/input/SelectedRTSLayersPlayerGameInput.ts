
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
        



import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { RTSGameStrings } from "../../../../org/allbinary/game/layer/RTSGameStrings.js";

    
import { RTSLayer } from "../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { RTSLayerInfoPaintable } from "../../../../org/allbinary/game/layer/RTSLayerInfoPaintable.js";

    
import { RTSPlayerLayerInterface } from "../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { Capital } from "../../../../org/allbinary/game/layer/capital/Capital.js";

    
import { DowngradeSound } from "../../../../org/allbinary/media/audio/DowngradeSound.js";

    
import { UpgradeSound } from "../../../../org/allbinary/media/audio/UpgradeSound.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../org/allbinary/util/BasicArrayListUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BooleanFactory } from "../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { InputFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js";

    
import { GameKeyEvent } from "../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { AllBinaryGameLayerManager } from "../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { GameNotificationEvent } from "../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js";

    
import { GameNotificationEventHandler } from "../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { Visitor } from "../../../../org/allbinary/logic/util/visitor/Visitor.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { ErrorSound } from "../../../../org/allbinary/media/audio/ErrorSound.js";

    
import { BasicGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCompositeInterface } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    

export class SelectedRTSLayersPlayerGameInput extends PlayerGameInput {
        

    readonly inputProcessorArray: GameInputProcessor[] = new Array(InputFactory.getInstance()!.MAX);
        
        

    private readonly list: BasicArrayList

    readonly isSingleKeyProcessing: boolean = Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS) || Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_PRESS);
        
        

    private selectedRTSLayersList: BasicArrayList = new BasicArrayList();
        
        

    private preSelectedRTSLayersList: BasicArrayList = new BasicArrayList();
        
        

    private paintSelectedRTSLayersList: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        

    private rtsPlayerLayerInterface: RTSPlayerLayerInterface

    private readonly selectRTSLayerVisitorInterface: Visitor

    private readonly upgradeGameNotificationEvent: GameNotificationEvent

    private readonly noMoneyGameNotificationEvent: GameNotificationEvent

    private readonly downgradeGameNotificationEvent: GameNotificationEvent
public constructor (towerInfoPaintable: RTSLayerInfoPaintable, rtsPlayerLayerInterface: RTSPlayerLayerInterface, list: BasicArrayList, playerInputId: number, selectRTSLayerVisitorFactoryInterface: SelectRTSLayerVisitorFactoryInterface)                        

                            : super(list, playerInputId){

            super();
            var towerInfoPaintable = towerInfoPaintable
var rtsPlayerLayerInterface = rtsPlayerLayerInterface
var list = list
var playerInputId = playerInputId
var selectRTSLayerVisitorFactoryInterface = selectRTSLayerVisitorFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
this.initInputProcessors()
this.rtsPlayerLayerInterface= rtsPlayerLayerInterface
this.list= list
this.selectRTSLayerVisitorInterface= selectRTSLayerVisitorFactoryInterface!.getInstance(this)

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        


    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        

this.upgradeGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.UPGRADE, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
this.noMoneyGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.NO_MONEY, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
this.downgradeGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.DOWNGRADE, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
}


                @Throws(Exception::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        

setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
}


    public isSelected(rtsLayer: RTSLayer): boolean{
var rtsLayer = rtsLayer

    
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


                @Throws(Exception::class)
            
    upgrade(){

    var anyChanged: boolean = false;
        
        





                        for (
    var index: number = this.selectedRTSLayersList!.size() -1;
        
        
index >= 0; index--)
        {

    var rtsLayer: RTSLayer = this.selectedRTSLayersList!.get(index) as RTSLayer;
        
        


    
                        if(rtsLayer!.isUpgradeable())
                        
                                    {
                                    
    var capital: Capital = this.rtsPlayerLayerInterface!.getCapital()!;
        
        


    var upgradeCost: number = rtsLayer!.getUpgradeCost()!;
        
        


    
                        if(upgradeCost <= capital.getTotalMoney())
                        
                                    {
                                    anyChanged= true
add(UpgradeSound.getInstance())
upgrade()
removeMoney(upgradeCost)

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(upgradeGameNotificationEvent)

                                    }
                                

                                    }
                                
                        else {
                            add(ErrorSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(noMoneyGameNotificationEvent)

                                    }
                                

                        }
                            

                                    }
                                
}


    
                        if(anyChanged)
                        
                                    {
                                    
    var rtsPlayerGameInput: RTSPlayerGameInput = (this.rtsPlayerLayerInterface!.getPlayerGameInput() as RTSPlayerGameInput);
        
        

updatePaintable()

                                    }
                                
}


                @Throws(Exception::class)
            
    downgrade(){

    var anyChanged: boolean = false;
        
        





                        for (
    var index: number = this.selectedRTSLayersList!.size()!;
        
        
--index >= 0; )
        {

    var rtsLayer: RTSLayer = this.selectedRTSLayersList!.get(index) as RTSLayer;
        
        


    
                        if(rtsLayer!.isDowngradeable())
                        
                                    {
                                    anyChanged= true
add(DowngradeSound.getInstance())

    var downgradeCost: number = rtsLayer!.getDowngradeCost()!;
        
        

downgrade()

    var capital: Capital = this.rtsPlayerLayerInterface!.getCapital()!;
        
        

addMoney(downgradeCost)

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(downgradeGameNotificationEvent)

                                    }
                                

                                    }
                                
}


    
                        if(anyChanged)
                        
                                    {
                                    
    var rtsPlayerGameInput: RTSPlayerGameInput = (this.rtsPlayerLayerInterface!.getPlayerGameInput() as RTSPlayerGameInput);
        
        

updatePaintable()

                                    }
                                
}


    public initInputProcessors(){
this.inputProcessorArray[Canvas.KEY_NUM1]= SelectedRTSLayersPlayerUpgradeGameInputProcessor(this)
this.inputProcessorArray[Canvas.KEY_NUM3]= SelectedRTSLayersPlayerDowngradeGameInputProcessor(this)
init(this.inputProcessorArray)
}


                @Throws(Exception::class)
            
    public processInput(key: number){
var key = key

    
                        if(this.selectedRTSLayersList != 
                                    null
                                )
                        
                                    {
                                    process(AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER, GameKeyEvent.NONE)

                                    }
                                
}


                @Throws(Exception::class)
            
    public processInput(layerManager: AllBinaryLayerManager){
var layerManager = layerManager

        try {
            
    var size: number = list.size()!;
        
        


    var key: number = 0;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var gameKeyEvent: GameKeyEvent = list.get(index) as GameKeyEvent;
        
        

key= gameKeyEvent!.getKey()
this.processInput(key)
}


    
                        if(isSingleKeyProcessing)
                        
                                    {
                                    this.clear()

                                    }
                                
                        else {
                            this.update()

                        }
                            
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, gameInputStrings!.PROCESS_INPUT, e)
}

}


    public getSelectedBasicArrayList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return selectedRTSLayersList;
    
}


    public addSelectedRTSLayer(selectedLayer: RTSLayer){
var selectedLayer = selectedLayer
this.paintSelectedRTSLayersList= BasicArrayListUtil.getInstance()!.getImmutableInstance()

    
                        if(selectedLayer == CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    this.deselectAll()
clear()

                                    }
                                
                        else {
                            
    
                        if(!this.selectedRTSLayersList!.contains(selectedLayer))
                        
                                    {
                                    add(selectedLayer)

                                    }
                                

                        }
                            
this.paintSelectedRTSLayersList= this.selectedRTSLayersList
}


    public setSelectedRTSLayer(selectedLayer: CollidableDestroyableDamageableLayer){
var selectedLayer = selectedLayer

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Selected Layer: ")

    
                        if(selectedLayer != 
                                    null
                                )
                        
                                    {
                                    append(selectedLayer!.getName())

                                    }
                                
put(stringBuffer!.toString(), this, "setSelectedRTSLayer")
this.paintSelectedRTSLayersList= BasicArrayListUtil.getInstance()!.getImmutableInstance()
visit(selectedLayer)
this.deselectAll()

    
                        if(this.selectedRTSLayersList!.size() > 0)
                        
                                    {
                                    clear()

    var tempList: BasicArrayList = this.getPreSelectedRTSLayersList()!;
        
        

this.preSelectedRTSLayersList= this.selectedRTSLayersList
this.selectedRTSLayersList= tempList
put(StringMaker().
                            append("Preselected: ")!.append(this.preSelectedRTSLayersList!.toString())!.toString(), this, "setSelectedRTSLayer")

                                    }
                                

    
                        if(selectedLayer != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    add(selectedLayer)

                                    }
                                
this.paintSelectedRTSLayersList= this.selectedRTSLayersList
}


    public getLastSelectedRtsLayer(): CollidableDestroyableDamageableLayer{

    
                        if(this.isAnyRTSLayerSelected())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selectedRTSLayersList!.get(this.selectedRTSLayersList!.size() -1) as CollidableDestroyableDamageableLayer;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER;
    

                        }
                            
}


    public selectAllPreselected(){

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Select all Preselected: ")
append(this.preSelectedRTSLayersList!.toString())
put(stringBuffer!.toString(), this, "selectAllPreselected")




                        for (
    var index: number = this.preSelectedRTSLayersList!.size() -1;
        
        
index >= 0; index--)
        {

    var rtsLayer: RTSLayer = this.preSelectedRTSLayersList!.get(index) as RTSLayer;
        
        

select()
}

}


    public deselectAllPreselected(){

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Deselect all Preselected: ")
append(this.preSelectedRTSLayersList!.toString())
put(stringBuffer!.toString(), this, "deselectAllPreselected")




                        for (
    var index: number = this.preSelectedRTSLayersList!.size() -1;
        
        
index >= 0; index--)
        {

    var rtsLayer: RTSLayer = this.preSelectedRTSLayersList!.get(index) as RTSLayer;
        
        

deselect()
}

clear()
}


    public deselectAll(){




                        for (
    var index: number = this.selectedRTSLayersList!.size() -1;
        
        
index >= 0; index--)
        {

    var rtsLayer: RTSLayer = this.selectedRTSLayersList!.get(index) as RTSLayer;
        
        

deselect()
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
                        return paintSelectedRTSLayersList;
    
}


    public getPreSelectedRTSLayersList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return preSelectedRTSLayersList;
    
}


}
                
            

