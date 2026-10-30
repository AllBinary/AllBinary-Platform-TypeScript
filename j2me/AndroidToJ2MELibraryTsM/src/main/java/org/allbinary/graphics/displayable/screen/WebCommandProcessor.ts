
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
//not GWT import const Context

import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas

import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
//not GWT import const Command

import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
//not GWT import const CommandListener

import { Intent } from '../../../../../android/content/Intent.js';
//not GWT import const Intent

import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AboutCommandProcessor } from './AboutCommandProcessor.js';
//sameFolderImports - not GWT import - same folder const AboutCommandProcessor

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
    let context: Context = this.aboutCommandProcessor!.getContext() as Context;;
    

    let intent: Intent = new Intent(context, TsUtil.getInstance()!.getClassClassLoader(this)!.loadClass(this.WEB_VIEW_ACTIVITY));;
    
intent.putExtra(this.aboutCommandProcessor!.URL, this.list.removeAt(0) as string);
    
intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    
context.startActivity(intent);
    
 }
 catch (caught: any) {
 if (caught instanceof ClassNotFoundException) {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "process", e);
    

 }
  else { throw caught; } }
 
}


}

