
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
        



import { Direction } from "../../../../../org/allbinary/direction/Direction.js";

    
import { DirectionUtil } from "../../../../../org/allbinary/direction/DirectionUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicDecimal } from "../../../../../org/allbinary/logic/math/BasicDecimal.js";

    
import { AxisMathVectorUtil } from "../../../../../org/allbinary/logic/math/vector/AxisMathVectorUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Angle } from "../../../../../org/allbinary/math/Angle.js";

    
import { PositionStrings } from "../../../../../org/allbinary/math/PositionStrings.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class BasicVelocityProperties
            extends Object
        
                , BasicVelocityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly velocityXBasicDecimal: BasicDecimal

    readonly velocityYBasicDecimal: BasicDecimal

    readonly velocityZBasicDecimal: BasicDecimal

    private readonly axisMathVectorUtil: AxisMathVectorUtil = AxisMathVectorUtil.getInstance()!;
        
        
public constructor (){

            super();
            this.velocityXBasicDecimal= BasicDecimal()
this.velocityYBasicDecimal= BasicDecimal()
this.velocityZBasicDecimal= BasicDecimal()
}


    public zero(){
set(0)
set(0)
set(0)
}


    public getVelocityXBasicDecimalP(): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return velocityXBasicDecimal;
    
}


    public getVelocityYBasicDecimalP(): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return velocityYBasicDecimal;
    
}


    public getVelocityZBasicDecimalP(): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return velocityXBasicDecimal;
    
}


    readonly directionUtil: DirectionUtil = DirectionUtil.getInstance()!;
        
        

    public setVelocity(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction){
    //var magnitudeBasicDecimal = magnitudeBasicDecimal
    //var direction = direction
    //var otherDirection = otherDirection

    var angle: Angle = directionUtil!.getAngle(direction)!;
        
        


    var otherAngle: Angle = directionUtil!.getAngle(otherDirection)!;
        
        

this.setVelocity(magnitudeBasicDecimal, angle, otherAngle)
}


    public setVelocity(magnitude: number, direction: Direction, otherDirection: Direction){
    //var magnitude = magnitude
    //var direction = direction
    //var otherDirection = otherDirection

    var angle: Angle = directionUtil!.getAngle(direction)!;
        
        


    var otherAngle: Angle = directionUtil!.getAngle(otherDirection)!;
        
        

this.setVelocity(magnitude, angle, otherAngle)
}


    public addVelocity(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction){
    //var magnitudeBasicDecimal = magnitudeBasicDecimal
    //var direction = direction
    //var otherDirection = otherDirection

    var angle: Angle = directionUtil!.getAngle(direction)!;
        
        


    var otherAngle: Angle = directionUtil!.getAngle(otherDirection)!;
        
        

this.addVelocity(magnitudeBasicDecimal, angle, otherAngle)
}


    public addVelocity(magnitude: number, direction: Direction, otherDirection: Direction){
    //var magnitude = magnitude
    //var direction = direction
    //var otherDirection = otherDirection

    var angle: Angle = directionUtil!.getAngle(direction)!;
        
        


    var otherAngle: Angle = directionUtil!.getAngle(otherDirection)!;
        
        

this.addVelocity(magnitude, angle, otherAngle)
}


    public setVelocity(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle){
    //var magnitudeBasicDecimal = magnitudeBasicDecimal
    //var angle = angle
    //var otherAngle = otherAngle

    var magnitude: number = magnitudeBasicDecimal!.getUnscaled()!;
        
        

this.setVelocity(magnitude, angle, otherAngle)
}


    public addVelocity(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle){
    //var magnitudeBasicDecimal = magnitudeBasicDecimal
    //var angle = angle
    //var otherAngle = otherAngle

    var magnitude: number = magnitudeBasicDecimal!.getUnscaled()!;
        
        

this.addVelocity(magnitude, angle, otherAngle)
}


    public setVelocity(magnitude: number, angle: Angle, otherAngle: Angle){
    //var magnitude = magnitude
    //var angle = angle
    //var otherAngle = otherAngle
this.setVelocity(magnitude, angle.getValue().toInt(), otherAngle!.getValue().toInt())
}


    public addVelocity(magnitude: number, angle: Angle, otherAngle: Angle){
    //var magnitude = magnitude
    //var angle = angle
    //var otherAngle = otherAngle
this.addVelocity(magnitude, angle.getValue().toInt(), otherAngle!.getValue().toInt())
}


    public setVelocity(magnitude: number, angle: number, otherAngle: number){
    //var magnitude = magnitude
    //var angle = angle
    //var otherAngle = otherAngle

    var xVector: number = (axisMathVectorUtil!.calculateX(magnitude, angle) /velocityXBasicDecimal!.getScaledFactorValue());
        
        


    var yVector: number = (axisMathVectorUtil!.calculateY(magnitude, angle) /velocityYBasicDecimal!.getScaledFactorValue());
        
        


    var zVector: number = (axisMathVectorUtil!.calculateZ(magnitude, otherAngle) /velocityZBasicDecimal!.getScaledFactorValue());
        
        

set(xVector)
set(yVector)
set(zVector)
}


    public addVelocity(magnitude: number, angle: number, otherAngle: number){
    //var magnitude = magnitude
    //var angle = angle
    //var otherAngle = otherAngle

    var xVector: number = (axisMathVectorUtil!.calculateX(magnitude, angle) /velocityXBasicDecimal!.getScaledFactorValue());
        
        


    var yVector: number = (axisMathVectorUtil!.calculateY(magnitude, angle) /velocityYBasicDecimal!.getScaledFactorValue());
        
        


    var zVector: number = (axisMathVectorUtil!.calculateZ(magnitude, otherAngle) /velocityZBasicDecimal!.getScaledFactorValue());
        
        

add(xVector)
add(yVector)
add(zVector)
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        


    var positionStrings: PositionStrings = PositionStrings.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        


    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

append("Velocity ")
append(positionStrings!.X_LABEL)
append(stringUtil!.toString(this.velocityXBasicDecimal))
append(commonSeps!.SPACE)
append(positionStrings!.Y_LABEL)
append(stringUtil!.toString(this.velocityYBasicDecimal))
append(commonSeps!.SPACE)
append(positionStrings!.Z_LABEL)
append(stringUtil!.toString(this.velocityZBasicDecimal))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

