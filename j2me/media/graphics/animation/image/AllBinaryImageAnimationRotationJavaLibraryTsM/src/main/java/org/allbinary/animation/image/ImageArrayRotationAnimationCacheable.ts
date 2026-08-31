
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      //not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { CacheableInterface } from '../../../../org/allbinary/logic/util/cache/CacheableInterface.js';
      //not GWT import const CacheableInterface = globalThis.org.allbinary.logic.util.cache.CacheableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdjustedImageArrayRotationAnimation } from './AdjustedImageArrayRotationAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.image.AdjustedImageArrayRotationAnimation;

                import { ImageArrayRotationAnimationInfo } from './ImageArrayRotationAnimationInfo.js';
//not GWT import const  = globalThis.org.allbinary.animation.image.ImageArrayRotationAnimationInfo;

                
export class ImageArrayRotationAnimationCacheable extends AdjustedImageArrayRotationAnimation implements CacheableInterface {
        

public constructor (anyType: any = {}, animationBehavior: AnimationBehavior){
            super((anyType as ImageArrayRotationAnimationInfo).getImageArray(), (anyType as ImageArrayRotationAnimationInfo).getAngleInfoP(), (anyType as ImageArrayRotationAnimationInfo).getTotalAngle(), (anyType as ImageArrayRotationAnimationInfo).getDx(), (anyType as ImageArrayRotationAnimationInfo).getDy(), animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


}



