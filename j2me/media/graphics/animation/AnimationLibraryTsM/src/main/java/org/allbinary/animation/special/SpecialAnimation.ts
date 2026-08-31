
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

        


import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      //not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      //not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
import { IndexedAnimationBehavior } from '../../../../org/allbinary/animation/IndexedAnimationBehavior.js';
      //not GWT import const IndexedAnimationBehavior = globalThis.org.allbinary.animation.IndexedAnimationBehavior;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpecialAnimationInterface } from './SpecialAnimationInterface.js';
//not GWT import const SpecialAnimationInterface = globalThis.org.allbinary.animation.special.SpecialAnimationInterface;

                
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



