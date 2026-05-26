
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { GameConfigurationCentral } from '../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
      
import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
      
import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
      
import { ScaleProperties } from '../../../org/allbinary/media/ScaleProperties.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterfaceFactoryInterface } from './AnimationInterfaceFactoryInterface.js';
import { ProceduralAnimationInterfaceFactoryInterface } from './ProceduralAnimationInterfaceFactoryInterface.js';
import { NullRotationAnimation } from './NullRotationAnimation.js';
import { AnimationBehavior } from './AnimationBehavior.js';
import { Animation } from './Animation.js';

export class RotationAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {
        

    public static createFactory(): RotationAnimationFactory{

    var totalAngle: number = AngleFactory.getInstance()!.TOTAL_ANGLE;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new RotationAnimationFactory(totalAngle, (totalAngle /GameConfigurationCentral.getInstance()!.getGameControlFidelity()));
    
}


    private totalAngle: number;

    private angleIncrement: number;

public constructor (totalAngle: number, angleIncrement: number){

            super();
        this.totalAngle= totalAngle;
    
this.angleIncrement= angleIncrement;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullRotationAnimation.createTotalAngle(AngleInfo.getInstance(this.angleIncrement), this.totalAngle, AnimationBehavior.getInstance());;
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceAnimation(animationInterface: Animation): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullRotationAnimation.createTotalAngle(AngleInfo.getInstance(this.angleIncrement), this.totalAngle, AnimationBehavior.getInstance());;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
}


}
                
            

