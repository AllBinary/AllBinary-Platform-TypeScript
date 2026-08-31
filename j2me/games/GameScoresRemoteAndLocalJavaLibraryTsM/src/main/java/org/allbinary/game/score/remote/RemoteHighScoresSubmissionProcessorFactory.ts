
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
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RemoteHighScoresSubmissionProcessor } from './RemoteHighScoresSubmissionProcessor.js';
//not GWT import const RemoteHighScoresSubmissionProcessor = globalThis.org.allbinary.game.score.remote.RemoteHighScoresSubmissionProcessor;

                import { RemoteHighScoresSubmissionProcessorInterface } from './RemoteHighScoresSubmissionProcessorInterface.js';
//not GWT import const RemoteHighScoresSubmissionProcessorInterface = globalThis.org.allbinary.game.score.remote.RemoteHighScoresSubmissionProcessorInterface;

                
export class RemoteHighScoresSubmissionProcessorFactory
            extends Object
         {
        

    private static readonly SINGLETON: RemoteHighScoresSubmissionProcessorInterface = new RemoteHighScoresSubmissionProcessor();

    public static getInstance(): RemoteHighScoresSubmissionProcessorInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RemoteHighScoresSubmissionProcessorFactory.SINGLETON;
    
}


}



