
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

    
import { BasicDecimal } from "../../../../org/allbinary/logic/math/BasicDecimal.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class DelayedConstantVelocityMovement extends BasicConstantVelocityMovement {
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(60);
        
        
public constructor (basicDecimal: BasicDecimal, velocityProperties: BasicVelocityProperties)                        

                            : super(basicDecimal, velocityProperties){

            super();
            var basicDecimal = basicDecimal
var velocityProperties = velocityProperties


                            //For kotlin this is before the body of the constructor.
                    
}


    public init(speedBasicDecimal: BasicDecimal, angle: number, otherAngle: number){
var speedBasicDecimal = speedBasicDecimal
var angle = angle
var otherAngle = otherAngle
}


                @Throws(Exception::class)
            
    public process(layer: AllBinaryGameLayer){
var layer = layer

    
                        if(timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    process(layer)

                                    }
                                
}


}
                
            

