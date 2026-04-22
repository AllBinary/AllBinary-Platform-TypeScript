
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
        



import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AbstractArrayListPool } from "./AbstractArrayListPool.js";

import { CacheableInterfaceFactoryInterface } from "./CacheableInterfaceFactoryInterface.js";

import { CacheableInterface } from "./CacheableInterface.js";

export class BasicArrayListPool extends AbstractArrayListPool {
        
public constructor (cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface){
            super(cacheableInterfaceFactoryInterface);
                    var cacheableInterfaceFactoryInterface = cacheableInterfaceFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public clear(){
this.buffers.clear();
    
}


                //@Throws(Error::class)
            
    public remove(key: any = {}): CacheableInterface{
var key = key

    var size: number = this.buffers.size()!;
        
        
;
    

                        if(size > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buffers.remove(size -1);

                         as CacheableInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cacheableInterfaceFactoryInterface!.getInstance(key);

                        ;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public addAll(usedList: BasicArrayList){
var usedList = usedList




                        for (
    var index: number = usedList!.size()!;
        
        
--index >= 0; )
        {

    var anyType: CacheableInterface = usedList!.objectArray[index]! as CacheableInterface;
        
        
;
    
this.add(anyType);
    
}

usedList!.clear();
    
}


                //@Throws(Error::class)
            
    public releaseUsedBackToPool(usedList: BasicArrayList){
var usedList = usedList




                        for (
    var index: number = usedList!.size()!;
        
        
--index >= 0; )
        {

    var list: BasicArrayListCacheable = usedList!.objectArray[index]! as BasicArrayListCacheable;
        
        
;
    

                        if(list.size() == 0)
                        
                                    {
                                    usedList!.remove(index);
    
this.add(list);
    

                                    }
                                
}

}


}
                
            

