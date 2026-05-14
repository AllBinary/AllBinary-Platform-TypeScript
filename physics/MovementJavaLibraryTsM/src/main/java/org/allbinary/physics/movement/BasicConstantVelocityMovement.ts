
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
        
import { AllBinaryGameLayer } from '../../../../org/allbinary/game/layer/AllBinaryGameLayer.js';
      
import { BasicVelocityProperties } from '../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
      
import { VelocityInterfaceCompositeInterface } from '../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { BasicDecimal } from '../../../../org/allbinary/logic/math/BasicDecimal.js';
      
import { AxisMathVectorUtil } from '../../../../org/allbinary/logic/math/vector/AxisMathVectorUtil.js';
      
import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Movement } from './Movement.js';

export class BasicConstantVelocityMovement extends Movement implements VelocityInterfaceCompositeInterface {
        

    private velocityProperties: BasicVelocityProperties

    private speedBasicDecimal: BasicDecimal = BasicDecimal.ZERO_BIGDECIMAL;

    private readonly axisMathVectorUtil: AxisMathVectorUtil = AxisMathVectorUtil.getInstance()!;
public constructor (basicDecimal: BasicDecimal, velocityProperties: BasicVelocityProperties){

            super();
        var basicDecimal = basicDecimal
var velocityProperties = velocityProperties
this.setSpeedBasicDecimal(basicDecimal);
    
this.velocityProperties= velocityProperties;
    
}


    public init(speedBasicDecimal: BasicDecimal, angle: number, otherAngle: number){
var speedBasicDecimal = speedBasicDecimal
var angle = angle
var otherAngle = otherAngle
this.speedBasicDecimal= speedBasicDecimal;
    

    var angleFactory: AngleFactory = AngleFactory.getInstance()!;
;
    
this.velocityProperties!.setVelocityWithBigDecimal(speedBasicDecimal, angleFactory!.getAt(angle), angleFactory!.getAt(otherAngle));
    
}


    public moveOutsideRadius(layer: AllBinaryLayer, radius: number, angle: number, otherAngle: number){
var layer = layer
var radius = radius
var angle = angle
var otherAngle = otherAngle

    var scaleFactorValue: number = this.speedBasicDecimal!.getScaledFactorValue()!;
;
    

    var xVector: number = Math.round((this.axisMathVectorUtil!.calculateX(radius, angle) /scaleFactorValue));
;
    

    var yVector: number = Math.round((this.axisMathVectorUtil!.calculateY(radius, angle) /scaleFactorValue));
;
    

    var zVector: number = Math.round((this.axisMathVectorUtil!.calculateZ(radius, otherAngle) /scaleFactorValue));
;
    
layer.moveDXYZ(xVector, yVector, zVector);
    
}


                //@Throws(Exception.constructor)
            
    public process(layer: AllBinaryGameLayer){
var layer = layer
layer.moveDXYZ(this.velocityProperties!.getVelocityXBasicDecimalP()!.getScaled(), this.velocityProperties!.getVelocityYBasicDecimalP()!.getScaled(), this.velocityProperties!.getVelocityZBasicDecimalP()!.getScaled());
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.velocityProperties!.toString();;
    
}


    public stop(){
this.velocityProperties!.zero();
    
}


    public getVelocityProperties(): BasicVelocityProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.velocityProperties;
    
}


    public setVelocityProperties(velocityProperties: BasicVelocityProperties){
var velocityProperties = velocityProperties
this.velocityProperties= velocityProperties;
    
}


    setSpeedBasicDecimal(speedBasicDecimal: BasicDecimal){
var speedBasicDecimal = speedBasicDecimal
this.speedBasicDecimal= speedBasicDecimal;
    
}


    getSpeedBasicDecimal(): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.speedBasicDecimal;
    
}


}
                
            

