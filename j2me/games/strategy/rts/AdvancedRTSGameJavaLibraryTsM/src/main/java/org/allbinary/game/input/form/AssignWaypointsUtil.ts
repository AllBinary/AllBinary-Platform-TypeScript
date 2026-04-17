
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
        



import { AdvancedRTSGameLayer } from "../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js";

    
import { NullPathFindingLayer } from "../../../../../org/allbinary/game/layer/NullPathFindingLayer.js";

    
import { NullRTSLayer } from "../../../../../org/allbinary/game/layer/NullRTSLayer.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { RTSLayerEvent } from "../../../../../org/allbinary/game/layer/RTSLayerEvent.js";

    
import { UnitLayer } from "../../../../../org/allbinary/game/layer/unit/UnitLayer.js";

    
import { UnitWaypointBehavior } from "../../../../../org/allbinary/game/layer/unit/UnitWaypointBehavior.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PrimaryWaypointHelper } from "./PrimaryWaypointHelper.js";

export class AssignWaypointsUtil
            extends Object
         {
        

    private static readonly instance: AssignWaypointsUtil = new AssignWaypointsUtil();
        
        

    public static getInstance(): AssignWaypointsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly WAYPOINT_EVENT: RTSLayerEvent = new RTSLayerEvent(NullPathFindingLayer.NULL_PATH_FINDING_LAYER);
        
        

    public set(unitLayer: UnitLayer, ownerAdvancedRTSGameLayer: AdvancedRTSGameLayer){
var unitLayer = unitLayer
var ownerAdvancedRTSGameLayer = ownerAdvancedRTSGameLayer

        try {
            
    var list: BasicArrayList = ownerAdvancedRTSGameLayer!.getWaypointBehavior()!.getOwnedWaypointList()!;
        
        
;
    

    var unitWaypointBehavior: UnitWaypointBehavior = unitLayer!.getWaypointBehavior();

                         as UnitWaypointBehavior;
        
        
;
    




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var waypointLayer: RTSLayer = list.get(index);

                         as RTSLayer;
        
        
;
    
WAYPOINT_EVENT.setRtsLayer(waypointLayer);
    
unitWaypointBehavior!.onWaypointEvent(WAYPOINT_EVENT);
    
}


    var waypointLayer: PathFindingLayerInterface = PrimaryWaypointHelper.getInstance()!.getWaypointLayer()!;
        
        
;
    

                        if(waypointLayer != NullPathFindingLayer.NULL_PATH_FINDING_LAYER)
                        
                                    {
                                    WAYPOINT_EVENT.setRtsLayer(waypointLayer);
    
unitWaypointBehavior!.onWaypointEvent(WAYPOINT_EVENT);
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "set", e);
    
}

}


}
                
            

