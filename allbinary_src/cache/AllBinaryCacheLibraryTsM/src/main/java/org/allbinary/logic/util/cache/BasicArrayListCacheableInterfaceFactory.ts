
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
        



            import { Object } from "../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../java/lang/Exception.js";
        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CacheableInterfaceFactoryInterface } from "./CacheableInterfaceFactoryInterface.js";
import { BasicArrayListCacheable } from "./BasicArrayListCacheable.js";
import { CacheableInterface } from "./CacheableInterface.js";

export class BasicArrayListCacheableInterfaceFactory
            extends Object
         implements CacheableInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    public getInstance(key: any = {}): CacheableInterface{
var key = key



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicArrayListCacheable();
    
}


}
                
            

