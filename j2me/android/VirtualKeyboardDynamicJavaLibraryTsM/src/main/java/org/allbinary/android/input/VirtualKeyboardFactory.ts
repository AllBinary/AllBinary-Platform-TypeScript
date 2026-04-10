
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
        



import { AndroidInfoFactory } from "../../../../org/allbinary/android/AndroidInfoFactory.js";

    
import { VirtualKeyboardAPI1 } from "../../../../org/allbinary/android/input/api1/VirtualKeyboardAPI1.js";

    
import { VirtualKeyboardAPI3 } from "../../../../org/allbinary/android/input/api3/VirtualKeyboardAPI3.js";

    
import { Activity } from "../../../../android/app/Activity.js";

    

export class VirtualKeyboardFactory
            extends Object
         {
        

    private virtualKeyboard: VirtualKeyboard = VirtualKeyboard.NULL_VIRTUAL_KEYBOARD;
        
        

    public static init(activity: Activity){
var activity = activity

    var SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;
        
        


                        if(SDK_VERSION <= 2)
                        
                                    {
                                    virtualKeyboard= VirtualKeyboardAPI1(activity)

                                    }
                                
                        else {
                            virtualKeyboard= VirtualKeyboardAPI3(activity)

                        }
                            
}


    public static getInstance(): VirtualKeyboard{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return virtualKeyboard;
    
}


}
                
            

