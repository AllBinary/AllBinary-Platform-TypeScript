
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PlatformImage } from "./PlatformImage.js";

export class PreLoadPlatformImage extends PlatformImage {
        

    private static readonly instance: PreLoadPlatformImage = new PreLoadPlatformImage();
        
        

    public static getInstance(): PreLoadPlatformImage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


}
                
            

