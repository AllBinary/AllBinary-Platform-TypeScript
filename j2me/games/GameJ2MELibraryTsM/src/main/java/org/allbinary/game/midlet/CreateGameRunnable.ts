
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { ProgressCanvas } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { MyCommandsFactory } from "../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

import { DemoGameMidletStateFactory } from "./DemoGameMidletStateFactory.js";

import { DemoGameMidletEventHandler } from "./DemoGameMidletEventHandler.js";

export class CreateGameRunnable
            extends Object
        
                , Runnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly demoGameMidlet: DemoGameMidlet

    private readonly hashtable: Hashtable<any, any>

    private readonly startGameMidletEvent: DemoGameMidletEvent
public constructor (demoGameMidlet: DemoGameMidlet, hashtable: Hashtable<any, any>){

            super();
            var demoGameMidlet = demoGameMidlet
var hashtable = hashtable
this.demoGameMidlet= demoGameMidlet;
    
this.hashtable= hashtable;
    
this.startGameMidletEvent= new DemoGameMidletEvent(this, DemoGameMidletStateFactory.getInstance()!.START_GAME);
    
}


    public run(){

        try {
            this.logUtil!.putF(commonStrings!.START_RUNNABLE, this, commonStrings!.RUN);
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    
this.demoGameMidlet!.commandAction(MyCommandsFactory.getInstance()!.SET_DISPLAYABLE, progressCanvas);
    
this.demoGameMidlet!.stopGameCanvasRunnableInterface();
    
this.demoGameMidlet!.setGameCanvasRunnableInterface(this.demoGameMidlet!.createGameCanvasRunnableInterface());
    
this.demoGameMidlet!.getGameCanvasRunnableInterface()!.setLoadStateHashtable(hashtable);
    
this.demoGameMidlet!.startGameCanvasRunnableInterface();
    
DemoGameMidletEventHandler.getInstance()!.fireEvent(this.startGameMidletEvent);
    
this.logUtil!.putF(commonStrings!.END_RUNNABLE, this, commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}
                
            

