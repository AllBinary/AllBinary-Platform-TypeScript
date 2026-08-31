
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
      //not GWT import const OpenGLFeatureUtil = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureUtil;

      
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
      //not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HealthBar } from './HealthBar.js';
//not GWT import const  = globalThis.org.allbinary.game.health.HealthBar;

                import { HealthBarTwodAnimation } from './HealthBarTwodAnimation.js';
//not GWT import const  = globalThis.org.allbinary.game.health.HealthBarTwodAnimation;

                import { Health } from './Health.js';
//not GWT import const  = globalThis.org.allbinary.game.health.Health;

                import { HealthBarAnimationInterfaceFactory } from './HealthBarAnimationInterfaceFactory.js';
//not GWT import const  = globalThis.org.allbinary.game.health.HealthBarAnimationInterfaceFactory;

                
export class HealthBarFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public getInstance(layerInterface: AllBinaryLayer, healthInterface: Health, location: number, direction: number): HealthBar{

                        if(OpenGLFeatureUtil.getInstance()!.isAnyThreed())
                        
                                    {
                                    
    var featuredAnimationInterfaceFactoryInterfaceFactory: FeaturedAnimationInterfaceFactoryInterfaceFactory = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!;;
    

    var healthBarAnimationInterfaceFactory: HealthBarAnimationInterfaceFactory = featuredAnimationInterfaceFactoryInterfaceFactory!.get(Health.NAME) as HealthBarAnimationInterfaceFactory;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HealthBar(layerInterface, healthInterface, healthBarAnimationInterfaceFactory!.getInstanceByLocation(layerInterface, location), direction);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HealthBar(layerInterface, healthInterface, new HealthBarTwodAnimation(layerInterface, location), direction);
    

                        }
                            
}


}



