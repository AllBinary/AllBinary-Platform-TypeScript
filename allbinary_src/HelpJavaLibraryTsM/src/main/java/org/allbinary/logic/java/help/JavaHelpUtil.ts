
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { awt } from '../../../../../java/awt.js';
//not GWT import const awt

import { ActionEvent } from '../../../../../java/awt/event/ActionEvent.js';
//not GWT import const ActionEvent

import { File } from '../../../../../java/io/File.js';
//not GWT import const File

import { URI } from '../../../../../java/net/URI.js';
//not GWT import const URI

//not plain js import { URL } 
const URL = globalThis.java.net.URL;
type URL<T = any, U = any> = typeof URL extends abstract new (...args: any[]) => infer Instance ? Instance : typeof URL;

import { CSH } from '../../../../../javax/help/CSH.js';
//not GWT import const CSH

import { HelpBroker } from '../../../../../javax/help/HelpBroker.js';
//not GWT import const HelpBroker

import { HelpSet } from '../../../../../javax/help/HelpSet.js';
//not GWT import const HelpSet

import { swing } from '../../../../../javax/swing.js';
//not GWT import const swing

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Point } from './Point.js';
//sameFolderImports - not GWT import - same folder const Point
import { Dimension } from './Dimension.js';
//sameFolderImports - not GWT import - same folder const Dimension
import { JLabel } from './JLabel.js';
//sameFolderImports - not GWT import - same folder const JLabel
import { DisplayHelpFromSource } from './DisplayHelpFromSource.js';
//sameFolderImports - not GWT import - same folder const DisplayHelpFromSource

export class JavaHelpUtil
            extends Object
         {
        

    private static readonly instance: JavaHelpUtil = new JavaHelpUtil();

    public static getInstance(): JavaHelpUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return JavaHelpUtil.instance;
    
}


    public static main(args: string[]){

 try { 
    let javaHelpUtil: JavaHelpUtil = JavaHelpUtil.getInstance()!;;
    
javaHelpUtil!.show(javaHelpUtil!.getHelpSet("G:/mnt/bc/mydev/working/automation/InputAutomationJavaApplication/AllBinaryInputAutomationHelp/AllBinaryInputAutomation.hs"));
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

 }
   }
 
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly point: Point = new Point(0, 0);

    private readonly dimension: Dimension = new Dimension(640, 480);

    private contextSensitiveHelpActionEvent: ActionEvent = new ActionEvent(new JLabel(), ActionEvent.ACTION_FIRST, 
                            null);

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

private constructor (){

            super();
        }

getHelpSet(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'string') return this.getHelpSet$overload1(args[0]);
   
    if (args.length === 1) return this.getHelpSet$overload2(args[0]);
   
   throw new TypeError('No matching overload: getHelpSet'); }
  
    public getHelpSet$overload1(filePath: string): HelpSet{

 try { 
    let helpSetURI: URI = new File(filePath).toURI()!;;
    

    let helpSetURL: URL = helpSetURI!.toURL()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getHelpSet(helpSetURL);;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, getInstance(), "set", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getHelpSet$overload2(url: URL): HelpSet{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HelpSet(
                            null, url);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, getInstance(), "set", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public show(helpSet: HelpSet){

 try { 
    let helpBroker: HelpBroker = helpSet!.createHelpBroker()!;;
    
helpBroker!.setLocation(this.point);
    
helpBroker!.setSize(this.dimension);
    
new CSH.DisplayHelpFromSource(helpBroker).actionPerformed(this.contextSensitiveHelpActionEvent);
    
this.logUtil!.putF("CSH Action", getInstance(), "show");
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, getInstance(), "show", e);
    

 }
   }
 
}


}

