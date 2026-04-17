
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
        



import { ImageCache } from "../../../../org/allbinary/image/ImageCache.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLImageCacheFactory
            extends Object
         {
        

    private static readonly IMAGE_CACHE: ImageCache = new OpenGLImageCache();
        
        

    public static getInstance(): ImageCache{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return IMAGE_CACHE;
    
}


    public static init(){
}


}
                
            

