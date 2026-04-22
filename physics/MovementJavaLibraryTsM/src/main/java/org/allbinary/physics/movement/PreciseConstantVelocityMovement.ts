
        /* Generated Code Do Not Modify */
        



import { AllBinaryGameLayer } from "../../../../org/allbinary/game/layer/AllBinaryGameLayer.js";

    
import { BasicVelocityProperties } from "../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js";

    
import { BasicDecimal } from "../../../../org/allbinary/logic/math/BasicDecimal.js";

    
import { MathUtil } from "../../../../org/allbinary/logic/math/MathUtil.js";

    
import { ScaleFactorFactory } from "../../../../org/allbinary/logic/math/ScaleFactorFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicConstantVelocityMovement } from "./BasicConstantVelocityMovement.js";

export class PreciseConstantVelocityMovement extends BasicConstantVelocityMovement {
        

    private accumulatedX: number= 0

    private accumulatedY: number= 0

    private accumulatedZ: number= 0
public constructor (basicDecimal: BasicDecimal, velocityProperties: BasicVelocityProperties){
            super(basicDecimal, velocityProperties);
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
        
        

                //@Throws(Error::class)
            
    public process(layer: AllBinaryGameLayer){
    //var layer = layer

    var mathUtil: MathUtil = MathUtil.getInstance()!;
        
        
;
    

    var velocityProperties: BasicVelocityProperties = this.getVelocityProperties()!;
        
        
;
    
this.accumulatedX= (this.accumulatedX +velocityProperties!.getVelocityXBasicDecimalP()!.getUnscaled());
    
this.accumulatedY= (this.accumulatedY +velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled());
    
this.accumulatedZ= (this.accumulatedZ +velocityProperties!.getVelocityZBasicDecimalP()!.getUnscaled());
    
layer.move(this.accumulatedX /this.factorValue, this.accumulatedY /this.factorValue, this.accumulatedZ /this.factorValue);
    

                        if(mathUtil!.abs(this.accumulatedX) > this.factorValue)
                        
                                    {
                                    this.accumulatedX= 0;
    

                                    }
                                

                        if(mathUtil!.abs(this.accumulatedY) > this.factorValue)
                        
                                    {
                                    this.accumulatedY= 0;
    

                                    }
                                

                        if(mathUtil!.abs(this.accumulatedZ) > this.factorValue)
                        
                                    {
                                    this.accumulatedZ= 0;
    

                                    }
                                
}


}
                
            

