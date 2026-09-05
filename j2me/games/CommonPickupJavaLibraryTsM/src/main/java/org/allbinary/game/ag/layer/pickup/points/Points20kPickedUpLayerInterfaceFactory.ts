
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
//not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;

      
import { GameConfigurationUtil } from '../../../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
//not GWT import const GameConfigurationUtil = globalThis.org.allbinary.game.configuration.GameConfigurationUtil;

      
import { CountedPickedUpLayerInterfaceFactory } from '../../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
//not GWT import const CountedPickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory;

      
import { IconLayerFactory } from '../../../../../../../org/allbinary/game/layer/pickup/IconLayerFactory.js';
//not GWT import const IconLayerFactory = globalThis.org.allbinary.game.layer.pickup.IconLayerFactory;

      
import { PickedUpLayerInterfaceFactory } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactory.js';
//not GWT import const PickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactory;

      
import { PickedUpLayerInterfaceFactoryInterface } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js';
//not GWT import const PickedUpLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface;

      
import { PickedUpLayerTypeFactory } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerTypeFactory.js';
//not GWT import const PickedUpLayerTypeFactory = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerTypeFactory;

      
import { PickupProcessorInterface } from '../../../../../../../org/allbinary/game/layer/pickup/PickupProcessorInterface.js';
//not GWT import const PickupProcessorInterface = globalThis.org.allbinary.game.layer.pickup.PickupProcessorInterface;

      
import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PointsLayerCircularStaticPool } from './PointsLayerCircularStaticPool.js';
//not GWT import - same folder const PointsLayerCircularStaticPool = globalThis.org.allbinary.game.ag.layer.pickup.points.PointsLayerCircularStaticPool;

                import { PointsLayerFactory } from './PointsLayerFactory.js';
//not GWT import - same folder const PointsLayerFactory = globalThis.org.allbinary.game.ag.layer.pickup.points.PointsLayerFactory;

                import { PointsResources } from './PointsResources.js';
//not GWT import - same folder const PointsResources = globalThis.org.allbinary.game.ag.layer.pickup.points.PointsResources;

                
export class Points20kPickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactory implements PickupProcessorInterface {
        

    private static pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;

                //@Throws(Exception.constructor)
            
    public static init(){
Points20kPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface= new Points20kPickedUpLayerInterfaceFactory();
    
}


    public static getInstance(): PickedUpLayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Points20kPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface;
    
}


    private pool: PointsLayerCircularStaticPool = new PointsLayerCircularStaticPool(new PointsLayerFactory(GameConfigurationUtil.getInstance()!.getCompetitionValue() *20000), 1);

private constructor (){
            super(PickedUpLayerTypeFactory.getInstance()!.POINTS, IconLayerFactory.getInstance(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(PointsResources.getInstance()!.RESOURCE_2)!.getInstance(0), 10, 10), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(PointsResources.getInstance()!.RESOURCE_2)!.getInstance(0));
                    

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



