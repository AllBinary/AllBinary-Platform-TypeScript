
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
        



import { Processor } from "../../../../../org/allbinary/canvas/Processor.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AllBinaryGameCanvas } from "./AllBinaryGameCanvas.js";

export class StartIntermissionProcessor extends Processor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private gameCanvas: AllBinaryGameCanvas

    private readonly WAIT: number = 5000;
        
        
public constructor (gameCanvas: AllBinaryGameCanvas){

            super();
        var gameCanvas = gameCanvas
this.gameCanvas= gameCanvas;
    
}


                //@Throws(Error::class)
            
    public process(){

                        if(this.gameCanvas!.getStartIntermissionInterface()!.getTimeDelayHelper()!.isElapsed(this.WAIT))
                        
                                    {
                                    this.logUtil!.putF("Intermission End", this, commonStrings!.PROCESS);
    
this.gameCanvas!.getStartIntermissionInterface()!.setEnabled(false);
    

                                    }
                                
}


}
                
            

