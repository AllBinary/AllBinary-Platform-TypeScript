
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not plain js import { Command } 
const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { CommandListener } 
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { PlayN } 
const PlayN = globalThis.playn.core.PlayN;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AboutCommandProcessor } from './AboutCommandProcessor.js';
//not GWT import - same folder const AboutCommandProcessor = globalThis.org.allbinary.graphics.displayable.screen.AboutCommandProcessor;

                
export class WebCommandProcessor
            extends Object
         {
        

    private static readonly instance: WebCommandProcessor = new WebCommandProcessor();

    public static getInstance(): WebCommandProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WebCommandProcessor.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly aboutCommandProcessor: AboutCommandProcessor = AboutCommandProcessor.getInstance()!;

    public readonly list: BasicArrayList = new BasicArrayListD();

    public process(midletCommandListener: CommandListener, command: Command, canvas: Canvas){

        try {
            PlayN.openURL(this.list.removeAt(0) as string);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    
}

}


}



