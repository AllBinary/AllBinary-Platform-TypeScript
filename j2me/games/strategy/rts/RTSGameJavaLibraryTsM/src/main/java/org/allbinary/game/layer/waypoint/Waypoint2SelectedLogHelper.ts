
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { WaypointBehaviorBase } from "../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { PositionStrings } from "../../../../../org/allbinary/math/PositionStrings.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class Waypoint2SelectedLogHelper extends Waypoint2LogHelper {
        

    private static readonly instance: Waypoint2SelectedLogHelper = new Waypoint2SelectedLogHelper();
        
        

    public static getInstance(): Waypoint2LogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private readonly positionStrings: PositionStrings = PositionStrings.getInstance()!;
        
        

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    private readonly ENEMY_POSSIBLE_TARGET: string = " Enemy Possible Target: ";
        
        

    private readonly CLOSE_RANGE: string = "closeRange: ";
        
        

    private readonly SENSOR_RANGE: string = " sensorRange: ";
        
        

    private readonly ONLY_TARGETS: string = " Only Targets: ";
        
        

    private readonly SHORTER_THAN_CURRENT_TARGET_DISTANCE: string = " isShorterThanCurrentTargetDistance: ";
        
        

    private readonly CURRENT_TARGET_DESTROYED: string = " isCurrentTargetDestroyed: ";
        
        

    private readonly CURRENT_TARGET_NOT_AVAILABLE: string = " isCurrentTargetNotAvailable: ";
        
        

    private readonly PROCESS_POSSIBLE_TARGET: string = "selected: processPossibleTarget1";
        
        

    public initRange(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, closeRange: number, sensorRange: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var closeRange = closeRange
    //var sensorRange = sensorRange

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(CLOSE_RANGE);
    
stringBuffer!.appendint(closeRange);
    
stringBuffer!.append(SENSOR_RANGE);
    
stringBuffer!.appendint(sensorRange);
    
logUtil!.put(stringBuffer!.toString(), this, "selected: initRange");
    
}


    public processPossibleTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, waypointBehaviorBase: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number, isShorterThanCurrentTargetDistance: boolean, isCurrentTargetDestroyed: boolean){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var waypointBehaviorBase = waypointBehaviorBase
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance
    //var isShorterThanCurrentTargetDistance = isShorterThanCurrentTargetDistance
    //var isCurrentTargetDestroyed = isCurrentTargetDestroyed

                        if(waypointBehaviorBase!.isWaypointListEmptyOrOnlyTargets() && waypointBehaviorBase!.isInSensorRange(layerInterface as CollidableDestroyableDamageableLayer, anotherTargetDistance))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(ONLY_TARGETS);
    
stringBuffer!.appendboolean(waypointBehaviorBase!.isWaypointListEmptyOrOnlyTargets());
    
stringBuffer!.append(SHORTER_THAN_CURRENT_TARGET_DISTANCE);
    
stringBuffer!.appendboolean(isShorterThanCurrentTargetDistance);
    
stringBuffer!.append(CURRENT_TARGET_DESTROYED);
    
stringBuffer!.appendboolean(isCurrentTargetDestroyed);
    
stringBuffer!.append(CURRENT_TARGET_NOT_AVAILABLE);
    
stringBuffer!.appendboolean((waypointBehaviorBase!.getCurrentTargetLayerInterface() == 
                                    null
                                ));
    
logUtil!.put(stringBuffer!.toString(), this, PROCESS_POSSIBLE_TARGET);
    

                                    }
                                
}


    public processPossibleTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, waypointBehaviorBase: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var waypointBehaviorBase = waypointBehaviorBase
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(waypointBehaviorBase!.getCurrentTargetingStateString());
    
stringBuffer!.append(ENEMY_POSSIBLE_TARGET);
    
stringBuffer!.append(layerInterface!.getName());
    
stringBuffer!.append(" anotherTargetDistance: ");
    
