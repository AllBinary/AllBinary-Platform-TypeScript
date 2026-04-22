
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
        
export class AbeHttpRequestInfoData
            extends Object
         {
        

    private static readonly instance: AbeHttpRequestInfoData = new AbeHttpRequestInfoData();
        
        

    public static getInstance(): AbeHttpRequestInfoData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


    public readonly HTTP_USER_AGENT: string = "HTTP_USER_AGENT";
        
        

    public readonly REMOTE_ADDRESS: string = "REMOTE_ADDRESS";
        
        

    public readonly REMOTE_HOST: string = "REMOTE_HOST";
        
        

    public readonly REMOTE_HOST_BY_ADDRESS: string = "REMOTE_HOST_BY_ADDRESS";
        
        

    public readonly REMOTE_PORT: string = "REMOTE_PORT";
        
        

    public readonly REQUEST_FILE_PATH: string = "REQUEST_FILE_PATH";
        
        

}
                
            

