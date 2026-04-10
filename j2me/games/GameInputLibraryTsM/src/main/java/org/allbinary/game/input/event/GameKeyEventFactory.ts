
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
        



import { GameKeyEventSourceInterface } from "../../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js";

    
import { Input } from "../../../../../org/allbinary/game/input/Input.js";

    
import { InputFactory } from "../../../../../org/allbinary/game/input/InputFactory.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class GameKeyEventFactory
            extends Object
         {
        

    private static readonly instance: GameKeyEventFactory = new GameKeyEventFactory();
        
        

    public static getInstance(): GameKeyEventFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly TOUCH_BUTTON_SOURCE_ID: number = 2;
        
        

    public readonly MOTION_GESTURE_SOURCE_ID: number = 3;
        
        

    private readonly MAX_SOURCES: number = 4;
        
        

    private ARRAY: GameKeyEvent[][] = Array(MAX_SOURCES) { arrayOfNulls<GameKeyEvent?>(InputFactory.getInstance()!.MAX) }
                                                            ;
        
        
private constructor (){

            super();
            }


    public init(){

    var nullUtil: NullUtil = NullUtil.getInstance()!;
        
        


    var size: number = InputFactory.getInstance()!.MAX;
        
        





                        for (
    var index: number = MAX_SOURCES;
        
        
--index >= 0; )
        {




                        for (
    var index2: number = size;
        
        
--index2 >= 0; )
        {
ARRAY[index]![index2]= GameKeyEvent(nullUtil!.NULL_OBJECT, index, index2)
}

}

}


                @Throws(Exception::class)
            
    public getInstance(anyType: GameKeyEventSourceInterface, key: number): GameKeyEvent{
var anyType = anyType
var key = key

    var gameKeyEvent: GameKeyEvent = ARRAY[anyType!.getSourceId()]![key]!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameKeyEvent;
    
}


                @Throws(Exception::class)
            
    public getInstance(anyType: GameKeyEventSourceInterface, input: Input): GameKeyEvent{
var anyType = anyType
var input = input

    var gameKeyEvent: GameKeyEvent = ARRAY[anyType!.getSourceId()]![input.getId()]!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameKeyEvent;
    
}


}
                
            

