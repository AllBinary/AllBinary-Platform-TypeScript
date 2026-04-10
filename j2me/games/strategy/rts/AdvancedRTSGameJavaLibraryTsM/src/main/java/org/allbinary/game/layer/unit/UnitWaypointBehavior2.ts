
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
        



import { J2MEUtil } from "../../../../../org/allbinary/J2MEUtil.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { SteeringVisitor } from "../../../../../org/allbinary/game/layer/SteeringVisitor.js";

    
import { AdvancedRTSGameLayer } from "../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js";

    
import { MultipassWaypointPathRunnable } from "../../../../../org/allbinary/game/layer/MultipassWaypointPathRunnable.js";

    
import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { WaypointPathRunnable } from "../../../../../org/allbinary/game/layer/WaypointPathRunnable.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { WaypointPathRunnableBase } from "../../../../../org/allbinary/game/layer/WaypointPathRunnableBase.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { WaypointBase } from "../../../../../org/allbinary/game/layer/waypoint/WaypointBase.js";

    
import { TrackingEventHandler } from "../../../../../org/allbinary/game/tracking/TrackingEventHandler.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { LayerDistanceUtil } from "../../../../../org/allbinary/math/LayerDistanceUtil.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { SimpleGeographicMapCellPositionFactory } from "../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js";

    
import { PathFindingThreadPool } from "../../../../../org/allbinary/thread/PathFindingThreadPool.js";

    
import { ThreadPool } from "../../../../../org/allbinary/thread/ThreadPool.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class UnitWaypointBehavior2 extends UnitWaypointBehavior {
        

    private static readonly runningWaypointPathList: BasicArrayList = new BasicArrayList();
        
        

    private static readonly TARGET_DISTANCE: string = "Target Distance";
        
        

    private static readonly TARGET_LAYER: string = "Target Layer";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly unitWaypointStrings: UnitWaypointStrings = UnitWaypointStrings.getInstance()!;
        
        

    private readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        

    private readonly layerDistanceUtil: LayerDistanceUtil = LayerDistanceUtil.getInstance()!;
        
        

    private readonly pathFindingThreadPool: ThreadPool = PathFindingThreadPool.getInstance()!;
        
        

    private readonly progressTimeDelayHelper: TimeDelayHelper

    private readonly wanderPathsList: BasicArrayList

    private readonly waypointPathRunnable: WaypointPathRunnableBase

    private sensorRange: number = 0;
        
        

    private closeRange: number = 0;
        
        

    private nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private afterNextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private waitingOnTargetPath: boolean= false

    private waitingOnWaypointPath: boolean= false

    private targetWithoutCachedPathLayerInterface: CollidableDestroyableDamageableLayer = CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER;
        
        
