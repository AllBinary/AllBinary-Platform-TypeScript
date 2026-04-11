
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
        




export class PoolType
            extends Object
         {
        

    private readonly cacheType: CacheType
public constructor (cacheType: CacheType){

            super();
            var cacheType = cacheType
this.cacheType= cacheType;
    
}


    public getCacheType(): CacheType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cacheType;
    
}


    public toString(): string{

    var POOL_TYPE: string = "PoolType: ";
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return POOL_TYPE +this.getCacheType()!.toString();
    
}


}
                
            

