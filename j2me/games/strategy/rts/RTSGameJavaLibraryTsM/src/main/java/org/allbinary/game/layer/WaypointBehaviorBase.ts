
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
        



import { CollidableDestroyableDamageableLayer } from "../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { WaypointBase } from "../../../../org/allbinary/game/layer/waypoint/WaypointBase.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../org/allbinary/util/BasicArrayListD.js";

    
import { TickableInterface } from "../../../../org/allbinary/game/tick/TickableInterface.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { GeographicMapCellHistory } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicArrayListS } from "../../../../org/allbinary/util/BasicArrayListS.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RuntimeException } from "./RuntimeException.js";

import { PathFindingLayerInterface } from "./PathFindingLayerInterface.js";

export class WaypointBehaviorBase
            extends Object
         implements TickableInterface {
        

    private readonly ownedWaypointList: BasicArrayList

    waypointOverridesAttacking: boolean = true;

    private waypoint: WaypointBase = WaypointBase.NULL_WAYPOINT_BASE;
public constructor (){

            super();
        this.ownedWaypointList= new BasicArrayListS(1);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.constructor.name.toString()!;;
    
}


    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
    //var allBinaryLayerManager = allBinaryLayerManager
}


    public getOwnedWaypointList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ownedWaypointList;
    
}


    public getWaypoint(): WaypointBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.waypoint;
    
}


    public setWaypoint(waypoint: WaypointBase){
    //var waypoint = waypoint
this.waypoint= waypoint;
    
}


    public getSteeringVisitorList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.steeringVisitorList;
    
}


    public getMovementLogicAsString(): string{



                            throw Error();
                    
}


    public isWaypointListEmptyOrOnlyTargets(): boolean{



                            throw Error();
                    
}


    public isInSensorRange(layerInterface: CollidableDestroyableDamageableLayer, targetDistance: number): boolean{
    //var layerInterface = layerInterface
    //var targetDistance = targetDistance



                            throw Error();
                    
}


    public getCurrentTargetLayerInterface(): CollidableDestroyableDamageableLayer{



                            throw Error();
                    
}


    public getCurrentTargetingStateString(): string{



                            throw Error();
                    
}


    public isTrackingWaypoint(): boolean{



                            throw Error();
                    
}


    public getCurrentPathGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw Error();
                    
}


    public getCurrentGeographicMapCellHistory(): GeographicMapCellHistory{



                            throw Error();
                    
}


    public isWaypointOverridesAttacking(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.waypointOverridesAttacking;
    
}


    public getNextUnvisitedPathGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw Error();
                    
}


    public needToMove(): boolean{



                            throw Error();
                    
}


    public setWaypointPathsList(waypointPathsList: BasicArrayList){
    //var waypointPathsList = waypointPathsList



                            throw Error();
                    
}


    public getWaypointPathsList(): BasicArrayList{



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public setTarget(layerInterface: PathFindingLayerInterface){
    //var layerInterface = layerInterface



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public setTargetWithDistance(layerInterface: PathFindingLayerInterface, anotherTargetDistance: number){
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public clearTarget(){



                            throw Error();
                    
}


                //@Throws(Error::class)
            
    public updatePathOnTargetMove(reason: string){
    //var reason = reason
}


    private readonly steeringVisitorList: BasicArrayList = new BasicArrayListD();

}
                
            

