
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { AdvancedRTSGameLayer } from '../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
      //not GWT import const AdvancedRTSGameLayer = globalThis.org.allbinary.game.layer.AdvancedRTSGameLayer;

      
import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
      //not GWT import const NullPathFindingLayer = globalThis.org.allbinary.game.layer.NullPathFindingLayer;

      
import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
      //not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

      
import { RTSLayer } from '../../../../../org/allbinary/game/layer/RTSLayer.js';
      //not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;

      
import { RTSLayerEvent } from '../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
      //not GWT import const RTSLayerEvent = globalThis.org.allbinary.game.layer.RTSLayerEvent;

      
import { UnitLayer } from '../../../../../org/allbinary/game/layer/unit/UnitLayer.js';
      //not GWT import const UnitLayer = globalThis.org.allbinary.game.layer.unit.UnitLayer;

      
import { UnitWaypointBehavior } from '../../../../../org/allbinary/game/layer/unit/UnitWaypointBehavior.js';
      //not GWT import const UnitWaypointBehavior = globalThis.org.allbinary.game.layer.unit.UnitWaypointBehavior;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PrimaryWaypointHelper } from './PrimaryWaypointHelper.js';

export class AssignWaypointsUtil
            extends Object
         {
        

    private static readonly instance: AssignWaypointsUtil = new AssignWaypointsUtil();

    public static getInstance(): AssignWaypointsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AssignWaypointsUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly WAYPOINT_EVENT: RTSLayerEvent = new RTSLayerEvent(NullPathFindingLayer.NULL_PATH_FINDING_LAYER);

    public set(unitLayer: UnitLayer, ownerAdvancedRTSGameLayer: AdvancedRTSGameLayer){

        try {
            
    var list: BasicArrayList = ownerAdvancedRTSGameLayer!.getWaypointBehavior()!.getOwnedWaypointList()!;;
    

    var unitWaypointBehavior: UnitWaypointBehavior = unitLayer!.getWaypointBehavior() as UnitWaypointBehavior;;
    




                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {

    var waypointLayer: RTSLayer = list.get(index) as RTSLayer;;
    
this.WAYPOINT_EVENT.setRtsLayer(waypointLayer);
    
unitWaypointBehavior!.onWaypointEvent(this.WAYPOINT_EVENT);
    
}


    var waypointLayer: PathFindingLayerInterface = PrimaryWaypointHelper.getInstance()!.getWaypointLayer()!;;
    

                        if(waypointLayer != NullPathFindingLayer.NULL_PATH_FINDING_LAYER)
                        
                                    {
                                    this.WAYPOINT_EVENT.setRtsLayer(waypointLayer);
    
unitWaypointBehavior!.onWaypointEvent(this.WAYPOINT_EVENT);
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "set", e);
    
}

}


}



