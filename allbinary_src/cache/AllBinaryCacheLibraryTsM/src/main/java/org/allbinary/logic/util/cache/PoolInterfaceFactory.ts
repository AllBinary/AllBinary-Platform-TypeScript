
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
        
import { PoolInterface } from "./PoolInterface.js";

import { CacheableInterfaceFactoryInterface } from "./CacheableInterfaceFactoryInterface.js";

import { PoolType } from "./PoolType.js";

import { CachePolicy } from "./CachePolicy.js";

export class PoolInterfaceFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface, poolType: PoolType, cachePolicy: CachePolicy): PoolInterface{
var cacheableInterfaceFactoryInterface = cacheableInterfaceFactoryInterface
var poolType = poolType
var cachePolicy = cachePolicy



                            throw new Error("No Such PoolType: " +poolType!.toString())
}

private constructor (){

            super();
            }


}
                
            

