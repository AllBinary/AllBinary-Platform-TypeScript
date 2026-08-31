
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
        
//not plain js import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not plain js import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
import { ScaleProperties } from '../../../org/allbinary/media/ScaleProperties.js';
      //not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
//not plain js import { CircularIndexUtil } from '../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterfaceFactoryInterface } from './AnimationInterfaceFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

                import { ProceduralAnimationInterfaceFactoryInterface } from './ProceduralAnimationInterfaceFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

                import { RotationAnimation } from './RotationAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.RotationAnimation;

                import { NullRotationAnimation } from './NullRotationAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.NullRotationAnimation;

                import { IndexedAnimationBehavior } from './IndexedAnimationBehavior.js';
//not GWT import const  = globalThis.org.allbinary.animation.IndexedAnimationBehavior;

                //import { NullRotationAnimation2 } from './NullRotationAnimation2.js';
//not GWT import const  = globalThis.org.allbinary.animation.NullRotationAnimation2;

                import { Animation } from './Animation.js';
//not GWT import const  = globalThis.org.allbinary.animation.Animation;

                
export class NullRotationAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {
        

    private static NULL_ROTATION_ANIMATION_FACTORY: NullRotationAnimationFactory = new NullRotationAnimationFactory();

    public static getFactoryInstance(): NullRotationAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullRotationAnimationFactory.NULL_ROTATION_ANIMATION_FACTORY;
    
}


    public readonly NULL_ROTATION_ANIMATION_ARRAY: RotationAnimation[] = [];

//inner= member=true isStatic=
NullRotationAnimation2 = class extends NullRotationAnimation {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


 constructor (){
            super(AngleInfo.getInstance(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), new IndexedAnimationBehavior(1, 250));
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public paintXY(graphics: Graphics, x: number, y: number){
}


}


    private readonly NULL_ANIMATION: Animation = new this.NullRotationAnimation2();

private constructor (){

            super();
        }


    public getInstance(instanceId: number): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NULL_ANIMATION;
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NULL_ANIMATION;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


}



