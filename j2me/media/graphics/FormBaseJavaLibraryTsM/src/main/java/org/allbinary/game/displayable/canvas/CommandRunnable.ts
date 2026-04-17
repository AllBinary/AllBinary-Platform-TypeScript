
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
        



import { Command } from "../../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { MyCanvas } from "../../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CommandFormInputProcessor } from "./CommandFormInputProcessor.js";

export class CommandRunnable
            extends Object
         implements Runnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly commandFormInputProcessor: CommandFormInputProcessor

    private readonly command: Command
public constructor (commandFormInputProcessor: CommandFormInputProcessor, command: Command){

            super();
            var commandFormInputProcessor = commandFormInputProcessor
var command = command
this.commandFormInputProcessor= commandFormInputProcessor;
    
this.command= command;
    
}


    public run(){

        try {
            this.logUtil!.putF(commonStrings!.START_RUNNABLE, this, commonStrings!.RUN);
    

    var canvas: MyCanvas = this.commandFormInputProcessor!.getCanvas()!;
        
        
;
    

    var commandListener: CommandListener = canvas.getCustomCommandListener()!;
        
        
;
    
commandListener!.commandAction(command, canvas);
    
this.logUtil!.putF(commonStrings!.END_RUNNABLE, this, commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}
                
            

