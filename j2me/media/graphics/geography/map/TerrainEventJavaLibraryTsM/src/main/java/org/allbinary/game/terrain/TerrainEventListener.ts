
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../java/lang/Object.js';
        
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TerrainEventListenerInterface } from './TerrainEventListenerInterface.js';
//not GWT import - same folder const TerrainEventListenerInterface = globalThis.org.allbinary.game.terrain.TerrainEventListenerInterface;

                import { TerrainEvent } from './TerrainEvent.js';
//not GWT import - same folder const TerrainEvent = globalThis.org.allbinary.game.terrain.TerrainEvent;

                
export class TerrainEventListener
            extends Object
         implements TerrainEventListenerInterface {
        

    private readonly list: BasicArrayList = new BasicArrayListD();

    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onTerrainEvent(terrainEvent: TerrainEvent){
this.list.clear();
    
this.list.add(terrainEvent);
    
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list;
    
}


}



