
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
        
//not game specific package import { NullCanvas } from '../../../../../javax/microedition/lcdui/NullCanvas.js';
      const NullCanvas = globalThis.javax.microedition.lcdui.NullCanvas;

      
//not game specific package import { RunnableCanvas } from '../../../../../org/allbinary/canvas/RunnableCanvas.js';
      const RunnableCanvas = globalThis.org.allbinary.canvas.RunnableCanvas;

      
//not game specific package import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
//not game specific package import { GameInputStrings } from '../../../../../org/allbinary/game/input/GameInputStrings.js';
      const GameInputStrings = globalThis.org.allbinary.game.input.GameInputStrings;

      
//not game specific package import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicMenuInputProcessor } from './BasicMenuInputProcessor.js';

export class DemoCanvasBasicStartInputProcessor extends BasicMenuInputProcessor {
        

public constructor (gameKeyEventList: BasicArrayList, gameCanvas: RunnableCanvas){
            super(gameKeyEventList,  -1, gameCanvas);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public processInputList(): number{

    var list: BasicArrayList = this.getGameKeyEventList()!;;
    

    var size: number = list.size()!;;
    

    var gameKeyEvent: GameKeyEvent;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
gameKeyEvent= list.objectArray[index]! as GameKeyEvent;
    
this.logUtil!.putF(new StringMaker().append("Start GameKey: ")!.append(StringUtil.getInstance()!.toString(gameKeyEvent))!.toString(), this, GameInputStrings.getInstance()!.PROCESS_INPUT);
    
}

this.getCanvas()!.getCustomCommandListener()!.commandAction(GameCommandsFactory.getInstance()!.START_COMMAND, NullCanvas.NULL_CANVAS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return size;
    
}


}
                
            

