
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
        
import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
//not GWT import const CommandListener

import { ItemStateListener } from '../../../../../javax/microedition/lcdui/ItemStateListener.js';
//not GWT import const ItemStateListener

import { GameStateCompositeInterface } from '../../../../../org/allbinary/game/state/GameStateCompositeInterface.js';
//not GWT import const GameStateCompositeInterface

import { PaintableInterface } from '../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
//not GWT import const PaintableInterface

import { RunnableInterface } from '../../../../../org/allbinary/thread/RunnableInterface.js';
//not GWT import const RunnableInterface

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface GameCanvasRunnableInterface extends RunnableInterface, PaintableInterface, ItemStateListener, GameStateCompositeInterface {
        

    getTitle(): string;

    isInitialized(): boolean;

    isPaused(): boolean;

    unPause(): void;

    pause(): void;

    isHighScoreSubmitted(): boolean;

                //@Throws(Exception.constructor)
            
    setHighScoreSubmitted(highScoreSubmitted: boolean): void;

                //@Throws(Exception.constructor)
            
    processGameOver(): void;

    isGameOver(): boolean;

    initCommands(cmdListener: CommandListener): void;

                //@Throws(Exception.constructor)
            
    getCurrentStateHashtable(): ABHashtable<any, any>;

                //@Throws(Exception.constructor)
            
    getLoadStateHashtable(): ABHashtable<any, any>;

                //@Throws(Exception.constructor)
            
    setLoadStateHashtable(hashtable: ABHashtable<any, any>): void;

    getType(): number;

}

