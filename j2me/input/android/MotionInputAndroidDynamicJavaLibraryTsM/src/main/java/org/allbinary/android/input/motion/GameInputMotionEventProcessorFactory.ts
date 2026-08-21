
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2009 AllBinary
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
        



import { AndroidInfoFactory } from '../../../../../org/allbinary/android/AndroidInfoFactory.js';
      
import { GameInputMotionEventProcessorAPI1 } from '../../../../../org/allbinary/android/input/motion/api1/GameInputMotionEventProcessorAPI1.js';
      
import { GameInputMotionEventProcessorAPI5 } from '../../../../../org/allbinary/android/input/motion/api5/GameInputMotionEventProcessorAPI5.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseGameInputMotionEventProcessor } from './BaseGameInputMotionEventProcessor.js';

export class GameInputMotionEventProcessorFactory
            extends Object
         {
        

    public static getInstance(): BaseGameInputMotionEventProcessor{

    var SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;;
    

                        if(SDK_VERSION <= 4)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInputMotionEventProcessorAPI1.getInstance();;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInputMotionEventProcessorAPI5.getInstance();;
    

                        }
                            
}


}
                
            

