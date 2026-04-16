
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
        




import { Long } from "./Long.js";

export class CachePolicyFactory
            extends Object
         {
        

    private static readonly instance: CachePolicyFactory = new CachePolicyFactory();
        
        

    public static getInstance(): CachePolicyFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly NAME: string = "lru";
        
        

    public MAX_TIME_THOUSAND_MAX: CachePolicy = new CachePolicy(NAME, Long.MAX_VALUE, 1000);
        
        

    public THIRTY_MINUTES_TEN_THOUSAND_MAX: CachePolicy = new CachePolicy(NAME, 1000 *60 *30, 10000);
        
        

    public THIRTY_MINUTES_FIFTY_THOUSAND_MAX: CachePolicy = new CachePolicy(NAME, 1000 *60 *30, 100000);
        
        

    public ONE_MINUTE_FIVE_MAX: CachePolicy = new CachePolicy(NAME, 1000 *60 *1, 5);
        
        

    public ONE_MINUTE_TEN_MAX: CachePolicy = new CachePolicy(NAME, 1000 *60 *1, 10);
        
        

    public ONE_MINUTE_ONE_HUNDRED_MAX: CachePolicy = new CachePolicy(NAME, 1000 *60 *1, 100);
        
        

}
                
            

