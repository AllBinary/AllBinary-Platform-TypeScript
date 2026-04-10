
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

    

export class RotationAnimation extends IndexedAnimation
                , RotationAnimationInterface {
        

    readonly frameUtil: FrameUtil = FrameUtil.getInstance()!;
        
        

    readonly directionUtil: DirectionUtil = DirectionUtil.getInstance()!;
        
        

    readonly angleInfo: AngleInfo

    circularIndexUtil: CircularIndexUtil
protected constructor (angleInfo: AngleInfo, animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var angleInfo = angleInfo
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.angleInfo= angleInfo
this.circularIndexUtil= CircularIndexUtil.getInstance(360 /angleInfo!.getAngleIncrementInfo()!.getAngleIncrement())
}

protected constructor (angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var angleInfo = angleInfo
    //var totalAngle = totalAngle
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.angleInfo= angleInfo
this.circularIndexUtil= CircularIndexUtil.getInstance(totalAngle /angleInfo!.getAngleIncrementInfo()!.getAngleIncrement())
}

protected constructor (animationBehavior: AnimationBehavior)                        

                            : super(animationBehavior){

            super();
                //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.angleInfo= AngleInfo.getInstance(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE)
this.circularIndexUtil= CircularIndexUtil.getInstance(4)
}


    public nextRotationX(){
}


    public previousRotationX(){
}


    public nextRotation(){
this.angleInfo!.adjustAngle(this.circularIndexUtil!.next())
}


    public previousRotation(){
this.angleInfo!.adjustAngle(this.circularIndexUtil!.previous())
}


    public nextRotationZ(){
}


    public previousRotationZ(){
}


    public setFrame(index: number){
    //var index = index
this.circularIndexUtil!.setIndex(index)

    var newFrame: number = this.circularIndexUtil!.getIndex()!;
        
        

this.angleInfo!.adjustAngle(newFrame)
}


    public setFrame(direction: Direction){
    //var direction = direction

    var angle: Angle = directionUtil!.getFrameAngle(direction)!;
        
        

this.this.adjustFrame(angle)
}


    public setFrame(angle: Angle){
    //var angle = angle
this.this.adjustFrame(angle)
}


    public adjustFrame(angle: Angle){
    //var angle = angle
this.this.adjustFrame(angle.getValue())
}


    public adjustFrame(angle: number){
    //var angle = angle
this.this.setFrame(this.frameUtil!.getFrameForAngle(angle, this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement().toInt()))
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getIndex();
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.circularIndexUtil!.getSize();
    
}


    public getAngleInfoP(): AngleInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angleInfo;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringMaker().
                            append(super.toString())!.append("circularIndexUtil: ")!.append(this.circularIndexUtil!.toString())!.append("angleInfo: ")!.append(this.angleInfo!.toString())!.toString();
    
}


}
                
            

