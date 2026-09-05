
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
        
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
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

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ViewPositionEvent } from './ViewPositionEvent.js';
//not GWT import - same folder const ViewPositionEvent = globalThis.org.allbinary.view.event.ViewPositionEvent;

                import { ViewPositionEventListenerInterface } from './ViewPositionEventListenerInterface.js';
//not GWT import - same folder const ViewPositionEventListenerInterface = globalThis.org.allbinary.view.event.ViewPositionEventListenerInterface;

                
export class ViewPositionEventHandler extends BasicEventHandler {
        

    private static SINGLETON: ViewPositionEventHandler = new ViewPositionEventHandler();

    public static getInstance(): ViewPositionEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ViewPositionEventHandler.SINGLETON;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();

private constructor (){

            super();
        }


    public addListener(layerInterface: AllBinaryLayer){

                        if(!this.list.contains(layerInterface))
                        
                                    {
                                    this.list.add(layerInterface);
    

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
            
    var layerInterface: AllBinaryLayer = this.list.objectArray[index]! as AllBinaryLayer;;
    
layerInterface!.onChangeEvent(eventObject as ViewPositionEvent);
    

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

    var viewPositionEventListenerInterface: ViewPositionEventListenerInterface = (eventListenerInterface as ViewPositionEventListenerInterface);;
    
viewPositionEventListenerInterface!.onChangeEvent(eventObject as ViewPositionEvent);
    
}


}



