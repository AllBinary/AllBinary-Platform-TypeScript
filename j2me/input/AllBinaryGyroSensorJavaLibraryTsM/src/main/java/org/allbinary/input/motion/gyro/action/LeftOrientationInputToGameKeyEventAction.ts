
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
import { PlatformInputMappingFactory } from '../../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
      
import { GameKeyCompleteMotionGestureInputEvent } from '../../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEvent.js';
      
import { OrientationMotionGestureFactory } from '../../../../../../org/allbinary/input/gyro/OrientationMotionGestureFactory.js';
      
import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LeftOrientationInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): GameKeyCompleteMotionGestureInputEvent{

                        if(LeftOrientationInputToGameKeyEventAction.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    LeftOrientationInputToGameKeyEventAction.instance= new LeftOrientationInputToGameKeyEventAction();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LeftOrientationInputToGameKeyEventAction.instance as GameKeyCompleteMotionGestureInputEvent;
    
}


private constructor (){
            super("Left Action", OrientationMotionGestureFactory.getInstance()!.LEFT, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

