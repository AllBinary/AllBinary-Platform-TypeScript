
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
        



import { PlatformInputMappingFactory } from "../../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js";

    
import { GameKeyCompleteMotionGestureInputEvent } from "../../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEvent.js";

    
import { OrientationMotionGestureFactory } from "../../../../../../org/allbinary/input/gyro/OrientationMotionGestureFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UpOrientationInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {
        

    private static readonly instance: GameKeyCompleteMotionGestureInputEvent = new UpOrientationInputToGameKeyEventAction();
        
        

    public static getInstance(): GameKeyCompleteMotionGestureInputEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor ()                        

                            : super("Up Action", OrientationMotionGestureFactory.getInstance()!.UP, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

