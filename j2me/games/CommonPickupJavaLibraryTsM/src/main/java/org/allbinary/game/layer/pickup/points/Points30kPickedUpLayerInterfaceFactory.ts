
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
        



import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
import { GameConfigurationUtil } from "../../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js";

    
import { CountedPickedUpLayerInterfaceFactory } from "../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js";

    
import { IconLayerFactory } from "../../../../../../org/allbinary/game/layer/pickup/IconLayerFactory.js";

    
import { PickedUpLayerInterfaceFactory } from "../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactory.js";

    
import { PickedUpLayerInterfaceFactoryInterface } from "../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js";

    
import { PickedUpLayerTypeFactory } from "../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerTypeFactory.js";

    
import { PickupProcessorInterface } from "../../../../../../org/allbinary/game/layer/pickup/PickupProcessorInterface.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    

export class Points30kPickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactory
                , PickupProcessorInterface {
        

    private pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
        
        

                //@Throws(Error::class)
            
    public static init(){
pickedUpLayerInterfaceFactoryInterface= Points30kPickedUpLayerInterfaceFactory();
    
}


    public static getInstance(): PickedUpLayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pickedUpLayerInterfaceFactoryInterface;
    
}


    private pool: PointsLayerCircularStaticPool = new PointsLayerCircularStaticPool(PointsLayerFactory(GameConfigurationUtil.getInstance()!.getCompetitionValue() *30000), 1);
        
        
private constructor ()                        

                            : super(PickedUpLayerTypeFactory.getInstance()!.POINTS, IconLayerFactory.getInstance(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(PointsResources.getInstance()!.RESOURCE_3)!.getInstance(0), 10, 10), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(PointsResources.getInstance()!.RESOURCE_3)!.getInstance(0)){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


    public getTotal(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


                //@Throws(Error::class)
            
    public process(sourceLayerInterface: AllBinaryLayer){
var sourceLayerInterface = sourceLayerInterface
pool.visit(sourceLayerInterface);
    
}


}
                
            

