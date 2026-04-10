
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
        



import { MotionGestureConfiguration } from "../../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfiguration.js";

    
import { MotionGestureConfigurationFactory } from "../../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfigurationFactory.js";

    

export class MotionGestureReceiveInterfaceFactory
            extends Object
         {
        

    public static getInstance(): CompleteMotionGestureListenerInterface{

    var configuration: MotionGestureConfiguration = MotionGestureConfigurationFactory.getInstance()!;
        
        


                        if(!configuration.isExecutingActionsAllowed())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullCompleteMotionGestureReceiver();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ResolveCompleteMotionGestureListener();
    

                        }
                            
}


}
                
            

