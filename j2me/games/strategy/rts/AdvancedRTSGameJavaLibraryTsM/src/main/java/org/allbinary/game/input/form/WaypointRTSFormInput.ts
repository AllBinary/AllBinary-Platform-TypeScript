
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { RTSPlayerGameInput } from "../../../../../org/allbinary/game/input/RTSPlayerGameInput.js";

    
import { AdvancedRTSGameLayer } from "../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js";

    
import { AdvancedRTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/AdvancedRTSPlayerLayerInterface.js";

    
import { RTSGameStrings } from "../../../../../org/allbinary/game/layer/RTSGameStrings.js";

    
import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { RTSLayerEvent } from "../../../../../org/allbinary/game/layer/RTSLayerEvent.js";

    
import { RTSLayerUtil } from "../../../../../org/allbinary/game/layer/RTSLayerUtil.js";

    
import { RTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { Capital } from "../../../../../org/allbinary/game/layer/capital/Capital.js";

    
import { WaypointCellPositionHistory } from "../../../../../org/allbinary/game/layer/waypoint/WaypointCellPositionHistory.js";

    
import { WaypointLayer } from "../../../../../org/allbinary/game/layer/waypoint/WaypointLayer.js";

    
import { WaypointEventHandlerFactory } from "../../../../../org/allbinary/game/layer/waypoint/event/WaypointEventHandlerFactory.js";

    
import { CustomItem } from "../../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { AllBinaryTiledLayer } from "../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { GeographicMapCellPositionAreaBase } from "../../../../../org/allbinary/game/layer/GeographicMapCellPositionAreaBase.js";

    
import { NullPathFindingLayer } from "../../../../../org/allbinary/game/layer/NullPathFindingLayer.js";

    
import { NullRTSLayer } from "../../../../../org/allbinary/game/layer/NullRTSLayer.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
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

    
import { GeographicMapCellType } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { GeographicMapCompositeInterface } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    
import { DropCellPositionHistory } from "../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js";

    
import { RaceTrackGeographicMapCellTypeFactory } from "../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellTypeFactory.js";

    

export class WaypointRTSFormInput extends RTSFormInput {
        

    private readonly WAYPOINT_EVENT: RTSLayerEvent = new RTSLayerEvent(NullRTSLayer.NULL_RTS_LAYER);
        
        

    readonly dragToSpotGameNotificationEvent: GameNotificationEvent

    readonly spotTakenGameNotificationEvent: GameNotificationEvent

    readonly buildingCollisionGameNotificationEvent: GameNotificationEvent

    readonly roadCollisionGameNotificationEvent: GameNotificationEvent

    readonly newWaypointGameNotificationEvent: GameNotificationEvent

    readonly noMoneyGameNotificationEvent: GameNotificationEvent

    private isPrimaryWaypointCreator: boolean

    private stickyAssociatedRtsLayer: PathFindingLayerInterface = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        
        
public constructor (groupInterface: Group[], isPrimaryWaypointCreator: boolean)                        

                            : super(groupInterface){

            super();
                //var groupInterface = groupInterface
    //var isPrimaryWaypointCreator = isPrimaryWaypointCreator


                            //For kotlin this is before the body of the constructor.
                    
this.isPrimaryWaypointCreator= isPrimaryWaypointCreator

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        


    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        

this.dragToSpotGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.DRAG_TO_SPOT, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE)
this.spotTakenGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.SPOT_TAKEN, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE)
this.buildingCollisionGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.BUILDING_COLLISION, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE)
this.roadCollisionGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.ROAD_COLLISION, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE)
this.newWaypointGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.NEW_WAYPOINT, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE)
this.noMoneyGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.NO_MONEY, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE)
}


                @Throws(Exception::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
setAllBinaryGameLayerManager(allBinaryGameLayerManager)

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        

setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
}


                @Throws(Exception::class)
            
    public process(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, point: GPoint){
    //var associatedRtsLayer = associatedRtsLayer
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var point = point
process(layerManager)

    
                        if(this.isStickyItemSelected() || associatedRtsLayer == 
                                    null
                                )
                        
                                    {
                                    
    
                        if(this.isStickyItemSelected() && associatedRtsLayer == 
                                    null
                                )
                        
                                    {
                                    
    var geographicMapCompositeInterface: GeographicMapCompositeInterface = layerManager as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        


    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        


    var x: number = point.getX() +allBinaryTiledLayer!.getXP();
        
        


    var y: number = point.getY() +allBinaryTiledLayer!.getYP();
        
        


    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAt(x, y)!;
        
        

this.process(rtsPlayerLayerInterface, layerManager, geographicMapCellPosition)

                                    }
                                
                        else {
                            
    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(dragToSpotGameNotificationEvent)

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            
    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(spotTakenGameNotificationEvent)

                                    }
                                

                        }
                            
}


                @Throws(Exception::class)
            
    process(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, geographicMapCellPosition: GeographicMapCellPosition){
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var geographicMapCellPosition = geographicMapCellPosition

    var itemIndex: number = this.getSelectedStickyItemIndex()!;
        
        


    
                        if(this.newUnconstructedRTSLayerInterfaceArray[itemIndex] == CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    this.newUnconstructedRTSLayerInterfaceArray[itemIndex]= this.getInstance(layerManager, this.getSelectedStickyItem(), geographicMapCellPosition)

                                    }
                                
                        else {
                            
    var cellPoint: GPoint = geographicMapCellPosition!.getPoint()!;
        
        


    var rtsLayer: RTSLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer;
        
        

setPosition(cellPoint!.getX(), cellPoint!.getY(), rtsLayer!.getZP())

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = rtsLayer!.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        

update(geographicMapInterface)

                        }
                            
this.attemptBuild(rtsPlayerLayerInterface, layerManager, this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer, itemIndex)
}


                @Throws(Exception::class)
            
    public processSticky(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: CustomItem, index: number){
    //var associatedRtsLayer = associatedRtsLayer
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
var item = item
var index = index
put("Set Sticking Item: " +item, this, "processSticky")
this.setSelectedStickyItem(item)
this.setSelectedStickyItemIndex(index)
this.setStickyItemSelected(true)
this.stickyAssociatedRtsLayer= associatedRtsLayer as RTSLayer
put(Layer.ID, associatedRtsLayer)
}


                @Throws(Exception::class)
            
    attemptBuild(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, layerInterface: RTSLayer, itemIndex: number): boolean{
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var layerInterface = layerInterface
    //var itemIndex = itemIndex
put("Layer: " +layerInterface, this, "attemptBuild")

    
                        if(layerInterface == 
                                    null
                                )
                        
                                    {
                                    put("Layer was null", this, "attemptBuild", Exception())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = layerInterface!.geographicMapCellPositionAreaBase;
        
        


    var list: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;
        
        


    
                        if(DropCellPositionHistory.getInstance()!.anyCellPositionWithDrop(list) || WaypointCellPositionHistory.getInstance()!.anyCellPositionWithDrop(list))
                        
                                    {
                                    add(ErrorSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(buildingCollisionGameNotificationEvent)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = layerManager as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        


    var raceTrackGeographicMapCellTypeFactory: RaceTrackGeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory() as RaceTrackGeographicMapCellTypeFactory;
        
        


    var geographicMapCellType: GeographicMapCellType





                        for (
    var index: number = list.size()!;
        
        
--index >= 0; )
        {
geographicMapCellType= geographicMapInterface!.getCellTypeAt(list.get(index) as GeographicMapCellPosition)

    
                        if(raceTrackGeographicMapCellTypeFactory!.isPath(geographicMapCellType))
                        
                                    {
                                    add(ErrorSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(roadCollisionGameNotificationEvent)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}


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
newUnconstructedRTSLayerInterfaceArray[itemIndex]= CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER
removeMoney(cost)
add(list, layerInterface)

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAt(layerInterface!.getXP(), layerInterface!.getYP())!;
        
        


    var waypointLayer: WaypointLayer = layerInterface as WaypointLayer;
        
        

this.addWayPoint(waypointLayer)

    var rtsPlayerGameInput: RTSPlayerGameInput = rtsPlayerLayerInterface!.getPlayerGameInput() as RTSPlayerGameInput;
        
        

setSelectedRTSLayer(layerInterface, geographicMapCellPosition)

    var advancedRTSPlayerLayerInterface: AdvancedRTSPlayerLayerInterface = rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface;
        
        

addWaypoint(layerInterface)
append(layerInterface)

    var waypointAvancedRTSGameLayer: AdvancedRTSGameLayer = waypointLayer as AdvancedRTSGameLayer;
        
        

add(waypointAvancedRTSGameLayer!.getWaypointBehavior()!.getWaypoint()!.getSound())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(newWaypointGameNotificationEvent)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            add(ErrorSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(noMoneyGameNotificationEvent)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                @Throws(Exception::class)
            
    addWayPoint(layerInterface: WaypointLayer){
    //var layerInterface = layerInterface

    var stickyAssociatedAdvandedRtsLayer: AdvancedRTSGameLayer = stickyAssociatedRtsLayer as AdvancedRTSGameLayer;
        
        


    var list: BasicArrayList = stickyAssociatedAdvandedRtsLayer!.getWaypointBehavior()!.getOwnedWaypointList()!;
        
        

destroyAndClear(list)
add(layerInterface)

    
                        if(this.isPrimaryWaypointCreator)
                        
                                    {
                                    setWaypointLayer(layerInterface)

                                    }
                                
setRtsLayer(layerInterface)
fireEvent(this.WAYPOINT_EVENT)
}


}
                
            

