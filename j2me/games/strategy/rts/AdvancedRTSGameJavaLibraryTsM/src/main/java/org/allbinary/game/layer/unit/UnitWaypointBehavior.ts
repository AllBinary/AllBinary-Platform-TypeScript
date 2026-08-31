
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { PrimaryWaypointHelper } from '../../../../../org/allbinary/game/input/form/PrimaryWaypointHelper.js';
      //not GWT import const PrimaryWaypointHelper = globalThis.org.allbinary.game.input.form.PrimaryWaypointHelper;

      
import { AdvancedRTSGameLayer } from '../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
      //not GWT import const AdvancedRTSGameLayer = globalThis.org.allbinary.game.layer.AdvancedRTSGameLayer;

      
import { RTSLayerEvent } from '../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
      //not GWT import const RTSLayerEvent = globalThis.org.allbinary.game.layer.RTSLayerEvent;

      
import { SensorAction } from '../../../../../org/allbinary/game/layer/SensorAction.js';
      //not GWT import const SensorAction = globalThis.org.allbinary.game.layer.SensorAction;

      
import { SensorActionFactory } from '../../../../../org/allbinary/game/layer/SensorActionFactory.js';
      //not GWT import const SensorActionFactory = globalThis.org.allbinary.game.layer.SensorActionFactory;

      
import { WaypointBehaviorBase } from '../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js';
      //not GWT import const WaypointBehaviorBase = globalThis.org.allbinary.game.layer.WaypointBehaviorBase;

      
import { BuildingLayer } from '../../../../../org/allbinary/game/layer/building/BuildingLayer.js';
      //not GWT import const BuildingLayer = globalThis.org.allbinary.game.layer.building.BuildingLayer;

      
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      //not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
import { WaypointEventListenerInterface } from '../../../../../org/allbinary/game/layer/waypoint/event/WaypointEventListenerInterface.js';
      //not GWT import const WaypointEventListenerInterface = globalThis.org.allbinary.game.layer.waypoint.event.WaypointEventListenerInterface;

      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
import { GeographicMapCellHistory } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      //not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { SimpleGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
      //not GWT import const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;

      
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { BasicArrayListUtil } from '../../../../../org/allbinary/util/BasicArrayListUtil.js';
      const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UnitLayer } from './UnitLayer.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.unit.UnitLayer;

                
export class UnitWaypointBehavior extends WaypointBehaviorBase implements WaypointEventListenerInterface {
        

    private static readonly PATHING: string = "Pathing";

    commonSeps: CommonSeps = CommonSeps.getInstance()!;

    private longWeaponRange: number = 0;

    private sensorAction: SensorAction = SensorActionFactory.getInstance()!.ATTACK;

    private readonly completeTimeDelayHelper: TimeDelayHelper;

    readonly currentGeographicMapCellHistoryP: GeographicMapCellHistory;

    private lastPathGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;

    private currentPathGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;

    private readonly FAKE_WAYPOINT_LAYER: CollidableDestroyableDamageableLayer;

    readonly targetList: BasicArrayList;

    private readonly possibleTargetList: BasicArrayList;

    readonly associatedAdvancedRTSGameLayer: UnitLayer;

    private moving: boolean = false;

    private movingFromStopped: boolean = false;

    waypointPathsListP: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;

    private currentTargetDistance: number = Integer.MAX_VALUE;

    currentTargetLayerInterfaceP: CollidableDestroyableDamageableLayer = CollidableDestroyableDamageableLayer.getNullInstance()!;

    private trackingWaypoint: boolean= false;

protected constructor (associatedAdvancedRTSGameLayer: UnitLayer, fakeWaypoint: CollidableDestroyableDamageableLayer){

            super();
        this.associatedAdvancedRTSGameLayer= associatedAdvancedRTSGameLayer;
    
this.completeTimeDelayHelper= new TimeDelayHelper(30000);
    
this.targetList= new BasicArrayListD();
    
this.possibleTargetList= new BasicArrayListD();
    
this.setWaypointPathsList(BasicArrayListUtil.getInstance()!.getImmutableInstance());
    
this.currentGeographicMapCellHistoryP= new GeographicMapCellHistory();
    
this.FAKE_WAYPOINT_LAYER= fakeWaypoint;
    
}


    initRange(weaponRange: number){
this.longWeaponRange= weaponRange /2;
    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Exception.constructor)
            
