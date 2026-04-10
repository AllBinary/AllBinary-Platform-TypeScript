
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *    Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AdvancedPlayerOwnedRTSLayers } from "../../../../../org/allbinary/game/layer/AdvancedPlayerOwnedRTSLayers.js";

    
import { AdvancedRTSGameLayer } from "../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js";

    
import { AdvancedRTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/AdvancedRTSPlayerLayerInterface.js";

    
import { RTSGameStrings } from "../../../../../org/allbinary/game/layer/RTSGameStrings.js";

    
import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { RTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { Capital } from "../../../../../org/allbinary/game/layer/capital/Capital.js";

    
import { UnitLayer } from "../../../../../org/allbinary/game/layer/unit/UnitLayer.js";

    
import { WorkWaypoint } from "../../../../../org/allbinary/game/layer/waypoint/WorkWaypoint.js";

    
import { CustomItem } from "../../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { BuildingSound } from "../../../../../org/allbinary/media/audio/BuildingSound.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { GeographicMapCellPositionAreaBase } from "../../../../../org/allbinary/game/layer/GeographicMapCellPositionAreaBase.js";

    
import { GameNotificationEvent } from "../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js";

    
import { GameNotificationEventHandler } from "../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { Layer } from "../../../../../org/allbinary/layer/Layer.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { ErrorSound } from "../../../../../org/allbinary/media/audio/ErrorSound.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCompositeInterface } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    

export class UnitRTSFormInput extends RTSFormInput {
        

    public static readonly DECAL_ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(23)!;
        
        

    readonly noMoneyGameNotificationEvent: GameNotificationEvent

    readonly newUnitGameNotificationEvent: GameNotificationEvent
public constructor (groupInterface: Group[])                        

                            : super(groupInterface){

            super();
                //var groupInterface = groupInterface


                            //For kotlin this is before the body of the constructor.
                    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        


    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        

this.noMoneyGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.NO_MONEY, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE)
this.newUnitGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.NEW_UNIT, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE)
put(WorkWaypoint.ID, smallIntegerSingletonFactory!.getInstance(50))
}


                @Throws(Exception::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
setAllBinaryGameLayerManager(allBinaryGameLayerManager)

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        

setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
}


                @Throws(Exception::class)
            
    public process(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: CustomItem, itemIndex: number){
    //var associatedRtsLayer = associatedRtsLayer
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var item = item
    //var itemIndex = itemIndex
process(layerManager)

    var associatedRtsLayer2: RTSLayer = associatedRtsLayer as RTSLayer;
        
        


    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = associatedRtsLayer2!.geographicMapCellPositionAreaBase;
        
        


    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionArea!.getNextSurroundingGeographicMapCellPosition()!;
        
        

put(Layer.ID, associatedRtsLayer)
put(UnitRTSFormInput.DECAL_ID, 
                                    (rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface).getDecalBasicColor())

    
                        if(this.newUnconstructedRTSLayerInterfaceArray[itemIndex] == CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    this.newUnconstructedRTSLayerInterfaceArray[itemIndex]= this.getInstance(layerManager, item, geographicMapCellPosition)

                                    }
                                
                        else {
                            
    var cellPoint: GPoint = geographicMapCellPosition!.getPoint()!;
        
        


    var rtsLayer: RTSLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer;
        
        

setPosition(cellPoint!.getX(), cellPoint!.getY(), rtsLayer!.getZP())

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = rtsLayer!.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        

update(geographicMapInterface)

                        }
                            

    var cellPoint: GPoint = geographicMapCellPosition!.getMidPoint()!;
        
        


    var rtsLayer: RTSLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer;
        
        

setPosition(cellPoint!.getX() -rtsLayer!.getHalfWidth(), cellPoint!.getY() -rtsLayer!.getHalfHeight(), rtsLayer!.getZP())
this.attemptBuild(associatedRtsLayer2, rtsPlayerLayerInterface, layerManager, rtsLayer as RTSLayer, itemIndex)
}


                @Throws(Exception::class)
            
    attemptBuild(associatedRtsLayer: RTSLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, layerInterface: RTSLayer, itemIndex: number){
    //var associatedRtsLayer = associatedRtsLayer
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var layerInterface = layerInterface
    //var itemIndex = itemIndex

    var cost: number = layerInterface!.getCost()!;
        
        


    var capital: Capital = rtsPlayerLayerInterface!.getCapital()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Trying to Build: ")
append(layerInterface!.getName())
append(" for: $")
appendint(cost)
append(" with ")
appendint(capital.getTotalMoney())
put(stringBuffer!.toString(), this, "attemptBuild")

    
                        if(cost <= capital.getTotalMoney())
                        
                                    {
                                    construct(rtsPlayerLayerInterface)
this.newUnconstructedRTSLayerInterfaceArray[itemIndex]= CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER
add(BuildingSound.getInstance())
removeMoney(cost)
set(layerInterface as UnitLayer, associatedRtsLayer as AdvancedRTSGameLayer)
append(layerInterface, PlayersSingletonFactory.total)

    var advancedRTSPlayerLayerInterface: AdvancedRTSPlayerLayerInterface = rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface;
        
        


    var advancedPlayerOwnedRTSLayers: AdvancedPlayerOwnedRTSLayers = advancedRTSPlayerLayerInterface!.getAdvancedPlayerOwnedRTSLayers()!;
        
        

addUnit(layerInterface)

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(newUnitGameNotificationEvent)

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
                
            

