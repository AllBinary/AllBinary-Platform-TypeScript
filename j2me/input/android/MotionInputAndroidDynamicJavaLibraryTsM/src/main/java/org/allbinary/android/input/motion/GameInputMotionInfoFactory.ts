
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
//not game specific package import { AndroidInfoFactory } from '../../../../../org/allbinary/android/AndroidInfoFactory.js';
      const AndroidInfoFactory = globalThis.org.allbinary.android.AndroidInfoFactory;

      
//not game specific package import { GameInputMotionInfoAPI1 } from '../../../../../org/allbinary/android/input/motion/api1/GameInputMotionInfoAPI1.js';
      const GameInputMotionInfoAPI1 = globalThis.org.allbinary.android.input.motion.api1.GameInputMotionInfoAPI1;

      
//not game specific package import { GameInputMotionInfoAPI5 } from '../../../../../org/allbinary/android/input/motion/api5/GameInputMotionInfoAPI5.js';
      const GameInputMotionInfoAPI5 = globalThis.org.allbinary.android.input.motion.api5.GameInputMotionInfoAPI5;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameInputMotionInfo } from './GameInputMotionInfo.js';

export class GameInputMotionInfoFactory
            extends Object
         {
        

    public static getInstance(): GameInputMotionInfo{

    var SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;;
    

                        if(SDK_VERSION <= 4)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInputMotionInfoAPI1.getInstance();;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInputMotionInfoAPI5.getInstance();;
    

                        }
                            
}


}



