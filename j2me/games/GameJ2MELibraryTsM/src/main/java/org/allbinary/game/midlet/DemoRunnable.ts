
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
        



import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { MyCommandsFactory } from "../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class DemoRunnable
            extends Object
        
                , Runnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly demoGameMidlet: DemoGameMidlet

    private readonly startDemoGameMidletEvent: DemoGameMidletEvent
public constructor (demoGameMidlet: DemoGameMidlet){

            super();
            var demoGameMidlet = demoGameMidlet
this.demoGameMidlet= demoGameMidlet
this.startDemoGameMidletEvent= DemoGameMidletEvent(this.demoGameMidlet, DemoGameMidletStateFactory.getInstance()!.START_DEMO)
}


    public run(){

        try {
            logUtil!.put(StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.append("GameCanvasRunnableInterface")!.toString(), this, commonStrings!.RUN)
this.demoGameMidlet!.commandAction(MyCommandsFactory.getInstance()!.SET_DISPLAYABLE, ProgressCanvasFactory.getInstance())
this.demoGameMidlet!.setGameCanvasRunnableInterface(this.demoGameMidlet!.createDemoGameCanvasRunnableInterface())
this.demoGameMidlet!.demoSetup()
DemoGameMidletEventHandler.getInstance()!.fireEvent(this.startDemoGameMidletEvent)
this.demoGameMidlet!.startGameCanvasRunnableInterface()
this.demoGameMidlet!.postDemoSetup()
logUtil!.put(commonStrings!.END_RUNNABLE, this, commonStrings!.RUN)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}


}
                
            

