
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
        import { CompleteMotionGestureInputEventListener } from './CompleteMotionGestureInputEventListener.js';
//not GWT import const CompleteMotionGestureInputEventListener = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventListener;

                import { CompleteMotionGestureInputEvent } from './CompleteMotionGestureInputEvent.js';
//not GWT import const CompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEvent;

                import { CompleteMotionGestureInputEventListenerInterface } from './CompleteMotionGestureInputEventListenerInterface.js';
//not GWT import const CompleteMotionGestureInputEventListenerInterface = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventListenerInterface;

                
export class CompleteMotionGestureInputEventHandler extends BasicEventHandler {
        

    private static readonly SINGLETON: CompleteMotionGestureInputEventHandler = new CompleteMotionGestureInputEventHandler();

    public static getInstance(): CompleteMotionGestureInputEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CompleteMotionGestureInputEventHandler.SINGLETON;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();

private constructor (){

            super();
        }


    public addListener(completeMotionGestureInputEventListener: CompleteMotionGestureInputEventListener){

                        if(!this.list.contains(completeMotionGestureInputEventListener))
                        
                                    {
                                    this.list.add(completeMotionGestureInputEventListener);
    

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
            
    var completeMotionGestureInputEventListener: CompleteMotionGestureInputEventListener = this.list.objectArray[index]! as CompleteMotionGestureInputEventListener;;
    
completeMotionGestureInputEventListener!.onCompleteMotionGestureInputEvent(eventObject as CompleteMotionGestureInputEvent);
    

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

    var completeMotionGestureInputEventListenerInterface: CompleteMotionGestureInputEventListenerInterface = eventListenerInterface as CompleteMotionGestureInputEventListenerInterface;;
    
completeMotionGestureInputEventListenerInterface!.onCompleteMotionGestureInputEvent(eventObject as CompleteMotionGestureInputEvent);
    
}


}



