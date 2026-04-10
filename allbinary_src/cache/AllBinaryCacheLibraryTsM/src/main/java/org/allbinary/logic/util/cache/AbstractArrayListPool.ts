
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

    

export class AbstractArrayListPool
            extends Object
        
                , PoolInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    buffers: BasicArrayList = new BasicArrayList();
        
        

    cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface
public constructor (cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface){

            super();
            var cacheableInterfaceFactoryInterface = cacheableInterfaceFactoryInterface
this.cacheableInterfaceFactoryInterface= cacheableInterfaceFactoryInterface
}


                @Throws(Exception::class)
            
    public clear(){



                            throw Exception(commonStrings!.NOT_IMPLEMENTED)
}


                @Throws(Exception::class)
            
    public remove(key: any = {}): CacheableInterface{
var key = key



                            throw Exception(commonStrings!.NOT_IMPLEMENTED)
}


                @Throws(Exception::class)
            
    public add(cacheableInterface: CacheableInterface){
var cacheableInterface = cacheableInterface
add(cacheableInterface)
}


                @Throws(Exception::class)
            
    public add(cacheableInterfaces: CacheableInterface[]){
var cacheableInterfaces = cacheableInterfaces




                        for (
    var index: number = 0;
        
        
index < cacheableInterfaces!.length; index++)
        {
add(cacheableInterfaces[index]!)
}

}


}
                
            

