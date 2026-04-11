
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
        



import { Group } from "../../../../../../org/allbinary/game/identification/Group.js";

    

export class WaypointEventHandlerFactory
            extends Object
         {
        

    private static readonly eventHandlerArray: WaypointEventHandler[] = 
                                                        [
                                                            WaypointEventHandler(),WaypointEventHandler(),WaypointEventHandler(),WaypointEventHandler(),WaypointEventHandler(),WaypointEventHandler(),WaypointEventHandler(),WaypointEventHandler(),WaypointEventHandler(),WaypointEventHandler()
                                                        ];
        
        

    public static getInstance(groupInterface: Group): WaypointEventHandler{
    //var groupInterface = groupInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return eventHandlerArray[groupInterface!.getGroupId();

                        .toInt()]!;
    
}


    public static removeAll(){




                        for (
    var index: number = eventHandlerArray!.length -1;
        
        
index >= 0; index--)
        {
eventHandlerArray[index]!.removeAllListeners();
    
}

}


}
                
            

