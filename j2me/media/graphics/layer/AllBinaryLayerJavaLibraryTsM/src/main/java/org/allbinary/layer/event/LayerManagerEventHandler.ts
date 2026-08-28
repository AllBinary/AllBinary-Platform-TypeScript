
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventListenerInterface } from '../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
      const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
//not game specific package import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LayerManagerEventListener } from './LayerManagerEventListener.js';
import { LayerManagerEvent } from './LayerManagerEvent.js';
import { LayerManagerEventListenerInterface } from './LayerManagerEventListenerInterface.js';

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



