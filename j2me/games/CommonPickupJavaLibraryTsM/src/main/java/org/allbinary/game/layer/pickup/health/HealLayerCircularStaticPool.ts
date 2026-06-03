
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
        
import { HealthInterface } from '../../../../../../org/allbinary/game/health/HealthInterface.js';
      
import { HealthInterfaceCompositeInterface } from '../../../../../../org/allbinary/game/health/HealthInterfaceCompositeInterface.js';
      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { AllBinaryLayerCircularPool } from '../../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js';
      
import { AllBinaryLayerFactoryInterface } from '../../../../../../org/allbinary/layer/AllBinaryLayerFactoryInterface.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HealLayer } from './HealLayer.js';

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
                
            

