
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventListenerInterface } from '../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
//not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LayerManagerEventListener } from './LayerManagerEventListener.js';
//not GWT import - same folder const LayerManagerEventListener = globalThis.org.allbinary.layer.event.LayerManagerEventListener;

                import { LayerManagerEvent } from './LayerManagerEvent.js';
//not GWT import - same folder const LayerManagerEvent = globalThis.org.allbinary.layer.event.LayerManagerEvent;

                import { LayerManagerEventListenerInterface } from './LayerManagerEventListenerInterface.js';
//not GWT import - same folder const LayerManagerEventListenerInterface = globalThis.org.allbinary.layer.event.LayerManagerEventListenerInterface;

                
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
    var index: number = this.list.size()!;--index >= 0; )
        {

        try {
            
    var layerManagerEventListener: LayerManagerEventListener = this.list.objectArray[index]! as LayerManagerEventListener;;
    
layerManagerEventListener!.onCreateLayerManagerEvent(eventObject as LayerManagerEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
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
    var index: number = this.list.size()!;--index >= 0; )
        {

        try {
            
    var layerManagerEventListener: LayerManagerEventListener = this.list.objectArray[index]! as LayerManagerEventListener;;
    
layerManagerEventListener!.onDeleteLayerManagerEvent(eventObject as LayerManagerEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}


    var eventListenerInterfaceList: BasicArrayList = this.eventListenerInterfaceList;;
    

    var eventListenerInterface: EventListenerInterface;;
    

    var layerManagerEventListenerInterface: LayerManagerEventListenerInterface;;
    

    var index: number = 0;;
    

        while(index < eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= eventListenerInterfaceList!.objectArray[index]! as EventListenerInterface;
    
layerManagerEventListenerInterface= (eventListenerInterface as LayerManagerEventListenerInterface);
    
layerManagerEventListenerInterface!.onDeleteLayerManagerEvent(eventObject as LayerManagerEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

index++;
    
}

}


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    var layerManagerEventListenerInterface: LayerManagerEventListenerInterface = (eventListenerInterface as LayerManagerEventListenerInterface);;
    
layerManagerEventListenerInterface!.onCreateLayerManagerEvent(eventObject as LayerManagerEvent);
    
}


}



