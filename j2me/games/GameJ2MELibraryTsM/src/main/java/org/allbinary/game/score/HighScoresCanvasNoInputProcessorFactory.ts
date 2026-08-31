
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { HighScoresCanvas } from '../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js';
      //not GWT import const HighScoresCanvas = globalThis.org.allbinary.game.score.displayable.HighScoresCanvas;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoresCanvasInputProcessorFactoryInterface } from './HighScoresCanvasInputProcessorFactoryInterface.js';
//not GWT import const HighScoresCanvasInputProcessorFactoryInterface = globalThis.org.allbinary.game.score.HighScoresCanvasInputProcessorFactoryInterface;

                import { HighScoresCanvasInputProcessor } from './HighScoresCanvasInputProcessor.js';
//not GWT import const HighScoresCanvasInputProcessor = globalThis.org.allbinary.game.score.HighScoresCanvasInputProcessor;

                
export class HighScoresCanvasNoInputProcessorFactory
            extends Object
         implements HighScoresCanvasInputProcessorFactoryInterface {
        

    public getInstance(highScoresCanvas: HighScoresCanvas): HighScoresCanvasInputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HighScoresCanvasInputProcessor(highScoresCanvas);
    
}


}



