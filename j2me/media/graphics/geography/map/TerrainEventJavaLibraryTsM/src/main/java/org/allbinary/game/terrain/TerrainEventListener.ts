
        /* Generated Code Do Not Modify */
        



import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TerrainEventListenerInterface } from "./TerrainEventListenerInterface.js";

import { TerrainEvent } from "./TerrainEvent.js";

export class TerrainEventListener
            extends Object
         implements TerrainEventListenerInterface {
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onTerrainEvent(terrainEvent: TerrainEvent){
var terrainEvent = terrainEvent
this.list.clear();
    
this.list.add(terrainEvent);
    
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

