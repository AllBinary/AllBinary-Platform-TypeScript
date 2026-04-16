
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
        



import { Hashtable } from "../../../java/util/Hashtable.js";

    
import { Command } from "../../../javax/microedition/lcdui/Command.js";

    
import { Intent } from "../../../android/content/Intent.js";

    
import { Uri } from "../../../android/net/Uri.js";

    
import { ResourceUtil } from "../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class CommandUriAction
            extends Object
         {
        

    private static readonly instance: CommandUriAction = new CommandUriAction();
        
        

    public static getInstance(): CommandUriAction{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        

    public add(command: Command, url: string){
var command = command
var url = url
hashtable.put(command, url);
    
}


    public process(command: Command){
var command = command

        try {
            
    var intent: Intent = getIntent(command)!;
        
        
;
    
ResourceUtil.getInstance()!.getContext()!.startActivity(intent);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    
}

}


    public getIntent(command: Command): Intent{
var command = command

    var url: string = hashtable.get(command as Object);

                         as String;
        
        
;
    

    var uri: Uri = Uri.parse(url)!;
        
        
;
    

    var intent: Intent = new Intent(Intent.ACTION_VIEW, uri);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return intent;
    
}


}
                
            

