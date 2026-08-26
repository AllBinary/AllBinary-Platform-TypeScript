
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameState } from './GameState.js';

export class GameStateFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): GameStateFactory{

                        if(GameStateFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    GameStateFactory.instance= new GameStateFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameStateFactory.instance as GameStateFactory;
    
}


    private index: number = 0;

    public readonly NO_GAME_STATE: GameState = this.createGameState("NO_GAME_STATE")!;

    public readonly PLAYING_GAME_STATE: GameState = this.createGameState("PLAYING_GAME_STATE")!;

    public readonly SHOW_END_RESULT_GAME_STATE: GameState = this.createGameState("SHOW_END_RESULT_GAME_STATE")!;

    public readonly SHOW_HIGH_SCORE_GAME_STATE: GameState = this.createGameState("SHOW_HIGH_SCORE_GAME_STATE")!;

private constructor (){

            super();
        }


    public createGameState(name: string): GameState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GameState(name, this.index++);
    
}


}
                
            

