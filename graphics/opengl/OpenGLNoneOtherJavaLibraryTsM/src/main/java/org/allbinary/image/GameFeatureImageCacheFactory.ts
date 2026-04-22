
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageCacheFactory } from "./ImageCacheFactory.js";

import { ImageCache } from "./ImageCache.js";

export class GameFeatureImageCacheFactory
            extends Object
         {
        

    public static getInstance(): ImageCache{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageCacheFactory.getInstance();

                        ;
    
}


    public static init(){
ImageCacheFactory.init();
    
}


    public static releaseAll(){
ImageCacheFactory.getInstance()!.releaseAll();
    
}


}
                
            

