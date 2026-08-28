
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
        



            import { Exception } from '../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { PrimitiveIntUtil } from '../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Animation } from './Animation.js';
import { IndexedAnimationInterface } from './IndexedAnimationInterface.js';
import { AnimationBehavior } from './AnimationBehavior.js';

export class IndexedAnimation extends Animation implements IndexedAnimationInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly animationBehaviorP: AnimationBehavior;

protected constructor (animationBehavior: AnimationBehavior){

            super();
        this.animationBehaviorP= animationBehavior;
    
}


    public getAnimationBehavior(): AnimationBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationBehaviorP;
    
}


    public reset(){
this.animationBehaviorP!.reset();
    
this.setFrame(0);
    
}


    public setFrame(index: number){
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public previousFrame(){
}


    public isLastFrame(): boolean{

                        if(this.getFrame() == this.getSize() -1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    public setState(indexedAnimation: IndexedAnimation){
this.setFrame(indexedAnimation!.getFrame());
    
this.setDx(indexedAnimation!.getDx());
    
this.setDy(indexedAnimation!.getDy());
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}



