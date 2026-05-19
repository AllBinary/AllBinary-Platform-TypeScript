
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


        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LockedUtilInterface } from './LockedUtilInterface.js';
import { LockableFeature } from './LockableFeature.js';

export class LockedUtil
            extends Object
         implements LockedUtilInterface {
        

    private static readonly instance: LockedUtil = new LockedUtil();

    public static getInstance(): LockedUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LockedUtil.instance;
    
}


    public isLocked(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isLockedFeature(lockableFeatrue: LockableFeature): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

