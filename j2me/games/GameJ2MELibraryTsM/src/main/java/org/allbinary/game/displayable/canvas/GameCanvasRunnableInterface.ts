
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

      
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { ItemStateListener } from '../../../../../javax/microedition/lcdui/ItemStateListener.js';
      const ItemStateListener = globalThis.javax.microedition.lcdui.ItemStateListener;

      
//not game specific package import { GameStateCompositeInterface } from '../../../../../org/allbinary/game/state/GameStateCompositeInterface.js';
      const GameStateCompositeInterface = globalThis.org.allbinary.game.state.GameStateCompositeInterface;

      
//not game specific package import { PaintableInterface } from '../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
//not game specific package import { RunnableInterface } from '../../../../../org/allbinary/thread/RunnableInterface.js';
      const RunnableInterface = globalThis.org.allbinary.thread.RunnableInterface;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
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
            
    getCurrentStateHashtable(): Hashtable<any, any>

                //@Throws(Exception.constructor)
            
    getLoadStateHashtable(): Hashtable<any, any>

                //@Throws(Exception.constructor)
            
    setLoadStateHashtable(hashtable: Hashtable<any, any>)

    getType(): number

}



