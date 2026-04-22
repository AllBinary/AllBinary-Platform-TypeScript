
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

    
import { AllBinaryEventCircularPool } from "../../../../org/allbinary/logic/util/event/AllBinaryEventCircularPool.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TrackingEvent } from "./TrackingEvent.js";

export class TrackingEventCircularStaticPool
            extends Object
         {
        

    private instance: TrackingEventCircularStaticPool = new TrackingEventCircularStaticPool();
        
        

    public static getInstance(): TrackingEventCircularStaticPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private EVENT_POOL: AllBinaryEventCircularPool = new AllBinaryEventCircularPool(20);
        
        

    public init(){
EVENT_POOL.init(new TrackingEventFactory());
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getInstance(layerInterface: AllBinaryLayer): TrackingEvent{
var layerInterface = layerInterface

    var trackingEvent: TrackingEvent = EVENT_POOL.getNextInstance();

                         as TrackingEvent;
        
        
;
    
trackingEvent!.setLayerInterfaceForCircularStaticPool(layerInterface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return trackingEvent;
    
}


}
                
            

