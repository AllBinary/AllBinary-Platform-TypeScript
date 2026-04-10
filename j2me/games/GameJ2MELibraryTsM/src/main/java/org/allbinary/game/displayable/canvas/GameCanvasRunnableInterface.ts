
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { ItemStateListener } from "../../../../../javax/microedition/lcdui/ItemStateListener.js";

    
import { GameStateCompositeInterface } from "../../../../../org/allbinary/game/state/GameStateCompositeInterface.js";

    
import { PaintableInterface } from "../../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { RunnableInterface } from "../../../../../org/allbinary/thread/RunnableInterface.js";

    

interface GameCanvasRunnableInterface extends RunnableInterface, PaintableInterface, ItemStateListener, GameStateCompositeInterface {
        

    getTitle(): string

    isInitialized(): boolean

    isPaused(): boolean

    unPause()

    pause()

    isHighScoreSubmitted(): boolean

                @Throws(Exception::class)
            
    setHighScoreSubmitted(highScoreSubmitted: boolean)

                @Throws(Exception::class)
            
    setGameOver()

    isGameOver(): boolean

    initCommands(cmdListener: CommandListener)

                @Throws(Exception::class)
            
    getCurrentStateHashtable(): Hashtable<Any, Any>

                @Throws(Exception::class)
            
    getLoadStateHashtable(): Hashtable<Any, Any>

                @Throws(Exception::class)
            
    setLoadStateHashtable(hashtable: Hashtable<Any, Any>)

    getType(): number

}
                
            

