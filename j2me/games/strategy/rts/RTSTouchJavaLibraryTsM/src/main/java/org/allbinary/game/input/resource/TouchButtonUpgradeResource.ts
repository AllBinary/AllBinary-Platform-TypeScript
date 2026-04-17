
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2007 AllBinary 
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
        



import { TouchButtonResource } from "../../../../../org/allbinary/input/motion/button/TouchButtonResource.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TouchButtonUpgradeResource extends TouchButtonResource {
        

    private static readonly instance: TouchButtonResource = new TouchButtonUpgradeResource();
        
        

    public static getInstance(): TouchButtonResource{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor ()                        

                            : super("/touch_button_upgrade_64_by_64.png", "/touch_button_upgrade_hint_64_by_64.png"){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

