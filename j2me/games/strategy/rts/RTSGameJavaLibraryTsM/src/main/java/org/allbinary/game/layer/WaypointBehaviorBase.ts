
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

    
import { TickableInterface } from "../../../../org/allbinary/game/tick/TickableInterface.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { GeographicMapCellHistory } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PathFindingLayerInterface } from "./PathFindingLayerInterface.js";

export class WaypointBehaviorBase
            extends Object
         implements TickableInterface {
        

    private readonly ownedWaypointList: BasicArrayList

    waypointOverridesAttacking: boolean = true;
        
        

    private waypoint: WaypointBase = WaypointBase.NULL_WAYPOINT_BASE;
        
        
public constructor (){

            super();
            this.ownedWaypointList= new BasicArrayList(1);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.constructor.name.toString()!;

                        ;
    
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
                        return ownedWaypointList;
    
}


    public getWaypoint(): WaypointBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return waypoint;
    
}


    public setWaypoint(waypoint: WaypointBase){
    //var waypoint = waypoint
this.waypoint= waypoint;
    
}


    public getSteeringVisitorList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return steeringVisitorList;
    
}


    public getMovementLogicAsString(): string{



                            throw new RuntimeException()
}


    public isWaypointListEmptyOrOnlyTargets(): boolean{



                            throw new RuntimeException()
}


    public isInSensorRange(layerInterface: CollidableDestroyableDamageableLayer, targetDistance: number): boolean{
    //var layerInterface = layerInterface
    //var targetDistance = targetDistance



                            throw new RuntimeException()
}


    public getCurrentTargetLayerInterface(): CollidableDestroyableDamageableLayer{



                            throw new RuntimeException()
}


    public getCurrentTargetingStateString(): string{



                            throw new RuntimeException()
}


    public isTrackingWaypoint(): boolean{



                            throw new RuntimeException()
}


    public getCurrentPathGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw new RuntimeException()
}


    public getCurrentGeographicMapCellHistory(): GeographicMapCellHistory{



                            throw new RuntimeException()
}


    public isWaypointOverridesAttacking(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return waypointOverridesAttacking;
    
}


    public getNextUnvisitedPathGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw new RuntimeException()
}


    public needToMove(): boolean{



                            throw new RuntimeException()
}


    public setWaypointPathsList(waypointPathsList: BasicArrayList){
    //var waypointPathsList = waypointPathsList



                            throw new RuntimeException()
}


    public getWaypointPathsList(): BasicArrayList{



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public setTarget(layerInterface: PathFindingLayerInterface){
    //var layerInterface = layerInterface



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public setTarget(layerInterface: PathFindingLayerInterface, anotherTargetDistance: number){
    //var layerInterface = layerInterface
    //var anotherTargetDistance = anotherTargetDistance



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public clearTarget(){



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public updatePathOnTargetMove(reason: string){
    //var reason = reason
}


    private readonly steeringVisitorList: BasicArrayList = new BasicArrayList();
        
        

}
                
            

