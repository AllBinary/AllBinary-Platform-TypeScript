
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
        
import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { ScaleProperties } from '../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const ScaleProperties

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterfaceFactoryInterface } from './AnimationInterfaceFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const AnimationInterfaceFactoryInterface
import { ProceduralAnimationInterfaceFactoryInterface } from './ProceduralAnimationInterfaceFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const ProceduralAnimationInterfaceFactoryInterface
import { IndexedAnimation } from './IndexedAnimation.js';
//sameFolderImports - not GWT import - same folder const IndexedAnimation
import { NullIndexedAnimation } from './NullIndexedAnimation.js';
//sameFolderImports - not GWT import - same folder const NullIndexedAnimation
import { IndexedAnimationBehavior } from './IndexedAnimationBehavior.js';
//sameFolderImports - not GWT import - same folder const IndexedAnimationBehavior
//import { NullIndexedAnimationInner } from './NullIndexedAnimationInner.js';
//sameFolderImports - not GWT import - same folder const NullIndexedAnimationInner
import { Animation } from './Animation.js';
//sameFolderImports - not GWT import - same folder const Animation
type NullIndexedAnimationInner = InstanceType<NullIndexedAnimationFactory['NullIndexedAnimationInner']>;

export class NullIndexedAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {
        

    public static readonly NULL_INDEXED_ANIMATION_ARRAY: IndexedAnimation[] = [];

    private static NULL_INDEXED_ANIMATION_FACTORY: NullIndexedAnimationFactory = new NullIndexedAnimationFactory();

    public static getFactoryInstance(): NullIndexedAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullIndexedAnimationFactory.NULL_INDEXED_ANIMATION_FACTORY;
    
}


//inner= member=true isStatic=
NullIndexedAnimationInner = (() => { const outer$NullIndexedAnimationFactory = this; return class extends NullIndexedAnimation {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


 constructor (){
            super(new IndexedAnimationBehavior(1, 250));
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public paintXY(graphics: Graphics, x: number, y: number){
}


}; })();
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

