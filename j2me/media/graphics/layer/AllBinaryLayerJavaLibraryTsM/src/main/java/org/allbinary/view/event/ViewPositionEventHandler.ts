
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
        



import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { EventStrings } from "../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { BasicEventHandler } from "../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class ViewPositionEventHandler extends BasicEventHandler {
        

    private SINGLETON: ViewPositionEventHandler = new ViewPositionEventHandler();
        
        

    public static getInstance(): ViewPositionEventHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ViewPositionEventHandler.SINGLETON;
    
}


    private readonly list: BasicArrayList = new BasicArrayList();
        
        
private constructor (){

            super();
            }


    public addListener(layerInterface: AllBinaryLayer){
var layerInterface = layerInterface

                        if(!list.contains(layerInterface))
                        
                                    {
                                    list.add(layerInterface)

                                    }
                                
}


    public removeAllListeners(){
this.list.clear()
super.removeAllListeners()
}


    public removeListener(eventListenerInterface: EventListenerInterface){
var eventListenerInterface = eventListenerInterface
this.list.remove(eventListenerInterface)
super.removeListener(eventListenerInterface)
}


                //@Throws(Error::class)
            
    public fireEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject




                        for (
    var index: number = this.list.size()!;
        
        
--index >= 0; )
        {

        try {
            
    var layerInterface: AllBinaryLayer = this.list.objectArray[index]! as AllBinaryLayer;
        
        

layerInterface!.onChangeEvent(eventObject as ViewPositionEvent)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e)
}

}

super.fireEvent(eventObject)
}


                //@Throws(Error::class)
            
    process(eventObject: AllBinaryEventObject, eventListenerInterface: EventListenerInterface){
var eventObject = eventObject
var eventListenerInterface = eventListenerInterface

    var viewPositionEventListenerInterface: ViewPositionEventListenerInterface = (eventListenerInterface as ViewPositionEventListenerInterface);
        
        

viewPositionEventListenerInterface!.onChangeEvent(eventObject as ViewPositionEvent)
}


}
                
            

