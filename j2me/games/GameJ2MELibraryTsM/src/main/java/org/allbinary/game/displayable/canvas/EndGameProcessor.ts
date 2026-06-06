
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


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
      
import { HighScores } from '../../../../../org/allbinary/game/score/HighScores.js';
      
import { HighScoresHelperBase } from '../../../../../org/allbinary/game/score/HighScoresHelperBase.js';
      
import { NullHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js';
      
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';

export class EndGameProcessor extends Processor {
        

    private gameCanvas: AllBinaryGameCanvas;

    private readonly WAIT: number = 5000;

public constructor (gameCanvas: AllBinaryGameCanvas){

            super();
        this.gameCanvas= gameCanvas;
    
}


                //@Throws(Exception.constructor)
            
    public process(){

                        if(this.gameCanvas!.isHighScoreSubmitted())
                        
                                    {
                                    
                        if(this.gameCanvas!.getGameStateTimeHelper()!.isElapsedTNT(this.WAIT))
                        
                                    {
                                    
                        if(this.gameCanvas!.getGameState() == AllBinaryGameCanvas.SHOW_END_RESULT_GAME_STATE)
                        
                                    {
                                    
    var highScoresBase: HighScoresHelperBase = this.gameCanvas!.highScoresHelper as HighScoresHelperBase;;
    

    var highScores: HighScores = highScoresBase!.getSelectedHighScores()!;;
    

                        if(highScores != NullHighScoresSingletonFactory.getInstance())
                        
                                    {
                                    highScoresBase!.selectHighScores();
    
this.gameCanvas!.getRealHighScoresPaintable()!.setHighScores(highScores);
    
this.gameCanvas!.setGameState(AllBinaryGameCanvas.SHOW_HIGH_SCORE_GAME_STATE);
    
this.gameCanvas!.setHighScoresPaintable(this.gameCanvas!.getRealHighScoresPaintable());
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.gameCanvas!.getGameState() == AllBinaryGameCanvas.SHOW_HIGH_SCORE_GAME_STATE)
                        
                                    {
                                    this.gameCanvas!.setGameState(AllBinaryGameCanvas.SHOW_END_RESULT_GAME_STATE);
    
this.gameCanvas!.setHighScoresPaintable(NullPaintable.getInstance());
    

                                    }
                                

                                    }
                                

                                    }
                                
}


}
                
            

