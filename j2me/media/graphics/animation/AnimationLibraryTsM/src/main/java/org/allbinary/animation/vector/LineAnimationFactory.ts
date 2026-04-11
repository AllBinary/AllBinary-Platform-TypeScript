
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

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { ScaleProperties } from "../../../../org/allbinary/media/ScaleProperties.js";

    

export class LineAnimationFactory
            extends Object
        
                , AnimationInterfaceFactoryInterface {
        

    private basicColor: BasicColor
public constructor (basicColor: BasicColor){

            super();
            var basicColor = basicColor
this.basicColor= basicColor;
    
}


                //@Throws(Error::class)
            
    public getInstance(instanceId: number): Animation{
    //var instanceId = instanceId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LineAnimation(this.basicColor);
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
    //var scaleProperties = scaleProperties
}


}
                
            

