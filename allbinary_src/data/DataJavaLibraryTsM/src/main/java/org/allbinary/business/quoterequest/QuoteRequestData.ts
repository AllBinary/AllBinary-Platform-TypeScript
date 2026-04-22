
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
        
export class QuoteRequestData
            extends Object
         {
        

    private static readonly instance: QuoteRequestData = new QuoteRequestData();
        
        

    public static getInstance(): QuoteRequestData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


    public readonly ID: string = "QUOTEREQUEST_ID";
        
        

    public readonly PROJECT_INFO: string = "QUOTEREQUEST_PROJECT_INFO";
        
        

    public readonly CUSTOMER_COMMENTS: string = "QUOTEREQUEST_CUSTOMER_COMMENTS";
        
        

    public readonly BUDGET: string = "QUOTEREQUEST_BUDGET";
        
        

    public readonly TIMEFRAME: string = "QUOTEREQUEST_TIMEFRAME";
        
        

    public readonly COMMENTS: string = "QUOTEREQUEST_COMMENTS";
        
        

}
                
            

