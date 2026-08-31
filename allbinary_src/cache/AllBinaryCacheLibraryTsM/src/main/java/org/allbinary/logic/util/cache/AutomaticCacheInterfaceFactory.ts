
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2007 AllBinary 
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
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AutomaticCacheInterface } from './AutomaticCacheInterface.js';
//not GWT import const AutomaticCacheInterface = globalThis.org.allbinary.logic.util.cache.AutomaticCacheInterface;

                import { CacheableInterfaceFactoryInterface } from './CacheableInterfaceFactoryInterface.js';
//not GWT import const CacheableInterfaceFactoryInterface = globalThis.org.allbinary.logic.util.cache.CacheableInterfaceFactoryInterface;

                import { CacheType } from './CacheType.js';
//not GWT import const CacheType = globalThis.org.allbinary.logic.util.cache.CacheType;

                import { CachePolicy } from './CachePolicy.js';
//not GWT import const CachePolicy = globalThis.org.allbinary.logic.util.cache.CachePolicy;

                
export class AutomaticCacheInterfaceFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface, cacheType: CacheType, cachePolicy: CachePolicy): AutomaticCacheInterface{



                            throw new Exception("No such " +cacheType!.toString());
                    
}


private constructor (){

            super();
        }


}



