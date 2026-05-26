
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
      
import { ImageCacheFactory } from '../../../../org/allbinary/image/ImageCacheFactory.js';
      
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
import { LazyImageRotationAnimation } from './LazyImageRotationAnimation.js';

export class LazyImageRotationAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    private readonly layoutIndex: number;

    private readonly animationInterfaceFactoryInterface: BaseImageAnimationFactory;

    public scaleProperties: ScaleProperties = ScaleProperties.instance;

public constructor (layoutIndex: number, associatedLazyAnimationId: number, animationInterfaceFactoryInterface: BaseImageAnimationFactory){

            super();
        this.layoutIndex= layoutIndex;
    
this.animationInterfaceFactoryInterface= animationInterfaceFactoryInterface;
    
ImageCacheFactory.getInstance()!.hasAnyLazyAnimationFactories= true;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

                        if(this.animationInterfaceFactoryInterface!.getImage()!.isReady())
                        
                                    {
                                    this.animationInterfaceFactoryInterface!.setInitialScale(this.scaleProperties);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceFactoryInterface!.getInstance(instanceId);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LazyImageRotationAnimation(this.layoutIndex, instanceId, scaleProperties, this.animationInterfaceFactoryInterface, this.animationInterfaceFactoryInterface!.animationBehaviorFactory!.getOrCreateInstance());
    

                        }
                            
}


    public setInitialScale(scaleProperties: ScaleProperties){
this.scaleProperties= scaleProperties;
    
}


}
                
            

