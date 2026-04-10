
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
        



import { InputToGameKeyMapping } from "../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class PlatformFormInputMappingFactory
            extends Object
         {
        

    private static readonly instance: PlatformFormInputMappingFactory = new PlatformFormInputMappingFactory();
        
        

    public static getInstance(): PlatformFormInputMappingFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private SINGLETON: InputToGameKeyMapping = InputToGameKeyMapping.NULL_INPUT_TO_GAME_KEY_MAPPING;
        
        

    public getOrCreate(): InputToGameKeyMapping{

        try {
            
                        if(SINGLETON == InputToGameKeyMapping.NULL_INPUT_TO_GAME_KEY_MAPPING)
                        
                                    {
                                    
    var pcKeyFactory: PCKeyFactory = PCKeyFactory.getInstance()!;
        
        


    var inputToGameKeyMapping: InputToGameKeyMapping = new InputToGameKeyMapping();
        
        


    var gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;
        
        

inputToGameKeyMapping!.add(gameKeyFactory!.UP, pcKeyFactory!.DPAD_UP)
inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, pcKeyFactory!.DPAD_DOWN)
inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, pcKeyFactory!.DPAD_LEFT)
inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, pcKeyFactory!.DPAD_RIGHT)
inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM1, pcKeyFactory!.ENTER)
SINGLETON= inputToGameKeyMapping

                                    }
                                
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


}
                
            

