
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
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CacheableInterfaceFactoryInterface } from './CacheableInterfaceFactoryInterface.js';
//not GWT import - same folder const CacheableInterfaceFactoryInterface = globalThis.org.allbinary.logic.util.cache.CacheableInterfaceFactoryInterface;

                import { CacheableInterface } from './CacheableInterface.js';
//not GWT import - same folder const CacheableInterface = globalThis.org.allbinary.logic.util.cache.CacheableInterface;

                
export class NoCacheableFactory
            extends Object
         implements CacheableInterfaceFactoryInterface {
        

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(key: any = {}): CacheableInterface{



                            throw new Exception("This Factory Does Not");
                    
}


}