    public onWaypointEvent(event: RTSLayerEvent){

    var advancedRTSGameLayer: AdvancedRTSGameLayer = event.getRtsLayer() as AdvancedRTSGameLayer;;
    
this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.onWaypointEvent(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer);
    

                        if(this.associatedAdvancedRTSGameLayer!.isSelected())
                        
                                    {
                                    this.addWaypointFromUser(advancedRTSGameLayer);
    

                                    }
                                
                             else 
                        if(advancedRTSGameLayer!.shouldAddWaypointFromBuilding())
                        
                                    {
                                    this.addWaypointFromBuilding(advancedRTSGameLayer);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    addWaypointFromUser(advancedRTSGameLayer: AdvancedRTSGameLayer){
}


                //@Throws(Exception.constructor)
            
    addWaypointFromBuilding(advancedRTSGameLayer: AdvancedRTSGameLayer){

                        if(advancedRTSGameLayer == PrimaryWaypointHelper.getInstance()!.getWaypointLayer() || advancedRTSGameLayer!.getParentLayer() == this.associatedAdvancedRTSGameLayer!.getParentLayer())
                        
                                    {
                                    
                        if(!this.targetList!.contains(advancedRTSGameLayer))
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.addWaypointFromBuilding(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer);
    

                        if(advancedRTSGameLayer!.isDestroyed())
                        
                                    {
                                    


                            throw new Exception("Trying to add a dead: " +advancedRTSGameLayer);
                    

                                    }
                                
this.targetList!.add(advancedRTSGameLayer);
    
this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.addWaypointFromBuildingList(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer, this.targetList);
    

                                    }
                                

                                    }
                                
}


    public isWaypointListEmptyOrOnlyTargets(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public insertWaypoint(index: number, rtsLayer: CollidableDestroyableDamageableLayer): boolean{

                        if(this.canInsertWaypoint(index, rtsLayer))
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.insertWaypoint(this.associatedAdvancedRTSGameLayer, index, rtsLayer, this.getName());
    

                        if(rtsLayer!.isDestroyed())
                        
                                    {
                                    


                            throw new Exception("Trying to add a dead: " +rtsLayer);
                    

                                    }
                                
this.targetList!.addAt(index, rtsLayer);
    
this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.insertWaypointList(this.associatedAdvancedRTSGameLayer, index, rtsLayer, this.getName(), this.targetList);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    move(){

                        if(this.isMoving())
                        
                                    {
                                    this.setMovingFromStopped(false);
    

                                    }
                                
                        else {
                            this.setMovingFromStopped(true);
    

                        }
                            
this.setMoving(false);
    
}


                //@Throws(Exception.constructor)
            
    setRandomGeographicMapCellHistory(pathsList: BasicArrayList){

    var size: number = pathsList!.size()!;;
    
this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.setRandomGeographicMapCellHistoryList(this.associatedAdvancedRTSGameLayer, pathsList);
    

                        if(size > 0)
                        
                                    {
                                    
    var geographicMapCellPositionBasicArrayList: BasicArrayList = BasicArrayListUtil.getInstance()!.getRandom(pathsList) as BasicArrayList;;
    
this.setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList: BasicArrayList){
this.lastPathGeographicMapCellPosition= SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                        if(this.associatedAdvancedRTSGameLayer!.showMoreCaptionStates)
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(UnitWaypointBehavior.PATHING, BasicColorFactory.getInstance()!.GREEN);
    

                                    }
                                
this.currentGeographicMapCellHistoryP!.init();
    
this.associatedAdvancedRTSGameLayer!.init(this.currentGeographicMapCellHistoryP, geographicMapCellPositionBasicArrayList);
    
this.setTrackingWaypoint(true);
    
this.getCompleteTimeDelayHelper()!.setStartTimeTNT();
    
}


    canInsertWaypoint(index: number, rtsLayer: CollidableDestroyableDamageableLayer): boolean{

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


                //@Throws(Exception.constructor)
            
    public addBuildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition){
}


                //@Throws(Exception.constructor)
            
    moveAwayFromBuilding(buildingLayer: BuildingLayer){

    var geographicMapCellPosition: GeographicMapCellPosition = this.associatedAdvancedRTSGameLayer!.getCurrentGeographicMapCellPosition()!;;
    

    var list: BasicArrayList = buildingLayer!.geographicMapCellPositionAreaBase!.getOccupyingGeographicMapCellPositionList()!;;
    

                        if(list.contains(geographicMapCellPosition))
                        
                                    {
                                    
                        if(this.insertWaypoint(0, this.FAKE_WAYPOINT_LAYER))
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.moveAwayFromBuilding(this.associatedAdvancedRTSGameLayer);
    
this.setCurrentTargetLayerInterface(this.FAKE_WAYPOINT_LAYER as CollidableDestroyableDamageableLayer);
    

    var pathsList: BasicArrayList = buildingLayer!.getMoveOutOfBuildAreaPath(geographicMapCellPosition)!;;
    
this.associatedAdvancedRTSGameLayer!.setClosestGeographicMapCellHistory(pathsList);
    

                                    }
                                

                                    }
                                
}


    private readonly repeatedToLong: TimeDelayHelper = new TimeDelayHelper(22000);

    public needToMove(): boolean{
this.associatedAdvancedRTSGameLayer!.waypointLogHelperP!.needToMove(this.associatedAdvancedRTSGameLayer, this);
    

                        if(this.isTrackingWaypoint() || this.sensorAction == SensorActionFactory.getInstance()!.EVADE || (this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.getNullInstance() && this.getCurrentTargetDistance() >= this.longWeaponRange +this.currentTargetLayerInterfaceP!.getHalfHeight()))
                        
                                    {
                                    this.repeatedToLong!.setStartTimeTNT();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        if(this.repeatedToLong!.isTimeTNT())
                        
                                    {
                                    
    var message: string = "Repeating too long: " +this.getMovementLogicAsString();;
    
ForcedLogUtil.log(message, this.associatedAdvancedRTSGameLayer);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getMovementLogicAsString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("isTrackingWaypoint: ");
    
stringBuffer!.appendboolean(this.isTrackingWaypoint());
    
stringBuffer!.append(" sensorAction: ");
    
stringBuffer!.append(this.sensorAction!.name);
    
stringBuffer!.append(" getCurrentTargetLayerInterface: ");
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.currentTargetLayerInterfaceP));
    

                        if(this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.getNullInstance())
                        
                                    {
                                    stringBuffer!.append(" Target Range: ");
    
stringBuffer!.appendint(this.getCurrentTargetDistance());
    
stringBuffer!.append(" >= ");
    
stringBuffer!.appendint(this.longWeaponRange +this.currentTargetLayerInterfaceP!.getHalfHeight());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public isMovingFromStopped(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.movingFromStopped;
    
}


    setMovingFromStopped(movingFromStopped: boolean){
this.movingFromStopped= movingFromStopped;
    
}


    public setWaypointPathsList(waypointPathsList: BasicArrayList){
this.waypointPathsListP= waypointPathsList;
    
}


    public getWaypointPathsList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.waypointPathsListP;
    
}


    isMoving(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.moving;
    
}


    setMoving(moving: boolean){
this.moving= moving;
    
}


    public isTrackingWaypoint(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.trackingWaypoint;
    
}


    getPossibleTargetList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.possibleTargetList;
    
}


    setLastPathGeographicMapCellPosition(lastPathGeographicMapCellPosition: GeographicMapCellPosition){
this.lastPathGeographicMapCellPosition= lastPathGeographicMapCellPosition;
    
}


    getLastPathGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastPathGeographicMapCellPosition;
    
}


    setCurrentPathGeographicMapCellPosition(currentPathGeographicMapCellPosition: GeographicMapCellPosition){
this.currentPathGeographicMapCellPosition= currentPathGeographicMapCellPosition;
    
}


    public getCurrentPathGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentPathGeographicMapCellPosition;
    
}


    setSensorAction(sensorAction: SensorAction){
this.sensorAction= sensorAction;
    
}


    getSensorAction(): SensorAction{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sensorAction;
    
}


    setCurrentTargetLayerInterface(currentTargetLayerInterface: CollidableDestroyableDamageableLayer){
this.currentTargetLayerInterfaceP= currentTargetLayerInterface;
    
}


    public getCurrentTargetLayerInterface(): CollidableDestroyableDamageableLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentTargetLayerInterfaceP;
    
}


    setCurrentTargetDistance(currentTargetDistance: number){
this.currentTargetDistance= currentTargetDistance;
    
}


    getCurrentTargetDistance(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentTargetDistance;
    
}


    getCompleteTimeDelayHelper(): TimeDelayHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.completeTimeDelayHelper;
    
}


    public getCurrentGeographicMapCellHistory(): GeographicMapCellHistory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentGeographicMapCellHistoryP;
    
}


    setTrackingWaypoint(trackingWaypoint: boolean){
this.trackingWaypoint= trackingWaypoint;
    
}


}



