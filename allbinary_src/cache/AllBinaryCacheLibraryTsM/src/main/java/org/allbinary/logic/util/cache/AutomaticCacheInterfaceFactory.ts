
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2007 AllBinary 
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
        
import { AutomaticCacheInterface } from "./AutomaticCacheInterface.js";

import { CacheableInterfaceFactoryInterface } from "./CacheableInterfaceFactoryInterface.js";

import { CacheType } from "./CacheType.js";

import { CachePolicy } from "./CachePolicy.js";

export class AutomaticCacheInterfaceFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface, cacheType: CacheType, cachePolicy: CachePolicy): AutomaticCacheInterface{
var cacheableInterfaceFactoryInterface = cacheableInterfaceFactoryInterface
var cacheType = cacheType
var cachePolicy = cachePolicy



                            throw new Error("No such " +cacheType!.toString())
}

private constructor (){

            super();
        }


}
                
            

