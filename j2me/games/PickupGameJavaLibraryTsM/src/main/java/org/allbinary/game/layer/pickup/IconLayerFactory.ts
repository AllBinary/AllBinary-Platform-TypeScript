
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
        



import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    

export class IconLayerFactory
            extends Object
         {
        

                @Throws(Exception::class)
            
    public static getInstance(animationInterface: Animation, width: number, height: number): IconLayer{
var animationInterface = animationInterface
var width = width
var height = height



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return IconLayer(animationInterface, width, height);
    
}


}
                
            

