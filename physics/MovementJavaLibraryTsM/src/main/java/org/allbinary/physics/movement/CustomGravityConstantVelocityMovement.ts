
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
import { AllBinaryGameLayer } from '../../../../org/allbinary/game/layer/AllBinaryGameLayer.js';
      //not GWT import const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;

      
import { GravityUtil } from '../../../../org/allbinary/game/physics/acceleration/GravityUtil.js';
      //not GWT import const GravityUtil = globalThis.org.allbinary.game.physics.acceleration.GravityUtil;

      
import { VelocityProperties } from '../../../../org/allbinary/game/physics/velocity/VelocityProperties.js';
      //not GWT import const VelocityProperties = globalThis.org.allbinary.game.physics.velocity.VelocityProperties;

      
//not plain js import { BasicDecimal } from '../../../../org/allbinary/logic/math/BasicDecimal.js';
      const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicConstantVelocityMovement } from './BasicConstantVelocityMovement.js';

export class CustomGravityConstantVelocityMovement extends BasicConstantVelocityMovement {
        

    private customGravity: number;

public constructor (speedBasicDecimal: BasicDecimal, customGravity: number){
            super(speedBasicDecimal, new VelocityProperties(Math.round(speedBasicDecimal!.getUnscaled()), Math.round(speedBasicDecimal!.getUnscaled())));
                    

                            //For kotlin this is before the body of the constructor.
                    
this.customGravity= customGravity;
    
}


    private readonly gravityUtil: GravityUtil = GravityUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public process(layer: AllBinaryGameLayer){
super.process(layer);
    
this.gravityUtil!.process(this.getVelocityProperties(), this.customGravity);
    

    var velocityProperties: VelocityProperties = this.getVelocityProperties() as VelocityProperties;;
    
velocityProperties!.limitMaxYForwardVelocity();
    
}


}



