
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StoreFrontsData
            extends Object
         {
        

    private static readonly instance: StoreFrontsData = new StoreFrontsData();
        
        

    public static getInstance(): StoreFrontsData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly TYPE: string = "STOREFRONTS_TYPE";
        
        

    public readonly RETAIL: string = "STOREFRONTS_RETAIL";
        
        

    public readonly SUBSCRIPTION: string = "STOREFRONTS_SUBSCRIPTION";
        
        

    public readonly AUCTION: string = "STOREFRONTS_AUCTION";
        
        

    public readonly NEWS: string = "STOREFRONTS_NEWS";
        
        

    public readonly BLOG: string = "STOREFRONTS_BLOG";
        
        

    public readonly FORUM: string = "STOREFRONTS_FORUM";
        
        

}
                
            

