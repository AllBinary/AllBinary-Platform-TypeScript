
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
        



import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CachePolicyFactory } from "../../../../../org/allbinary/logic/util/cache/CachePolicyFactory.js";

    
import { PoolInterface } from "../../../../../org/allbinary/logic/util/cache/PoolInterface.js";

    
import { PoolInterfaceFactory } from "../../../../../org/allbinary/logic/util/cache/PoolInterfaceFactory.js";

    
import { PoolTypeFactory } from "../../../../../org/allbinary/logic/util/cache/PoolTypeFactory.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class BufferedImagePoolSingleton
            extends Object
         {
        

    private poolInterface: PoolInterface = 
                null
            ;
        
        

                init{

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var STATIC_BLOCK: string = "Static Block";
        
        
;
    

    var instance: string = "BufferedImagePoolSingleton";
        
        
;
    

        try {
            logUtil!.put(commonStrings!.START, instance, STATIC_BLOCK);
    
poolInterface= PoolInterfaceFactory.getInstance(new BufferedImageCacheableFactory(), PoolTypeFactory.getInstance()!.VECTOR_POOL, CachePolicyFactory.getInstance()!.MAX_TIME_THOUSAND_MAX);
    
logUtil!.put(commonStrings!.END, instance, STATIC_BLOCK);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, instance, STATIC_BLOCK, e);
    
}

}

    public static getInstance(): PoolInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return poolInterface;
    
}

private constructor (){

            super();
            }


}
                
            