stringBuffer!.appendint(anotherTargetDistance);
    
logUtil!.put(stringBuffer!.toString(), this, "selected: processPossibleTarget2");
    
}


    public processPossibleTargetCloser(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, waypointBehaviorBase: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var waypointBehaviorBase = waypointBehaviorBase
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(waypointBehaviorBase!.getCurrentTargetingStateString());
    
stringBuffer!.append(ENEMY_POSSIBLE_TARGET);
    
stringBuffer!.append(layerInterface!.getName());
    
stringBuffer!.append(" anotherTargetDistance: ");
    
stringBuffer!.appendint(anotherTargetDistance);
    
logUtil!.put(stringBuffer!.toString(), this, "selected: processPossibleTarget3");
    
}


    public setTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, waypointBehaviorBase: WaypointBehaviorBase, layerInterface: PathFindingLayerInterface, anotherTargetDistance: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var waypointBehaviorBase = waypointBehaviorBase
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(waypointBehaviorBase!.getName());
    
stringBuffer!.append(" targeting: ");
    
stringBuffer!.append(layerInterface!.getName());
    
stringBuffer!.append(" at: ");
    
stringBuffer!.appendint(anotherTargetDistance);
    
stringBuffer!.append(" instead of: ");
    
stringBuffer!.append(waypointBehaviorBase!.getCurrentTargetingStateString());
    
logUtil!.put(stringBuffer!.toString(), this, "selected: setTarget");
    
}


    public setTargetPath(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
logUtil!.put("Target Destroyed", this, "selected: setTargetPath");
    
}


    public setTargetPath(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, waypointBehaviorBase: WaypointBehaviorBase){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var waypointBehaviorBase = waypointBehaviorBase

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(" Set Path To Target: ");
    
stringBuffer!.append(waypointBehaviorBase!.getCurrentTargetLayerInterface()!.getName());
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(stringUtil!.toString(waypointBehaviorBase!.getCurrentTargetLayerInterface()));
    
logUtil!.put(stringBuffer!.toString(), this, "selected: setTargetPath");
    
}


    public processWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, waypointBehaviorBase: WaypointBehaviorBase, targetLayer: PathFindingLayerInterface, size: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var waypointBehaviorBase = waypointBehaviorBase
    //var targetLayer = targetLayer
    //var size = size

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(" Size: ");
    
stringBuffer!.appendint(size);
    
stringBuffer!.append(" Waypoint: ");
    
stringBuffer!.append(targetLayer!.getName());
    
stringBuffer!.append(" Target: ");
    
stringBuffer!.append(stringUtil!.toString(waypointBehaviorBase!.getCurrentTargetLayerInterface()));
    
stringBuffer!.append(" isTrackingWaypoint: ");
    
stringBuffer!.appendboolean(waypointBehaviorBase!.isTrackingWaypoint());
    
stringBuffer!.append(" WaypointOverridesAttacking: ");
    
stringBuffer!.appendboolean(waypointBehaviorBase!.isWaypointOverridesAttacking());
    
