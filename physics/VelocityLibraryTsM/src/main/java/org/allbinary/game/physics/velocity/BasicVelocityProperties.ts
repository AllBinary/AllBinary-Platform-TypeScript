
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
//not GWT import const Direction

import { DirectionUtil } from '../../../../../org/allbinary/direction/DirectionUtil.js';
//not GWT import const DirectionUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
//not GWT import const BasicDecimal

import { AxisMathVectorUtil } from '../../../../../org/allbinary/logic/math/vector/AxisMathVectorUtil.js';
//not GWT import const AxisMathVectorUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { Angle } from '../../../../../org/allbinary/math/Angle.js';
//not GWT import const Angle

//not plain js import { PositionStrings } 
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
type PositionStrings<T = any, U = any> = typeof PositionStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PositionStrings;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicVelocityInterface } from './BasicVelocityInterface.js';
//not GWT import - same folder const BasicVelocityInterface

export class BasicVelocityProperties
            extends Object
         implements BasicVelocityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly velocityXBasicDecimal: BasicDecimal;

    readonly velocityYBasicDecimal: BasicDecimal;

    readonly velocityZBasicDecimal: BasicDecimal;

    private readonly axisMathVectorUtil: AxisMathVectorUtil = AxisMathVectorUtil.getInstance()!;

public constructor (){

            super();
        this.velocityXBasicDecimal= new BasicDecimal(0);
    
this.velocityYBasicDecimal= new BasicDecimal(0);
    
this.velocityZBasicDecimal= new BasicDecimal(0);
    
}


    public zero(){
this.velocityXBasicDecimal!.setint(0);
    
this.velocityYBasicDecimal!.setint(0);
    
this.velocityZBasicDecimal!.setint(0);
    
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

    public setVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction){

    let angle: Angle = this.directionUtil!.getAngle(direction)!;;
    

    let otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;;
    
this.setVelocityWithBigDecimal(magnitudeBasicDecimal, angle, otherAngle);
    
}


    public setVelocityWithDirection(magnitude: number, direction: Direction, otherDirection: Direction){

    let angle: Angle = this.directionUtil!.getAngle(direction)!;;
    

    let otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;;
    
this.setVelocity(magnitude, angle, otherAngle);
    
}


    public addVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction){

    let angle: Angle = this.directionUtil!.getAngle(direction)!;;
    

    let otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;;
    
this.addVelocityWithBigDecimal(magnitudeBasicDecimal, angle, otherAngle);
    
}


    public addVelocityWithDirection(magnitude: number, direction: Direction, otherDirection: Direction){

    let angle: Angle = this.directionUtil!.getAngle(direction)!;;
    

    let otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;;
    
this.addVelocity(magnitude, angle, otherAngle);
    
}


    public setVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle){

    let magnitude: number = magnitudeBasicDecimal!.getUnscaled()!;;
    
this.setVelocity(magnitude, angle, otherAngle);
    
}


    public addVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle){

    let magnitude: number = magnitudeBasicDecimal!.getUnscaled()!;;
    
this.addVelocity(magnitude, angle, otherAngle);
    
}


    public setVelocity(magnitude: number, angle: Angle, otherAngle: Angle){
this.setVelocityi(magnitude, globalThis.Math.trunc(angle.getValue()), globalThis.Math.trunc(otherAngle!.getValue()));
    
}


    public addVelocity(magnitude: number, angle: Angle, otherAngle: Angle){
this.addVelocityi(magnitude, globalThis.Math.trunc(angle.getValue()), globalThis.Math.trunc(otherAngle!.getValue()));
    
}


    public setVelocityi(magnitude: number, angle: number, otherAngle: number){

    let xVector: number = (this.axisMathVectorUtil!.calculateX(magnitude, angle) /this.velocityXBasicDecimal!.getScaledFactorValue());;
    

    let yVector: number = (this.axisMathVectorUtil!.calculateY(magnitude, angle) /this.velocityYBasicDecimal!.getScaledFactorValue());;
    

    let zVector: number = (this.axisMathVectorUtil!.calculateZ(magnitude, otherAngle) /this.velocityZBasicDecimal!.getScaledFactorValue());;
    
this.velocityXBasicDecimal!.setlong(xVector);
    
this.velocityYBasicDecimal!.setlong(yVector);
    
this.velocityZBasicDecimal!.setlong(zVector);
    
}


    public addVelocityi(magnitude: number, angle: number, otherAngle: number){

    let xVector: number = (this.axisMathVectorUtil!.calculateX(magnitude, angle) /this.velocityXBasicDecimal!.getScaledFactorValue());;
    

    let yVector: number = (this.axisMathVectorUtil!.calculateY(magnitude, angle) /this.velocityYBasicDecimal!.getScaledFactorValue());;
    

    let zVector: number = (this.axisMathVectorUtil!.calculateZ(magnitude, otherAngle) /this.velocityZBasicDecimal!.getScaledFactorValue());;
    
this.velocityXBasicDecimal!.addlong(xVector);
    
this.velocityYBasicDecimal!.addlong(yVector);
    
this.velocityZBasicDecimal!.addlong(zVector);
    
}


    public toString(): string{

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    let positionStrings: PositionStrings = PositionStrings.getInstance()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    
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
                        return stringBuffer!.toString();;
    
}


}

