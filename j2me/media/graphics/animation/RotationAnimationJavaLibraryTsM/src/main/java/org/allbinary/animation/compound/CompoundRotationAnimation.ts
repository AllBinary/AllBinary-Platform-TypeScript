
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
        
import { GL } from '../../../../javax/microedition/khronos/opengles/GL.js';
      //not GWT import const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      //not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      //not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
      //not GWT import const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
import { Direction } from '../../../../org/allbinary/direction/Direction.js';
      //not GWT import const Direction = globalThis.org.allbinary.direction.Direction;

      
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
//not plain js import { Angle } from '../../../../org/allbinary/math/Angle.js';
      const Angle = globalThis.org.allbinary.math.Angle;

      
//not plain js import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not plain js import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not plain js import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CompoundAnimationInterface } from './CompoundAnimationInterface.js';

export class CompoundRotationAnimation extends RotationAnimation implements CompoundAnimationInterface {
        

    private animationInterfaceArray: RotationAnimation[];

public constructor (animationInterfaceArray: RotationAnimation[], animationBehavior: AnimationBehavior){
            super(AngleInfo.getInstance(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.animationInterfaceArray= animationInterfaceArray;
    
this.circularIndexUtil= CircularIndexUtil.createInstance(this.animationInterfaceArray!.length);
    
}


    public setFrame(index: number){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.setFrame(index);
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.getFrame();;
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.getAnimationSize();;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.getSize();;
    
}


    public previousFrame(){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.previousFrame();
    
}


                //@Throws(Exception.constructor)
            
    public nextFrame(){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.nextFrame();
    
}


    public previousRotation(){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.previousRotation();
    
}


    public nextRotation(){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.nextRotation();
    
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.paintXY(graphics, x, y);
    
}


    public paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.paintThreedXYZ(graphics, x, y, z);
    
}


    public getCurrentAnimation(): IndexedAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!;
    
}


    public nextAnimation(){

    var frame: number = this.getFrame()!;;
    
this.circularIndexUtil!.next();
    
this.setFrame(frame);
    
}


    public previousAnimation(){

    var frame: number = this.getFrame()!;;
    
this.circularIndexUtil!.previous();
    
this.setFrame(frame);
    
}


    public setAnimation(index: number){

    var frame: number = this.getFrame()!;;
    
this.circularIndexUtil!.setIndex(index);
    
this.setFrame(frame);
    
}


    public setFrameByDirection(direction: Direction){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.setFrameByDirection(direction);
    
}


    public setFrameToAngle(angle: Angle){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.setFrameToAngle(angle);
    
}


    public adjustFrameToAngle(newAngle: Angle){
this.adjustFrame(newAngle!.getValue());
    
}


    public adjustFrame(angle: number){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.adjustFrame(angle);
    
}


    public getAngleInfoP(): AngleInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.getAngleInfoP();;
    
}


    public getAnimationInterfaceArray(): RotationAnimation[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray;
    
}


    public setAnimationInterfaceArray(animationInterfaceArray: RotationAnimation[]){
this.animationInterfaceArray= animationInterfaceArray;
    
}


                //@Throws(Exception.constructor)
            
    public set(gl: GL){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;--index >= 0; )
        {
this.animationInterfaceArray[index]!.set(gl);
    
}

}


}



