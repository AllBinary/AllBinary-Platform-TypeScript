
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
        
import { AnimationInterfaceFactoryInterface } from "./AnimationInterfaceFactoryInterface.js";

import { NullAnimationFactory } from "./NullAnimationFactory.js";

import { Animation } from "./Animation.js";

export class BaseAnimationInterfaceFactoryInterfaceComposite
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    private basicAnimationInterfaceFactoryInterfaceArray: BasicAnimationInterfaceFactoryInterface[]
public constructor (basicAnimationInterfaceFactoryInterfaceArray: BasicAnimationInterfaceFactoryInterface[]){

            super();
        var basicAnimationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray
this.basicAnimationInterfaceFactoryInterfaceArray= basicAnimationInterfaceFactoryInterfaceArray;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.getFactoryInstance()!.getInstance(0);

                        ;
    
}


    public getBasicAnimationInterfaceFactoryInterfaceArray(): BasicAnimationInterfaceFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicAnimationInterfaceFactoryInterfaceArray;
    
}


    public setBasicAnimationInterfaceFactoryInterfaceArray(basicAnimationInterfaceFactoryInterfaceArray: BasicAnimationInterfaceFactoryInterface[]){
var basicAnimationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray
this.basicAnimationInterfaceFactoryInterfaceArray= basicAnimationInterfaceFactoryInterfaceArray;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

