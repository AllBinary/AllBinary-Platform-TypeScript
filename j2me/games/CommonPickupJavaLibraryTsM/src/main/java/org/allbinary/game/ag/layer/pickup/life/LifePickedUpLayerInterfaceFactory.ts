
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
        
//not game specific package import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
      const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;

      
//not game specific package import { CountedPickedUpLayerInterfaceFactory } from '../../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
      const CountedPickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory;

      
//not game specific package import { IconLayerFactory } from '../../../../../../../org/allbinary/game/layer/pickup/IconLayerFactory.js';
      const IconLayerFactory = globalThis.org.allbinary.game.layer.pickup.IconLayerFactory;

      
//not game specific package import { PickedUpLayerInterfaceFactory } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactory.js';
      const PickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactory;

      
//not game specific package import { PickedUpLayerInterfaceFactoryInterface } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js';
      const PickedUpLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface;

      
//not game specific package import { PickedUpLayerTypeFactory } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerTypeFactory.js';
      const PickedUpLayerTypeFactory = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerTypeFactory;

      
//not game specific package import { PickupProcessorInterface } from '../../../../../../../org/allbinary/game/layer/pickup/PickupProcessorInterface.js';
      const PickupProcessorInterface = globalThis.org.allbinary.game.layer.pickup.PickupProcessorInterface;

      
//not game specific package import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LifeLayerCircularStaticPool } from './LifeLayerCircularStaticPool.js';
import { LifeLayerFactory } from './LifeLayerFactory.js';
import { LifeResources } from './LifeResources.js';

export class LifePickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactory implements PickupProcessorInterface {
        

    private static pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;

                //@Throws(Exception.constructor)
            
    public static init(){
LifePickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface= new LifePickedUpLayerInterfaceFactory();
    
}


    public static getInstance(): PickedUpLayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LifePickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface;
    
}


    private pool: LifeLayerCircularStaticPool = new LifeLayerCircularStaticPool(new LifeLayerFactory(), 1);

private constructor (){
            super(PickedUpLayerTypeFactory.getInstance()!.LIFE, IconLayerFactory.getInstance(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(LifeResources.getInstance()!.RESOURCE)!.getInstance(0), 10, 10), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(LifeResources.getInstance()!.RESOURCE)!.getInstance(0));
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getTotal(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


                //@Throws(Exception.constructor)
            
    public process(sourceLayerInterface: AllBinaryLayer){
this.pool.visit(sourceLayerInterface);
    
}


}
                
            

