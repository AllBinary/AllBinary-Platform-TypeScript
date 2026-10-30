
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
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject

import { EventListenerInterface } from '../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface

import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings

import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TerrainEventListener } from './TerrainEventListener.js';
//sameFolderImports - not GWT import - same folder const TerrainEventListener
import { TerrainEvent } from './TerrainEvent.js';
//sameFolderImports - not GWT import - same folder const TerrainEvent
import { TerrainEventListenerInterface } from './TerrainEventListenerInterface.js';
//sameFolderImports - not GWT import - same folder const TerrainEventListenerInterface

export class TerrainEventHandler extends BasicEventHandler {
        

    private static hashtable: ABHashtable<any, any> = StdUtil.getInstance()!.NULL_TABLE;

    public static init(){
TerrainEventHandler.hashtable= StdUtil.getInstance()!.createHashtable();
    
}


    public static getInstance(anyType: any): TerrainEventHandler{

    let eventHandlerCanBeNull: any = TerrainEventHandler.hashtable.get(anyType);;
    

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
    let index: number = this.list.size()!;--index >= 0; )
        {

 try { 
    let terrainEventListener: TerrainEventListener = this.list.get(index) as TerrainEventListener;;
    
terrainEventListener!.onTerrainEvent(eventObject as TerrainEvent);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    

 }
   }
 
}

super.fireEvent(eventObject);
    
}


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    let terrainEventListenerInterface: TerrainEventListenerInterface = eventListenerInterface as TerrainEventListenerInterface;;
    
terrainEventListenerInterface!.onTerrainEvent(eventObject as TerrainEvent);
    
}


}

