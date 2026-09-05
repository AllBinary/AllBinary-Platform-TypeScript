
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
        
//not plain js import { Command } 
const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Intent } from './Intent.js';
//not GWT import - same folder const Intent = globalThis.org.allbinary.content.Intent;

                
export class CommandUriAction
            extends Object
         {
        

    private static readonly instance: CommandUriAction = new CommandUriAction();

    public static getInstance(): CommandUriAction{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CommandUriAction.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private hashtable: ABHashtable = StdUtil.getInstance()!.createHashtable()!;

    public add(command: Command, url: string){
this.hashtable.put(command, url);
    
}


    public process(command: Command){

        try {
            
                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    
}

}


    public getIntent(command: Command): Intent{

    var url: string = this.hashtable.get(command) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return intent;
    
}


}



