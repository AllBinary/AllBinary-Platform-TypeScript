
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
        
import { HealthInterface } from '../../../../../../../org/allbinary/game/health/HealthInterface.js';
//not GWT import const HealthInterface = globalThis.org.allbinary.game.health.HealthInterface;

      
import { HealthInterfaceCompositeInterface } from '../../../../../../../org/allbinary/game/health/HealthInterfaceCompositeInterface.js';
//not GWT import const HealthInterfaceCompositeInterface = globalThis.org.allbinary.game.health.HealthInterfaceCompositeInterface;

      
import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerCircularPool } from '../../../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js';
//not GWT import const AllBinaryLayerCircularPool = globalThis.org.allbinary.layer.AllBinaryLayerCircularPool;

      
import { AllBinaryLayerFactoryInterface } from '../../../../../../../org/allbinary/layer/AllBinaryLayerFactoryInterface.js';
//not GWT import const AllBinaryLayerFactoryInterface = globalThis.org.allbinary.layer.AllBinaryLayerFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HealLayer } from './HealLayer.js';
//not GWT import - same folder const HealLayer = globalThis.org.allbinary.game.ag.layer.pickup.health.HealLayer;

                
export class HealLayerCircularStaticPool extends AllBinaryLayerCircularPool {
        

public constructor (allbinaryLayerFactoryInterface: AllBinaryLayerFactoryInterface, total: number){

            super();
        super.initAllBinaryLayerCircularPool(allbinaryLayerFactoryInterface, total);
    
}


                //@Throws(Exception.constructor)
            
    public visit(sourceLayerInterface: AllBinaryLayer){

    var healLayer: HealLayer = this.getNextInstance() as HealLayer;;
    

    var healthInterfaceCompositeInterface: HealthInterfaceCompositeInterface = sourceLayerInterface as unknown as HealthInterfaceCompositeInterface;;
    

    var healthInterface: HealthInterface = healthInterfaceCompositeInterface!.getHealthInterface()!;;
    
healLayer!.visit(healthInterface);
    
}


}



