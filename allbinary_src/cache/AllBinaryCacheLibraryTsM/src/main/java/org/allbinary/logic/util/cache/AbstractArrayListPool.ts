
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
        



import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CacheableInterfaceFactoryInterface } from "./CacheableInterfaceFactoryInterface.js";

import { CacheableInterface } from "./CacheableInterface.js";

export class AbstractArrayListPool
            extends Object
         implements PoolInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    buffers: BasicArrayList = new BasicArrayList();
        
        

    cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface
public constructor (cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface){

            super();
            var cacheableInterfaceFactoryInterface = cacheableInterfaceFactoryInterface
this.cacheableInterfaceFactoryInterface= cacheableInterfaceFactoryInterface;
    
}


                //@Throws(Error::class)
            
    public clear(){



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    public remove(key: any = {}): CacheableInterface{
var key = key



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    public add(cacheableInterface: CacheableInterface){
var cacheableInterface = cacheableInterface
buffers.add(cacheableInterface);
    
}


                //@Throws(Error::class)
            
    public add(cacheableInterfaces: CacheableInterface[]){
var cacheableInterfaces = cacheableInterfaces




                        for (
    var index: number = 0;
        
        
index < cacheableInterfaces!.length; index++)
        {
buffers.add(cacheableInterfaces[index]!);
    
}

}


}
                
            

