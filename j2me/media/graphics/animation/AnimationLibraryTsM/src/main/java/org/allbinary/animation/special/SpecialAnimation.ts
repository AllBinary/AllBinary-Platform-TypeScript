
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
        



import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { IndexedAnimationBehavior } from "../../../../org/allbinary/animation/IndexedAnimationBehavior.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SpecialAnimation extends IndexedAnimation implements SpecialAnimationInterface {
        

    private static readonly NULL_SPECIAL_ANIMATION: SpecialAnimation = new SpecialAnimation(new IndexedAnimationBehavior(1, 250));
        
        

    public static getInstance(): SpecialAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NULL_SPECIAL_ANIMATION;
    
}

public constructor (animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}


    public nextFrame(){

    var indexedAnimationBehavior: IndexedAnimationBehavior = (this.animationBehaviorP as IndexedAnimationBehavior);
        
        
;
    
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
                
            

