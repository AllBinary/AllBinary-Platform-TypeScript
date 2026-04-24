
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
        



import { Direction } from "../../../org/allbinary/direction/Direction.js";

    
import { DirectionUtil } from "../../../org/allbinary/direction/DirectionUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { Angle } from "../../../org/allbinary/math/Angle.js";

    
import { AngleFactory } from "../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../org/allbinary/math/AngleInfo.js";

    
import { FrameUtil } from "../../../org/allbinary/math/FrameUtil.js";

    
import { CircularIndexUtil } from "../../../org/allbinary/util/CircularIndexUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { IndexedAnimation } from "./IndexedAnimation.js";

import { RotationAnimationInterface } from "./RotationAnimationInterface.js";

import { AnimationBehavior } from "./AnimationBehavior.js";

export class RotationAnimation extends IndexedAnimation implements RotationAnimationInterface {
        

    readonly frameUtil: FrameUtil = FrameUtil.getInstance()!;
        
        

    readonly directionUtil: DirectionUtil = DirectionUtil.getInstance()!;
        
        

    readonly angleInfo: AngleInfo

    circularIndexUtil: CircularIndexUtil
protected constructor (angleInfo: AngleInfo, circularIndexUtil: CircularIndexUtil, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                        //var angleInfo = angleInfo
    //var circularIndexUtil = circularIndexUtil
    //var animationBehavior = animationBehavior


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
    //var index = index
this.circularIndexUtil!.setIndex(index);
    

    var newFrame: number = this.circularIndexUtil!.getIndex()!;
        
        
;
    
this.angleInfo!.adjustAngle(newFrame);
    
}


    public setFrame(direction: Direction){
    //var direction = direction

    var angle: Angle = this.directionUtil!.getFrameAngle(direction)!;
        
        
;
    
this.adjustFrame(angle);
    
}


    public setFrame(angle: Angle){
    //var angle = angle
this.adjustFrame(angle);
    
}


    public adjustFrame(angle: Angle){
    //var angle = angle
this.adjustFrame(angle.getValue());
    
}


    public adjustFrame(angle: number){
    //var angle = angle
this.setFrame(this.frameUtil!.getFrameForAngle(angle, this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()));
    
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
                        return new StringMaker().
                            append(super.toString())!.append("circularIndexUtil: ")!.append(this.circularIndexUtil!.toString())!.append("angleInfo: ")!.append(this.angleInfo!.toString())!.toString();;
    
}


}
                
            

