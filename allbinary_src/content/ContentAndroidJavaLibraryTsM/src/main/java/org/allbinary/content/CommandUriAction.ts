
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { Hashtable } from '../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
//not plain js import { Command } from '../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
import { Intent } from '../../../android/content/Intent.js';
      //not GWT import const Intent = globalThis.android.content.Intent;

      
import { Uri } from '../../../android/net/Uri.js';
      //not GWT import const Uri = globalThis.android.net.Uri;

      
//not plain js import { ResourceUtil } from '../../../org/allbinary/data/resource/ResourceUtil.js';
      const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CommandUriAction
            extends Object
         {
        

    private static readonly instance: CommandUriAction = new CommandUriAction();

    public static getInstance(): CommandUriAction{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CommandUriAction.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private hashtable: Hashtable<any, any> = new Hashtable<any, any>();

    public add(command: Command, url: string){
this.hashtable.put(command, url);
    
}


    public process(command: Command){

        try {
            
    var intent: Intent = this.getIntent(command)!;;
    
ResourceUtil.getInstance()!.getContext()!.startActivity(intent);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    
}

}


    public getIntent(command: Command): Intent{

    var url: string = this.hashtable.get(command) as string;;
    

    var uri: Uri = Uri.parse(url)!;;
    

    var intent: Intent = new Intent(Intent.ACTION_VIEW, uri);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return intent;
    
}


}



