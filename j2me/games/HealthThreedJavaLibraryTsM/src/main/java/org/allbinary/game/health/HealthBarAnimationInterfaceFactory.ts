
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
        
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      
import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      
import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HealthBarThreedAnimation } from './HealthBarThreedAnimation.js';
import { HealthBarAnimation } from './HealthBarAnimation.js';

export class HealthBarAnimationInterfaceFactory
            extends Object
         implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {
        
public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstanceByLocation(layerInterface: AllBinaryLayer, location: number): HealthBarAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HealthBarThreedAnimation(layerInterface, location);
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


}
                
            

