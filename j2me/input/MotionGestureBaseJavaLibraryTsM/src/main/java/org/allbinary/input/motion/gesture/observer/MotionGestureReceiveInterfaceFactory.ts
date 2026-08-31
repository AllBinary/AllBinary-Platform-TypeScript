
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
        
import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { MotionGestureConfiguration } from '../../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfiguration.js';
      //not GWT import const MotionGestureConfiguration = globalThis.org.allbinary.input.motion.gesture.configuration.MotionGestureConfiguration;

      
import { MotionGestureConfigurationFactory } from '../../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfigurationFactory.js';
      //not GWT import const MotionGestureConfigurationFactory = globalThis.org.allbinary.input.motion.gesture.configuration.MotionGestureConfigurationFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ResolveCompleteMotionGestureListener } from './ResolveCompleteMotionGestureListener.js';
//not GWT import const ResolveCompleteMotionGestureListener = globalThis.org.allbinary.input.motion.gesture.observer.ResolveCompleteMotionGestureListener;

                import { NullCompleteMotionGestureReceiver } from './NullCompleteMotionGestureReceiver.js';
//not GWT import const NullCompleteMotionGestureReceiver = globalThis.org.allbinary.input.motion.gesture.observer.NullCompleteMotionGestureReceiver;

                import { CompleteMotionGestureListenerInterface } from './CompleteMotionGestureListenerInterface.js';
//not GWT import const CompleteMotionGestureListenerInterface = globalThis.org.allbinary.input.motion.gesture.observer.CompleteMotionGestureListenerInterface;

                
export class MotionGestureReceiveInterfaceFactory
            extends Object
         {
        

    public static getInstance(): CompleteMotionGestureListenerInterface{

    var configuration: MotionGestureConfiguration = MotionGestureConfigurationFactory.getInstance()!;;
    

                        if(!configuration.isExecutingActionsAllowed())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NullCompleteMotionGestureReceiver();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ResolveCompleteMotionGestureListener();
    

                        }
                            
}


}



