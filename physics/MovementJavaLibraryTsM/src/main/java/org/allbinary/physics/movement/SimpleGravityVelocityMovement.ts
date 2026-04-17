
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

    
import { GravityUtil } from "../../../../org/allbinary/game/physics/acceleration/GravityUtil.js";

    
import { VelocityProperties } from "../../../../org/allbinary/game/physics/velocity/VelocityProperties.js";

    
import { BasicDecimal } from "../../../../org/allbinary/logic/math/BasicDecimal.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicConstantVelocityMovement } from "./BasicConstantVelocityMovement.js";

export class SimpleGravityVelocityMovement extends BasicConstantVelocityMovement {
        
public constructor (speedBasicDecimal: BasicDecimal)                        

                            : super(speedBasicDecimal, new VelocityProperties(speedBasicDecimal!.getUnscaled();

                        .toInt(), speedBasicDecimal!.getUnscaled();

                        .toInt())){

            super();
            var speedBasicDecimal = speedBasicDecimal


                            //For kotlin this is before the body of the constructor.
                    
}


    private readonly gravityUtil: GravityUtil = GravityUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public process(layer: AllBinaryGameLayer){
var layer = layer
gravityUtil!.process(this.getVelocityProperties());
    
super.process(layer);
    
}


}
                
            

