
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;

      
import { ImageToolJFrame } from '../../../org/allbinary/image/gui/ImageToolJFrame.js';
//not GWT import const ImageToolJFrame = globalThis.org.allbinary.image.gui.ImageToolJFrame;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EventQueue } from './EventQueue.js';
//not GWT import - same folder const EventQueue = globalThis.org.allbinary.image.EventQueue;

                
export class ImageTool
            extends Object
         {
        

    public static main(args: string[]){
java.awt.EventQueue.invokeLater(new class extends ARunnable
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

        try {
            logUtil!.putF(commonStrings!.START, this, commonStrings!.RUN);
    
new ImageToolJFrame().setVisible(true);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}

                                }
                            );
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }


}



