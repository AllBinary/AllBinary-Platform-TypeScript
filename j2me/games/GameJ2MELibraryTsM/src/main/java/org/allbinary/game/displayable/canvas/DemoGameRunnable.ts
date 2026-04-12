
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
        



import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { GameTickTimeDelayHelper } from "../../../../../org/allbinary/time/GameTickTimeDelayHelper.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    

export class DemoGameRunnable extends GameRunnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly demoCanvas: DemoCanvas
public constructor (demoCanvas: DemoCanvas){

            super();
            var demoCanvas = demoCanvas
this.demoCanvas= demoCanvas;
    
}


    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;
        
        

    public run(){

        try {
            demoCanvas!.getLoopTimeHelperP()!.setStartTime(gameTickTimeDelayHelper!.setStartTime());
    
demoCanvas!.processGame();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


                //@Throws(Error::class)
            
    public processLoopSleep(){
demoCanvas!.processLoopSleep();
    
}


}
                
            

