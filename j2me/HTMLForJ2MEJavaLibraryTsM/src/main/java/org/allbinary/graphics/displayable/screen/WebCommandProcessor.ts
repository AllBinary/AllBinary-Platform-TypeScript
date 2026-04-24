
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2022 AllBinary
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
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { Command } from "../../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../../org/allbinary/util/BasicArrayListD.js";

    
import { PlayN } from "../../../../../playn/core/PlayN.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AboutCommandProcessor } from "./AboutCommandProcessor.js";

export class WebCommandProcessor
            extends Object
         {
        

    private static readonly instance: WebCommandProcessor = new WebCommandProcessor();
        
        

    public static getInstance(): WebCommandProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly aboutCommandProcessor: AboutCommandProcessor = AboutCommandProcessor.getInstance()!;
        
        

    public readonly list: BasicArrayList = new BasicArrayListD();
        
        

    public process(midletCommandListener: CommandListener, command: Command, canvas: Canvas){
    //var midletCommandListener = midletCommandListener
    //var command = command
    //var canvas = canvas

        try {
            PlayN.openURL(this.list.remove(0) as String);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    
}

}


}
                
            

