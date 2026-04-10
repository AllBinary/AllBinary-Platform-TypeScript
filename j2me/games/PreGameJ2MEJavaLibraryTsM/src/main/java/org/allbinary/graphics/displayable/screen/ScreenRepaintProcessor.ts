
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
        



import { Displayable } from "../../../../../javax/microedition/lcdui/Displayable.js";

    
import { Processor } from "../../../../../org/allbinary/canvas/Processor.js";

    

export class ScreenRepaintProcessor extends Processor {
        

    private readonly displayable: Displayable
public constructor (displayable: Displayable){

            super();
            var displayable = displayable
this.displayable= displayable
}


                //@Throws(Error::class)
            
    public process(){
ScreenRepaintUtil.repaint(displayable)
}


}
                
            

