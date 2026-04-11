
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
        



import { GameConfigurationCentral } from "../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { AngleFactory } from "../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../org/allbinary/math/AngleInfo.js";

    
import { ScaleProperties } from "../../../org/allbinary/media/ScaleProperties.js";

    

export class RotationAnimationFactory
            extends Object
        
                , AnimationInterfaceFactoryInterface
                , ProceduralAnimationInterfaceFactoryInterface {
        

    private totalAngle: number

    private angleIncrement: number
public constructor (){

            super();
            this.totalAngle= AngleFactory.getInstance()!.TOTAL_ANGLE;
    
this.angleIncrement= (totalAngle /GameConfigurationCentral.getInstance()!.getGameControlFidelity()).toShort();
    
}

public constructor (totalAngle: number, angleIncrement: number){

            super();
            var totalAngle = totalAngle
var angleIncrement = angleIncrement
this.totalAngle= totalAngle;
    
this.angleIncrement= angleIncrement;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullRotationAnimation(AngleInfo.getInstance(this.angleIncrement), this.totalAngle, AnimationBehavior.getInstance());
    
}


                //@Throws(Error::class)
            
    public getInstance(animationInterface: Animation): Animation{
var animationInterface = animationInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullRotationAnimation(AngleInfo.getInstance(this.angleIncrement), this.totalAngle, AnimationBehavior.getInstance());
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

