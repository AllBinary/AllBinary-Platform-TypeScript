
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventListenerInterface } from '../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TerrainEventListener } from './TerrainEventListener.js';
//not GWT import - same folder const TerrainEventListener = globalThis.org.allbinary.game.terrain.TerrainEventListener;

                import { TerrainEvent } from './TerrainEvent.js';
//not GWT import - same folder const TerrainEvent = globalThis.org.allbinary.game.terrain.TerrainEvent;

                import { TerrainEventListenerInterface } from './TerrainEventListenerInterface.js';
//not GWT import - same folder const TerrainEventListenerInterface = globalThis.org.allbinary.game.terrain.TerrainEventListenerInterface;

                
export class TerrainEventHandler extends BasicEventHandler {
        

    private static hashtable: ABHashtable = StdUtil.getInstance()!.NULL_TABLE;

    public static init(){
TerrainEventHandler.hashtable= StdUtil.getInstance()!.createHashtable();
    
}


    public static getInstance(anyType: any = {}): TerrainEventHandler{

    var eventHandlerCanBeNull: any = TerrainEventHandler.hashtable.get(anyType);;
    

                        if(eventHandlerCanBeNull == 
                                    null
                                )
                        
                                    {
                                    eventHandlerCanBeNull= new TerrainEventHandler();
    
TerrainEventHandler.hashtable.put(anyType, eventHandlerCanBeNull);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return eventHandlerCanBeNull as TerrainEventHandler;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();

private constructor (){

            super();
        }


    public addListener(terrainEventListener: TerrainEventListener){

                        if(!this.list.contains(terrainEventListener))
                        
                                    {
                                    this.list.add(terrainEventListener);
    

                                    }
                                
}


    public removeAllListeners(){
this.list.clear();
    
super.removeAllListeners();
    
}


    public removeListener(eventListenerInterface: EventListenerInterface){
this.list.remove(eventListenerInterface);
    
super.removeListener(eventListenerInterface);
    
}


                //@Throws(Exception.constructor)
            
    public fireEvent(eventObject: AllBinaryEventObject){




                        for (
    var index: number = this.list.size()!;--index >= 0; )
        {

        try {
            
    var terrainEventListener: TerrainEventListener = this.list.get(index) as TerrainEventListener;;
    
terrainEventListener!.onTerrainEvent(eventObject as TerrainEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}

super.fireEvent(eventObject);
    
}


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    var terrainEventListenerInterface: TerrainEventListenerInterface = eventListenerInterface as TerrainEventListenerInterface;;
    
terrainEventListenerInterface!.onTerrainEvent(eventObject as TerrainEvent);
    
}


}



