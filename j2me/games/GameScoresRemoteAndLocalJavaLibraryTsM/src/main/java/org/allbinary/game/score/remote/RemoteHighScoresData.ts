
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
        
export class RemoteHighScoresData
            extends Object
         {
        

    private static readonly SINGLETON: RemoteHighScoresData = new RemoteHighScoresData();
        
        

    public static getInstance(): RemoteHighScoresData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    public readonly HIGH_SCORES: string = "HIGH_SCORES";
        
        

    public CUSTOMER_USER_NAME: string = "CUSTOMER_USER_NAME";
        
        

    public DISPLAY_NAME: string = "DISPLAY_NAME";
        
        

    public SCORE: string = "SCORE";
        
        

    public GAME_INFO: string = "GAME_INFO";
        
        

    public GAME_CONFIGURATION: string = "GAME_CONFIGURATION";
        
        

}
                
            

