
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
      //not GWT import const Direction = globalThis.org.allbinary.direction.Direction;

      
import { DirectionUtil } from '../../../../../org/allbinary/direction/DirectionUtil.js';
      //not GWT import const DirectionUtil = globalThis.org.allbinary.direction.DirectionUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
      const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
import { AxisMathVectorUtil } from '../../../../../org/allbinary/logic/math/vector/AxisMathVectorUtil.js';
      //not GWT import const AxisMathVectorUtil = globalThis.org.allbinary.logic.math.vector.AxisMathVectorUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { Angle } from '../../../../../org/allbinary/math/Angle.js';
      const Angle = globalThis.org.allbinary.math.Angle;

      
//not plain js import { PositionStrings } from '../../../../../org/allbinary/math/PositionStrings.js';
      const PositionStrings = globalThis.org.allbinary.math.PositionStrings;

      
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicVelocityInterface } from './BasicVelocityInterface.js';
//not GWT import const BasicVelocityInterface = globalThis.org.allbinary.game.physics.velocity.BasicVelocityInterface;

                
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

    var angle: Angle = this.directionUtil!.getAngle(direction)!;;
    

    var otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;;
    
this.setVelocityWithBigDecimal(magnitudeBasicDecimal, angle, otherAngle);
    
}


    public setVelocityWithDirection(magnitude: number, direction: Direction, otherDirection: Direction){

    var angle: Angle = this.directionUtil!.getAngle(direction)!;;
    

    var otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;;
    
this.setVelocity(magnitude, angle, otherAngle);
    
}


    public addVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction){

    var angle: Angle = this.directionUtil!.getAngle(direction)!;;
    

    var otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;;
    
this.addVelocityWithBigDecimal(magnitudeBasicDecimal, angle, otherAngle);
    
}


    public addVelocityWithDirection(magnitude: number, direction: Direction, otherDirection: Direction){

    var angle: Angle = this.directionUtil!.getAngle(direction)!;;
    

    var otherAngle: Angle = this.directionUtil!.getAngle(otherDirection)!;;
    
this.addVelocity(magnitude, angle, otherAngle);
    
}


    public setVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle){

    var magnitude: number = magnitudeBasicDecimal!.getUnscaled()!;;
    
this.setVelocity(magnitude, angle, otherAngle);
    
}


    public addVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle){

    var magnitude: number = magnitudeBasicDecimal!.getUnscaled()!;;
    
this.addVelocity(magnitude, angle, otherAngle);
    
}


    public setVelocity(magnitude: number, angle: Angle, otherAngle: Angle){
this.setVelocityi(magnitude, Math.round(angle.getValue()), Math.round(otherAngle!.getValue()));
    
}


    public addVelocity(magnitude: number, angle: Angle, otherAngle: Angle){
this.addVelocityi(magnitude, Math.round(angle.getValue()), Math.round(otherAngle!.getValue()));
    
}


    public setVelocityi(magnitude: number, angle: number, otherAngle: number){

    var xVector: number = (this.axisMathVectorUtil!.calculateX(magnitude, angle) /this.velocityXBasicDecimal!.getScaledFactorValue());;
    

    var yVector: number = (this.axisMathVectorUtil!.calculateY(magnitude, angle) /this.velocityYBasicDecimal!.getScaledFactorValue());;
    

    var zVector: number = (this.axisMathVectorUtil!.calculateZ(magnitude, otherAngle) /this.velocityZBasicDecimal!.getScaledFactorValue());;
    
this.velocityXBasicDecimal!.setlong(xVector);
    
this.velocityYBasicDecimal!.setlong(yVector);
    
this.velocityZBasicDecimal!.setlong(zVector);
    
}


    public addVelocityi(magnitude: number, angle: number, otherAngle: number){

    var xVector: number = (this.axisMathVectorUtil!.calculateX(magnitude, angle) /this.velocityXBasicDecimal!.getScaledFactorValue());;
    

    var yVector: number = (this.axisMathVectorUtil!.calculateY(magnitude, angle) /this.velocityYBasicDecimal!.getScaledFactorValue());;
    

    var zVector: number = (this.axisMathVectorUtil!.calculateZ(magnitude, otherAngle) /this.velocityZBasicDecimal!.getScaledFactorValue());;
    
this.velocityXBasicDecimal!.addlong(xVector);
    
this.velocityYBasicDecimal!.addlong(yVector);
    
this.velocityZBasicDecimal!.addlong(zVector);
    
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var positionStrings: PositionStrings = PositionStrings.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    
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



