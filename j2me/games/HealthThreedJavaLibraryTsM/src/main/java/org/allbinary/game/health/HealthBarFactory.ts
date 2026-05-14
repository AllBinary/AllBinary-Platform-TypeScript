
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { OpenGLFeatureUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
      
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HealthBar } from './HealthBar.js';
import { HealthBarTwodAnimation } from './HealthBarTwodAnimation.js';
import { Health } from './Health.js';
import { HealthBarAnimationInterfaceFactory } from './HealthBarAnimationInterfaceFactory.js';

export class HealthBarFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public getInstance(layerInterface: AllBinaryLayer, healthInterface: Health, location: number, direction: number): HealthBar{
var layerInterface = layerInterface
var healthInterface = healthInterface
var location = location
var direction = direction

                        if(OpenGLFeatureUtil.getInstance()!.isAnyThreed())
                        
                                    {
                                    
    var featuredAnimationInterfaceFactoryInterfaceFactory: FeaturedAnimationInterfaceFactoryInterfaceFactory = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!;
;
    

    var healthBarAnimationInterfaceFactory: HealthBarAnimationInterfaceFactory = featuredAnimationInterfaceFactoryInterfaceFactory!.get(Health.NAME) as HealthBarAnimationInterfaceFactory;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HealthBar(layerInterface, healthInterface, healthBarAnimationInterfaceFactory!.getInstanceByLocation(layerInterface, location), direction);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HealthBar(layerInterface, healthInterface, new HealthBarTwodAnimation(layerInterface, location), direction);
    

                        }
                            
}


}
                
            

