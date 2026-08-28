
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
        
            import { Exception } from '../../../java/lang/Exception.js';
        
//not game specific package import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { ScaleProperties } from '../../../org/allbinary/media/ScaleProperties.js';
      const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterfaceFactoryInterface } from './AnimationInterfaceFactoryInterface.js';
import { AnimationBehaviorFactory } from './AnimationBehaviorFactory.js';
import { VectorRotationAnimation } from './VectorRotationAnimation.js';
import { Animation } from './Animation.js';

export class VectorRotationAnimationInterfaceFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    private currentPoints: number[][][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;

    readonly animationBehaviorFactory: AnimationBehaviorFactory;

public constructor (currentPoints: number[][][], basicColor: BasicColor, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
        this.currentPoints= currentPoints;
    
this.setBasicColorP(basicColor);
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new VectorRotationAnimation(this.currentPoints, this.getBasicColorP(), this.animationBehaviorFactory!.getOrCreateInstance());
    
}


    setBasicColorP(basicColor: BasicColor){
this.basicColor= basicColor;
    
}


    getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColor;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


}



