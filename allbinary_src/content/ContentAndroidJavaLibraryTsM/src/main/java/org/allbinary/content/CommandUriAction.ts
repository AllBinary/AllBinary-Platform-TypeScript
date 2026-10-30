
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
        
import { Command } from '../../../javax/microedition/lcdui/Command.js';
//not GWT import const Command

import { Intent } from '../../../android/content/Intent.js';
//not GWT import const Intent

import { Uri } from '../../../android/net/Uri.js';
//not GWT import const Uri

//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
type ResourceUtil<T = any, U = any> = typeof ResourceUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ResourceUtil;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
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

    private hashtable: ABHashtable<any, any> = StdUtil.getInstance()!.createHashtable()!;

    public add(command: Command, url: string){
this.hashtable.put(command, url);
    
}


    public process(command: Command){

 try { 
    let intent: Intent = this.getIntent(command)!;;
    
ResourceUtil.getInstance()!.getContext()!.startActivity(intent);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    

 }
   }
 
}


    public getIntent(command: Command): Intent{

    let url: string = this.hashtable.get(command) as string;;
    

    let uri: Uri = Uri.parse(url)!;;
    

    let intent: Intent = new Intent(Intent.ACTION_VIEW, uri);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return intent;
    
}


}

