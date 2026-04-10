
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

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { RotationAnimation } from "../../../../org/allbinary/animation/RotationAnimation.js";

    
import { Direction } from "../../../../org/allbinary/direction/Direction.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { Angle } from "../../../../org/allbinary/math/Angle.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { CircularIndexUtil } from "../../../../org/allbinary/util/CircularIndexUtil.js";

    

export class CompoundRotationAnimation extends RotationAnimation
                , CompoundAnimationInterface {
        

    private animationInterfaceArray: RotationAnimation[]
public constructor (animationInterfaceArray: RotationAnimation[], animationBehavior: AnimationBehavior)                        

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
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.setFrame(index)
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.getFrame();
    
}


                //@Throws(Error::class)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.getAnimationSize();
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.getSize();
    
}


    public previousFrame(){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.previousFrame()
}


                //@Throws(Error::class)
            
    public nextFrame(){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.nextFrame()
}


    public previousRotation(){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.previousRotation()
}


    public nextRotation(){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.nextRotation()
}


    public setSequence(sequence: IntArray){
var sequence = sequence
}


    public getSequence(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();
    
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
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!;
    
}


    public nextAnimation(){

    var frame: number = this.getFrame()!;
        
        

this.circularIndexUtil!.next()
this.this.setFrame(frame)
}


    public previousAnimation(){

    var frame: number = this.getFrame()!;
        
        

this.circularIndexUtil!.previous()
this.this.setFrame(frame)
}


    public setAnimation(index: number){
    //var index = index

    var frame: number = this.getFrame()!;
        
        

this.circularIndexUtil!.setIndex(index)
this.this.setFrame(frame)
}


    public setFrame(direction: Direction){
    //var direction = direction
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.setFrame(direction)
}


    public setFrame(angle: Angle){
    //var angle = angle
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.setFrame(angle)
}


    public adjustFrame(newAngle: Angle){
    //var newAngle = newAngle
this.this.adjustFrame(newAngle!.getValue())
}


    public adjustFrame(angle: number){
    //var angle = angle
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.adjustFrame(angle)
}


    public getAngleInfoP(): AngleInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.getAngleInfoP();
    
}


    public getAnimationInterfaceArray(): RotationAnimation[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterfaceArray;
    
}


    public setAnimationInterfaceArray(animationInterfaceArray: RotationAnimation[]){
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
                
            

