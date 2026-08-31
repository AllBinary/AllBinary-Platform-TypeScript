
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

      
import { ScaleProperties } from '../../../org/allbinary/media/ScaleProperties.js';
      //not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterfaceFactoryInterface } from './AnimationInterfaceFactoryInterface.js';
//not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

                import { ProceduralAnimationInterfaceFactoryInterface } from './ProceduralAnimationInterfaceFactoryInterface.js';
//not GWT import const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

                import { IndexedAnimationInterface } from './IndexedAnimationInterface.js';
//not GWT import const IndexedAnimationInterface = globalThis.org.allbinary.animation.IndexedAnimationInterface;

                import { NullIndexedAnimation } from './NullIndexedAnimation.js';
//not GWT import const NullIndexedAnimation = globalThis.org.allbinary.animation.NullIndexedAnimation;

                import { IndexedAnimationBehavior } from './IndexedAnimationBehavior.js';
//not GWT import const IndexedAnimationBehavior = globalThis.org.allbinary.animation.IndexedAnimationBehavior;

                //import { NullIndexedAnimationInner } from './NullIndexedAnimationInner.js';
//not GWT import const NullIndexedAnimationInner = globalThis.org.allbinary.animation.NullIndexedAnimationInner;

                import { Animation } from './Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

                
export class NullIndexedAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {
        

    public static readonly NULL_INDEXED_ANIMATION_ARRAY: IndexedAnimationInterface[] = [];

    private static NULL_INDEXED_ANIMATION_FACTORY: NullIndexedAnimationFactory = new NullIndexedAnimationFactory();

    public static getFactoryInstance(): NullIndexedAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullIndexedAnimationFactory.NULL_INDEXED_ANIMATION_FACTORY;
    
}


//inner= member=true isStatic=
NullIndexedAnimationInner = class extends NullIndexedAnimation {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


 constructor (){
            super(new IndexedAnimationBehavior(1, 250));
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public paintXY(graphics: Graphics, x: number, y: number){
}


}


    private readonly NULL_ANIMATION: Animation = new this.NullIndexedAnimationInner();

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
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



