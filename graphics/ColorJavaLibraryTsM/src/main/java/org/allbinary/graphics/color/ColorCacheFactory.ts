
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AutomaticCacheInterface } from "../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js";

    
import { AutomaticCacheInterfaceFactory } from "../../../../org/allbinary/logic/util/cache/AutomaticCacheInterfaceFactory.js";

    
import { CachePolicyFactory } from "../../../../org/allbinary/logic/util/cache/CachePolicyFactory.js";

    
import { CacheTypeFactory } from "../../../../org/allbinary/logic/util/cache/CacheTypeFactory.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ColorCacheFactory
            extends Object
         {
        

    private cacheInterface: AutomaticCacheInterface = 
                null
            ;
        
        

                init{

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var STATIC_BLOCK: string = "Static Block";
        
        
;
    

        try {
            logUtil!.putF(commonStrings!.START, ColorCacheFactory::class, STATIC_BLOCK);
    
cacheInterface= AutomaticCacheInterfaceFactory.getInstance(new ColorCacheableFactory(), CacheTypeFactory.getInstance()!.CACHE, CachePolicyFactory.getInstance()!.THIRTY_MINUTES_TEN_THOUSAND_MAX);
    
logUtil!.putF(commonStrings!.END, ColorCacheFactory::class, STATIC_BLOCK);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, ColorCacheFactory::class, STATIC_BLOCK, e);
    
}

}

    public static getInstance(): AutomaticCacheInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cacheInterface;
    
}

private constructor (){

            super();
        }


}
                
            

