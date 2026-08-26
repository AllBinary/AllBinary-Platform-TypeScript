
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
        
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CachePolicyFactory } from '../../../../../org/allbinary/logic/util/cache/CachePolicyFactory.js';
      const CachePolicyFactory = globalThis.org.allbinary.logic.util.cache.CachePolicyFactory;

      
//not game specific package import { PoolInterface } from '../../../../../org/allbinary/logic/util/cache/PoolInterface.js';
      const PoolInterface = globalThis.org.allbinary.logic.util.cache.PoolInterface;

      
//not game specific package import { PoolInterfaceFactory } from '../../../../../org/allbinary/logic/util/cache/PoolInterfaceFactory.js';
      const PoolInterfaceFactory = globalThis.org.allbinary.logic.util.cache.PoolInterfaceFactory;

      
//not game specific package import { PoolTypeFactory } from '../../../../../org/allbinary/logic/util/cache/PoolTypeFactory.js';
      const PoolTypeFactory = globalThis.org.allbinary.logic.util.cache.PoolTypeFactory;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BufferedImageCacheableFactory } from './BufferedImageCacheableFactory.js';

export class BufferedImagePoolSingleton
            extends Object
         {
        

    private static poolInterface: PoolInterface = 
                null
            ;

                private static initResult: number = BufferedImagePoolSingleton.init();
                private static init(): number { 
                    

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var STATIC_BLOCK: string = "Static Block";;
    

    var instance: string = "BufferedImagePoolSingleton";;
    

        try {
            logUtil!.putF(commonStrings!.START, instance, STATIC_BLOCK);
    
BufferedImagePoolSingleton.poolInterface= PoolInterfaceFactory.getInstance(new BufferedImageCacheableFactory(), PoolTypeFactory.getInstance()!.VECTOR_POOL, CachePolicyFactory.getInstance()!.MAX_TIME_THOUSAND_MAX);
    
logUtil!.putF(commonStrings!.END, instance, STATIC_BLOCK);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, instance, STATIC_BLOCK, e);
    
}



                    return 0;
                }
            
    public static getInstance(): PoolInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BufferedImagePoolSingleton.poolInterface;
    
}


private constructor (){

            super();
        }


}
                
            

