
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
        
            import { ClassNotFoundException } from '../../../../../java/lang/ClassNotFoundException.js';
        
import { Context } from '../../../../../android/content/Context.js';
      //not GWT import const Context = globalThis.android.content.Context;

      
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      //not GWT import const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      //not GWT import const Command = globalThis.javax.microedition.lcdui.Command;

      
import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      //not GWT import const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
import { Intent } from '../../../../../android/content/Intent.js';
      //not GWT import const Intent = globalThis.android.content.Intent;

      
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
      //not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AboutCommandProcessor } from './AboutCommandProcessor.js';

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

    private readonly WEB_VIEW_ACTIVITY: string = "org.allbinary.android.activity.WebViewActivity";

    public readonly list: BasicArrayList = new BasicArrayListD();

    public process(midletCommandListener: CommandListener, command: Command, canvas: Canvas){

        try {
            
    var context: Context = this.aboutCommandProcessor!.getContext() as Context;;
    

    var intent: Intent = new Intent(context, TsUtil.getInstance()!.getClassClassLoader(this)!.loadClass(this.WEB_VIEW_ACTIVITY));;
    
intent.putExtra(this.aboutCommandProcessor!.URL, this.list.removeAt(0) as string);
    
intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    
context.startActivity(intent);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "process", e);
    
}

}


}



