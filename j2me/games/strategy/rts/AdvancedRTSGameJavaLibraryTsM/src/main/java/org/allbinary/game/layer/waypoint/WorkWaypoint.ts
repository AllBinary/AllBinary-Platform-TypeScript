
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { GeologicalGeographicMapCellPosition } from "../../../../../org/allbinary/game/layer/geological/resources/GeologicalGeographicMapCellPosition.js";

    
import { GeologicalResource } from "../../../../../org/allbinary/game/layer/geological/resources/GeologicalResource.js";

    
import { UnitLayer } from "../../../../../org/allbinary/game/layer/unit/UnitLayer.js";

    
import { UnitWaypointBehavior } from "../../../../../org/allbinary/game/layer/unit/UnitWaypointBehavior.js";

    
import { WorkSound } from "../../../../../org/allbinary/media/audio/WorkSound.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Waypoint } from "./Waypoint.js";

export class WorkWaypoint extends Waypoint {
        

    public static readonly ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(25)!;
        
        
public constructor (ownerLayer: PathFindingLayerInterface){
            super(ownerLayer, WorkSound.getInstance());
                        //var ownerLayer = ownerLayer


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public visit(unitLayer: UnitLayer){
    //var unitLayer = unitLayer

                        if(unitLayer!.getGroupInterface()[0] != this.ownerLayer!.getGroupInterface()[0])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var size: number = this.getConnectedWaypointList()!.size()!;
        
        
;
    

                        if(size > 0)
                        
                                    {
                                    
    var occupyList: BasicArrayList = this.ownerLayer!.getGeographicMapCellPositionArea()!.getOccupyingGeographicMapCellPositionList()!;
        
        
;
    

    var outOfResources: boolean = true;
        
        
;
    

    var geologicalGeographicMapCellPosition: GeologicalGeographicMapCellPosition
;
    

    var geologicalResource: GeologicalResource
;
    




                        for (
    var index: number = occupyList!.size()!;
        
        
--index >= 0; )
        {
geologicalGeographicMapCellPosition= occupyList!.get(index); as GeologicalGeographicMapCellPosition;
    
geologicalResource= geologicalGeographicMapCellPosition!.getGeologicalResource();
    

                        if(geologicalResource!.getTotal() >= 1)
                        
                                    {
                                    outOfResources= false;
    

    var maxResourceLoad: number = unitLayer!.getMaxResourceLoad();;
        
        
;
    
geologicalResource!.remove(maxResourceLoad);
    
unitLayer!.setLoad(maxResourceLoad);
    

                                    }
                                
}


    var waypointInfoHudPaintable: WaypointInfoHudPaintable = this.ownerLayer!.getHudPaintable(); as WaypointInfoHudPaintable;
        
        
;
    

                        if(this.ownerLayer == waypointInfoHudPaintable!.getRtsLayer())
                        
                                    {
                                    waypointInfoHudPaintable!.updateSelectionInfo();
    

                                    }
                                

                        if(!outOfResources)
                        
                                    {
                                    
    var unitWaypointBehavior: UnitWaypointBehavior = unitLayer!.getWaypointBehavior(); as UnitWaypointBehavior;
        
        
;
    

    var rtsLayer: RTSLayer
;
    

        while(this.getConnectedWaypointList()!.size() > 0)
        {
rtsLayer= this.getConnectedWaypointList()!.get(0); as RTSLayer;
    

                        if(rtsLayer!.isDestroyed())
                        
                                    {
                                    this.getConnectedWaypointList()!.remove(rtsLayer);
    

                                    }
                                
                        else {
                            unitWaypointBehavior!.insertWaypoint(0, rtsLayer);
    
break;

                    

                        }
                            
}


                                    }
                                

                                    }
                                
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 2;
    
}


}
                
            

