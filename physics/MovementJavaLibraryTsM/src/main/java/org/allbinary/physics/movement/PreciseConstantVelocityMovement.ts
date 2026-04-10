
        /* Generated Code Do Not Modify */
        



import { AllBinaryGameLayer } from "../../../../org/allbinary/game/layer/AllBinaryGameLayer.js";

    
import { BasicVelocityProperties } from "../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js";

    
import { BasicDecimal } from "../../../../org/allbinary/logic/math/BasicDecimal.js";

    
import { MathUtil } from "../../../../org/allbinary/logic/math/MathUtil.js";

    
import { ScaleFactorFactory } from "../../../../org/allbinary/logic/math/ScaleFactorFactory.js";

    

export class PreciseConstantVelocityMovement extends BasicConstantVelocityMovement {
        

    private accumulatedX: number= 0

    private accumulatedY: number= 0

    private accumulatedZ: number= 0
public constructor (basicDecimal: BasicDecimal, velocityProperties: BasicVelocityProperties)                        

                            : super(basicDecimal, velocityProperties){

            super();
                //var basicDecimal = basicDecimal
    //var velocityProperties = velocityProperties


                            //For kotlin this is before the body of the constructor.
                    
}


    public init(speedBasicDecimal: BasicDecimal, angle: number, otherAngle: number){
    //var speedBasicDecimal = speedBasicDecimal
    //var angle = angle
    //var otherAngle = otherAngle
}


    private readonly factorValue: number = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_VALUE;
        
        

                @Throws(Exception::class)
            
    public process(layer: AllBinaryGameLayer){
    //var layer = layer

    var mathUtil: MathUtil = MathUtil.getInstance()!;
        
        


    var velocityProperties: BasicVelocityProperties = this.getVelocityProperties()!;
        
        

accumulatedX= (accumulatedX +velocityProperties!.getVelocityXBasicDecimalP()!.getUnscaled()).toInt()
accumulatedY= (accumulatedY +velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled()).toInt()
accumulatedZ= (accumulatedZ +velocityProperties!.getVelocityZBasicDecimalP()!.getUnscaled()).toInt()
move(accumulatedX /factorValue, accumulatedY /factorValue, accumulatedZ /factorValue)

    
                        if(mathUtil!.abs(accumulatedX) > factorValue)
                        
                                    {
                                    accumulatedX= 0

                                    }
                                

    
                        if(mathUtil!.abs(accumulatedY) > factorValue)
                        
                                    {
                                    accumulatedY= 0

                                    }
                                

    
                        if(mathUtil!.abs(accumulatedZ) > factorValue)
                        
                                    {
                                    accumulatedZ= 0

                                    }
                                
}


}
                
            

