
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Item } from "../../../../../javax/microedition/lcdui/Item.js";

    
import { GameState } from "../../../../../org/allbinary/game/state/GameState.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class NullGameCanvasRunnable
            extends Object
        
                , GameCanvasRunnableInterface {
        

    public static readonly NULL_GAME_CANVAS_RUNNABLE: NullGameCanvasRunnable = new NullGameCanvasRunnable();
        
        

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


                //@Throws(Error::class)
            
    public setHighScoreSubmitted(highScoreSubmitted: boolean){
var highScoreSubmitted = highScoreSubmitted
}


                //@Throws(Error::class)
            
    public setGameOver(){
}


    public isGameOver(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener
}


                //@Throws(Error::class)
            
    public getCurrentStateHashtable(): Hashtable<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_TABLE;
    
}


                //@Throws(Error::class)
            
    public getLoadStateHashtable(): Hashtable<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_TABLE;
    
}


                //@Throws(Error::class)
            
    public setLoadStateHashtable(hashtable: Hashtable<Any, Any>){
var hashtable = hashtable
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


                //@Throws(Error::class)
            
    public setGameState(gameState: GameState){
var gameState = gameState
}


    public getGameState(): GameState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameState.NO_GAME_STATE;
    
}


    public itemStateChanged(item: Item){
var item = item
}


    public paint(graphics: Graphics){
var graphics = graphics
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
}


    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public setRunning(isRunning: boolean){
var isRunning = isRunning
}


                //@Throws(Error::class)
            
    public setThread(thread: Thread){
var thread = thread
}


    public run(){
}


}
                
            

