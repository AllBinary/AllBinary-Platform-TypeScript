
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
        



import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { MiniMapLayer } from "../../../../../../../org/allbinary/game/layer/geographic/map/MiniMapLayer.js";

    
import { AllBinaryEventObject } from "../../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { EventStrings } from "../../../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { BasicEventHandler } from "../../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GeographicMapCellPositionEventHandler extends BasicEventHandler {
        

    private instance: GeographicMapCellPositionEventHandler = new GeographicMapCellPositionEventHandler();
        
        

    public static getInstance(): GeographicMapCellPositionEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GeographicMapCellPositionEventHandler.instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayList();
        
        
private constructor (){

            super();
        }


    public addListener(miniMapLayer: MiniMapLayer){
var miniMapLayer = miniMapLayer

                        if(!this.list.contains(miniMapLayer);

                        )
                        
                                    {
                                    this.list.add(miniMapLayer);
    

                                    }
                                
}


    public removeAllListeners(){
this.list.clear();
    
super.removeAllListeners();
    
}


    public removeListener(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
this.list.remove(eventListenerInterface);
    
super.removeListener(eventListenerInterface);
    
}


                //@Throws(Error::class)
            
    public fireEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject




                        for (
    var index: number = this.list.size()!;
        
        
--index >= 0; )
        {

        try {
            
    var miniMapLayer: MiniMapLayer = this.list.get(index);

                         as MiniMapLayer;
        
        
;
    
miniMapLayer!.onGeographicMapCellPositionEvent(eventObject as GeographicMapCellPositionEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}

super.fireEvent(eventObject);
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public fireRemoveEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject

    var list: BasicArrayList = this.eventListenerInterfaceList;
        
        
;
    




                        for (
    var index: number = this.list.size()!;
        
        
--index >= 0; )
        {

        try {
            
    var miniMapLayer: MiniMapLayer = this.list.get(index);

                         as MiniMapLayer;
        
        
;
    
miniMapLayer!.onRemoveGeographicMapCellPositionEvent(eventObject as GeographicMapCellPositionEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}


    var eventListenerInterface: EventListenerInterface
;
    

    var geographicMapCellPositionEventListenerInterface: GeographicMapCellPositionEventListenerInterface
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

        try {
            eventListenerInterface= list.get(index);

                         as EventListenerInterface;
    
geographicMapCellPositionEventListenerInterface= (eventListenerInterface as GeographicMapCellPositionEventListenerInterface);
    
geographicMapCellPositionEventListenerInterface!.onRemoveGeographicMapCellPositionEvent(eventObject as GeographicMapCellPositionEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}

}


                //@Throws(Error::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
var eventObject = eventObject
var eventListenerInterface = eventListenerInterface

    var geographicMapCellPositionEventListenerInterface: GeographicMapCellPositionEventListenerInterface = (eventListenerInterface as GeographicMapCellPositionEventListenerInterface);
        
        
;
    
geographicMapCellPositionEventListenerInterface!.onGeographicMapCellPositionEvent(eventObject as GeographicMapCellPositionEvent);
    
}


}
                
            

