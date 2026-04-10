
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { WorkWaypoint } from "../../../../org/allbinary/game/layer/waypoint/WorkWaypoint.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { BaseRaceTrackGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/racetrack/BaseRaceTrackGeographicMap.js";

    

export class AdvancedRTSLayerUtil
            extends Object
         {
        

    private static readonly instance: AdvancedRTSLayerUtil = new AdvancedRTSLayerUtil();
        
        

    public static getInstance(): AdvancedRTSLayerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public createFakeRTSLayerHashtable(baseRaceTrackGeographicMap: BaseRaceTrackGeographicMap): Hashtable<Any, Any>{
    //var baseRaceTrackGeographicMap = baseRaceTrackGeographicMap

    var hashtable: Hashtable<Any, Any> = RTSLayerUtil.getInstance()!.createFakeRTSLayerHashtable(baseRaceTrackGeographicMap)!;
        
        

hashtable.put(WorkWaypoint.ID, SmallIntegerSingletonFactory.getInstance()!.getInstance(50))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}
                
            

