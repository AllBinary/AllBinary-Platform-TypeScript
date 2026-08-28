
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
        
//not game specific package import { ActivityFractureUtil } from '../../../../../org/allbinary/android/ActivityFractureUtil.js';
      const ActivityFractureUtil = globalThis.org.allbinary.android.ActivityFractureUtil;

      
//not game specific package import { AndroidInfoFactory } from '../../../../../org/allbinary/android/AndroidInfoFactory.js';
      const AndroidInfoFactory = globalThis.org.allbinary.android.AndroidInfoFactory;

      
//not game specific package import { ActivityFractureUtilAPI1 } from '../../../../../org/allbinary/android/api1/ActivityFractureUtilAPI1.js';
      const ActivityFractureUtilAPI1 = globalThis.org.allbinary.android.api1.ActivityFractureUtilAPI1;

      
//not game specific package import { ActivityFractureUtilAPI16 } from '../../../../../org/allbinary/android/api16/ActivityFractureUtilAPI16.js';
      const ActivityFractureUtilAPI16 = globalThis.org.allbinary.android.api16.ActivityFractureUtilAPI16;

      
//not game specific package import { ActivityFractureUtilAPI19 } from '../../../../../org/allbinary/android/api19/ActivityFractureUtilAPI19.js';
      const ActivityFractureUtilAPI19 = globalThis.org.allbinary.android.api19.ActivityFractureUtilAPI19;

      
//not game specific package import { ActivityFractureUtilAPI5 } from '../../../../../org/allbinary/android/api5/ActivityFractureUtilAPI5.js';
      const ActivityFractureUtilAPI5 = globalThis.org.allbinary.android.api5.ActivityFractureUtilAPI5;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ActivityFractureInputUtilFactory
            extends Object
         {
        

    public static getInstance(): ActivityFractureUtil{

    var SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;;
    

                        if(SDK_VERSION <= 4)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ActivityFractureUtilAPI1.getInstance();;
    

                                    }
                                
                             else 
                        if(SDK_VERSION <= 15)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ActivityFractureUtilAPI5.getInstance();;
    

                                    }
                                
                             else 
                        if(SDK_VERSION <= 16)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ActivityFractureUtilAPI16.getInstance();;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ActivityFractureUtilAPI19.getInstance();;
    

                        }
                            
}


}



