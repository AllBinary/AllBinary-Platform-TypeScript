
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
        



import { AllBinaryGameLayer } from "../../../../org/allbinary/game/layer/AllBinaryGameLayer.js";

    
import { BasicVelocityProperties } from "../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { BasicDecimal } from "../../../../org/allbinary/logic/math/BasicDecimal.js";

    
import { AxisMathVectorUtil } from "../../../../org/allbinary/logic/math/vector/AxisMathVectorUtil.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    

export class ConstantVelocityNotifyViewChangeMovement extends Movement {
        

    basicVelocityProperties: BasicVelocityProperties

    private speedBasicDecimal: BasicDecimal

    private readonly axisMathVectorUtil: AxisMathVectorUtil = AxisMathVectorUtil.getInstance()!;
        
        
public constructor (){

            super();
            this.speedBasicDecimal= BasicDecimal.ZERO_BIGDECIMAL
this.basicVelocityProperties= BasicVelocityProperties()
}


    public init(speedBasicDecimal: BasicDecimal, angle: number, otherAngle: number){
    //var speedBasicDecimal = speedBasicDecimal
    //var angle = angle
    //var otherAngle = otherAngle
this.speedBasicDecimal= speedBasicDecimal

    var angleFactory: AngleFactory = AngleFactory.getInstance()!;
        
        

setVelocity(speedBasicDecimal, angleFactory!.getInstance(angle), angleFactory!.getInstance(otherAngle))
}


    public moveOutsideRadius(layer: AllBinaryLayer, radius: number, angle: number, otherAngle: number){
var layer = layer
var radius = radius
var angle = angle
var otherAngle = otherAngle

    var scaleFactorValue: number = this.speedBasicDecimal!.getScaledFactorValue()!;
        
        


    var xVector: number = (axisMathVectorUtil!.calculateX(radius, angle) /scaleFactorValue).toInt();
        
        


    var yVector: number = (axisMathVectorUtil!.calculateY(radius, angle) /scaleFactorValue).toInt();
        
        


    var zVector: number = (axisMathVectorUtil!.calculateZ(radius, otherAngle) /scaleFactorValue).toInt();
        
        

move(xVector, yVector, zVector)
}


                @Throws(Exception::class)
            
    public process(layer: AllBinaryGameLayer){
var layer = layer

    var x: number = this.basicVelocityProperties!.getVelocityXBasicDecimalP()!.getScaled()!;
        
        


    var y: number = this.basicVelocityProperties!.getVelocityYBasicDecimalP()!.getScaled()!;
        
        


    var z: number = this.basicVelocityProperties!.getVelocityZBasicDecimalP()!.getScaled()!;
        
        

move(x, y, z)

    
                        if(x != 0 || y != 0 || z != 0)
                        
                                    {
                                    onViewPositionChangeEvent()

                                    }
                                
}


    public stop(){
zero()
}


}
                
            

