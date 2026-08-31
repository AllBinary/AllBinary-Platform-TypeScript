
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
        
import { Life } from '../../../../../../../org/allbinary/game/ag/life/Life.js';
      //not GWT import const Life = globalThis.org.allbinary.game.ag.life.Life;

      
import { LifeInterfaceCompositeInterface } from '../../../../../../../org/allbinary/game/ag/life/LifeInterfaceCompositeInterface.js';
      //not GWT import const LifeInterfaceCompositeInterface = globalThis.org.allbinary.game.ag.life.LifeInterfaceCompositeInterface;

      
import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerCircularPool } from '../../../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js';
      //not GWT import const AllBinaryLayerCircularPool = globalThis.org.allbinary.layer.AllBinaryLayerCircularPool;

      
import { AllBinaryLayerFactoryInterface } from '../../../../../../../org/allbinary/layer/AllBinaryLayerFactoryInterface.js';
      //not GWT import const AllBinaryLayerFactoryInterface = globalThis.org.allbinary.layer.AllBinaryLayerFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LifeLayer } from './LifeLayer.js';

export class LifeLayerCircularStaticPool extends AllBinaryLayerCircularPool {
        

public constructor (allbinaryLayerFactoryInterface: AllBinaryLayerFactoryInterface, total: number){

            super();
        super.initAllBinaryLayerCircularPool(allbinaryLayerFactoryInterface, total);
    
}


                //@Throws(Exception.constructor)
            
    public visit(sourceLayerInterface: AllBinaryLayer){

    var lifeLayer: LifeLayer = this.getNextInstance() as LifeLayer;;
    

    var lifeInterfaceCompositeInterface: LifeInterfaceCompositeInterface = sourceLayerInterface as unknown as LifeInterfaceCompositeInterface;;
    

    var lifeInterface: Life = lifeInterfaceCompositeInterface!.getLifeInterface()!;;
    
lifeLayer!.visit(lifeInterface);
    
}


}



