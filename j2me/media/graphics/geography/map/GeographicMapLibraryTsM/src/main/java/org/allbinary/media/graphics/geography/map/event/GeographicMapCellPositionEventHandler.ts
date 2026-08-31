
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

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { MiniMapLayer } from '../../../../../../../org/allbinary/game/layer/geographic/map/MiniMapLayer.js';
      //not GWT import const MiniMapLayer = globalThis.org.allbinary.game.layer.geographic.map.MiniMapLayer;

      
import { AllBinaryEventObject } from '../../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventListenerInterface } from '../../../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
      //not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { EventStrings } from '../../../../../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
import { BasicEventHandler } from '../../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      //not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellPositionEvent } from './GeographicMapCellPositionEvent.js';
//not GWT import const GeographicMapCellPositionEvent = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEvent;

                import { GeographicMapCellPositionEventListenerInterface } from './GeographicMapCellPositionEventListenerInterface.js';
//not GWT import const GeographicMapCellPositionEventListenerInterface = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEventListenerInterface;

                
export class GeographicMapCellPositionEventHandler extends BasicEventHandler {
        

    private static instance: GeographicMapCellPositionEventHandler = new GeographicMapCellPositionEventHandler();

    public static getInstance(): GeographicMapCellPositionEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GeographicMapCellPositionEventHandler.instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();

private constructor (){

            super();
        }


    public addListener(miniMapLayer: MiniMapLayer){

                        if(!this.list.contains(miniMapLayer))
                        
                                    {
                                    this.list.add(miniMapLayer);
    

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
            
    var miniMapLayer: MiniMapLayer = this.list.get(index) as MiniMapLayer;;
    
miniMapLayer!.onGeographicMapCellPositionEvent(eventObject as GeographicMapCellPositionEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}

super.fireEvent(eventObject);
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public fireRemoveEvent(eventObject: AllBinaryEventObject){

    var list: BasicArrayList = this.eventListenerInterfaceList;;
    




                        for (
    var index: number = this.list.size()!;--index >= 0; )
        {

        try {
            
    var miniMapLayer: MiniMapLayer = this.list.get(index) as MiniMapLayer;;
    
miniMapLayer!.onRemoveGeographicMapCellPositionEvent(eventObject as GeographicMapCellPositionEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}


    var eventListenerInterface: EventListenerInterface;;
    

    var geographicMapCellPositionEventListenerInterface: GeographicMapCellPositionEventListenerInterface;;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

        try {
            eventListenerInterface= list.get(index) as EventListenerInterface;
    
geographicMapCellPositionEventListenerInterface= (eventListenerInterface as GeographicMapCellPositionEventListenerInterface);
    
geographicMapCellPositionEventListenerInterface!.onRemoveGeographicMapCellPositionEvent(eventObject as GeographicMapCellPositionEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e);
    
}

}

}


                //@Throws(Exception.constructor)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){

    var geographicMapCellPositionEventListenerInterface: GeographicMapCellPositionEventListenerInterface = (eventListenerInterface as GeographicMapCellPositionEventListenerInterface);;
    
geographicMapCellPositionEventListenerInterface!.onGeographicMapCellPositionEvent(eventObject as GeographicMapCellPositionEvent);
    
}


}



