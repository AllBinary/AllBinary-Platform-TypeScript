
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { EventStrings } from "../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { BasicEventHandler } from "../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TerrainEventListener } from "./TerrainEventListener.js";

export class TerrainEventHandler extends BasicEventHandler {
        

    private hashtable: Hashtable<any, any> = NullUtil.getInstance()!.NULL_TABLE;
        
        

    public static init(){
TerrainEventHandler.hashtable= new Hashtable<any, any>();
    
}


    public static getInstance(anyType: any = {}): TerrainEventHandler{
    //var anyType = anyType

    var eventHandlerCanBeNull: any? = TerrainEventHandler.hashtable.get(anyType as Object);
        
        
;
    

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


    private readonly list: BasicArrayList = new BasicArrayList();
        
        
private constructor (){

            super();
        }


    public addListener(terrainEventListener: TerrainEventListener){
    //var terrainEventListener = terrainEventListener

                        if(!this.list.contains(terrainEventListener);

                        )
                        
                                    {
                                    this.list.add(terrainEventListener);
    

                                    }
                                
}


    public removeAllListeners(){
this.list.clear();
    
super.removeAllListeners();
    
}


    public removeListener(eventListenerInterface: EventListenerInterface){
    //var eventListenerInterface = eventListenerInterface
this.list.remove(eventListenerInterface);
    
super.removeListener(eventListenerInterface);
    
}


                //@Throws(Error::class)
            
    public fireEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject




                        for (
    var index: number = this.list.size()!;
        
        
--index >= 0; )
        {

        try {
            
    var terrainEventListener: TerrainEventListener = this.list.get(index);

                         as TerrainEventListener;
        
        
;
    
terrainEventListener!.onTerrainEvent(eventObject as TerrainEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}

super.fireEvent(eventObject);
    
}


                //@Throws(Error::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
    //var eventObject = eventObject
    //var eventListenerInterface = eventListenerInterface

    var terrainEventListenerInterface: TerrainEventListenerInterface = eventListenerInterface as TerrainEventListenerInterface;
        
        
;
    
terrainEventListenerInterface!.onTerrainEvent(eventObject as TerrainEvent);
    
}


}
                
            

