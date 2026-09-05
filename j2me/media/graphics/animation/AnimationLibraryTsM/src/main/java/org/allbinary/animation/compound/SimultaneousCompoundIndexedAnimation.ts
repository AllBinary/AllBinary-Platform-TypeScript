
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
//not plain js import { PrimitiveIntUtil } 
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SimultaneousCompoundIndexedAnimation extends IndexedAnimation {
        

    private animationInterfaceArray: Animation[];

public constructor (animationInterfaceArray: Animation[], animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.animationInterfaceArray= animationInterfaceArray;
    
}


    public setFrame(frameIndex: number){

    var indexedAnimation: IndexedAnimation;;
    




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;--index >= 0; )
        {
indexedAnimation= this.animationInterfaceArray[index]! as IndexedAnimation;
    
indexedAnimation!.setFrame(frameIndex);
    
}

}


    public getFrame(): number{

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[0]! as IndexedAnimation;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return indexedAnimation!.getFrame();;
    
}


    public getSize(): number{

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[0]! as IndexedAnimation;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return indexedAnimation!.getSize();;
    
}


    public previousFrame(){

    var indexedAnimation: IndexedAnimation;;
    




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;--index >= 0; )
        {
indexedAnimation= this.animationInterfaceArray[index]! as IndexedAnimation;
    
indexedAnimation!.previousFrame();
    
}

}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


                //@Throws(Exception.constructor)
            
    public nextFrame(){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;--index >= 0; )
        {
this.animationInterfaceArray[index]!.nextFrame();
    
}

}


    public paintXY(graphics: Graphics, x: number, y: number){

    var size: number = this.animationInterfaceArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.animationInterfaceArray[index]!.paintXY(graphics, x, y);
    
}

}


    public paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number){

    var size: number = this.animationInterfaceArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.animationInterfaceArray[index]!.paintThreedXYZ(graphics, x, y, z);
    
}

}


    public getAnimationInterfaceArray(): Animation[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray;
    
}


    public setAnimationInterfaceArray(animationInterfaceArray: Animation[]){
this.animationInterfaceArray= animationInterfaceArray;
    
}


}



