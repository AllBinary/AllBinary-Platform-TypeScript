
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
        
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject

import { EventListenerInterface } from '../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface

import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings

import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LayerManagerEventListener } from './LayerManagerEventListener.js';
//not GWT import - same folder const LayerManagerEventListener
import { LayerManagerEvent } from './LayerManagerEvent.js';
//not GWT import - same folder const LayerManagerEvent
import { LayerManagerEventListenerInterface } from './LayerManagerEventListenerInterface.js';
//not GWT import - same folder const LayerManagerEventListenerInterface

export class LayerManagerEventHandler extends BasicEventHandler {
        

    private static instance: LayerManagerEventHandler = new LayerManagerEventHandler();

    public static getInstance(): LayerManagerEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LayerManagerEventHandler.instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();

private constructor (){

            super();
        }


    public addListener(layerManagerEventListener: LayerManagerEventListener){

                        if(!this.list.contains(layerManagerEventListener))
                        
                                    {
                                    this.list.add(layerManagerEventListener);
    

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
    let layerManagerEventListener: LayerManagerEventListener = this.list.objectArray[index]! as LayerManagerEventListener;;
    
layerManagerEventListener!.onCreateLayerManagerEvent(eventObject as LayerManagerEvent);
    
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


    public readonly CREATE: string = "Create";

    public readonly DELETE: string = "Delete";

                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public fireDeleteEvent(eventObject: AllBinaryEventObject){




                        for (
    let index: number = this.list.size()!;--index >= 0; )
        {

 try { 
    let layerManagerEventListener: LayerManagerEventListener = this.list.objectArray[index]! as LayerManagerEventListener;;
    
layerManagerEventListener!.onDeleteLayerManagerEvent(eventObject as LayerManagerEvent);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    

 }
   }
 
}


    let eventListenerInterfaceList: BasicArrayList = this.eventListenerInterfaceList;;
    

    let eventListenerInterface: EventListenerInterface;;
    

    let layerManagerEventListenerInterface: LayerManagerEventListenerInterface;;
    

    let index: number = 0;;
    

        while(index < eventListenerInterfaceList!.size())
        {

 try { eventListenerInterface= eventListenerInterfaceList!.objectArray[index]! as EventListenerInterface;
    
layerManagerEventListenerInterface= (eventListenerInterface as LayerManagerEventListenerInterface);
    
layerManagerEventListenerInterface!.onDeleteLayerManagerEvent(eventObject as LayerManagerEvent);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    

 }
   }
 
index++;
    
}

}


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    let layerManagerEventListenerInterface: LayerManagerEventListenerInterface = (eventListenerInterface as LayerManagerEventListenerInterface);;
    
layerManagerEventListenerInterface!.onCreateLayerManagerEvent(eventObject as LayerManagerEvent);
    
}


}

