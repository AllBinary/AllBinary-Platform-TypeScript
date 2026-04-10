
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
        



import { NullCanvas } from "../../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { RunnableCanvas } from "../../../../../org/allbinary/canvas/RunnableCanvas.js";

    
import { GameCommandsFactory } from "../../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { GameInputStrings } from "../../../../../org/allbinary/game/input/GameInputStrings.js";

    
import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class DemoCanvasBasicStartInputProcessor extends BasicMenuInputProcessor {
        
public constructor (gameKeyEventList: BasicArrayList, gameCanvas: RunnableCanvas)                        

                            : super(gameKeyEventList,  -1, gameCanvas){

            super();
            var gameKeyEventList = gameKeyEventList
var gameCanvas = gameCanvas


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public processInput(): number{

    var list: BasicArrayList = this.getGameKeyEventList()!;
        
        


    var size: number = list.size()!;
        
        


    var gameKeyEvent: GameKeyEvent





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
gameKeyEvent= list.objectArray[index]! as GameKeyEvent
logUtil!.put(StringMaker().
                            append("Start GameKey: ")!.append(StringUtil.getInstance()!.toString(gameKeyEvent))!.toString(), this, GameInputStrings.getInstance()!.PROCESS_INPUT)
}

this.getCanvas()!.getCustomCommandListener()!.commandAction(GameCommandsFactory.getInstance()!.START_COMMAND, NullCanvas.NULL_CANVAS)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return size;
    
}


}
                
            

