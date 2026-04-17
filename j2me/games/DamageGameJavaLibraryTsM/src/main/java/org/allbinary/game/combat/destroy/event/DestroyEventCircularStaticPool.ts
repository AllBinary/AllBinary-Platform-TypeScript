
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
        



import { AllBinaryGameCanvas } from "../../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryEventCircularPool } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventCircularPool.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DestroyedEvent } from "./DestroyedEvent.js";

export class DestroyEventCircularStaticPool
            extends Object
         {
        

    private static readonly instance: DestroyEventCircularStaticPool = new DestroyEventCircularStaticPool();
        
        

    public static getInstance(): DestroyEventCircularStaticPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private EVENT_POOL: AllBinaryEventCircularPool = new AllBinaryEventCircularPool(20);
        
        
private constructor (){

            super();
            }


    public init(combatGameCanvas: AllBinaryGameCanvas){
var combatGameCanvas = combatGameCanvas
EVENT_POOL.init(new DestroyEventFactory(combatGameCanvas));
    
}


                //@Throws(Error::class)
            
    public getInstance(layerInterface: AllBinaryLayer): DestroyedEvent{
var layerInterface = layerInterface

    var destroyedEvent: DestroyedEvent = EVENT_POOL.getNextInstance();

                         as DestroyedEvent;
        
        
;
    
destroyedEvent!.setLayerInterfaceForCircularStaticPool(layerInterface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return destroyedEvent;
    
}


}
                
            

