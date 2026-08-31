
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

        


            import { Object } from '../../../java/lang/Object.js';
        
import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VectorAnimationFactoryInterface } from './VectorAnimationFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.animation.VectorAnimationFactoryInterface;

                import { VectorAnimation } from './VectorAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.VectorAnimation;

                import { AnimationBehavior } from './AnimationBehavior.js';
//not GWT import const  = globalThis.org.allbinary.animation.AnimationBehavior;

                
export class VectorAnimationFactory
            extends Object
         implements VectorAnimationFactoryInterface {
        

    public getInstance(points: number[][][], basicColor: BasicColor): VectorAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new VectorAnimation(points, basicColor, AnimationBehavior.getInstance());
    
}


}



