
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
        



//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Direction } from '../../../org/allbinary/direction/Direction.js';
      const Direction = globalThis.org.allbinary.direction.Direction;

      
//not game specific package import { DirectionUtil } from '../../../org/allbinary/direction/DirectionUtil.js';
      const DirectionUtil = globalThis.org.allbinary.direction.DirectionUtil;

      
//not game specific package import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { Angle } from '../../../org/allbinary/math/Angle.js';
      const Angle = globalThis.org.allbinary.math.Angle;

      
//not game specific package import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not game specific package import { FrameUtil } from '../../../org/allbinary/math/FrameUtil.js';
      const FrameUtil = globalThis.org.allbinary.math.FrameUtil;

      
//not game specific package import { CircularIndexUtil } from '../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IndexedAnimation } from './IndexedAnimation.js';
import { RotationAnimationInterface } from './RotationAnimationInterface.js';
import { AnimationBehavior } from './AnimationBehavior.js';

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
                
            

