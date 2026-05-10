
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
        
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';

    
import { GameConfigurationUtil } from '../../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';

    
import { CountedPickedUpLayerInterfaceFactory } from '../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';

    
import { IconLayerFactory } from '../../../../../../org/allbinary/game/layer/pickup/IconLayerFactory.js';

    
import { PickedUpLayerInterfaceFactory } from '../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactory.js';

    
import { PickedUpLayerInterfaceFactoryInterface } from '../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js';

    
import { PickedUpLayerTypeFactory } from '../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerTypeFactory.js';

    
import { PickupProcessorInterface } from '../../../../../../org/allbinary/game/layer/pickup/PickupProcessorInterface.js';

    
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PointsLayerCircularStaticPool } from './PointsLayerCircularStaticPool.js';
import { PointsLayerFactory } from './PointsLayerFactory.js';
import { PointsResources } from './PointsResources.js';

export class Points30kPickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactory implements PickupProcessorInterface {
        

    private static pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;

                //@Throws(Exception.constructor)
            
    public static init(){
Points30kPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface= new Points30kPickedUpLayerInterfaceFactory();
    
}


    public static getInstance(): PickedUpLayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Points30kPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface;
    
}


    private pool: PointsLayerCircularStaticPool = new PointsLayerCircularStaticPool(new PointsLayerFactory(GameConfigurationUtil.getInstance()!.getCompetitionValue() *30000), 1);
private constructor (){
            super(PickedUpLayerTypeFactory.getInstance()!.POINTS, IconLayerFactory.getInstance(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(PointsResources.getInstance()!.RESOURCE_3)!.getInstance(0), 10, 10), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(PointsResources.getInstance()!.RESOURCE_3)!.getInstance(0));
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getTotal(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


                //@Throws(Exception.constructor)
            
    public process(sourceLayerInterface: AllBinaryLayer){
var sourceLayerInterface = sourceLayerInterface
this.pool.visit(sourceLayerInterface);
    
}


}
                
            

