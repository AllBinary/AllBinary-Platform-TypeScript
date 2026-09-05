
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

      
import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
//not GWT import const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
import { GameKeyEventSourceInterface } from '../../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js';
//not GWT import const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;

      
import { Input } from '../../../../../org/allbinary/game/input/Input.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;

      
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

      
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
import { InputToGameKeyMapping } from '../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js';
//not GWT import const InputToGameKeyMapping = globalThis.org.allbinary.game.input.mapping.InputToGameKeyMapping;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TouchButtonInput extends Input implements GameKeyEventSourceInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;

    private readonly TOUCH_BUTTON_SOURCE_ID: number = this.gameKeyEventFactory!.TOUCH_BUTTON_SOURCE_ID;

    private gameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;

public constructor (id: number, name: string){
            super(id, name);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var inputFactory: InputFactory = InputFactory.getInstance()!;;
    
inputFactory!.add(this.getId(), this);
    
}


    public update(inputToGameKeyMapping: InputToGameKeyMapping){

        try {
            
    var gameKey: GameKey = inputToGameKeyMapping!.getInstance(this.getId())!;;
    
this.gameKeyEvent= this.gameKeyEventFactory!.getInstanceForInput(this, gameKey);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e);
    
}

}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.TOUCH_BUTTON_SOURCE_ID;
    
}


    public getGameKeyEvent(): GameKeyEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameKeyEvent;
    
}


}



