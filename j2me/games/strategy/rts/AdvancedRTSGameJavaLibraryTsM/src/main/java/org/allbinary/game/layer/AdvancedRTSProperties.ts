
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { NoShakeAnimationListener } from '../../../../org/allbinary/animation/transition/shake/NoShakeAnimationListener.js';
      //not GWT import const NoShakeAnimationListener = globalThis.org.allbinary.animation.transition.shake.NoShakeAnimationListener;

      
import { ShakeAnimationListener } from '../../../../org/allbinary/animation/transition/shake/ShakeAnimationListener.js';
      //not GWT import const ShakeAnimationListener = globalThis.org.allbinary.animation.transition.shake.ShakeAnimationListener;

      
import { ShakeAnimationListenerFactory } from '../../../../org/allbinary/animation/transition/shake/ShakeAnimationListenerFactory.js';
      //not GWT import const ShakeAnimationListenerFactory = globalThis.org.allbinary.animation.transition.shake.ShakeAnimationListenerFactory;

      
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
      //not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;

      
import { TickableInterface } from '../../../../org/allbinary/game/tick/TickableInterface.js';
      //not GWT import const TickableInterface = globalThis.org?.allbinary?.game?.tick?.TickableInterface;

      
import { AllBinaryNoVibration } from '../../../../org/allbinary/media/AllBinaryNoVibration.js';
      //not GWT import const AllBinaryNoVibration = globalThis.org.allbinary.media.AllBinaryNoVibration;

      
import { AllBinaryVibration } from '../../../../org/allbinary/media/AllBinaryVibration.js';
      //not GWT import const AllBinaryVibration = globalThis.org.allbinary.media.AllBinaryVibration;

      
import { AllBinaryVibrationME } from '../../../../org/allbinary/media/AllBinaryVibrationME.js';
      //not GWT import const AllBinaryVibrationME = globalThis.org.allbinary.media.AllBinaryVibrationME;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';
//not GWT import const WaypointBehaviorBase = globalThis.org.allbinary.game.layer.WaypointBehaviorBase;

                
export class AdvancedRTSProperties
            extends Object
         {
        

    public static createPropertiesSimulated(): AdvancedRTSProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdvancedRTSProperties(NoShakeAnimationListener.NO_SHAKE_ANIMATION_LISTENER, AllBinaryNoVibration.NO_VIBRATION, 0, new WaypointBehaviorBase());
    
}


    public static createProperties(): AdvancedRTSProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdvancedRTSProperties(ShakeAnimationListenerFactory.getInstance(), AllBinaryVibration.getInstance(), GameConfigurationCentral.getInstance()!.VIBRATION.getValue()!.intValue() *100, new WaypointBehaviorBase());
    
}


    public readonly shakeListener: ShakeAnimationListener;

    public readonly vibration: AllBinaryVibrationME;

    public readonly duration: number;

    public waypointBehaviorBase: TickableInterface;

public constructor (shakeListener: ShakeAnimationListener, vibration: AllBinaryVibrationME, duration: number, waypointBehaviorBase: TickableInterface){

            super();
        this.shakeListener= shakeListener;
    
this.vibration= vibration;
    
this.duration= duration;
    
this.waypointBehaviorBase= waypointBehaviorBase;
    
}


}



