
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { CacheInterface } from '../../../../../org/allbinary/logic/util/cache/CacheInterface.js';
//not GWT import const CacheInterface = globalThis.org.allbinary.logic.util.cache.CacheInterface;

      
import { CacheInterfaceFactory } from '../../../../../org/allbinary/logic/util/cache/CacheInterfaceFactory.js';
//not GWT import const CacheInterfaceFactory = globalThis.org.allbinary.logic.util.cache.CacheInterfaceFactory;

      
import { CachePolicyFactory } from '../../../../../org/allbinary/logic/util/cache/CachePolicyFactory.js';
//not GWT import const CachePolicyFactory = globalThis.org.allbinary.logic.util.cache.CachePolicyFactory;

      
import { CacheTypeFactory } from '../../../../../org/allbinary/logic/util/cache/CacheTypeFactory.js';
//not GWT import const CacheTypeFactory = globalThis.org.allbinary.logic.util.cache.CacheTypeFactory;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageComparisonResultCacheSingleton
            extends Object
         {
        

    private static cacheInterface: CacheInterface = 
                null
            ;

                private static initResult: number = ImageComparisonResultCacheSingleton.init();
                private static init(): number { 
                    

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var STATIC_BLOCK: string = "Static Block";;
    

    var instance: string = "ImageComparisonCacheSingleton";;
    

        try {
            logUtil!.putF(commonStrings!.START, instance, STATIC_BLOCK);
    
ImageComparisonResultCacheSingleton.cacheInterface= CacheInterfaceFactory.getInstance(CacheTypeFactory.getInstance()!.CACHE, CachePolicyFactory.getInstance()!.ONE_MINUTE_FIVE_MAX);
    
logUtil!.putF(commonStrings!.END, instance, STATIC_BLOCK);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, instance, STATIC_BLOCK, e);
    
}



                    return 0;
                }
            
    public static getInstance(): CacheInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageComparisonResultCacheSingleton.cacheInterface;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


}



