
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { ItemStateListener } from '../../../../../javax/microedition/lcdui/ItemStateListener.js';
      const ItemStateListener = globalThis.javax.microedition.lcdui.ItemStateListener;

      
import { GameStateCompositeInterface } from '../../../../../org/allbinary/game/state/GameStateCompositeInterface.js';
      //not GWT import const GameStateCompositeInterface = globalThis.org.allbinary.game.state.GameStateCompositeInterface;

      
import { PaintableInterface } from '../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      //not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
import { RunnableInterface } from '../../../../../org/allbinary/thread/RunnableInterface.js';
      //not GWT import const RunnableInterface = globalThis.org.allbinary.thread.RunnableInterface;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not plain js import { ABHashtable } from '../../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface GameCanvasRunnableInterface extends RunnableInterface, PaintableInterface, ItemStateListener, GameStateCompositeInterface {
        

    getTitle(): string

    isInitialized(): boolean

    isPaused(): boolean

    unPause()

    pause()

    isHighScoreSubmitted(): boolean

                //@Throws(Exception.constructor)
            
    setHighScoreSubmitted(highScoreSubmitted: boolean)

                //@Throws(Exception.constructor)
            
    processGameOver()

    isGameOver(): boolean

    initCommands(cmdListener: CommandListener)

                //@Throws(Exception.constructor)
            
    getCurrentStateHashtable(): ABHashtable

                //@Throws(Exception.constructor)
            
    getLoadStateHashtable(): ABHashtable

                //@Throws(Exception.constructor)
            
    setLoadStateHashtable(hashtable: ABHashtable)

    getType(): number

}



