
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

    
import { Processor } from "../../../org/allbinary/canvas/Processor.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MidletExitProcessor extends Processor {
        

    private readonly midlet: MIDlet
public constructor (midlet: MIDlet){

            super();
            var midlet = midlet
this.midlet= midlet;
    
}


                //@Throws(Error::class)
            
    public process(){
System.exit(0);
    
}


}
                
            