logUtil!.put(stringBuffer!.toString(), this, "selected: processWaypoint");
    
}


    public processWaypointTracked(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, waypointBehaviorBase: WaypointBehaviorBase){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var waypointBehaviorBase = waypointBehaviorBase

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(" currentPathGeographicMapCellPosition: ");
    
stringBuffer!.append(stringUtil!.toString(waypointBehaviorBase!.getCurrentPathGeographicMapCellPosition()));
    
stringBuffer!.append(" nextUnvisitedPathGeographicMapCellPosition: ");
    
stringBuffer!.append(stringUtil!.toString(waypointBehaviorBase!.getNextUnvisitedPathGeographicMapCellPosition()));
    
stringBuffer!.append(" Tracked: ");
    
stringBuffer!.append(stringUtil!.toString(waypointBehaviorBase!.getCurrentGeographicMapCellHistory()!.getTracked()));
    
logUtil!.put(stringBuffer!.toString(), this, "selected: processWaypoint");
    
}


    public processWaypointTracked(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, geographicMapCellPosition: GeographicMapCellPosition){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var geographicMapCellPosition = geographicMapCellPosition

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(" Visited: ");
    
stringBuffer!.append(stringUtil!.toString(geographicMapCellPosition));
    
logUtil!.put(stringBuffer!.toString(), this, "selected: processWaypoint");
    
}


    public processWaypointTrackedWithoutProgress(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, reason: string){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var reason = reason
logUtil!.put(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(reason)!.toString(), this, "turnTo");
    
}


    public wander(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
logUtil!.put(associatedAdvancedRTSGameLayer!.getName(), this, "wander");
    
}


    public targetDestroyed(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
logUtil!.put(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" Target Destroyed")!.toString(), this, "selected: processTargeting");
    
}


    public processTargeting(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, dx: number, dy: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var dx = dx
    //var dy = dy

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.DX_LABEL);
    
stringBuffer!.appendint(dx);
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.DY_LABEL);
    
stringBuffer!.appendint(dy);
    
logUtil!.put(stringBuffer!.toString(), this, "selected: processTargeting");
    
}


    public processTargetingNonWayPoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, dx: number, dy: number){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var dx = dx
    //var dy = dy

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(" Targeting Non Waypoint ");
    
stringBuffer!.append(positionStrings!.DX_LABEL);
    
stringBuffer!.appendint(dx);
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.DY_LABEL);
    
stringBuffer!.appendint(dy);
    
logUtil!.put(stringBuffer!.toString(), this, "selected: processTargeting");
    
}


    public removeWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, waypointLayer: PathFindingLayerInterface, reason: string){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior2 = unitWaypointBehavior2
    //var waypointLayer = waypointLayer
    //var reason = reason

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(unitWaypointBehavior2!.getName());
    
stringBuffer!.append(" remove: ");
    
stringBuffer!.append(waypointLayer!.getName());
    
stringBuffer!.append(" because: ");
    
stringBuffer!.append(reason);
    
logUtil!.put(stringBuffer!.toString(), this, "selected: removeWaypoint");
    
}


    public removeWaypoint(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, unitWaypointBehavior2: WaypointBehaviorBase, list: BasicArrayList){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var unitWaypointBehavior2 = unitWaypointBehavior2
    //var list = list

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(unitWaypointBehavior2!.getName());
    
stringBuffer!.append(" Waypoints: ");
    
stringBuffer!.append(stringUtil!.toString(list));
    
logUtil!.put(stringBuffer!.toString(), this, "selected: removeWaypoint");
    
}


    public removeWaypointClear(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
logUtil!.put(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" Clearing removed waypoint")!.toString(), this, "selected: removeWaypoint");
    
}


    public clearTarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
logUtil!.put(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" Cleared Target")!.toString(), this, "selected: clearTarget");
    
}


    public addWaypointFromUser(associatedAdvancedRTSGameLayer: PathFindingLayerInterface, advancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
    //var advancedRTSGameLayer = advancedRTSGameLayer

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(associatedAdvancedRTSGameLayer!.getName());
    
stringBuffer!.append(" Adding Waypoint to Selected: ");
    
stringBuffer!.append(advancedRTSGameLayer!.getName());
    

                        if(advancedRTSGameLayer!.getParentLayer() != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(" With Parent: ");
    
stringBuffer!.append(advancedRTSGameLayer!.getParentLayer()!.getName());
    

                                    }
                                
logUtil!.put(stringBuffer!.toString(), this, "selected: onWaypointEvent");
    
}


    public targetMovedSoRetarget(associatedAdvancedRTSGameLayer: PathFindingLayerInterface){
    //var associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer
logUtil!.put(new StringMaker().
                            append(associatedAdvancedRTSGameLayer!.getName())!.append(" - target moved so retargeting")!.toString(), this, "turnTo");
    
}


}
                
            

