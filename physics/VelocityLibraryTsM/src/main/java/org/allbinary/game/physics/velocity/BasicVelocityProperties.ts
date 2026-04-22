
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicVelocityInterface } from "./BasicVelocityInterface.js";

export class BasicVelocityProperties
            extends Object
         implements BasicVelocityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly velocityXBasicDecimal: BasicDecimal

    readonly velocityYBasicDecimal: BasicDecimal

    readonly velocityZBasicDecimal: BasicDecimal

    private readonly axisMathVectorUtil: AxisMathVectorUtil = AxisMathVectorUtil.getInstance()!;
        
        
public constructor (){

            super();
        this.velocityXBasicDecimal= new BasicDecimal();
    
this.velocityYBasicDecimal= new BasicDecimal();
    
this.velocityZBasicDecimal= new BasicDecimal();
    
}


    public zero(){
this.velocityXBasicDecimal!.set(0);
    
this.velocityYBasicDecimal!.set(0);
    
this.velocityZBasicDecimal!.set(0);
    
}


    public getVelocityXBasicDecimalP(): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.velocityXBasicDecimal;
    
}


    public getVelocityYBasicDecimalP(): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.velocityYBasicDecimal;
    
}


    public getVelocityZBasicDecimalP(): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.velocityZBasicDecimal;
    
}


    readonly directionUtil: DirectionUtil = DirectionUtil.getInstance()!;
        
        

    public setVelocity(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction){
    //var magnitudeBasicDecimal = magnitudeBasicDecimal
    //var direction = direction
    //var otherDirection = otherDirection

    var angle: Angle = this.directionUtil!.getAngle(direction)!;
        
        
;
    

    var otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;
        
        
;
    
this.setVelocity(magnitudeBasicDecimal, angle, otherAngle);
    
}


    public setVelocity(magnitude: number, direction: Direction, otherDirection: Direction){
    //var magnitude = magnitude
    //var direction = direction
    //var otherDirection = otherDirection

    var angle: Angle = this.directionUtil!.getAngle(direction)!;
        
        
;
    

    var otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;
        
        
;
    
this.setVelocity(magnitude, angle, otherAngle);
    
}


    public addVelocity(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction){
    //var magnitudeBasicDecimal = magnitudeBasicDecimal
    //var direction = direction
    //var otherDirection = otherDirection

    var angle: Angle = this.directionUtil!.getAngle(direction)!;
        
        
;
    

    var otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;
        
        
;
    
this.addVelocity(magnitudeBasicDecimal, angle, otherAngle);
    
}


    public addVelocity(magnitude: number, direction: Direction, otherDirection: Direction){
    //var magnitude = magnitude
    //var direction = direction
    //var otherDirection = otherDirection

    var angle: Angle = this.directionUtil!.getAngle(direction)!;
        
        
;
    

    var otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;
        
        
;
    
this.addVelocity(magnitude, angle, otherAngle);
    
}


    public setVelocity(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle){
    //var magnitudeBasicDecimal = magnitudeBasicDecimal
    //var angle = angle
    //var otherAngle = otherAngle

    var magnitude: number = magnitudeBasicDecimal!.getUnscaled()!;
        
        
;
    
this.setVelocity(magnitude, angle, otherAngle);
    
}


    public addVelocity(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle){
    //var magnitudeBasicDecimal = magnitudeBasicDecimal
    //var angle = angle
    //var otherAngle = otherAngle

    var magnitude: number = magnitudeBasicDecimal!.getUnscaled()!;
        
        
;
    
this.addVelocity(magnitude, angle, otherAngle);
    
}


    public setVelocity(magnitude: number, angle: Angle, otherAngle: Angle){
    //var magnitude = magnitude
    //var angle = angle
    //var otherAngle = otherAngle
this.setVelocity(magnitude, angle.getValue();

                        , otherAngle!.getValue();

                        );
    
}


    public addVelocity(magnitude: number, angle: Angle, otherAngle: Angle){
    //var magnitude = magnitude
    //var angle = angle
    //var otherAngle = otherAngle
this.addVelocity(magnitude, angle.getValue();

                        , otherAngle!.getValue();

                        );
    
}


    public setVelocity(magnitude: number, angle: number, otherAngle: number){
    //var magnitude = magnitude
    //var angle = angle
    //var otherAngle = otherAngle

    var xVector: number = (this.axisMathVectorUtil!.calculateX(magnitude, angle) /this.velocityXBasicDecimal!.getScaledFactorValue());
        
        
;
    

    var yVector: number = (this.axisMathVectorUtil!.calculateY(magnitude, angle) /this.velocityYBasicDecimal!.getScaledFactorValue());
        
        
;
    

    var zVector: number = (this.axisMathVectorUtil!.calculateZ(magnitude, otherAngle) /this.velocityZBasicDecimal!.getScaledFactorValue());
        
        
;
    
this.velocityXBasicDecimal!.set(xVector);
    
this.velocityYBasicDecimal!.set(yVector);
    
this.velocityZBasicDecimal!.set(zVector);
    
}


    public addVelocity(magnitude: number, angle: number, otherAngle: number){
    //var magnitude = magnitude
    //var angle = angle
    //var otherAngle = otherAngle

    var xVector: number = (this.axisMathVectorUtil!.calculateX(magnitude, angle) /this.velocityXBasicDecimal!.getScaledFactorValue());
        
        
;
    

    var yVector: number = (this.axisMathVectorUtil!.calculateY(magnitude, angle) /this.velocityYBasicDecimal!.getScaledFactorValue());
        
        
;
    

    var zVector: number = (this.axisMathVectorUtil!.calculateZ(magnitude, otherAngle) /this.velocityZBasicDecimal!.getScaledFactorValue());
        
        
;
    
this.velocityXBasicDecimal!.add(xVector);
    
this.velocityYBasicDecimal!.add(yVector);
    
this.velocityZBasicDecimal!.add(zVector);
    
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var positionStrings: PositionStrings = PositionStrings.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    
stringBuffer!.append("Velocity ");
    
stringBuffer!.append(positionStrings!.X_LABEL);
    
stringBuffer!.append(stringUtil!.toString(this.velocityXBasicDecimal));
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.Y_LABEL);
    
stringBuffer!.append(stringUtil!.toString(this.velocityYBasicDecimal));
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.Z_LABEL);
    
stringBuffer!.append(stringUtil!.toString(this.velocityZBasicDecimal));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

