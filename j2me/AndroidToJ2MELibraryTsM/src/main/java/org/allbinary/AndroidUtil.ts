
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
        



            import { Object } from '../../java/lang/Object.js';
        
            import { Integer } from '../../java/lang/Integer.js';
        
//not game specific package import { Activity } from '../../android/app/Activity.js';
      const Activity = globalThis.android.app.Activity;

      
//not game specific package import { Build } from '../../android/os/Build.js';
      const Build = globalThis.android.os.Build;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AndroidUtil
            extends Object
         {
        

    public static readonly NULL_ACTIVITY: Activity = new Activity();

    private static readonly version: number = Integer.parseInt(Build.VERSION.SDK)!;

    public static isMemoryRestrictive(): boolean{

                        if(AndroidUtil.version < 30)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public static isAndroid(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}



