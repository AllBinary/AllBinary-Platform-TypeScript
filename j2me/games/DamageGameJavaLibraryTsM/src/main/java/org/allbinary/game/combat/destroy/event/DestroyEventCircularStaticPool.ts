
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { AllBinaryGameCanvas } from '../../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { AllBinaryEventCircularPool } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventCircularPool.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DestroyEventFactory } from './DestroyEventFactory.js';
import { DestroyedEvent } from './DestroyedEvent.js';

export class DestroyEventCircularStaticPool
            extends Object
         {
        

    private static readonly instance: DestroyEventCircularStaticPool = new DestroyEventCircularStaticPool();

    public static getInstance(): DestroyEventCircularStaticPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DestroyEventCircularStaticPool.instance;
    
}


    private EVENT_POOL: AllBinaryEventCircularPool = new AllBinaryEventCircularPool(20);
private constructor (){

            super();
        }


    public init(combatGameCanvas: AllBinaryGameCanvas){
this.EVENT_POOL.init(new DestroyEventFactory(combatGameCanvas));
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceForLayer(layerInterface: AllBinaryLayer): DestroyedEvent{

    var destroyedEvent: DestroyedEvent = this.EVENT_POOL.getNextInstance() as DestroyedEvent;
;
    
destroyedEvent!.setLayerInterfaceForCircularStaticPool(layerInterface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return destroyedEvent;
    
}


}
                
            

