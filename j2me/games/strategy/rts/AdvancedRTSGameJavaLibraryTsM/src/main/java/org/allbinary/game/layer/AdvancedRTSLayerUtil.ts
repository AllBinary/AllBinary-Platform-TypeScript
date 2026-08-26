
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *    Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';
        
//not game specific package import { Hashtable } from '../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { WorkWaypoint } from '../../../../org/allbinary/game/layer/waypoint/WorkWaypoint.js';
      const WorkWaypoint = globalThis.org.allbinary.game.layer.waypoint.WorkWaypoint;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { BaseRaceTrackGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/racetrack/BaseRaceTrackGeographicMap.js';
      const BaseRaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BaseRaceTrackGeographicMap;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSLayerUtil } from './RTSLayerUtil.js';

export class AdvancedRTSLayerUtil
            extends Object
         {
        

    private static readonly instance: AdvancedRTSLayerUtil = new AdvancedRTSLayerUtil();

    public static getInstance(): AdvancedRTSLayerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AdvancedRTSLayerUtil.instance;
    
}


    public createFakeRTSLayerHashtable(baseRaceTrackGeographicMap: BaseRaceTrackGeographicMap): Hashtable<any, any>{

    var hashtable: Hashtable<any, any> = RTSLayerUtil.getInstance()!.createFakeRTSLayerHashtable(baseRaceTrackGeographicMap)!;;
    
hashtable.put(WorkWaypoint.ID, SmallIntegerSingletonFactory.getInstance()!.getAt(50));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}
                
            

