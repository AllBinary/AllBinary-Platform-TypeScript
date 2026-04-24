
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { EventStrings } from "../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { BasicEventHandler } from "../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LayerManagerEventListener } from "./LayerManagerEventListener.js";

export class LayerManagerEventHandler extends BasicEventHandler {
        

    private instance: LayerManagerEventHandler = new LayerManagerEventHandler();
        
        

    public static getInstance(): LayerManagerEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LayerManagerEventHandler.instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();
        
        
private constructor (){

            super();
        }


    public addListener(layerManagerEventListener: LayerManagerEventListener){
    //var layerManagerEventListener = layerManagerEventListener

                        if(!this.list.contains(layerManagerEventListener);)
                        
                                    {
                                    this.list.add(layerManagerEventListener);
    

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
            
    var layerManagerEventListener: LayerManagerEventListener = this.list.objectArray[index]! as LayerManagerEventListener;
        
        
;
    
layerManagerEventListener!.onCreateLayerManagerEvent(eventObject as LayerManagerEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}

super.fireEvent(eventObject);
    
}


    public readonly CREATE: string = "Create";
        
        

    public readonly DELETE: string = "Delete";
        
        

                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public fireDeleteEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject




                        for (
    var index: number = this.list.size()!;
        
        
--index >= 0; )
        {

        try {
            
    var layerManagerEventListener: LayerManagerEventListener = this.list.objectArray[index]! as LayerManagerEventListener;
        
        
;
    
layerManagerEventListener!.onDeleteLayerManagerEvent(eventObject as LayerManagerEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}


    var eventListenerInterfaceList: BasicArrayList = this.eventListenerInterfaceList;
        
        
;
    

    var eventListenerInterface: EventListenerInterface
;
    

    var layerManagerEventListenerInterface: LayerManagerEventListenerInterface
;
    

    var index: number = 0;
        
        
;
    

        while(index < eventListenerInterfaceList!.size())
        {

        try {
            eventListenerInterface= eventListenerInterfaceList!.objectArray[index]! as EventListenerInterface;
    
layerManagerEventListenerInterface= (eventListenerInterface as LayerManagerEventListenerInterface);
    
layerManagerEventListenerInterface!.onDeleteLayerManagerEvent(eventObject as LayerManagerEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

index++;
    
}

}


                //@Throws(Error::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
    //var eventObject = eventObject
    //var eventListenerInterface = eventListenerInterface

    var layerManagerEventListenerInterface: LayerManagerEventListenerInterface = (eventListenerInterface as LayerManagerEventListenerInterface);
        
        
;
    
layerManagerEventListenerInterface!.onCreateLayerManagerEvent(eventObject as LayerManagerEvent);
    
}


}
                
            

