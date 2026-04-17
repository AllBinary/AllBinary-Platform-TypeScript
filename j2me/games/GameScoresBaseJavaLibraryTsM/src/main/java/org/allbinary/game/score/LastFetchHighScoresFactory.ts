
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        
import { NoHighScoresFactory } from "./NoHighScoresFactory.js";

export class LastFetchHighScoresFactory
            extends Object
         {
        

    private static readonly instance: LastFetchHighScoresFactory = new LastFetchHighScoresFactory();
        
        

    public static getInstance(): LastFetchHighScoresFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public highScoresArray: HighScores[] = NoHighScoresFactory.getInstance()!.NO_HIGH_SCORES;
        
        

}
                
            

