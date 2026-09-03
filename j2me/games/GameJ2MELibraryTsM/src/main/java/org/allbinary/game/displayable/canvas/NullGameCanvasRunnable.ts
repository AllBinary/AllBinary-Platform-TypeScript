
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        
            import { Thread } from '../../../../../java/lang/Thread.js';
        
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
//not plain js import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { Item } from '../../../../../javax/microedition/lcdui/Item.js';
      const Item = globalThis.javax.microedition.lcdui.Item;

      
import { GameState } from '../../../../../org/allbinary/game/state/GameState.js';
      //not GWT import const GameState = globalThis.org.allbinary.game.state.GameState;

      
import { GameStateFactory } from '../../../../../org/allbinary/game/state/GameStateFactory.js';
      //not GWT import const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;

      
import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameCanvasRunnableInterface } from './GameCanvasRunnableInterface.js';
//not GWT import const GameCanvasRunnableInterface = globalThis.org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface;

                
export class NullGameCanvasRunnable
            extends Object
         implements GameCanvasRunnableInterface {
        

    public static readonly NULL_GAME_CANVAS_RUNNABLE: NullGameCanvasRunnable = new NullGameCanvasRunnable();

    readonly gameStateFactory: GameStateFactory = GameStateFactory.getInstance()!;

    public getTitle(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isPaused(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public unPause(){
}


    public pause(){
}


    public isHighScoreSubmitted(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public setHighScoreSubmitted(highScoreSubmitted: boolean){
}


                //@Throws(Exception.constructor)
            
    public processGameOver(){
}


    public isGameOver(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public initCommands(cmdListener: CommandListener){
}


                //@Throws(Exception.constructor)
            
    public getCurrentStateHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StdUtil.getInstance()!.NULL_TABLE;
    
}


                //@Throws(Exception.constructor)
            
    public getLoadStateHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StdUtil.getInstance()!.NULL_TABLE;
    
}


                //@Throws(Exception.constructor)
            
    public setLoadStateHashtable(hashtable: Hashtable<any, any>){
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


                //@Throws(Exception.constructor)
            
    public setGameState(gameState: GameState){
}


    public getGameState(): GameState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameStateFactory!.NO_GAME_STATE;
    
}


    public itemStateChanged(item: Item){
}


    public paint(graphics: Graphics){
}


    public paintThreed(graphics: Graphics){
}


    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public setRunning(isRunning: boolean){
}


                //@Throws(Exception.constructor)
            
    public setThread(thread: Thread){
}


    public run(){
}


}



