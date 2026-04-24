
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
        
import { AbstractArrayListPool } from "./AbstractArrayListPool.js";

import { CacheableInterfaceFactoryInterface } from "./CacheableInterfaceFactoryInterface.js";

import { CacheableInterface } from "./CacheableInterface.js";

export class BasicArrayListResetablePool extends AbstractArrayListPool {
        
public constructor (cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface){
            super(cacheableInterfaceFactoryInterface);
                    var cacheableInterfaceFactoryInterface = cacheableInterfaceFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public clear(){
}


                //@Throws(Error::class)
            
    public remove(key: any = {}): CacheableInterface{
var key = key

    var size: number = this.buffers.size()!;
        
        
;
    

                        if(size > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buffers.remove(size -1); as CacheableInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cacheableInterfaceFactoryInterface!.getInstance(key);;
    

                        }
                            
}


}
                
            

