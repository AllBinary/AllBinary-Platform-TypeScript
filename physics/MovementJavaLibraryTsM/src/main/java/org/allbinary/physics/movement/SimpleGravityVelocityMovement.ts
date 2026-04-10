
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

    

export class SimpleGravityVelocityMovement extends BasicConstantVelocityMovement {
        
public constructor (speedBasicDecimal: BasicDecimal)                        

                            : super(speedBasicDecimal, VelocityProperties(speedBasicDecimal!.getUnscaled().toInt(), speedBasicDecimal!.getUnscaled().toInt())){

            super();
            var speedBasicDecimal = speedBasicDecimal


                            //For kotlin this is before the body of the constructor.
                    
}


    private readonly gravityUtil: GravityUtil = GravityUtil.getInstance()!;
        
        

                @Throws(Exception::class)
            
    public process(layer: AllBinaryGameLayer){
var layer = layer
process(this.getVelocityProperties())
process(layer)
}


}
                
            

