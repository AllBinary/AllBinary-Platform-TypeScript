
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { GameKeyEvent } from "../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { GameKeyEventListenerInterface } from "../../../../org/allbinary/game/input/event/GameKeyEventListenerInterface.js";

    
import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GameInput } from "./GameInput.js";

import { GameInputStrings } from "./GameInputStrings.js";

export class PlayerGameInput extends GameInput implements GameKeyEventListenerInterface {
        

    readonly gameInputStrings: GameInputStrings = GameInputStrings.getInstance()!;
        
        

    private readonly playerInputId: number
public constructor (gameKeyEventList: BasicArrayList, playerInputId: number)                        

                            : this(gameKeyEventList, new BasicArrayList(), playerInputId){

            super();
                //var gameKeyEventList = gameKeyEventList
    //var playerInputId = playerInputId


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (gameKeyEventList: BasicArrayList, removalGameKeyEventList: BasicArrayList, playerInputId: number)                        

                            : super(gameKeyEventList, removalGameKeyEventList){

            super();
                //var gameKeyEventList = gameKeyEventList
    //var removalGameKeyEventList = removalGameKeyEventList
    //var playerInputId = playerInputId


                            //For kotlin this is before the body of the constructor.
                    
this.playerInputId= playerInputId;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onPressGameKeyEvent(gameKeyEvent: GameKeyEvent){
    //var gameKeyEvent = gameKeyEvent
this.add(gameKeyEvent);
    
this.addForRemoval(gameKeyEvent);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onDownGameKeyEvent(gameKeyEvent: GameKeyEvent){
    //var gameKeyEvent = gameKeyEvent
this.add(gameKeyEvent);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onDownKeyEvent(gameKeyEvent: GameKeyEvent){
    //var gameKeyEvent = gameKeyEvent
this.add(gameKeyEvent);
    
this.addForRemoval(gameKeyEvent);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onDownKeyEvent(gameKeyEvent: Integer){
    //var gameKeyEvent = gameKeyEvent
PreLogUtil.put(new StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.append(gameKeyEvent!.toString())!.toString(), this, gameInputStrings!.ON_DOWN_GAME_KEY);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onUpGameKeyEvent(gameKeyEvent: GameKeyEvent){
    //var gameKeyEvent = gameKeyEvent
this.addForRemoval(gameKeyEvent);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onUpKeyEvent(gameKeyEvent: Integer){
    //var gameKeyEvent = gameKeyEvent
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public getPlayerInputId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return playerInputId;
    
}


}
                
            

