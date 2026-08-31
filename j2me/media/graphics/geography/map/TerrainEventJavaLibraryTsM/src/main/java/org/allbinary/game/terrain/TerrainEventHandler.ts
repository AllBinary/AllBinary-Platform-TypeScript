
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
        
import { Hashtable } from '../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventListenerInterface } from '../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
      //not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      //not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TerrainEventListener } from './TerrainEventListener.js';
import { TerrainEvent } from './TerrainEvent.js';
import { TerrainEventListenerInterface } from './TerrainEventListenerInterface.js';

export class TerrainEventHandler extends BasicEventHandler {
        

    private static hashtable: Hashtable<any, any> = NullUtil.getInstance()!.NULL_TABLE;

    public static init(){
TerrainEventHandler.hashtable= new Hashtable<any, any>();
    
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



