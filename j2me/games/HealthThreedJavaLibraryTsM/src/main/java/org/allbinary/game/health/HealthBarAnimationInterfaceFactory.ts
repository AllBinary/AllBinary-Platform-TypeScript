
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
        



import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { ProceduralAnimationInterfaceFactoryInterface } from "../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { ScaleProperties } from "../../../../org/allbinary/media/ScaleProperties.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { HealthBarAnimation } from "./HealthBarAnimation.js";

export class HealthBarAnimationInterfaceFactory
            extends Object
         implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {
        
public constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public getInstance(layerInterface: AllBinaryLayer, location: number): HealthBarAnimation{
var layerInterface = layerInterface
var location = location



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HealthBarThreedAnimation(layerInterface, location);
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public getInstance(animationInterface: Animation): Animation{
var animationInterface = animationInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

