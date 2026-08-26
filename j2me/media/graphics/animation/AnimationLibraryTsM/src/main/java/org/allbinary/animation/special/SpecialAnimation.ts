
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
        



//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not game specific package import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
//not game specific package import { IndexedAnimationBehavior } from '../../../../org/allbinary/animation/IndexedAnimationBehavior.js';
      const IndexedAnimationBehavior = globalThis.org.allbinary.animation.IndexedAnimationBehavior;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpecialAnimationInterface } from './SpecialAnimationInterface.js';

export class SpecialAnimation extends IndexedAnimation implements SpecialAnimationInterface {
        

    private static readonly NULL_SPECIAL_ANIMATION: SpecialAnimation = new SpecialAnimation(new IndexedAnimationBehavior(1, 250));

    public static getInstance(): SpecialAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SpecialAnimation.NULL_SPECIAL_ANIMATION;
    
}


public constructor (animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public nextFrame(){

    var indexedAnimationBehavior: IndexedAnimationBehavior = (this.animationBehaviorP as IndexedAnimationBehavior);;
    
indexedAnimationBehavior!.loopIndex++;
    
}


    public setLastFrame(){
}


    public isComplete(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public open(){
}


    public close(){
}


    public process(){
}


}
                
            

