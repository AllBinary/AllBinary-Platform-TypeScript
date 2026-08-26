
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CacheInterface } from '../../../../../../org/allbinary/logic/util/cache/CacheInterface.js';
      const CacheInterface = globalThis.org.allbinary.logic.util.cache.CacheInterface;

      
//not game specific package import { CacheInterfaceFactory } from '../../../../../../org/allbinary/logic/util/cache/CacheInterfaceFactory.js';
      const CacheInterfaceFactory = globalThis.org.allbinary.logic.util.cache.CacheInterfaceFactory;

      
//not game specific package import { CachePolicyFactory } from '../../../../../../org/allbinary/logic/util/cache/CachePolicyFactory.js';
      const CachePolicyFactory = globalThis.org.allbinary.logic.util.cache.CachePolicyFactory;

      
//not game specific package import { CacheTypeFactory } from '../../../../../../org/allbinary/logic/util/cache/CacheTypeFactory.js';
      const CacheTypeFactory = globalThis.org.allbinary.logic.util.cache.CacheTypeFactory;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ConstrainedMotionRectanglesResultsCacheSingleton
            extends Object
         {
        

    private static cacheInterface: CacheInterface = 
                null
            ;

                private static initResult: number = ConstrainedMotionRectanglesResultsCacheSingleton.init();
                private static init(): number { 
                    

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var STATIC_BLOCK: string = "Static Block";;
    

    var instance: string = "MotionRectanglesResultsCacheSingleton";;
    

        try {
            logUtil!.putF(commonStrings!.START, instance, STATIC_BLOCK);
    
ConstrainedMotionRectanglesResultsCacheSingleton.cacheInterface= CacheInterfaceFactory.getInstance(CacheTypeFactory.getInstance()!.CACHE, CachePolicyFactory.getInstance()!.ONE_MINUTE_FIVE_MAX);
    
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
                        return ConstrainedMotionRectanglesResultsCacheSingleton.cacheInterface;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


}
                
            

