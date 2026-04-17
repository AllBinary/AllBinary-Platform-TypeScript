
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
        



import { OpenGLFeatureUtil } from "../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js";

    
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Health } from "./Health.js";

import { HealthBar } from "./HealthBar.js";

export class HealthBarFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public getInstance(layerInterface: AllBinaryLayer, healthInterface: Health, location: number, direction: number): HealthBar{
var layerInterface = layerInterface
var healthInterface = healthInterface
var location = location
var direction = direction

                        if(OpenGLFeatureUtil.getInstance()!.isAnyThreed())
                        
                                    {
                                    
    var featuredAnimationInterfaceFactoryInterfaceFactory: FeaturedAnimationInterfaceFactoryInterfaceFactory = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!;
        
        
;
    

    var healthBarAnimationInterfaceFactory: HealthBarAnimationInterfaceFactory = featuredAnimationInterfaceFactoryInterfaceFactory!.get(Health.NAME);

                         as HealthBarAnimationInterfaceFactory;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HealthBar(layerInterface, healthInterface, healthBarAnimationInterfaceFactory!.getInstance(layerInterface, location), direction);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HealthBar(layerInterface, healthInterface, new HealthBarTwodAnimation(layerInterface, location), direction);
    

                        }
                            
}


}
                
            

