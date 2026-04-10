
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

    
import { RotationAnimation } from "../../../../org/allbinary/animation/RotationAnimation.js";

    
import { Direction } from "../../../../org/allbinary/direction/Direction.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { Angle } from "../../../../org/allbinary/math/Angle.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    

export class SimultaneousCompoundRotationAnimation extends RotationAnimation {
        

    private animationInterfaceArray: RotationAnimation[]
public constructor (animationInterfaceArray: RotationAnimation[], animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var animationInterfaceArray = animationInterfaceArray
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.animationInterfaceArray= animationInterfaceArray
}


    public setFrame(frameIndex: number){
    //var frameIndex = frameIndex




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.setFrame(frameIndex)
}

}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[0]!.getFrame();
    
}


                //@Throws(Error::class)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[0]!.getAnimationSize();
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[0]!.getSize();
    
}


    public previousFrame(){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.previousFrame()
}

}


                //@Throws(Error::class)
            
    public nextFrame(){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.nextFrame()
}

}


    public previousRotation(){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.previousRotation()
}

}


    public nextRotation(){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.nextRotation()
}

}


    public setSequence(sequence: IntArray){
    //var sequence = sequence
}


    public getSequence(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();
    
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.paint(graphics, x, y)
}

}


    public paintThreed(graphics: Graphics, x: number, y: number, z: number){
    //var graphics = graphics
    //var x = x
    //var y = y
    //var z = z




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.paintThreed(graphics, x, y, z)
}

}


    public setFrame(direction: Direction){
    //var direction = direction




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.setFrame(direction)
}

}


    public setFrame(angle: Angle){
    //var angle = angle




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.setFrame(angle)
}

}


    public adjustFrame(newAngle: Angle){
    //var newAngle = newAngle
this.adjustFrame(newAngle!.getValue())
}


    public adjustFrame(angle: number){
    //var angle = angle




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;
        
        
--index >= 0; )
        {
this.animationInterfaceArray[index]!.adjustFrame(angle)
}

}


    public getAngleInfoP(): AngleInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[0]!.getAngleInfoP();
    
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
                
            

