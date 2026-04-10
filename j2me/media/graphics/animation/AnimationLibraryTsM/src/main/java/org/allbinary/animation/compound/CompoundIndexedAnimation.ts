
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
        



import { GL } from "../../../../javax/microedition/khronos/opengles/GL.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { CircularIndexUtil } from "../../../../org/allbinary/util/CircularIndexUtil.js";

    

export class CompoundIndexedAnimation extends IndexedAnimation
                , CompoundAnimationInterface {
        

    private circularIndexUtil: CircularIndexUtil

    private animationInterfaceArray: Animation[]
public constructor (animationInterfaceArray: Animation[], animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var animationInterfaceArray = animationInterfaceArray
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.animationInterfaceArray= animationInterfaceArray
this.circularIndexUtil= CircularIndexUtil.getInstance(this.animationInterfaceArray!.length)
}


    public setFrame(index: number){
    //var index = index

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]! as IndexedAnimation;
        
        

indexedAnimation!.setFrame(index)
}


    public getFrame(): number{

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]! as IndexedAnimation;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return indexedAnimation!.getFrame();
    
}


    public getSize(): number{

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]! as IndexedAnimation;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return indexedAnimation!.getSize();
    
}


    public previousFrame(){

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]! as IndexedAnimation;
        
        

indexedAnimation!.previousFrame()
}


    public setSequence(sequence: IntArray){
var sequence = sequence
}


    public getSequence(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();
    
}


                //@Throws(Error::class)
            
    public nextFrame(){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.nextFrame()
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.paint(graphics, x, y)
}


    public paintThreed(graphics: Graphics, x: number, y: number, z: number){
    //var graphics = graphics
    //var x = x
    //var y = y
    //var z = z
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.paintThreed(graphics, x, y, z)
}


    public getCurrentAnimation(): IndexedAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]! as IndexedAnimation;
    
}


    public nextAnimation(){

    var frame: number = this.getFrame()!;
        
        

this.circularIndexUtil!.next()
this.setFrame(frame)
}


    public previousAnimation(){

    var frame: number = this.getFrame()!;
        
        

this.circularIndexUtil!.previous()
this.setFrame(frame)
}


    public setAnimation(index: number){
    //var index = index

    var frame: number = this.getFrame()!;
        
        

this.circularIndexUtil!.setIndex(index)
this.setFrame(frame)
}


    public getAnimationInterfaceArray(): Animation[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterfaceArray;
    
}


    public setAnimationInterfaceArray(animationInterfaceArray: Animation[]){
    //var animationInterfaceArray = animationInterfaceArray
this.animationInterfaceArray= animationInterfaceArray
}


                //@Throws(Error::class)
            
    public set(gl: GL){
    //var gl = gl




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.set(gl)
}

}


}
                
            

