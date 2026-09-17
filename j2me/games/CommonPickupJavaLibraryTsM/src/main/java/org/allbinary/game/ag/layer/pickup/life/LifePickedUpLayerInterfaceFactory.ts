
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
        
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory
import { CountedPickedUpLayerInterfaceFactory } from '../../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
//not GWT import const CountedPickedUpLayerInterfaceFactory
import { IconLayerFactory } from '../../../../../../../org/allbinary/game/layer/pickup/IconLayerFactory.js';
//not GWT import const IconLayerFactory
import { PickedUpLayerInterfaceFactory } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactory.js';
//not GWT import const PickedUpLayerInterfaceFactory
import { PickedUpLayerInterfaceFactoryInterface } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js';
//not GWT import const PickedUpLayerInterfaceFactoryInterface
import { PickedUpLayerTypeFactory } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerTypeFactory.js';
//not GWT import const PickedUpLayerTypeFactory
import { PickupProcessorInterface } from '../../../../../../../org/allbinary/game/layer/pickup/PickupProcessorInterface.js';
//not GWT import const PickupProcessorInterface
import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LifeLayerCircularStaticPool } from './LifeLayerCircularStaticPool.js';
//not GWT import - same folder const LifeLayerCircularStaticPoolimport { LifeLayerFactory } from './LifeLayerFactory.js';
//not GWT import - same folder const LifeLayerFactoryimport { LifeResources } from './LifeResources.js';
//not GWT import - same folder const LifeResources
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



