
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { GL } from '../../../../javax/microedition/khronos/opengles/GL.js';
      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
      
import { Direction } from '../../../../org/allbinary/direction/Direction.js';
      
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      
import { Angle } from '../../../../org/allbinary/math/Angle.js';
      
import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
      
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      
import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CompoundAnimationInterface } from './CompoundAnimationInterface.js';

export class CompoundRotationAnimation extends RotationAnimation implements CompoundAnimationInterface {
        

    private animationInterfaceArray: RotationAnimation[]
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


    public paintThreed(graphics: Graphics, x: number, y: number, z: number){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.paintThreed(graphics, x, y, z);
    
}


    public getCurrentAnimation(): IndexedAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!;
    
}


    public nextAnimation(){

    var frame: number = this.getFrame()!;
;
    
this.circularIndexUtil!.next();
    
this.setFrame(frame);
    
}


    public previousAnimation(){

    var frame: number = this.getFrame()!;
;
    
this.circularIndexUtil!.previous();
    
this.setFrame(frame);
    
}


    public setAnimation(index: number){

    var frame: number = this.getFrame()!;
;
    
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
                ;
--index >= 0; )
        {
this.animationInterfaceArray[index]!.set(gl);
    
}

}


}
                
            

