
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
        



import { GameKey } from "../../../../../../org/allbinary/game/input/GameKey.js";

    
import { GameKeyFactory } from "../../../../../../org/allbinary/game/input/GameKeyFactory.js";

    
import { PlatformInputMappingFactory } from "../../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js";

    
import { GameKeyEventFactory } from "../../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { GameKeyCompleteMotionGestureInputEvent } from "../../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEvent.js";

    
import { TouchMotionGestureFactory } from "../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ReleaseTouchInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {
        

    private static readonly SINGLETON: GameKeyCompleteMotionGestureInputEvent = new ReleaseTouchInputToGameKeyEventAction();
        
        

    public static getInstance(): GameKeyCompleteMotionGestureInputEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;
        
        
private constructor ()                        

                            : super("Release Action", TouchMotionGestureFactory.getInstance()!.RELEASED, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    

        try {
            this.setGameKey(NONE);
    
this.setGameKeyEvent(GameKeyEventFactory.getInstance()!.getInstance(this, NONE));
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}


    public update(){
}


}
                
            

