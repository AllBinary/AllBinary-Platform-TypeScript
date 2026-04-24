
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { NoShakeAnimationListener } from "../../../../org/allbinary/animation/transition/shake/NoShakeAnimationListener.js";

    
import { ShakeAnimationListener } from "../../../../org/allbinary/animation/transition/shake/ShakeAnimationListener.js";

    
import { ShakeAnimationListenerFactory } from "../../../../org/allbinary/animation/transition/shake/ShakeAnimationListenerFactory.js";

    
import { GameConfigurationCentral } from "../../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { TickableInterface } from "../../../../org/allbinary/game/tick/TickableInterface.js";

    
import { AllBinaryNoVibration } from "../../../../org/allbinary/media/AllBinaryNoVibration.js";

    
import { AllBinaryVibration } from "../../../../org/allbinary/media/AllBinaryVibration.js";

    
import { AllBinaryVibrationME } from "../../../../org/allbinary/media/AllBinaryVibrationME.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AdvancedRTSProperties
            extends Object
         {
        

    public static createSimulated(): AdvancedRTSProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdvancedRTSProperties(NoShakeAnimationListener.NO_SHAKE_ANIMATION_LISTENER, AllBinaryNoVibration.NO_VIBRATION, 0, new WaypointBehaviorBase());
    
}


    public static create(): AdvancedRTSProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdvancedRTSProperties(ShakeAnimationListenerFactory.getInstance(), AllBinaryVibration.getInstance(), GameConfigurationCentral.getInstance()!.VIBRATION.getValue()!.toInt() *100, new WaypointBehaviorBase());
    
}


    public readonly shakeListener: ShakeAnimationListener

    public readonly vibration: AllBinaryVibrationME

    public readonly duration: number

    public waypointBehaviorBase: TickableInterface
public constructor (shakeListener: ShakeAnimationListener, vibration: AllBinaryVibrationME, duration: number, waypointBehaviorBase: TickableInterface){

            super();
            //var shakeListener = shakeListener
    //var vibration = vibration
    //var duration = duration
    //var waypointBehaviorBase = waypointBehaviorBase
this.shakeListener= shakeListener;
    
this.vibration= vibration;
    
this.duration= duration;
    
this.waypointBehaviorBase= waypointBehaviorBase;
    
}


}
                
            

