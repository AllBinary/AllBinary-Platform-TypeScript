
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
        



import { CacheableInterface } from "../../../../../org/allbinary/logic/util/cache/CacheableInterface.js";

    
import { CacheableInterfaceFactoryInterface } from "../../../../../org/allbinary/logic/util/cache/CacheableInterfaceFactoryInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class IIOImageCacheableFactory
            extends Object
         implements CacheableInterfaceFactoryInterface {
        
public constructor (){

            super();
        }


    public getInstance(key: any = {}): CacheableInterface{
var key = key



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new IIOImageCacheable(key as String);
    
}


}
                
            

