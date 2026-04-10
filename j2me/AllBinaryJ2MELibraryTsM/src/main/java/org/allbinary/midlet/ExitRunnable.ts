
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
        



import { NullCanvas } from "../../../javax/microedition/lcdui/NullCanvas.js";

    
import { Processor } from "../../../org/allbinary/canvas/Processor.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class ExitRunnable
            extends Object
        
                , Runnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly midlet: AllBinaryMidlet

    private readonly processor: Processor

    private readonly isProgress: boolean
public constructor (midlet: AllBinaryMidlet, processor: Processor, isProgress: boolean){

            super();
            var midlet = midlet
var processor = processor
var isProgress = isProgress
this.midlet= midlet
this.isProgress= isProgress
this.processor= processor
}


    public run(){

        try {
            put(commonStrings!.START_RUNNABLE, this, commonStrings!.RUN)
destroyApp(false, this.isProgress)
setDisplay(NullCanvas.NULL_CANVAS)
notifyDestroyed()
put(commonStrings!.END_RUNNABLE, this, commonStrings!.RUN)
process()
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)

        try {
            process()
} catch(e2: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}

}


}
                
            

