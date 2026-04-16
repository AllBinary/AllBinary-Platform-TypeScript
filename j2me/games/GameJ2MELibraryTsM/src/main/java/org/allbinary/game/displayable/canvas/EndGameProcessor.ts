
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
        



import { Processor } from "../../../../../org/allbinary/canvas/Processor.js";

    
import { HighScores } from "../../../../../org/allbinary/game/score/HighScores.js";

    
import { NullHighScoresSingletonFactory } from "../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    

import { AllBinaryGameCanvas } from "./AllBinaryGameCanvas.js";

import { AllBinaryGameCanvas } from "./AllBinaryGameCanvas.js";

import { AllBinaryGameCanvas } from "./AllBinaryGameCanvas.js";

import { AllBinaryGameCanvas } from "./AllBinaryGameCanvas.js";

export class EndGameProcessor extends Processor {
        

    private gameCanvas: AllBinaryGameCanvas

    private readonly WAIT: number = 5000;
        
        
public constructor (gameCanvas: AllBinaryGameCanvas){

            super();
            var gameCanvas = gameCanvas
this.gameCanvas= gameCanvas;
    
}


                //@Throws(Error::class)
            
    public process(){

                        if(this.gameCanvas!.isHighScoreSubmitted())
                        
                                    {
                                    
                        if(this.gameCanvas!.getGameStateTimeHelper()!.isElapsed(WAIT))
                        
                                    {
                                    
                        if(this.gameCanvas!.getGameState() == AllBinaryGameCanvas.SHOW_END_RESULT_GAME_STATE)
                        
                                    {
                                    
    var highScores: HighScores = this.gameCanvas!.highScoresHelper!.getSelectedHighScores()!;
        
        
;
    

                        if(highScores != NullHighScoresSingletonFactory.getInstance())
                        
                                    {
                                    this.gameCanvas!.highScoresHelper!.selectHighScores();
    
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
                
            