public constructor (ownerAdvancedRTSGameLayer: UnitLayer, fakeWaypoint: AdvancedRTSGameLayer)                        

                            : super(ownerAdvancedRTSGameLayer, fakeWaypoint){

            super();
            var ownerAdvancedRTSGameLayer = ownerAdvancedRTSGameLayer
var fakeWaypoint = fakeWaypoint


                            //For kotlin this is before the body of the constructor.
                    
this.progressTimeDelayHelper= TimeDelayHelper(5000)
this.wanderPathsList= BasicArrayList()

    var features: Features = Features.getInstance()!;
        
        

this.waypointPathRunnable= J2MEUtil.isHTML()
                        ?       
                                MultipassWaypointPathRunnable()
                                :

                            WaypointPathRunnable();

    
}


    initRange(weaponRange: number){
var weaponRange = weaponRange
super.initRange(weaponRange)
this.closeRange= weaponRange
this.sensorRange= weaponRange *4
this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.initRange(this.associatedAdvancedRTSGameLayer, this.closeRange, this.sensorRange)
}


    public getNextUnvisitedPathGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nextUnvisitedPathGeographicMapCellPosition;
    
}


    public isRunning(): boolean{

                        if(this.waypointPathRunnable!.isRunning())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

                        if(this.waypointPathRunnable!.isRunning())
                        
                                    {
                                    
                        if(waypointPathsListP != runningWaypointPathList)
                        
                                    {
                                    this.waypointPathRunnable!.setRunning(false)

                        if(this.waitingOnTargetPath)
                        
                                    {
                                    this.this.setTargetPath()

                                    }
                                
                             else 
                        if(this.waitingOnWaypointPath)
                        
                                    {
                                    this.this.setWaypointPath(this.waypointPathRunnable!.getTargetLayer() as AdvancedRTSGameLayer)

                                    }
                                
                        else {
                            


                            throw Error("Should not happen")

                        }
                            

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                        }
                            

                                    }
                                
this.this.processTargetList()

                        if(!this.waypointPathRunnable!.isRunning())
                        
                                    {
                                    this.this.processWaypoint()

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                        }
                            

                        if(!this.waypointPathRunnable!.isRunning())
                        
                                    {
                                    this.this.processTargeting()

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                        }
                            

                        if(!this.waypointPathRunnable!.isRunning())
                        
                                    {
                                    this.this.teleportIfNoProgress()

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                        }
                            
}


                //@Throws(Error::class)
            
    onEnemyMovement(layerInterface: AdvancedRTSGameLayer){
var layerInterface = layerInterface

    var anotherTargetDistance: number = layerDistanceUtil!.getDistance(this.associatedAdvancedRTSGameLayer, layerInterface)!;
        
        


                        if(layerInterface == this.currentTargetLayerInterfaceP)
                        
                                    {
                                    this.this.setCurrentTargetDistance(anotherTargetDistance)

                                    }
                                
                        else {
                            this.this.processPossibleTarget(layerInterface, anotherTargetDistance)

                        }
                            
}


                //@Throws(Error::class)
            
    processPossibleTarget(layerInterface: AdvancedRTSGameLayer, anotherTargetDistance: number){
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance

    var isShorterThanCurrentTargetDistance: boolean = this.getCurrentTargetDistance() > anotherTargetDistance;
        
        


    var isCurrentTargetDestroyed: boolean = this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER && this.currentTargetLayerInterfaceP!.isDestroyed();
        
        

this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.processPossibleTarget(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance, isShorterThanCurrentTargetDistance, isCurrentTargetDestroyed)

                        if(this.isWaypointListEmptyOrOnlyTargets() && this.isInSensorRange(layerInterface, anotherTargetDistance) && (isShorterThanCurrentTargetDistance || isCurrentTargetDestroyed))
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.processPossibleTarget(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance)
this.this.setTarget(layerInterface, anotherTargetDistance)

                                    }
                                
                             else 
                        if(this.isCloseRange(layerInterface, anotherTargetDistance) && (isShorterThanCurrentTargetDistance || isCurrentTargetDestroyed))
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.processPossibleTargetCloser(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance)
this.this.setTarget(layerInterface, anotherTargetDistance)

                                    }
                                
}


                //@Throws(Error::class)
            
    teleportIfNoProgress(){

                        if(this.isTrackingWaypoint() || this.associatedAdvancedRTSGameLayer!.getParentLayer()!.isDestroyed())
                        
                                    {
                                    
                        if(this.progressTimeDelayHelper!.isTime() && this.nextUnvisitedPathGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.teleportTo(this.nextUnvisitedPathGeographicMapCellPosition)

                                    }
                                

                        if(this.getCompleteTimeDelayHelper()!.isTime())
                        
                                    {
                                    
    var geographicMapCellPosition: GeographicMapCellPosition = this.currentGeographicMapCellHistoryP!.getTracked()!.get(this.currentGeographicMapCellHistoryP!.getSize() -1) as GeographicMapCellPosition;
        
        

this.associatedAdvancedRTSGameLayer!.teleportTo(geographicMapCellPosition)

                                    }
                                

                                    }
                                
}


                //@Throws(Error::class)
            
    setTarget(layerInterface: AdvancedRTSGameLayer, anotherTargetDistance: number){
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance
this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.setTarget(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance)
this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(this.unitWaypointStrings!.TARGET, BasicColorFactory.getInstance()!.GREEN)
this.associatedAdvancedRTSGameLayer!.setLoad(0)
this.this.setCurrentTargetDistance(anotherTargetDistance)
this.this.setCurrentTargetLayerInterface(layerInterface)
this.this.setTrackingWaypoint(false)
this.targetList!.clear()

                        if(!this.isCloseRange(layerInterface, anotherTargetDistance) && this.canInsertWaypoint(0, this.currentTargetLayerInterfaceP))
                        
                                    {
                                    
    var geographicMapCellPosition: GeographicMapCellPosition = associatedAdvancedRTSGameLayer!.getCurrentGeographicMapCellPosition()!;
        
        


    var pathFindingLayerInterface: PathFindingLayerInterface = (this.currentTargetLayerInterfaceP as PathFindingLayerInterface);
        
        


    var waypoint: WaypointBase = pathFindingLayerInterface!.getWaypointBehavior()!.getWaypoint()!;
        
        


    var list: BasicArrayList = waypoint.getPathsListFromCacheOnly(geographicMapCellPosition)!;
        
        

this.this.setWaypointPathsList(list)

                        if(this.waypointPathsListP == 
                                    null
                                )
                        
                                    {
                                    this.targetWithoutCachedPathLayerInterface= this.currentTargetLayerInterfaceP

                                    }
                                
                             else 
                        if(this.waypointPathsListP!.size() != 0)
                        
                                    {
                                    this.this.setTargetPath()

                                    }
                                

                                    }
                                
}


                //@Throws(Error::class)
            
    setTargetPath(){

                        if(this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    
                        if(this.currentTargetLayerInterfaceP!.isDestroyed())
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.setTargetPath(this.associatedAdvancedRTSGameLayer)
this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(this.unitWaypointStrings!.KILL, this.basicColorFactory!.ORANGE)
this.this.clearTarget()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(this.currentTargetLayerInterfaceP == this.waypointPathRunnable!.getTargetLayer())
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.setTargetPath(this.associatedAdvancedRTSGameLayer, this)
this.this.insertWaypoint(0, this.currentTargetLayerInterfaceP)
this.this.setRandomGeographicMapCellHistory(this.waypointPathsListP)

                                    }
                                

                                    }
                                
}


                //@Throws(Error::class)
            
    setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList: BasicArrayList){
    //var geographicMapCellPositionBasicArrayList = geographicMapCellPositionBasicArrayList
this.this.setCurrentPathGeographicMapCellPosition(SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
this.nextUnvisitedPathGeographicMapCellPosition= SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION
super.setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList)
}


                //@Throws(Error::class)
            
    processWaypoint(){

    var size: number = this.targetList!.size()!;
        
        


                        if(size > 0)
                        
                                    {
                                    
    var targetLayer: AdvancedRTSGameLayer = this.targetList!.get(0) as AdvancedRTSGameLayer;
        
        

this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.processWaypoint(this.associatedAdvancedRTSGameLayer, this, targetLayer, size)

                        if(targetLayer!.isDestroyed())
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(this.unitWaypointStrings!.WAYPOINT_DESTROYED_SHORT, this.basicColorFactory!.YELLOW)
this.this.removeWaypoint(targetLayer, this.unitWaypointStrings!.WAYPOINT_DESTROYED)

                                    }
                                
                        else {
                            
    var geographicMapCellPosition: GeographicMapCellPosition = associatedAdvancedRTSGameLayer!.getCurrentGeographicMapCellPosition()!;
        
        


                        if(this.isTrackingWaypoint())
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.processWaypointTracked(this.associatedAdvancedRTSGameLayer, this)

                        if(this.visitIfAtMidPoint(geographicMapCellPosition))
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.processWaypointTracked(this.associatedAdvancedRTSGameLayer, geographicMapCellPosition)

                                    }
                                

                        if(this.currentGeographicMapCellHistoryP!.isAllVisited2() && this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    
    var oldWaypointLayer: AdvancedRTSGameLayer = this.currentTargetLayerInterfaceP as AdvancedRTSGameLayer;
        
        

oldWaypointLayer!.getWaypointBehavior()!.getWaypoint()!.visit(this.associatedAdvancedRTSGameLayer)
this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(this.unitWaypointStrings!.ALL_VISITED_SHORT, this.basicColorFactory!.GREEN)
this.this.removeWaypoint(this.currentTargetLayerInterfaceP as AdvancedRTSGameLayer, this.unitWaypointStrings!.ALL_VISITED)

                                    }
                                

                                    }
                                
                             else 
                        if(this.currentTargetLayerInterfaceP == 
                                    null
                                 || this.waypointOverridesAttacking)
                        
                                    {
                                    
    var list: BasicArrayList = targetLayer!.getWaypointBehavior()!.getWaypoint()!.getPathsListFromCacheOnly(geographicMapCellPosition)!;
        
        

this.this.setWaypointPathsList(list)

                        if(this.waypointPathsListP == 
                                    null
                                )
                        
                                    {
                                    this.waitingOnWaypointPath= true
this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(this.unitWaypointStrings!.THINKING, this.basicColorFactory!.GREEN)
this.this.runWaypointPathTask(targetLayer)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.this.setWaypointPath(targetLayer)

                                    }
                                

                        }
                            

                                    }
                                
}


                //@Throws(Error::class)
            
    wander(){

                        if(this.currentGeographicMapCellHistoryP!.isAllVisited2())
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.wander(this.associatedAdvancedRTSGameLayer)
this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(this.unitWaypointStrings!.WANDERING, this.basicColorFactory!.RED)
wanderPathsList!.clear()
wanderPathsList!.add(this.associatedAdvancedRTSGameLayer!.getSurroundingGeographicMapCellPositionList())
this.this.setRandomGeographicMapCellHistory(wanderPathsList)

                                    }
                                
