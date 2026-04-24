
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AutomaticCacheInterface } from "../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js";

    
import { CacheInterface } from "../../../../../../org/allbinary/logic/util/cache/CacheInterface.js";

    
import { CacheInterfaceFactory } from "../../../../../../org/allbinary/logic/util/cache/CacheInterfaceFactory.js";

    
import { CachePolicyFactory } from "../../../../../../org/allbinary/logic/util/cache/CachePolicyFactory.js";

    
import { CacheTypeFactory } from "../../../../../../org/allbinary/logic/util/cache/CacheTypeFactory.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CapturedBufferedImagesCacheSingleton
            extends Object
         {
        

    private cacheInterface: AutomaticCacheInterface = 
                null
            ;
        
        

    public static getInstance(): CacheInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cacheInterface;
    
}


                init{

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var STATIC_BLOCK: string = "Static Block";
        
        
;
    

    var instance: string = "CapturedBufferedImagesCacheSingleton";
        
        
;
    

        try {
            logUtil!.putF(commonStrings!.START, instance, STATIC_BLOCK);
    
cacheInterface= CacheInterfaceFactory.getInstance((), ()); as AutomaticCacheInterface;
    
logUtil!.putF(commonStrings!.END, instance, STATIC_BLOCK);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, instance, STATIC_BLOCK, e);
    
}

}

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
        }


}
                
            

