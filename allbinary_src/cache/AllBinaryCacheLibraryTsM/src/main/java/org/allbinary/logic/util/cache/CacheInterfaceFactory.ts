
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
        import { CacheInterface } from './CacheInterface.js';
import { CacheType } from './CacheType.js';
import { CachePolicy } from './CachePolicy.js';

export class CacheInterfaceFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(cacheType: CacheType, cachePolicy: CachePolicy): CacheInterface{



                            throw new Exception("No such " +cacheType!.toString());
                    
}

private constructor (){

            super();
        }


}
                
            

