
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    

export class WaypointPathRunnable extends WaypointPathRunnableBase {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            }


    public run(){

        try {
            start(pathFindingLayer)

    var waypointBehavior: WaypointBehaviorBase = pathFindingLayer!.getWaypointBehavior()!;
        
        


    var geographicMapCellPosition: GeographicMapCellPosition = pathFindingLayer!.getCurrentGeographicMapCellPosition()!;
        
        


    
                        if(geographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("Should never be running here")

                                    }
                                
setWaypointPathsList(this.targetPathFindingLayer!.getWaypointBehavior()!.getWaypoint()!.getPathsList(geographicMapCellPosition))
end(pathFindingLayer)
sleep(15.toLong() +(this.priorityP *2))
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
this.setRunning(false)
}

}


    public isDone(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

