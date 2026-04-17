
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CompositeSound } from "./CompositeSound.js";

import { Sound } from "./Sound.js";

export class SelectSound extends CompositeSound {
        

    private soundInterface: Sound = new SelectSound();
        
        

    public static getInstance(): Sound{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return soundInterface;
    
}

private constructor ()                        

                            : super("resource:/wav/select.wav"){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

