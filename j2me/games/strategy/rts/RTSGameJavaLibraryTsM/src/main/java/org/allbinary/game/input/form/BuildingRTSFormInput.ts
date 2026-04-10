
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
        



import { RTSPlayerGameInput } from "../../../../../org/allbinary/game/input/RTSPlayerGameInput.js";

    
import { DemoLockedWithCostLayerInterfaceFactoryInterface } from "../../../../../org/allbinary/game/layer/DemoLockedWithCostLayerInterfaceFactoryInterface.js";

    
import { GeographicMapCellPositionAreaBase } from "../../../../../org/allbinary/game/layer/GeographicMapCellPositionAreaBase.js";

    
import { RTSGameStrings } from "../../../../../org/allbinary/game/layer/RTSGameStrings.js";

    
import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { RTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { Capital } from "../../../../../org/allbinary/game/layer/capital/Capital.js";

    
import { LayerInterfaceFactoryImageItem } from "../../../../../org/allbinary/game/layer/item/LayerInterfaceFactoryImageItem.js";

    
import { CustomItem } from "../../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { BuildingSound } from "../../../../../org/allbinary/media/audio/BuildingSound.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { LockedFeatureNotificationUtil } from "../../../../../org/allbinary/logic/system/security/licensing/LockedFeatureNotificationUtil.js";

    
import { LockedUtil } from "../../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { GameNotificationEvent } from "../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js";

    
import { GameNotificationEventHandler } from "../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { ErrorSound } from "../../../../../org/allbinary/media/audio/ErrorSound.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellType } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { GeographicMapCompositeInterface } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    
import { SimpleGeographicMapCellPositionFactory } from "../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js";

    
import { DropCellPositionHistory } from "../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js";

    
import { RaceTrackGeographicMapCellTypeFactory } from "../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellTypeFactory.js";

    

export class BuildingRTSFormInput extends RTSFormInput {
        

    private isUnitProducer: boolean

    private readonly buildOnPathGameNotificationEvent: GameNotificationEvent

    private readonly spotTakenGameNotificationEvent: GameNotificationEvent

    private readonly selectBuildSpotGameNotificationEvent: GameNotificationEvent

    private readonly roadCollisionGameNotificationEvent: GameNotificationEvent

    private readonly noMoneyGameNotificationEvent: GameNotificationEvent

    private readonly buildingCollisionGameNotificationEvent: GameNotificationEvent

    private readonly structureToCloseCollisionGameNotificationEvent: GameNotificationEvent

    private readonly buildingGameNotificationEvent: GameNotificationEvent

    private readonly mapEdgeGameNotificationEvent: GameNotificationEvent

    private readonly dropCellPositionHistory: DropCellPositionHistory = DropCellPositionHistory.getInstance()!;
        
        
public constructor (groupInterface: Group[], isUnitProducer: boolean)                        

                            : super(groupInterface){

            super();
                //var groupInterface = groupInterface
    //var isUnitProducer = isUnitProducer


                            //For kotlin this is before the body of the constructor.
                    
this.isUnitProducer= isUnitProducer

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        


    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        

this.buildOnPathGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.BUILD_ON_PATH, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
this.spotTakenGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.SPOT_TAKEN, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
this.selectBuildSpotGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.SELECT_BUILD_SPOT, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
this.roadCollisionGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.ROAD_COLLISION, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
this.noMoneyGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.NO_MONEY, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
this.buildingCollisionGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.BUILDING_COLLISION, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
this.structureToCloseCollisionGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.STRUCTURE_TO_CLOSE, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
this.buildingGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.BUILDING, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
this.mapEdgeGameNotificationEvent= GameNotificationEvent(this, RTSGameStrings.getInstance()!.MAP_EDGE, smallIntegerSingletonFactory!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE)
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
setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
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
this.buildFromMotionInput(rtsPlayerLayerInterface, layerManager, item, itemIndex)
}


    public isPositionBlocked(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dropCellPositionHistory!.isCellPositionWithDrop(this.getSelectedGeographicCellPosition());
    
}


