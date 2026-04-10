
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
        



import { PrimitiveIntUtil } from "../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class IndexedAnimation extends Animation
                , IndexedAnimationInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly animationBehaviorP: AnimationBehavior
private constructor (){

            super();
            this.animationBehaviorP= AnimationBehavior.getInstance()
}

protected constructor (animationBehavior: AnimationBehavior){

            super();
                //var animationBehavior = animationBehavior
this.animationBehaviorP= animationBehavior
}


    public getAnimationBehavior(): AnimationBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationBehaviorP;
    
}


    public reset(){
this.animationBehaviorP!.reset()
this.this.setFrame(0)
}


    public setFrame(index: number){
    //var index = index
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(Error::class)
            
    public getAnimationSize(): number{



                            throw Error(commonStrings!.NOT_IMPLEMENTED)
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


    public setSequence(sequence: IntArray){
    //var sequence = sequence
}


    public getSequence(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();
    
}


    public setState(indexedAnimation: IndexedAnimation){
    //var indexedAnimation = indexedAnimation
this.this.setFrame(indexedAnimation!.getFrame())
this.this.setDx(indexedAnimation!.getDx())
this.this.setDy(indexedAnimation!.getDy())
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}
                
            