this.this.visitIfAtMidPoint(this.getCurrentPathGeographicMapCellPosition())
this.this.updateCurrentPathGeographicMapCellPosition()
this.associatedAdvancedRTSGameLayer!.trackTo(this.unitWaypointStrings!.NEXT_PATH_NODE)
}


    visitIfAtMidPoint(geographicMapCellPosition: GeographicMapCellPosition): boolean{
    //var geographicMapCellPosition = geographicMapCellPosition

    var unitLayer: UnitLayer = this.associatedAdvancedRTSGameLayer;
        
        


                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION && this.nextUnvisitedPathGeographicMapCellPosition == geographicMapCellPosition)
                        
                                    {
                                    
    var point: GPoint = geographicMapCellPosition!.getMidPoint()!;
        
        


    var afterNextPoint: GPoint = this.afterNextUnvisitedPathGeographicMapCellPosition!.getMidPoint()!;
        
        


    var beyondMidPoint: boolean = true;
        
        


                        if(geographicMapCellPosition!.getColumn() == this.afterNextUnvisitedPathGeographicMapCellPosition!.getColumn())
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(point.getX() < afterNextPoint!.getX())
                        
                                    {
                                    
                        if(unitLayer!.getXP() +unitLayer!.getHalfWidth() < point.getX())
                        
                                    {
                                    beyondMidPoint= false

                                    }
                                

                                    }
                                
                        else {
                            
                        if(unitLayer!.getXP() +unitLayer!.getHalfWidth() > point.getX())
                        
                                    {
                                    beyondMidPoint= false

                                    }
                                

                        }
                            

                        if(geographicMapCellPosition!.getRow() == this.afterNextUnvisitedPathGeographicMapCellPosition!.getRow())
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(point.getY() < afterNextPoint!.getY())
                        
                                    {
                                    
                        if(unitLayer!.getYP() +unitLayer!.getHalfHeight() < point.getY())
                        
                                    {
                                    beyondMidPoint= false

                                    }
                                

                                    }
                                
                        else {
                            
                        if(unitLayer!.getYP() +unitLayer!.getHalfHeight() > point.getY())
                        
                                    {
                                    beyondMidPoint= false

                                    }
                                

                        }
                            

                        if(beyondMidPoint)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentGeographicMapCellHistoryP!.visit(geographicMapCellPosition);
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    processTargetList(){
this.targetWithoutCachedPathLayerInterface= CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER




                        for (
    var index: number = this.getPossibleTargetList()!.size() -1;
        
        
index >= 0; index--)
        {

    var layerInterface: AdvancedRTSGameLayer = this.getPossibleTargetList()!.get(index) as AdvancedRTSGameLayer;
        
        


                        if(layerInterface!.isDestroyed())
                        
                                    {
                                    this.getPossibleTargetList()!.remove(layerInterface)

                                    }
                                
                        else {
                            this.this.onEnemyMovement(layerInterface)

                        }
                            
}


                        if(this.targetWithoutCachedPathLayerInterface != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    this.waitingOnTargetPath= true
this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(this.unitWaypointStrings!.THINKING_ABOUT_TARGET, this.basicColorFactory!.GREEN)
this.this.runWaypointPathTask(this.currentTargetLayerInterfaceP as AdvancedRTSGameLayer)

                                    }
                                
this.getPossibleTargetList()!.clear()
}


                //@Throws(Error::class)
            
    processTargeting(){

                        if(this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER && (this.isInSensorRange(this.currentTargetLayerInterfaceP, this.getCurrentTargetDistance()) || this.isTrackingWaypoint()))
                        
                                    {
                                    
                        if(this.currentTargetLayerInterfaceP!.isDestroyed())
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.targetDestroyed(this.associatedAdvancedRTSGameLayer)
this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(this.unitWaypointStrings!.KILL, this.basicColorFactory!.ORANGE)
this.this.clearTarget()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var dx: number = 0;
        
        


    var dy: number = 0;
        
        


                        if(this.isTrackingWaypoint())
                        
                                    {
                                    this.this.updateCurrentPathGeographicMapCellPosition()

    var point: GPoint = this.nextUnvisitedPathGeographicMapCellPosition!.getMidPoint()!;
        
        

dx= associatedAdvancedRTSGameLayer!.getXP() +associatedAdvancedRTSGameLayer!.getHalfWidth() -point.getX()
dy= associatedAdvancedRTSGameLayer!.getYP() +associatedAdvancedRTSGameLayer!.getHalfHeight() -point.getY()
this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.processTargeting(this.associatedAdvancedRTSGameLayer, dx, dy)

                                    }
                                
                        else {
                            this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.processTargetingNonWayPoint(this.associatedAdvancedRTSGameLayer, dx, dy)
dx= (this.associatedAdvancedRTSGameLayer!.getXP() +this.associatedAdvancedRTSGameLayer!.getHalfWidth()) -(this.currentTargetLayerInterfaceP!.getXP() +this.currentTargetLayerInterfaceP!.getHalfWidth())
dy= (this.associatedAdvancedRTSGameLayer!.getYP() +this.associatedAdvancedRTSGameLayer!.getHalfHeight()) -(this.currentTargetLayerInterfaceP!.getYP() +this.currentTargetLayerInterfaceP!.getHalfHeight())

                        }
                            
this.associatedAdvancedRTSGameLayer!.trackTo(dx, dy)

                                    }
                                
                        else {
                            
                        if(this.associatedAdvancedRTSGameLayer!.getParentLayer()!.isDestroyed())
                        
                                    {
                                    this.this.wander()

                                    }
                                
                        else {
                            
                        if(this.associatedAdvancedRTSGameLayer!.showMoreCaptionStates)
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(this.unitWaypointStrings!.STOP, this.basicColorFactory!.YELLOW)

                                    }
                                
this.associatedAdvancedRTSGameLayer!.allStop()

                        }
                            

                        }
                            
}


    updateCurrentPathGeographicMapCellPosition(){
this.this.setLastPathGeographicMapCellPosition(this.getCurrentPathGeographicMapCellPosition())
this.this.setCurrentPathGeographicMapCellPosition(this.nextUnvisitedPathGeographicMapCellPosition)
this.nextUnvisitedPathGeographicMapCellPosition= this.currentGeographicMapCellHistoryP!.getFirstUnvisited()
this.afterNextUnvisitedPathGeographicMapCellPosition= this.currentGeographicMapCellHistoryP!.getAfterIfNotLast(this.nextUnvisitedPathGeographicMapCellPosition)

                        if(this.getCurrentPathGeographicMapCellPosition() != this.nextUnvisitedPathGeographicMapCellPosition)
                        
                                    {
                                    this.progressTimeDelayHelper!.setStartTime()

                                    }
                                
}


                //@Throws(Error::class)
            
    setWaypointPath(waypointLayer: AdvancedRTSGameLayer){
    //var waypointLayer = waypointLayer

                        if(waypointPathsListP!.size() != 0)
                        
                                    {
                                    this.this.setCurrentTargetLayerInterface(waypointLayer)

    var MAX: number = Integer.MAX_VALUE;
        
        

this.this.setCurrentTargetDistance(MAX)
this.this.setRandomGeographicMapCellHistory(waypointPathsListP)

                                    }
                                
                        else {
                            waypointLayer!.getWaypointBehavior()!.getWaypoint()!.visit(this.associatedAdvancedRTSGameLayer)
this.associatedAdvancedRTSGameLayer!.getCaptionAnimationHelper()!.update(this.unitWaypointStrings!.ALREADY_THERE_SHORT, this.basicColorFactory!.YELLOW)
this.this.removeWaypoint(waypointLayer, this.unitWaypointStrings!.ALREADY_THERE)

                        }
                            
}


                //@Throws(Error::class)
            
    runWaypointPathTask(waypointLayer: AdvancedRTSGameLayer){
    //var waypointLayer = waypointLayer
setWaypointPathsList(runningWaypointPathList)

                        if(this.waypointPathRunnable!.isRunning())
                        
                                    {
                                    


                            throw Error("Should never be running here")

                                    }
                                
this.waypointPathRunnable!.setRunning(true)
this.waypointPathRunnable!.setUnitLayer(this.associatedAdvancedRTSGameLayer)
this.waypointPathRunnable!.setTargetLayer(waypointLayer)
this.pathFindingThreadPool!.runTask(this.waypointPathRunnable)
}


                //@Throws(Error::class)
            
    removeWaypoint(waypointLayer: RTSLayer, reason: string){
    //var waypointLayer = waypointLayer
    //var reason = reason
this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.removeWaypoint(this.associatedAdvancedRTSGameLayer, this, waypointLayer, reason)
this.targetList!.remove(waypointLayer)
this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.removeWaypoint(this.associatedAdvancedRTSGameLayer, this, this.targetList)

                        if(this.currentTargetLayerInterfaceP == waypointLayer)
                        
                                    {
                                    this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.removeWaypointClear(this.associatedAdvancedRTSGameLayer)
this.this.clearTarget()

                                    }
                                
}


                //@Throws(Error::class)
            
    public clearTarget(){
this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.clearTarget(this.associatedAdvancedRTSGameLayer)
this.this.setCurrentTargetLayerInterface(CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
this.this.setTrackingWaypoint(false)

    var MAX: number = Integer.MAX_VALUE;
        
        

this.this.setCurrentTargetDistance(MAX)
TrackingEventHandler.getInstance()!.fireEvent(this.associatedAdvancedRTSGameLayer!.getTrackingEvent())
}


    public isWaypointListEmptyOrOnlyTargets(): boolean{

    var list: BasicArrayList = this.targetList;
        
        


                        if(list.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var layerInterface: AdvancedRTSGameLayer = list.get(index) as AdvancedRTSGameLayer;
        
        


                        if(layerInterface!.isWaypointListEmptyOrOnlyTargets())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    isCloseRange(layerInterface: AdvancedRTSGameLayer, targetDistance: number): boolean{
    //var layerInterface = layerInterface
    //var targetDistance = targetDistance



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return targetDistance < this.closeRange +layerInterface!.getHalfHeight();
    
}


    public isInSensorRange(layerInterface: CollidableDestroyableDamageableLayer, targetDistance: number): boolean{
    //var layerInterface = layerInterface
    //var targetDistance = targetDistance



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return targetDistance < this.sensorRange +layerInterface!.getHalfHeight();
    
}


    public getCurrentTargetingStateString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        


                        if(this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    stringBuffer!.append(TARGET_LAYER)
stringBuffer!.append(commonSeps!.SPACE)
stringBuffer!.append(this.currentTargetLayerInterfaceP!.getName())
stringBuffer!.append(" with ")
stringBuffer!.append(TARGET_DISTANCE)
stringBuffer!.append(commonSeps!.SPACE)
stringBuffer!.appendint(getCurrentTargetDistance())

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


                //@Throws(Error::class)
            
    addWaypointFromUser(advancedRTSGameLayer: AdvancedRTSGameLayer){
    //var advancedRTSGameLayer = advancedRTSGameLayer

                        if(advancedRTSGameLayer!.isDestroyed())
                        
                                    {
                                    


                            throw Error("Trying to add a dead: " +advancedRTSGameLayer)

                                    }
                                
this.associatedAdvancedRTSGameLayer!.waypoint2LogHelperP!.addWaypointFromUser(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer)
this.targetList!.clear()
this.targetList!.add(advancedRTSGameLayer)
this.this.clearTarget()
}


export inner class BuildingSteeringVisitor extends SteeringVisitor {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    private readonly positionList: BasicArrayList = new BasicArrayList();
        
        

    public visit(anyType: any = {}): any = {}{
var anyType = anyType

        try {
            
                        if(this.getList()!.size() > 0)
                        
                                    {
                                    
    var allbinaryLayer: AllBinaryLayer = this.getList()!.get(0) as AllBinaryLayer;
        
        


    var cellPosition: GeographicMapCellPosition = this.getPositionList()!.get(0) as GeographicMapCellPosition;
        
        


    var clear: boolean = this@UnitWaypointBehavior2.buildingChase(allbinaryLayer, cellPosition)!;
        
        


                        if(clear)
                        
                                    {
                                    this.getList()!.clear()
this.positionList!.clear()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance()!.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, "visit", e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}

}


    public getPositionList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return positionList;
    
}


}
                
            
    private readonly buildingSteeringVisitor: BuildingSteeringVisitor = new BuildingSteeringVisitor();
        
        

                //@Throws(Error::class)
            
    public addBuildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition){
    //var allbinaryLayer = allbinaryLayer
    //var cellPosition = cellPosition

                        if(!this.buildingSteeringVisitor!.getList()!.contains(allbinaryLayer))
                        
                                    {
                                    this.buildingSteeringVisitor!.getList()!.add(allbinaryLayer)
this.buildingSteeringVisitor!.getPositionList()!.add(cellPosition)

                                    }
                                

                        if(!this.getSteeringVisitorList()!.contains(this.buildingSteeringVisitor))
                        
                                    {
                                    this.getSteeringVisitorList()!.add(this.buildingSteeringVisitor)

                                    }
                                
}


                //@Throws(Error::class)
            
    buildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition): boolean{
    //var allbinaryLayer = allbinaryLayer
    //var cellPosition = cellPosition



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.associatedAdvancedRTSGameLayer!.buildingChase(allbinaryLayer, cellPosition);
    
}


}
                
            

