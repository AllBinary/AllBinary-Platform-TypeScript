
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
        



import { SensorAction } from "../../../../../org/allbinary/game/layer/SensorAction.js";

    
import { SensorActionFactory } from "../../../../../org/allbinary/game/layer/SensorActionFactory.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { PrimaryWaypointHelper } from "../../../../../org/allbinary/game/input/form/PrimaryWaypointHelper.js";

    
import { AdvancedRTSGameLayer } from "../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js";

    
import { RTSLayerEvent } from "../../../../../org/allbinary/game/layer/RTSLayerEvent.js";

    
import { WaypointBehaviorBase } from "../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js";

    
import { BuildingLayer } from "../../../../../org/allbinary/game/layer/building/BuildingLayer.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { WaypointEventListenerInterface } from "../../../../../org/allbinary/game/layer/waypoint/event/WaypointEventListenerInterface.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { GeographicMapCellHistory } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { SimpleGeographicMapCellPositionFactory } from "../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class UnitWaypointBehavior extends WaypointBehaviorBase
                , WaypointEventListenerInterface {
        

    private static readonly PATHING: string = "Pathing";
        
        

    commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private longWeaponRange: number = 0;
        
        

    private sensorAction: SensorAction = SensorActionFactory.getInstance()!.ATTACK;
        
        

    private readonly completeTimeDelayHelper: TimeDelayHelper

    readonly currentGeographicMapCellHistoryP: GeographicMapCellHistory

    private lastPathGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private currentPathGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private readonly FAKE_WAYPOINT_LAYER: CollidableDestroyableDamageableLayer

    readonly targetList: BasicArrayList

    private readonly possibleTargetList: BasicArrayList

    readonly associatedAdvancedRTSGameLayer: UnitLayer

    private moving: boolean = false;
        
        

    private movingFromStopped: boolean = false;
        
        

    waypointPathsListP: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        

    private currentTargetDistance: number = Integer.MAX_VALUE;
        
        

    currentTargetLayerInterfaceP: CollidableDestroyableDamageableLayer = CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER;
        
        

    private trackingWaypoint: boolean= false
protected constructor (associatedAdvancedRTSGameLayer: UnitLayer, fakeWaypoint: CollidableDestroyableDamageableLayer){

            super();
            var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
var fakeWaypoint = fakeWaypoint
this.associatedAdvancedRTSGameLayer= associatedAdvancedRTSGameLayer
this.completeTimeDelayHelper= TimeDelayHelper(30000)
this.targetList= BasicArrayList()
this.possibleTargetList= BasicArrayList()
this.setWaypointPathsList(BasicArrayListUtil.getInstance()!.getImmutableInstance())
this.currentGeographicMapCellHistoryP= GeographicMapCellHistory()
this.FAKE_WAYPOINT_LAYER= fakeWaypoint
}


    initRange(weaponRange: number){
    //var weaponRange = weaponRange
this.longWeaponRange= weaponRange /2
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this)
}


                //@Throws(Error::class)
            
    public onWaypointEvent(event: RTSLayerEvent){
    //var event = event

    var advancedRTSGameLayer: AdvancedRTSGameLayer = event.getRtsLayer() as AdvancedRTSGameLayer;
        
        

this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.onWaypointEvent(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer)

                        if(this.associatedAdvancedRTSGameLayer!.isSelected())
                        
                                    {
                                    this.addWaypointFromUser(advancedRTSGameLayer)

                                    }
                                
                             else 
                        if(advancedRTSGameLayer!.shouldAddWaypointFromBuilding())
                        
                                    {
                                    this.addWaypointFromBuilding(advancedRTSGameLayer)

                                    }
                                
}


                //@Throws(Error::class)
            
    addWaypointFromUser(advancedRTSGameLayer: AdvancedRTSGameLayer){
    //var advancedRTSGameLayer = advancedRTSGameLayer
}


                //@Throws(Error::class)
            
    addWaypointFromBuilding(advancedRTSGameLayer: AdvancedRTSGameLayer){
    //var advancedRTSGameLayer = advancedRTSGameLayer

                        if(advancedRTSGameLayer == PrimaryWaypointHelper.getInstance()!.getWaypointLayer() || advancedRTSGameLayer!.getParentLayer() == associatedAdvancedRTSGameLayer!.getParentLayer())
                        
                                    {
                                    
                        if(!this.targetList!.contains(advancedRTSGameLayer))
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.addWaypointFromBuilding(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer)

                        if(advancedRTSGameLayer!.isDestroyed())
                        
                                    {
                                    


                            throw Error("Trying to add a dead: " +advancedRTSGameLayer)

                                    }
                                
this.targetList!.add(advancedRTSGameLayer)
this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.addWaypointFromBuilding(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer, this.targetList)

                                    }
                                

                                    }
                                
}


    public isWaypointListEmptyOrOnlyTargets(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public insertWaypoint(index: number, rtsLayer: CollidableDestroyableDamageableLayer): boolean{
    //var index = index
    //var rtsLayer = rtsLayer

                        if(this.canInsertWaypoint(index, rtsLayer))
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.insertWaypoint(this.associatedAdvancedRTSGameLayer, index, rtsLayer, this.getName())

                        if(rtsLayer!.isDestroyed())
                        
                                    {
                                    


                            throw Error("Trying to add a dead: " +rtsLayer)

                                    }
                                
this.targetList!.add(index, rtsLayer)
this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.insertWaypoint(this.associatedAdvancedRTSGameLayer, index, rtsLayer, this.getName(), this.targetList)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    move(){

                        if(this.isMoving())
                        
                                    {
                                    this.setMovingFromStopped(false)

                                    }
                                
                        else {
                            this.setMovingFromStopped(true)

                        }
                            
this.setMoving(false)
}


                //@Throws(Error::class)
            
    setRandomGeographicMapCellHistory(pathsList: BasicArrayList){
    //var pathsList = pathsList

    var size: number = pathsList!.size()!;
        
        

this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.setRandomGeographicMapCellHistory(this.associatedAdvancedRTSGameLayer, pathsList)

                        if(size > 0)
                        
                                    {
                                    
    var geographicMapCellPositionBasicArrayList: BasicArrayList = BasicArrayListUtil.getInstance()!.getRandom(pathsList) as BasicArrayList;
        
        

this.setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList)

                                    }
                                
}


                //@Throws(Error::class)
            
    setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList: BasicArrayList){
    //var geographicMapCellPositionBasicArrayList = geographicMapCellPositionBasicArrayList
this.lastPathGeographicMapCellPosition= SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION

                        if(this.associatedAdvancedRTSGameLayer!.showMoreCaptionStates)
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(PATHING, BasicColorFactory.getInstance()!.GREEN)

                                    }
                                
