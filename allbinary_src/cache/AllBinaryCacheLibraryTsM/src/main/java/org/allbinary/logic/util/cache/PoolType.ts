
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


        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CacheType } from './CacheType.js';

export class PoolType
            extends Object
         {
        

    private readonly cacheType: CacheType
public constructor (cacheType: CacheType){

            super();
        this.cacheType= cacheType;
    
}


    public getCacheType(): CacheType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cacheType;
    
}


    public toString(): string{

    var POOL_TYPE: string = "PoolType: ";
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return POOL_TYPE +this.getCacheType()!.toString();
    
}


}
                
            

