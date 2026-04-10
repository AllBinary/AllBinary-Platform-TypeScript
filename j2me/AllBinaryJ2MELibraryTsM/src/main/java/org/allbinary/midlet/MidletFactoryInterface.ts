
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
        



import { MIDlet } from "../../../javax/microedition/midlet/MIDlet.js";

    
import { NullMIDlet } from "../../../javax/microedition/midlet/NullMIDlet.js";

    

export class MidletFactoryInterface
            extends Object
         {
        

    public getInstance(): MIDlet{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullMIDlet.NULL_MIDLET;
    
}


}
                
            

