
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CacheInterface } from './CacheInterface.js';
//not GWT import const CacheInterface = globalThis.org.allbinary.logic.util.cache.CacheInterface;

                import { CacheableInterface } from './CacheableInterface.js';
//not GWT import const CacheableInterface = globalThis.org.allbinary.logic.util.cache.CacheableInterface;

                
export interface AutomaticCacheInterface extends CacheInterface {
        

                //@Throws(Exception.constructor)
            
    get(key: any): CacheableInterface

}



