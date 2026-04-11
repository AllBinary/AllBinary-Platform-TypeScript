
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    

export class SimultaneousCompoundIndexedAnimation extends IndexedAnimation {
        

    private animationInterfaceArray: Animation[]
public constructor (animationInterfaceArray: Animation[], animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var animationInterfaceArray = animationInterfaceArray
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.animationInterfaceArray= animationInterfaceArray;
    
}


    public setFrame(frameIndex: number){
    //var frameIndex = frameIndex

    var indexedAnimation: IndexedAnimation
;
    




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
indexedAnimation= this.animationInterfaceArray[index]! as IndexedAnimation;
    
indexedAnimation!.setFrame(frameIndex);
    
}

}


    public getFrame(): number{

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[0]! as IndexedAnimation;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return indexedAnimation!.getFrame();

                        ;
    
}


    public getSize(): number{

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[0]! as IndexedAnimation;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return indexedAnimation!.getSize();

                        ;
    
}


    public previousFrame(){

    var indexedAnimation: IndexedAnimation
;
    




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
indexedAnimation= this.animationInterfaceArray[index]! as IndexedAnimation;
    
indexedAnimation!.previousFrame();
    
}

}


    public setSequence(sequence: number[]){
    //var sequence = sequence
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();

                        ;
    
}


                //@Throws(Error::class)
            
    public nextFrame(){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.nextFrame();
    
}

}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y

    var size: number = this.animationInterfaceArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.animationInterfaceArray[index]!.paint(graphics, x, y);
    
}

}


    public paintThreed(graphics: Graphics, x: number, y: number, z: number){
    //var graphics = graphics
    //var x = x
    //var y = y
    //var z = z

    var size: number = this.animationInterfaceArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.animationInterfaceArray[index]!.paintThreed(graphics, x, y, z);
    
}

}


    public getAnimationInterfaceArray(): Animation[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterfaceArray;
    
}


    public setAnimationInterfaceArray(animationInterfaceArray: Animation[]){
    //var animationInterfaceArray = animationInterfaceArray
this.animationInterfaceArray= animationInterfaceArray;
    
}


}
                
            

