
        /* Generated Code Do Not Modify */
        



import { AndroidInfoFactory } from "../../../../org/allbinary/android/AndroidInfoFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AndroidAPI12KeyFactory } from "./AndroidAPI12KeyFactory.js";

import { AndroidAPI9KeyFactory } from "./AndroidAPI9KeyFactory.js";

import { AndroidAPI1KeyFactory } from "./AndroidAPI1KeyFactory.js";

import { AndroidKeyFactory } from "./AndroidKeyFactory.js";

export class ActivityFractureControllerUtilFactory
            extends Object
         {
        

    public static getInstance(): AndroidKeyFactory{

    var SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;
        
        
;
    

                        if(SDK_VERSION <= 8)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidAPI1KeyFactory.getInstance();;
    

                                    }
                                
                             else 
                        if(SDK_VERSION <= 11)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidAPI9KeyFactory.getInstance();;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidAPI12KeyFactory.getAPI12Instance();;
    

                        }
                            
}


}
                
            