    isDemoLocked(item: CustomItem): boolean{
    //var item = item

    var factoryItem: LayerInterfaceFactoryImageItem = item as LayerInterfaceFactoryImageItem;
        
        


    var layerInterfaceFactoryInterface: DemoLockedWithCostLayerInterfaceFactoryInterface = factoryItem!.getLayerInterfaceFactoryInterface() as DemoLockedWithCostLayerInterfaceFactoryInterface;
        
        


    
                        if(LockedUtil.getInstance()!.isLockedFeature() && layerInterfaceFactoryInterface!.isDemoLocked())
                        
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
            
    public buildFromMotionInput(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: CustomItem, itemIndex: number){
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var item = item
    //var itemIndex = itemIndex

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.START, this, "buildFromMotionInput")

    
                        if(layerManager == 
                                    null
                                )
                        
                                    {
                                    


                            throw RuntimeException()

                                    }
                                

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = layerManager as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        


    
                        if(this.isDemoLocked(item))
                        
                                    {
                                    add(ErrorSound.getInstance())
fire(geographicMapInterface!.getForegroundBasicColor())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var geographicMapCellPosition: GeographicMapCellPosition = this.getSelectedGeographicCellPosition()!;
        
        


    
                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
    
                        if(!this.isPositionBlocked())
                        
                                    {
                                    
    var geographicMapCellType: GeographicMapCellType = geographicMapInterface!.getCellTypeAt(geographicMapCellPosition)!;
        
        


    var raceTrackGeographicMapCellTypeFactory: RaceTrackGeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory() as RaceTrackGeographicMapCellTypeFactory;
        
        


    
                        if(!raceTrackGeographicMapCellTypeFactory!.isPath(geographicMapCellType))
                        
                                    {
                                    
    
                        if(this.newUnconstructedRTSLayerInterfaceArray[itemIndex] == CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    this.newUnconstructedRTSLayerInterfaceArray[itemIndex]= this.getInstance(layerManager, item, geographicMapCellPosition)

                                    }
                                
                        else {
                            
    var rtsLayer: RTSLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer;
        
        


    var cellPoint: GPoint = geographicMapCellPosition!.getPoint()!;
        
        

setPosition(cellPoint!.getX(), cellPoint!.getY(), cellPoint!.getZ())
update(geographicMapInterface)

                        }
                            

    var rtsLayer: RTSLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer;
        
        

this.attemptBuild(rtsPlayerLayerInterface, layerManager, rtsLayer, itemIndex)

                                    }
                                
                        else {
                            add(ErrorSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(buildOnPathGameNotificationEvent)

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            add(ErrorSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(spotTakenGameNotificationEvent)

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            add(ErrorSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(selectBuildSpotGameNotificationEvent)

                                    }
                                

                        }
                            
}


                @Throws(Exception::class)
            
    attemptBuild(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, layerInterface: RTSLayer, itemIndex: number): boolean{
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var layerInterface = layerInterface
    //var itemIndex = itemIndex
put(StringMaker().
                            append("Layer: ")!.append(StringUtil.getInstance()!.toString(layerInterface))!.toString(), this, "attemptBuild")

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = layerInterface!.geographicMapCellPositionAreaBase;
        
        


    var occupyList: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;
        
        


    
                        if(!this.isBuildAttemptValid(rtsPlayerLayerInterface, layerInterface))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var geographicMapCellType: GeographicMapCellType





                        for (
    var index: number = occupyList!.size() -1;
        
        
index >= 0; index--)
        {

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = layerManager as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        

geographicMapCellType= geographicMapInterface!.getCellTypeAt(occupyList!.get(index) as GeographicMapCellPosition)

    var raceTrackGeographicMapCellTypeFactory: RaceTrackGeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory() as RaceTrackGeographicMapCellTypeFactory;
        
        


    
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
this.add(rtsPlayerLayerInterface, layerManager, layerInterface)



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
            
    isBuildAttemptValid(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerInterface: RTSLayer): boolean{
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerInterface = layerInterface

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = layerInterface!.geographicMapCellPositionAreaBase;
        
        


    var occupyList: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;
        
        


    
                        if(dropCellPositionHistory!.anyCellPositionWithDrop(occupyList))
                        
                                    {
                                    add(ErrorSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(buildingCollisionGameNotificationEvent)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    
                        if(this.isUnitProducer && this.dropCellPositionHistory!.anyCellPositionWithDrop(geographicMapCellPositionArea!.getSurroundingGeographicMapCellPositionList()))
                        
                                    {
                                    add(ErrorSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(structureToCloseCollisionGameNotificationEvent)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            
    
                        if(this.isSurroundingCellsOffMap(layerInterface))
                        
                                    {
                                    add(ErrorSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(mapEdgeGameNotificationEvent)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                @Throws(Exception::class)
            
    add(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, layerInterface: RTSLayer){
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var layerInterface = layerInterface

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = layerInterface!.geographicMapCellPositionAreaBase;
        
        


    var occupyList: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;
        
        

add(occupyList, layerInterface)

    var rtsPlayerGameInput: RTSPlayerGameInput = rtsPlayerLayerInterface!.getPlayerGameInput() as RTSPlayerGameInput;
        
        

setSelectedRTSLayer(layerInterface, this.getSelectedGeographicCellPosition())
append(layerInterface)
add(BuildingSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(buildingGameNotificationEvent)

                                    }
                                
}


    isSurroundingCellsOffMap(layerInterface: RTSLayer): boolean{
var layerInterface = layerInterface

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = layerInterface!.geographicMapCellPositionAreaBase;
        
        


    var occupyList: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;
        
        


    var surroundList: BasicArrayList = geographicMapCellPositionArea!.getSurroundingGeographicMapCellPositionList()!;
        
        


    var occupySize: number = occupyList!.size()!;
        
        


    var surroundSize: number = surroundList!.size()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append("occupySize: ")
appendint(occupySize)
append(" surroundSize: ")
appendint(surroundSize)
append(" surroundList: ")
append(StringUtil.getInstance()!.toString(surroundList))
put(stringBuffer!.toString(), this, "isSurroundingCellsOffMap")

    var isSurroundOffMap: boolean = false;
        
        


    
                        if(occupySize == 1 && surroundSize != 8)
                        
                                    {
                                    isSurroundOffMap= true

                                    }
                                
                             else 
    
                        if(occupySize == 4 && surroundSize != 12)
                        
                                    {
                                    isSurroundOffMap= true

                                    }
                                

    
                        if(occupySize == 0 || isSurroundOffMap)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}
                
            

