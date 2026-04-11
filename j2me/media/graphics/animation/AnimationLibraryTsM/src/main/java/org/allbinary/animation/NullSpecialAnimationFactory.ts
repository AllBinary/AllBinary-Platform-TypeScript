
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
        



import { SpecialAnimation } from "../../../org/allbinary/animation/special/SpecialAnimation.js";

    
import { ScaleProperties } from "../../../org/allbinary/media/ScaleProperties.js";

    

export class NullSpecialAnimationFactory
            extends Object
        
                , AnimationInterfaceFactoryInterface
                , ProceduralAnimationInterfaceFactoryInterface {
        

    private NULL_SPECIAL_ANIMATION_FACTORY: NullSpecialAnimationFactory = new NullSpecialAnimationFactory();
        
        

    public static getFactoryInstance(): NullSpecialAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NULL_SPECIAL_ANIMATION_FACTORY;
    
}

private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SpecialAnimation.getInstance();

                        ;
    
}


                //@Throws(Error::class)
            
    public getInstance(animationInterface: Animation): Animation{
    //var animationInterface = animationInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SpecialAnimation.getInstance();

                        ;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

