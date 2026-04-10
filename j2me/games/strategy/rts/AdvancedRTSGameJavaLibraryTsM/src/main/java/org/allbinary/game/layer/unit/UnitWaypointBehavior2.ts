
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
initRange(weaponRange)
this.closeRange= weaponRange
this.sensorRange= weaponRange *4
initRange(this.associatedAdvancedRTSGameLayer, this.closeRange, this.sensorRange)
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


                @Throws(Exception::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    
                        if(this.waypointPathRunnable!.isRunning())
                        
                                    {
                                    
    
                        if(waypointPathsListP != runningWaypointPathList)
                        
                                    {
                                    setRunning(false)

    
                        if(this.waitingOnTargetPath)
                        
                                    {
                                    this.setTargetPath()

                                    }
                                
                             else 
    
                        if(this.waitingOnWaypointPath)
                        
                                    {
                                    this.setWaypointPath(this.waypointPathRunnable!.getTargetLayer() as AdvancedRTSGameLayer)

                                    }
                                
                        else {
                            


                            throw Exception("Should not happen")

                        }
                            

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                        }
                            

                                    }
                                
this.processTargetList()

    
                        if(!this.waypointPathRunnable!.isRunning())
                        
                                    {
                                    this.processWaypoint()

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                        }
                            

    
                        if(!this.waypointPathRunnable!.isRunning())
                        
                                    {
                                    this.processTargeting()

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                        }
                            

    
                        if(!this.waypointPathRunnable!.isRunning())
                        
                                    {
                                    this.teleportIfNoProgress()

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                        }
                            
}


                @Throws(Exception::class)
            
    onEnemyMovement(layerInterface: AdvancedRTSGameLayer){
var layerInterface = layerInterface

    var anotherTargetDistance: number = layerDistanceUtil!.getDistance(this.associatedAdvancedRTSGameLayer, layerInterface)!;
        
        


    
                        if(layerInterface == this.currentTargetLayerInterfaceP)
                        
                                    {
                                    this.setCurrentTargetDistance(anotherTargetDistance)

                                    }
                                
                        else {
                            this.processPossibleTarget(layerInterface, anotherTargetDistance)

                        }
                            
}


                @Throws(Exception::class)
            
    processPossibleTarget(layerInterface: AdvancedRTSGameLayer, anotherTargetDistance: number){
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance

    var isShorterThanCurrentTargetDistance: boolean = this.getCurrentTargetDistance() > anotherTargetDistance;
        
        


    var isCurrentTargetDestroyed: boolean = this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER && this.currentTargetLayerInterfaceP!.isDestroyed();
        
        

processPossibleTarget(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance, isShorterThanCurrentTargetDistance, isCurrentTargetDestroyed)

    
                        if(this.isWaypointListEmptyOrOnlyTargets() && this.isInSensorRange(layerInterface, anotherTargetDistance) && (isShorterThanCurrentTargetDistance || isCurrentTargetDestroyed))
                        
                                    {
                                    processPossibleTarget(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance)
this.setTarget(layerInterface, anotherTargetDistance)

                                    }
                                
                             else 
    
                        if(this.isCloseRange(layerInterface, anotherTargetDistance) && (isShorterThanCurrentTargetDistance || isCurrentTargetDestroyed))
                        
                                    {
                                    processPossibleTargetCloser(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance)
this.setTarget(layerInterface, anotherTargetDistance)

                                    }
                                
}


                @Throws(Exception::class)
            
    teleportIfNoProgress(){

    
                        if(this.isTrackingWaypoint() || this.associatedAdvancedRTSGameLayer!.getParentLayer()!.isDestroyed())
                        
                                    {
                                    
    
                        if(this.progressTimeDelayHelper!.isTime() && this.nextUnvisitedPathGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    teleportTo(this.nextUnvisitedPathGeographicMapCellPosition)

                                    }
                                

    
                        if(this.getCompleteTimeDelayHelper()!.isTime())
                        
                                    {
                                    
    var geographicMapCellPosition: GeographicMapCellPosition = this.currentGeographicMapCellHistoryP!.getTracked()!.get(this.currentGeographicMapCellHistoryP!.getSize() -1) as GeographicMapCellPosition;
        
        

teleportTo(geographicMapCellPosition)

                                    }
                                

                                    }
                                
}


                @Throws(Exception::class)
            
    setTarget(layerInterface: AdvancedRTSGameLayer, anotherTargetDistance: number){
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance
setTarget(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance)
update(this.unitWaypointStrings!.TARGET, BasicColorFactory.getInstance()!.GREEN)
setLoad(0)
this.setCurrentTargetDistance(anotherTargetDistance)
this.setCurrentTargetLayerInterface(layerInterface)
this.setTrackingWaypoint(false)
clear()

    
                        if(!this.isCloseRange(layerInterface, anotherTargetDistance) && this.canInsertWaypoint(0, this.currentTargetLayerInterfaceP))
                        
                                    {
                                    
    var geographicMapCellPosition: GeographicMapCellPosition = associatedAdvancedRTSGameLayer!.getCurrentGeographicMapCellPosition()!;
        
        


    var pathFindingLayerInterface: PathFindingLayerInterface = (this.currentTargetLayerInterfaceP as PathFindingLayerInterface);
        
        


    var waypoint: WaypointBase = pathFindingLayerInterface!.getWaypointBehavior()!.getWaypoint()!;
        
        


    var list: BasicArrayList = waypoint.getPathsListFromCacheOnly(geographicMapCellPosition)!;
        
        

this.setWaypointPathsList(list)

    
                        if(this.waypointPathsListP == 
                                    null
                                )
                        
                                    {
                                    this.targetWithoutCachedPathLayerInterface= this.currentTargetLayerInterfaceP

                                    }
                                
                             else 
    
                        if(this.waypointPathsListP!.size() != 0)
                        
                                    {
                                    this.setTargetPath()

                                    }
                                

                                    }
                                
}


                @Throws(Exception::class)
            
    setTargetPath(){

    
                        if(this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    
    
                        if(this.currentTargetLayerInterfaceP!.isDestroyed())
                        
                                    {
                                    setTargetPath(this.associatedAdvancedRTSGameLayer)
update(this.unitWaypointStrings!.KILL, this.basicColorFactory!.ORANGE)
this.clearTarget()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    
                        if(this.currentTargetLayerInterfaceP == this.waypointPathRunnable!.getTargetLayer())
                        
                                    {
                                    setTargetPath(this.associatedAdvancedRTSGameLayer, this)
this.insertWaypoint(0, this.currentTargetLayerInterfaceP)
this.setRandomGeographicMapCellHistory(this.waypointPathsListP)

                                    }
                                

                                    }
                                
}


                @Throws(Exception::class)
            
    setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList: BasicArrayList){
    //var geographicMapCellPositionBasicArrayList = geographicMapCellPositionBasicArrayList
this.setCurrentPathGeographicMapCellPosition(SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
this.nextUnvisitedPathGeographicMapCellPosition= SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION
setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList)
}


                @Throws(Exception::class)
            
    processWaypoint(){

    var size: number = this.targetList!.size()!;
        
        


    
                        if(size > 0)
                        
                                    {
                                    
    var targetLayer: AdvancedRTSGameLayer = this.targetList!.get(0) as AdvancedRTSGameLayer;
        
        

processWaypoint(this.associatedAdvancedRTSGameLayer, this, targetLayer, size)

    
                        if(targetLayer!.isDestroyed())
                        
                                    {
                                    update(this.unitWaypointStrings!.WAYPOINT_DESTROYED_SHORT, this.basicColorFactory!.YELLOW)
this.removeWaypoint(targetLayer, this.unitWaypointStrings!.WAYPOINT_DESTROYED)

                                    }
                                
                        else {
                            
    var geographicMapCellPosition: GeographicMapCellPosition = associatedAdvancedRTSGameLayer!.getCurrentGeographicMapCellPosition()!;
        
        


    
                        if(this.isTrackingWaypoint())
                        
                                    {
                                    processWaypointTracked(this.associatedAdvancedRTSGameLayer, this)

    
                        if(this.visitIfAtMidPoint(geographicMapCellPosition))
                        
                                    {
                                    processWaypointTracked(this.associatedAdvancedRTSGameLayer, geographicMapCellPosition)

                                    }
                                

    
                        if(this.currentGeographicMapCellHistoryP!.isAllVisited2() && this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    
    var oldWaypointLayer: AdvancedRTSGameLayer = this.currentTargetLayerInterfaceP as AdvancedRTSGameLayer;
        
        

visit(this.associatedAdvancedRTSGameLayer)
update(this.unitWaypointStrings!.ALL_VISITED_SHORT, this.basicColorFactory!.GREEN)
this.removeWaypoint(this.currentTargetLayerInterfaceP as AdvancedRTSGameLayer, this.unitWaypointStrings!.ALL_VISITED)

                                    }
                                

                                    }
                                
                             else 
    
                        if(this.currentTargetLayerInterfaceP == 
                                    null
                                 || this.waypointOverridesAttacking)
                        
                                    {
                                    
    var list: BasicArrayList = targetLayer!.getWaypointBehavior()!.getWaypoint()!.getPathsListFromCacheOnly(geographicMapCellPosition)!;
        
        

this.setWaypointPathsList(list)

    
                        if(this.waypointPathsListP == 
                                    null
                                )
                        
                                    {
                                    this.waitingOnWaypointPath= true
update(this.unitWaypointStrings!.THINKING, this.basicColorFactory!.GREEN)
this.runWaypointPathTask(targetLayer)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.setWaypointPath(targetLayer)

                                    }
                                

                        }
                            

                                    }
                                
}


                @Throws(Exception::class)
            
    wander(){

    
                        if(this.currentGeographicMapCellHistoryP!.isAllVisited2())
                        
                                    {
                                    wander(this.associatedAdvancedRTSGameLayer)
update(this.unitWaypointStrings!.WANDERING, this.basicColorFactory!.RED)
clear()
add(this.associatedAdvancedRTSGameLayer!.getSurroundingGeographicMapCellPositionList())
this.setRandomGeographicMapCellHistory(wanderPathsList)

                                    }
                                
this.visitIfAtMidPoint(this.getCurrentPathGeographicMapCellPosition())
this.updateCurrentPathGeographicMapCellPosition()
trackTo(this.unitWaypointStrings!.NEXT_PATH_NODE)
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


                @Throws(Exception::class)
            
    processTargetList(){
this.targetWithoutCachedPathLayerInterface= CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER




                        for (
    var index: number = this.getPossibleTargetList()!.size() -1;
        
        
index >= 0; index--)
        {

    var layerInterface: AdvancedRTSGameLayer = this.getPossibleTargetList()!.get(index) as AdvancedRTSGameLayer;
        
        


    
                        if(layerInterface!.isDestroyed())
                        
                                    {
                                    remove(layerInterface)

                                    }
                                
                        else {
                            this.onEnemyMovement(layerInterface)

                        }
                            
}


    
                        if(this.targetWithoutCachedPathLayerInterface != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    this.waitingOnTargetPath= true
update(this.unitWaypointStrings!.THINKING_ABOUT_TARGET, this.basicColorFactory!.GREEN)
this.runWaypointPathTask(this.currentTargetLayerInterfaceP as AdvancedRTSGameLayer)

                                    }
                                
clear()
}


                @Throws(Exception::class)
            
    processTargeting(){

    
                        if(this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER && (this.isInSensorRange(this.currentTargetLayerInterfaceP, this.getCurrentTargetDistance()) || this.isTrackingWaypoint()))
                        
                                    {
                                    
    
                        if(this.currentTargetLayerInterfaceP!.isDestroyed())
                        
                                    {
                                    targetDestroyed(this.associatedAdvancedRTSGameLayer)
update(this.unitWaypointStrings!.KILL, this.basicColorFactory!.ORANGE)
this.clearTarget()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var dx: number = 0;
        
        


    var dy: number = 0;
        
        


    
                        if(this.isTrackingWaypoint())
                        
                                    {
                                    this.updateCurrentPathGeographicMapCellPosition()

    var point: GPoint = this.nextUnvisitedPathGeographicMapCellPosition!.getMidPoint()!;
        
        

dx= associatedAdvancedRTSGameLayer!.getXP() +associatedAdvancedRTSGameLayer!.getHalfWidth() -point.getX()
dy= associatedAdvancedRTSGameLayer!.getYP() +associatedAdvancedRTSGameLayer!.getHalfHeight() -point.getY()
processTargeting(this.associatedAdvancedRTSGameLayer, dx, dy)

                                    }
                                
                        else {
                            processTargetingNonWayPoint(this.associatedAdvancedRTSGameLayer, dx, dy)
dx= (this.associatedAdvancedRTSGameLayer!.getXP() +this.associatedAdvancedRTSGameLayer!.getHalfWidth()) -(this.currentTargetLayerInterfaceP!.getXP() +this.currentTargetLayerInterfaceP!.getHalfWidth())
dy= (this.associatedAdvancedRTSGameLayer!.getYP() +this.associatedAdvancedRTSGameLayer!.getHalfHeight()) -(this.currentTargetLayerInterfaceP!.getYP() +this.currentTargetLayerInterfaceP!.getHalfHeight())

                        }
                            
trackTo(dx, dy)

                                    }
                                
                        else {
                            
    
                        if(this.associatedAdvancedRTSGameLayer!.getParentLayer()!.isDestroyed())
                        
                                    {
                                    this.wander()

                                    }
                                
                        else {
                            
    
                        if(this.associatedAdvancedRTSGameLayer!.showMoreCaptionStates)
                        
                                    {
                                    update(this.unitWaypointStrings!.STOP, this.basicColorFactory!.YELLOW)

                                    }
                                
allStop()

                        }
                            

                        }
                            
}


    updateCurrentPathGeographicMapCellPosition(){
this.setLastPathGeographicMapCellPosition(this.getCurrentPathGeographicMapCellPosition())
this.setCurrentPathGeographicMapCellPosition(this.nextUnvisitedPathGeographicMapCellPosition)
this.nextUnvisitedPathGeographicMapCellPosition= this.currentGeographicMapCellHistoryP!.getFirstUnvisited()
this.afterNextUnvisitedPathGeographicMapCellPosition= this.currentGeographicMapCellHistoryP!.getAfterIfNotLast(this.nextUnvisitedPathGeographicMapCellPosition)

    
                        if(this.getCurrentPathGeographicMapCellPosition() != this.nextUnvisitedPathGeographicMapCellPosition)
                        
                                    {
                                    setStartTime()

                                    }
                                
}


                @Throws(Exception::class)
            
    setWaypointPath(waypointLayer: AdvancedRTSGameLayer){
    //var waypointLayer = waypointLayer

    
                        if(waypointPathsListP!.size() != 0)
                        
                                    {
                                    this.setCurrentTargetLayerInterface(waypointLayer)

    var MAX: number = Integer.MAX_VALUE;
        
        

this.setCurrentTargetDistance(MAX)
this.setRandomGeographicMapCellHistory(waypointPathsListP)

                                    }
                                
                        else {
                            visit(this.associatedAdvancedRTSGameLayer)
update(this.unitWaypointStrings!.ALREADY_THERE_SHORT, this.basicColorFactory!.YELLOW)
this.removeWaypoint(waypointLayer, this.unitWaypointStrings!.ALREADY_THERE)

                        }
                            
}


                @Throws(Exception::class)
            
    runWaypointPathTask(waypointLayer: AdvancedRTSGameLayer){
    //var waypointLayer = waypointLayer
setWaypointPathsList(runningWaypointPathList)

    
                        if(this.waypointPathRunnable!.isRunning())
                        
                                    {
                                    


                            throw Exception("Should never be running here")

                                    }
                                
setRunning(true)
setUnitLayer(this.associatedAdvancedRTSGameLayer)
setTargetLayer(waypointLayer)
runTask(this.waypointPathRunnable)
}


                @Throws(Exception::class)
            
    removeWaypoint(waypointLayer: RTSLayer, reason: string){
    //var waypointLayer = waypointLayer
    //var reason = reason
removeWaypoint(this.associatedAdvancedRTSGameLayer, this, waypointLayer, reason)
remove(waypointLayer)
removeWaypoint(this.associatedAdvancedRTSGameLayer, this, this.targetList)

    
                        if(this.currentTargetLayerInterfaceP == waypointLayer)
                        
                                    {
                                    removeWaypointClear(this.associatedAdvancedRTSGameLayer)
this.clearTarget()

                                    }
                                
}


                @Throws(Exception::class)
            
    public clearTarget(){
clearTarget(this.associatedAdvancedRTSGameLayer)
this.setCurrentTargetLayerInterface(CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
this.setTrackingWaypoint(false)

    var MAX: number = Integer.MAX_VALUE;
        
        

this.setCurrentTargetDistance(MAX)
fireEvent(this.associatedAdvancedRTSGameLayer!.getTrackingEvent())
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
                                    append(TARGET_LAYER)
append(commonSeps!.SPACE)
append(this.currentTargetLayerInterfaceP!.getName())
append(" with ")
append(TARGET_DISTANCE)
append(commonSeps!.SPACE)
appendint(getCurrentTargetDistance())

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


                @Throws(Exception::class)
            
    addWaypointFromUser(advancedRTSGameLayer: AdvancedRTSGameLayer){
    //var advancedRTSGameLayer = advancedRTSGameLayer

    
                        if(advancedRTSGameLayer!.isDestroyed())
                        
                                    {
                                    


                            throw Exception("Trying to add a dead: " +advancedRTSGameLayer)

                                    }
                                
addWaypointFromUser(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer)
clear()
add(advancedRTSGameLayer)
this.clearTarget()
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
                                    clear()
clear()



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
        
        

put(commonStrings!.EXCEPTION, this, "visit", e)



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
        
        

                @Throws(Exception::class)
            
    public addBuildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition){
    //var allbinaryLayer = allbinaryLayer
    //var cellPosition = cellPosition

    
                        if(!this.buildingSteeringVisitor!.getList()!.contains(allbinaryLayer))
                        
                                    {
                                    add(allbinaryLayer)
add(cellPosition)

                                    }
                                

    
                        if(!this.getSteeringVisitorList()!.contains(this.buildingSteeringVisitor))
                        
                                    {
                                    add(this.buildingSteeringVisitor)

                                    }
                                
}


                @Throws(Exception::class)
            
    buildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition): boolean{
    //var allbinaryLayer = allbinaryLayer
    //var cellPosition = cellPosition



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.associatedAdvancedRTSGameLayer!.buildingChase(allbinaryLayer, cellPosition);
    
}


}
                
            

