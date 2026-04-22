
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
        
import { CacheableInterfaceFactoryInterface } from "./CacheableInterfaceFactoryInterface.js";

import { CacheableInterface } from "./CacheableInterface.js";

export class NoCacheableFactory
            extends Object
         implements CacheableInterfaceFactoryInterface {
        
public constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public getInstance(key: any = {}): CacheableInterface{
var key = key



                            throw new Error("This Factory Does Not")
}


}
                
            

