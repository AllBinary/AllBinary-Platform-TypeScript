
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Displayable } from '../../../../../javax/microedition/lcdui/Displayable.js';
//not GWT import const Displayable
import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScreenRepaintUtil } from './ScreenRepaintUtil.js';
//not GWT import - same folder const ScreenRepaintUtil
export class ScreenRepaintProcessor extends Processor {
        

    private readonly displayable: Displayable;

public constructor (displayable: Displayable){

            super();
        this.displayable= displayable;
    
}


                //@Throws(Exception.constructor)
            
    public process(){
ScreenRepaintUtil.repaint(this.displayable);
    
}


}



