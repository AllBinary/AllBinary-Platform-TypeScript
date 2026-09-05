
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

        


import { JsType } from '../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Direction } from '../../../org/allbinary/direction/Direction.js';
//not GWT import const Direction = globalThis.org.allbinary.direction.Direction;

      
import { DirectionUtil } from '../../../org/allbinary/direction/DirectionUtil.js';
//not GWT import const DirectionUtil = globalThis.org.allbinary.direction.DirectionUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { Angle } 
const Angle = globalThis.org.allbinary.math.Angle;

      
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not plain js import { FrameUtil } 
const FrameUtil = globalThis.org.allbinary.math.FrameUtil;

      
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IndexedAnimation } from './IndexedAnimation.js';
//not GWT import - same folder const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

                import { RotationAnimationInterface } from './RotationAnimationInterface.js';
//not GWT import - same folder const RotationAnimationInterface = globalThis.org.allbinary.animation.RotationAnimationInterface;

                import { AnimationBehavior } from './AnimationBehavior.js';
//not GWT import - same folder const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

                
export class RotationAnimation extends IndexedAnimation implements RotationAnimationInterface {
        

    readonly frameUtil: FrameUtil = FrameUtil.getInstance()!;

    readonly directionUtil: DirectionUtil = DirectionUtil.getInstance()!;

    readonly angleInfo: AngleInfo;

    circularIndexUtil: CircularIndexUtil;

protected constructor (angleInfo: AngleInfo, circularIndexUtil: CircularIndexUtil, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.angleInfo= angleInfo;
    
this.circularIndexUtil= circularIndexUtil;
    
}


    public nextRotationX(){
}


    public previousRotationX(){
}


    public nextRotation(){
this.angleInfo!.adjustAngle(this.circularIndexUtil!.next());
    
}


    public previousRotation(){
this.angleInfo!.adjustAngle(this.circularIndexUtil!.previous());
    
}


    public nextRotationZ(){
}


    public previousRotationZ(){
}


    public setFrame(index: number){
this.circularIndexUtil!.setIndex(index);
    

    var newFrame: number = this.circularIndexUtil!.getIndex()!;;
    
this.angleInfo!.adjustAngle(newFrame);
    
}


    public setFrameByDirection(direction: Direction){

    var angle: Angle = this.directionUtil!.getFrameAngle(direction)!;;
    
this.adjustFrameToAngle(angle);
    
}


    public setFrameToAngle(angle: Angle){
this.adjustFrameToAngle(angle);
    
}


    public adjustFrameToAngle(angle: Angle){
this.adjustFrame(angle.getValue());
    
}


    public adjustFrame(angle: number){
this.setFrame(this.frameUtil!.getFrameForAngle(angle, Math.round(this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement())));
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getIndex();;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getSize();;
    
}


    public getAngleInfoP(): AngleInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angleInfo;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append(super.toString())!.append("circularIndexUtil: ")!.append(this.circularIndexUtil!.toString())!.append("angleInfo: ")!.append(this.angleInfo!.toString())!.toString();;
    
}


}



