
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
        



import { NullPathFindingLayer } from "../../../../../org/allbinary/game/layer/NullPathFindingLayer.js";

    
import { NullRTSLayer } from "../../../../../org/allbinary/game/layer/NullRTSLayer.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { WaypointLayer } from "../../../../../org/allbinary/game/layer/waypoint/WaypointLayer.js";

    

export class PrimaryWaypointHelper
            extends Object
         {
        

    private static readonly instance: PrimaryWaypointHelper = new PrimaryWaypointHelper();
        
        

    public static getInstance(): PrimaryWaypointHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private waypointLayer: PathFindingLayerInterface = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        
        
private constructor (){

            super();
            }


    public getWaypointLayer(): PathFindingLayerInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return waypointLayer;
    
}


    public setWaypointLayer(waypointLayer: WaypointLayer){
var waypointLayer = waypointLayer
this.waypointLayer= waypointLayer
}


}
                
            

