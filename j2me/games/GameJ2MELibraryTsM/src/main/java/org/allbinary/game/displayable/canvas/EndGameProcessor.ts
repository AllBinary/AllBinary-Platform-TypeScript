
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
      const Processor = globalThis.org.allbinary.canvas.Processor;

      
//not game specific package import { HighScores } from '../../../../../org/allbinary/game/score/HighScores.js';
      const HighScores = globalThis.org.allbinary.game.score.HighScores;

      
//not game specific package import { HighScoresHelperBase } from '../../../../../org/allbinary/game/score/HighScoresHelperBase.js';
      const HighScoresHelperBase = globalThis.org.allbinary.game.score.HighScoresHelperBase;

      
//not game specific package import { NullHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js';
      const NullHighScoresSingletonFactory = globalThis.org.allbinary.game.score.NullHighScoresSingletonFactory;

      
//not game specific package import { GameStateFactory } from '../../../../../org/allbinary/game/state/GameStateFactory.js';
      const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;

      
//not game specific package import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';

export class EndGameProcessor extends Processor {
        

    readonly gameStateFactory: GameStateFactory = GameStateFactory.getInstance()!;

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
                                    
                        if(this.gameCanvas!.getGameState() == this.gameStateFactory!.SHOW_END_RESULT_GAME_STATE)
                        
                                    {
                                    
    var highScoresBase: HighScoresHelperBase = this.gameCanvas!.highScoresHelper as HighScoresHelperBase;;
    

    var highScores: HighScores = highScoresBase!.getSelectedHighScores()!;;
    

                        if(highScores != NullHighScoresSingletonFactory.getInstance())
                        
                                    {
                                    highScoresBase!.selectHighScores();
    
this.gameCanvas!.getRealHighScoresPaintable()!.setHighScores(highScores);
    
this.gameCanvas!.setGameState(this.gameStateFactory!.SHOW_HIGH_SCORE_GAME_STATE);
    
this.gameCanvas!.setHighScoresPaintable(this.gameCanvas!.getRealHighScoresPaintable());
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.gameCanvas!.getGameState() == this.gameStateFactory!.SHOW_HIGH_SCORE_GAME_STATE)
                        
                                    {
                                    this.gameCanvas!.setGameState(this.gameStateFactory!.SHOW_END_RESULT_GAME_STATE);
    
this.gameCanvas!.setHighScoresPaintable(NullPaintable.getInstance());
    

                                    }
                                

                                    }
                                

                                    }
                                
}


}



