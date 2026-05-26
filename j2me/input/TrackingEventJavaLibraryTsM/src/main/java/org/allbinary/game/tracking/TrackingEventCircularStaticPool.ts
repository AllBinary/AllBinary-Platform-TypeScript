
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { AllBinaryEventCircularPool } from '../../../../org/allbinary/logic/util/event/AllBinaryEventCircularPool.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TrackingEventFactory } from './TrackingEventFactory.js';
import { TrackingEvent } from './TrackingEvent.js';

export class TrackingEventCircularStaticPool
            extends Object
         {
        

    private static instance: TrackingEventCircularStaticPool = new TrackingEventCircularStaticPool();

    public static getInstance(): TrackingEventCircularStaticPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TrackingEventCircularStaticPool.instance;
    
}


    private EVENT_POOL: AllBinaryEventCircularPool = new AllBinaryEventCircularPool(20);

    public init(){
this.EVENT_POOL.init(new TrackingEventFactory());
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getNextInstance(layerInterface: AllBinaryLayer): TrackingEvent{

    var trackingEvent: TrackingEvent = this.EVENT_POOL.getNextInstance() as TrackingEvent;;
    
trackingEvent!.setLayerInterfaceForCircularStaticPool(layerInterface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return trackingEvent;
    
}


}
                
            

