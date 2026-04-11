
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
        



import { HealthInterface } from "../../../../../../org/allbinary/game/health/HealthInterface.js";

    
import { HealthInterfaceCompositeInterface } from "../../../../../../org/allbinary/game/health/HealthInterfaceCompositeInterface.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerCircularPool } from "../../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js";

    
import { AllBinaryLayerFactoryInterface } from "../../../../../../org/allbinary/layer/AllBinaryLayerFactoryInterface.js";

    

export class HealLayerCircularStaticPool extends AllBinaryLayerCircularPool {
        
public constructor (allbinaryLayerFactoryInterface: AllBinaryLayerFactoryInterface, total: number){

            super();
            var allbinaryLayerFactoryInterface = allbinaryLayerFactoryInterface
var total = total
super.init(allbinaryLayerFactoryInterface, total);
    
}


                //@Throws(Error::class)
            
    public visit(sourceLayerInterface: AllBinaryLayer){
var sourceLayerInterface = sourceLayerInterface

    var healLayer: HealLayer = this.getNextInstance();

                         as HealLayer;
        
        
;
    

    var healthInterfaceCompositeInterface: HealthInterfaceCompositeInterface = sourceLayerInterface as HealthInterfaceCompositeInterface;
        
        
;
    

    var healthInterface: HealthInterface = healthInterfaceCompositeInterface!.getHealthInterface()!;
        
        
;
    
healLayer!.visit(healthInterface);
    
}


}
                
            

