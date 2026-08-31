
        /* Generated Code Do Not Modify */

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { AllBinaryGameLayer } from '../../../../org/allbinary/game/layer/AllBinaryGameLayer.js';
      //not GWT import const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;

      
import { BasicVelocityProperties } from '../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
      //not GWT import const BasicVelocityProperties = globalThis.org.allbinary.game.physics.velocity.BasicVelocityProperties;

      
//not plain js import { BasicDecimal } from '../../../../org/allbinary/logic/math/BasicDecimal.js';
      const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
//not plain js import { MathUtil } from '../../../../org/allbinary/logic/math/MathUtil.js';
      const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;

      
//not plain js import { ScaleFactorFactory } from '../../../../org/allbinary/logic/math/ScaleFactorFactory.js';
      const ScaleFactorFactory = globalThis.org.allbinary.logic.math.ScaleFactorFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicConstantVelocityMovement } from './BasicConstantVelocityMovement.js';
//not GWT import const  = globalThis.org.allbinary.physics.movement.BasicConstantVelocityMovement;

                
export class PreciseConstantVelocityMovement extends BasicConstantVelocityMovement {
        

    private accumulatedX: number= 0;

    private accumulatedY: number= 0;

    private accumulatedZ: number= 0;

public constructor (basicDecimal: BasicDecimal, velocityProperties: BasicVelocityProperties){
            super(basicDecimal, velocityProperties);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public init(speedBasicDecimal: BasicDecimal, angle: number, otherAngle: number){
}


    private readonly factorValue: number = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_VALUE;

                //@Throws(Exception.constructor)
            
    public process(layer: AllBinaryGameLayer){

    var mathUtil: MathUtil = MathUtil.getInstance()!;;
    

    var velocityProperties: BasicVelocityProperties = this.getVelocityProperties()!;;
    
this.accumulatedX= Math.round((this.accumulatedX +velocityProperties!.getVelocityXBasicDecimalP()!.getUnscaled()));
    
this.accumulatedY= Math.round((this.accumulatedY +velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled()));
    
this.accumulatedZ= Math.round((this.accumulatedZ +velocityProperties!.getVelocityZBasicDecimalP()!.getUnscaled()));
    
layer.moveDXYZ(this.accumulatedX /this.factorValue, this.accumulatedY /this.factorValue, this.accumulatedZ /this.factorValue);
    

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



