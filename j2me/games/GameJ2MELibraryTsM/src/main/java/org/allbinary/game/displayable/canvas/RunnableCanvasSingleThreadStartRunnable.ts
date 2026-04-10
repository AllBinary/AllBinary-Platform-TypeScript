
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
        



import { RunnableCanvas } from "../../../../../org/allbinary/canvas/RunnableCanvas.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class RunnableCanvasSingleThreadStartRunnable extends GameRunnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly runnableCanvas: RunnableCanvas
public constructor (demoCanvas: RunnableCanvas){

            super();
            var demoCanvas = demoCanvas
this.runnableCanvas= demoCanvas
}


    public run(){

        try {
            run()
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}


                @Throws(Exception::class)
            
    public processLoopSleep(){
processLoopSleep()
}


}
                
            

