
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
        



import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { GameInitializedEvent } from "../../../../org/allbinary/game/configuration/event/GameInitializedEvent.js";

    
import { GameInitializedEventHandler } from "../../../../org/allbinary/game/configuration/event/GameInitializedEventHandler.js";

    
import { GameInitializedListenerInterface } from "../../../../org/allbinary/game/configuration/event/GameInitializedListenerInterface.js";

    
import { FeatureResourceInitializationUtil } from "../../../../org/allbinary/game/resource/FeatureResourceInitializationUtil.js";

    
import { SWTJOGLProcessor } from "../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../org/allbinary/logic/util/event/EventStrings.js";

    

export class DefaultGameInitializationListener
            extends Object
        
                , GameInitializedListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly swtJOGLProcessor: SWTJOGLProcessor = SWTJOGLProcessor.getInstance()!;
        
        
public constructor (){

            super();
            
    var gameInitializedEventHandler: GameInitializedEventHandler = GameInitializedEventHandler.getInstance()!;
        
        
;
    
gameInitializedEventHandler!.removeAllListeners();
    
gameInitializedEventHandler!.addListener(this as GameInitializedListenerInterface);
    
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    firstTime: boolean = true;
        
        

    public onGameInitialized(gameInitializedEvent: GameInitializedEvent){
    //var gameInitializedEvent = gameInitializedEvent

    var ON_GAME_INITIALIZED: string = "onGameInitialized";
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

        try {
            logUtil!.put(commonStrings!.START, this, ON_GAME_INITIALIZED);
    

        while(!swtJOGLProcessor!.isHolderCreated();

                        )
        {
logUtil!.put(commonStrings!.UPDATE, this, ON_GAME_INITIALIZED);
    
Thread.sleep(20);
    
}

FeatureResourceInitializationUtil.getInstance()!.init(gameInitializedEvent!.getLevel());
    

                        if(firstTime)
                        
                                    {
                                    firstTime= false;
    

                                    }
                                
                        else {
                            swtJOGLProcessor!.onSurfaceChanged();
    

                        }
                            

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, ON_GAME_INITIALIZED, e);
    
}

}


}
                
            

