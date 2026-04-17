
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
        



import { ScaleProperties } from "../../../org/allbinary/media/ScaleProperties.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { NullAnimationFactory } from "./NullAnimationFactory.js";

import { Animation } from "./Animation.js";

export class AnimationInterfaceFactoryInterfaceComposite
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    private readonly animationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[]
public constructor (basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[]){

            super();
                //var basicAnimationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray
this.animationInterfaceFactoryInterfaceArray= basicAnimationInterfaceFactoryInterfaceArray;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.getFactoryInstance()!.getInstance(0);

                        ;
    
}


    public getAnimationInterfaceFactoryInterfaceArray(): AnimationInterfaceFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterfaceFactoryInterfaceArray;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

