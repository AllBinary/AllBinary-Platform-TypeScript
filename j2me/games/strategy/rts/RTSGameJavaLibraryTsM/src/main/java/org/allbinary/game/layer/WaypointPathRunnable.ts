
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
        



            import { Object } from "../../../../java/lang/Object.js";


        
            import { Thread } from "../../../../java/lang/Thread.js";
        
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WaypointPathRunnableBase } from "./WaypointPathRunnableBase.js";
import { WaypointBehaviorBase } from "./WaypointBehaviorBase.js";

export class WaypointPathRunnable extends WaypointPathRunnableBase {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
public constructor (){

            super();
        }


    public run(){

        try {
            pathFindingLayer!.getWaypointRunnableLogHelper()!.start(pathFindingLayer);
    

    var waypointBehavior: WaypointBehaviorBase = pathFindingLayer!.getWaypointBehavior()!;
;
    

    var geographicMapCellPosition: GeographicMapCellPosition = pathFindingLayer!.getCurrentGeographicMapCellPosition()!;
;
    

                        if(geographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("Should never be running here");
                    

                                    }
                                
waypointBehavior!.setWaypointPathsList(this.targetPathFindingLayer!.getWaypointBehavior()!.getWaypoint()!.getPathsListRunnable(geographicMapCellPosition));
    
pathFindingLayer!.getWaypointRunnableLogHelper()!.end(pathFindingLayer);
    
Thread.sleep(15 +(this.priorityP *2));
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
this.setRunning(false);
    
}

}


    public isDone(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

