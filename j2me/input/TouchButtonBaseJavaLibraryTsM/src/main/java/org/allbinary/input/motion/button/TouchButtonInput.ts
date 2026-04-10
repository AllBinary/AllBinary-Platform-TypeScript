
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
        



import { GameKey } from "../../../../../org/allbinary/game/input/GameKey.js";

    
import { GameKeyEventSourceInterface } from "../../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js";

    
import { Input } from "../../../../../org/allbinary/game/input/Input.js";

    
import { InputFactory } from "../../../../../org/allbinary/game/input/InputFactory.js";

    
import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { GameKeyEventFactory } from "../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { InputToGameKeyMapping } from "../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class TouchButtonInput extends Input
                , GameKeyEventSourceInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;
        
        

    private readonly TOUCH_BUTTON_SOURCE_ID: number = this.gameKeyEventFactory!.TOUCH_BUTTON_SOURCE_ID;
        
        

    private gameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;
        
        
public constructor (id: number, name: string)                        

                            : super(id, name){

            super();
            var id = id
var name = name


                            //For kotlin this is before the body of the constructor.
                    

    var inputFactory: InputFactory = InputFactory.getInstance()!;
        
        

inputFactory!.add(this.getId(), this)
}


    public update(inputToGameKeyMapping: InputToGameKeyMapping){
var inputToGameKeyMapping = inputToGameKeyMapping

        try {
            
    var gameKey: GameKey = inputToGameKeyMapping!.getInstance(this.getId())!;
        
        

this.gameKeyEvent= this.gameKeyEventFactory!.getInstance(this, gameKey)
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e)
}

}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TOUCH_BUTTON_SOURCE_ID;
    
}


    public getGameKeyEvent(): GameKeyEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameKeyEvent;
    
}


}
                
            