this.currentGeographicMapCellHistoryP!.init()
this.associatedAdvancedRTSGameLayer!.init(this.currentGeographicMapCellHistoryP, geographicMapCellPositionBasicArrayList)
this.setTrackingWaypoint(true)
this.getCompleteTimeDelayHelper()!.setStartTime()
}


    canInsertWaypoint(index: number, rtsLayer: CollidableDestroyableDamageableLayer): boolean{
    //var index = index
    //var rtsLayer = rtsLayer

                        if(this.targetList!.size() > 4)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(this.targetList!.contains(rtsLayer))
                        
                                    {
                                    
                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public addBuildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition){
    //var allbinaryLayer = allbinaryLayer
    //var cellPosition = cellPosition
}


                //@Throws(Error::class)
            
    moveAwayFromBuilding(buildingLayer: BuildingLayer){
    //var buildingLayer = buildingLayer

    var geographicMapCellPosition: GeographicMapCellPosition = this.associatedAdvancedRTSGameLayer!.getCurrentGeographicMapCellPosition()!;
        
        


    var list: BasicArrayList = buildingLayer!.geographicMapCellPositionAreaBase!.getOccupyingGeographicMapCellPositionList()!;
        
        


                        if(list.contains(geographicMapCellPosition))
                        
                                    {
                                    
                        if(this.insertWaypoint(0, this.FAKE_WAYPOINT_LAYER))
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.moveAwayFromBuilding(this.associatedAdvancedRTSGameLayer)
this.setCurrentTargetLayerInterface(this.FAKE_WAYPOINT_LAYER as CollidableDestroyableDamageableLayer)

    var pathsList: BasicArrayList = buildingLayer!.getMoveOutOfBuildAreaPath(geographicMapCellPosition)!;
        
        

this.associatedAdvancedRTSGameLayer!.setClosestGeographicMapCellHistory(pathsList)

                                    }
                                

                                    }
                                
}


    private readonly repeatedToLong: TimeDelayHelper = new TimeDelayHelper(22000);
        
        

    public needToMove(): boolean{
this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.needToMove(this.associatedAdvancedRTSGameLayer, this)

                        if(this.isTrackingWaypoint() || this.sensorAction == SensorActionFactory.getInstance()!.EVADE || (this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER && this.getCurrentTargetDistance() >= this.longWeaponRange +this.currentTargetLayerInterfaceP!.getHalfHeight()))
                        
                                    {
                                    repeatedToLong!.setStartTime()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        if(repeatedToLong!.isTime())
                        
                                    {
                                    
    var message: string = "Repeating too long: " +this.getMovementLogicAsString();
        
        

ForcedLogUtil.log(message, this.associatedAdvancedRTSGameLayer)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getMovementLogicAsString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("isTrackingWaypoint: ")
stringBuffer!.appendboolean(this.isTrackingWaypoint())
stringBuffer!.append(" sensorAction: ")
stringBuffer!.append(this.sensorAction!.name)
stringBuffer!.append(" getCurrentTargetLayerInterface: ")
stringBuffer!.append(StringUtil.getInstance()!.toString(this.currentTargetLayerInterfaceP))

                        if(this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    stringBuffer!.append(" Target Range: ")
stringBuffer!.appendint(this.getCurrentTargetDistance())
stringBuffer!.append(" >= ")
stringBuffer!.appendint(this.longWeaponRange +this.currentTargetLayerInterfaceP!.getHalfHeight())

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public isMovingFromStopped(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.movingFromStopped;
    
}


    setMovingFromStopped(movingFromStopped: boolean){
var movingFromStopped = movingFromStopped
this.movingFromStopped= movingFromStopped
}


    public setWaypointPathsList(waypointPathsList: BasicArrayList){
var waypointPathsList = waypointPathsList
this.waypointPathsListP= waypointPathsList
}


    public getWaypointPathsList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return waypointPathsListP;
    
}


    isMoving(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return moving;
    
}


    setMoving(moving: boolean){
var moving = moving
this.moving= moving
}


    public isTrackingWaypoint(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return trackingWaypoint;
    
}


    getPossibleTargetList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return possibleTargetList;
    
}


    setLastPathGeographicMapCellPosition(lastPathGeographicMapCellPosition: GeographicMapCellPosition){
var lastPathGeographicMapCellPosition = lastPathGeographicMapCellPosition
this.lastPathGeographicMapCellPosition= lastPathGeographicMapCellPosition
}


    getLastPathGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastPathGeographicMapCellPosition;
    
}


    setCurrentPathGeographicMapCellPosition(currentPathGeographicMapCellPosition: GeographicMapCellPosition){
var currentPathGeographicMapCellPosition = currentPathGeographicMapCellPosition
this.currentPathGeographicMapCellPosition= currentPathGeographicMapCellPosition
}


    public getCurrentPathGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentPathGeographicMapCellPosition;
    
}


    setSensorAction(sensorAction: SensorAction){
var sensorAction = sensorAction
this.sensorAction= sensorAction
}


    getSensorAction(): SensorAction{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return sensorAction;
    
}


    setCurrentTargetLayerInterface(currentTargetLayerInterface: CollidableDestroyableDamageableLayer){
var currentTargetLayerInterface = currentTargetLayerInterface
this.currentTargetLayerInterfaceP= currentTargetLayerInterface
}


    public getCurrentTargetLayerInterface(): CollidableDestroyableDamageableLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentTargetLayerInterfaceP;
    
}


    setCurrentTargetDistance(currentTargetDistance: number){
var currentTargetDistance = currentTargetDistance
this.currentTargetDistance= currentTargetDistance
}


    getCurrentTargetDistance(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentTargetDistance;
    
}


    getCompleteTimeDelayHelper(): TimeDelayHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return completeTimeDelayHelper;
    
}


    public getCurrentGeographicMapCellHistory(): GeographicMapCellHistory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentGeographicMapCellHistoryP;
    
}


    setTrackingWaypoint(trackingWaypoint: boolean){
var trackingWaypoint = trackingWaypoint
this.trackingWaypoint= trackingWaypoint
}


}
                
            

