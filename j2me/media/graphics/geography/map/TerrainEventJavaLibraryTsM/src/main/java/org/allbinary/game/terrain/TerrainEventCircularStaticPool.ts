
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
        



import { AllBinaryEventCircularPool } from "../../../../org/allbinary/logic/util/event/AllBinaryEventCircularPool.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TerrainEvent } from "./TerrainEvent.js";

import { BasicTerrainInfo } from "./BasicTerrainInfo.js";

export class TerrainEventCircularStaticPool
            extends Object
         {
        

    private static readonly instance: TerrainEventCircularStaticPool = new TerrainEventCircularStaticPool();
        
        

    public static getInstance(): TerrainEventCircularStaticPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private EVENT_POOL: AllBinaryEventCircularPool = new AllBinaryEventCircularPool(20);
        
        

    public init(){
this.EVENT_POOL.init(new TerrainEventFactory());
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getInstance(basicTerrainInfo: BasicTerrainInfo): TerrainEvent{
var basicTerrainInfo = basicTerrainInfo

    var trackingEvent: TerrainEvent = this.EVENT_POOL.getNextInstance(); as TerrainEvent;
        
        
;
    
trackingEvent!.setBasicTerrainInfoForCircularStaticPool(basicTerrainInfo);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return trackingEvent;
    
}


}
                
            

