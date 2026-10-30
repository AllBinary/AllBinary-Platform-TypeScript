
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { XmlDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/XmlDocumentHelper.js';
//not GWT import const XmlDocumentHelper

import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
//not GWT import const PATH_GLOBALS

import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

import { AbFileLocalInputStream } from '../../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
//not GWT import const AbFileLocalInputStream

import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LogConfigsData } from './LogConfigsData.js';
//sameFolderImports - not GWT import - same folder const LogConfigsData
import { LogConfigData } from './LogConfigData.js';
//sameFolderImports - not GWT import - same folder const LogConfigData
import { LogConfig } from './LogConfig.js';
//sameFolderImports - not GWT import - same folder const LogConfig

export class LoggingInitInfo
            extends Object
         {
        

    private static readonly INITFILENAME: string = "logConfig.xml";

    private static readonly PACKAGE: string = PATH_GLOBALS.getInstance()!.INIT_PATH;

    private static logConfigInfoList: BasicArrayList = 
                null
            ;

    private static hasRead: boolean = false;

                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static getDoc(): Document{

    let path: string = URLGLOBALS.getWebappPath() +LoggingInitInfo.PACKAGE;;
    

    let FILEABPATH: AbPath = new AbPath(path, INITFILENAME);;
    

    let file: AbFile = AbFile.createAbFileFromAbPath(FILEABPATH)!;;
    

    let document: Document = DomDocumentHelper.create(new AbFileLocalInputStream(file))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static write(){

 try { LoggingInitInfo.hasRead= false;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    static read(){

 try { 
    let document: Document = LoggingInitInfo.getDoc()!;;
    

    let logConfigsNodeList: NodeList = document.getElementsByTagName(LogConfigsData.getInstance()!.NAME)!;;
    

    let logConfigsNode: Node = logConfigsNodeList!.item(0)!;;
    

    let logConfigNodeVector: BasicArrayList = DomSearchHelper.getAllNodes(LogConfigData.getInstance()!.NAME, logConfigsNode!.getChildNodes())!;;
    
LoggingInitInfo.logConfigInfoList= new BasicArrayListD();
    

    let size: number = logConfigNodeVector!.size()!;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let node: Node = logConfigNodeVector!.get(i) as Node;;
    

    let logConfigInfo: LogConfig = new LogConfig(node);;
    
LoggingInitInfo.logConfigInfoList!.add(logConfigInfo);
    
}

 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static setHasRead(value: boolean){
LoggingInitInfo.hasRead= value;
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    static updateIfNeeded(){

                        if(!LoggingInitInfo.hasRead)
                        
                                    {
                                    LoggingInitInfo.read();
    
LoggingInitInfo.hasRead= true;
    

                        if(LoggingInitInfo.logConfigInfoList == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Read Failed");
                    

                                    }
                                

                                    }
                                
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static set(logConfigInfoVector: BasicArrayList){
LoggingInitInfo.logConfigInfoList= logConfigInfoVector;
    
}


                //@Throws(Exception.constructor)
            
    public static get(): BasicArrayList{
LoggingInitInfo.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LoggingInitInfo.logConfigInfoList;
    
}


                //@Throws(Exception.constructor)
            
    public static getTypeNameList(): BasicArrayList{
LoggingInitInfo.updateIfNeeded();
    

    let allLogTypeVector: BasicArrayList = new BasicArrayListD();;
    

    let size: number = LoggingInitInfo.logConfigInfoList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let logConfigInfo: LogConfig = LoggingInitInfo.logConfigInfoList!.objectArray[index]! as LogConfig;;
    

    let logTypeVector: BasicArrayList = logConfigInfo!.getTypeVector()!;;
    

                        if(logConfigInfo!.isEnabled())
                        
                                    {
                                    allLogTypeVector!.addAllList(logTypeVector);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allLogTypeVector;
    
}


                //@Throws(Exception.constructor)
            
    public static getTypeList(): BasicArrayList{
LoggingInitInfo.updateIfNeeded();
    

    let allLogTypeVector: BasicArrayList = new BasicArrayListD();;
    

    let size: number = LoggingInitInfo.logConfigInfoList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let logConfigInfo: LogConfig = LoggingInitInfo.logConfigInfoList!.objectArray[index]! as LogConfig;;
    

    let logTypeVector: BasicArrayList = logConfigInfo!.getTypeVector()!;;
    

                        if(logConfigInfo!.isEnabled())
                        
                                    {
                                    allLogTypeVector!.addAllList(logTypeVector);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allLogTypeVector;
    
}


public constructor (){

            super();
        }


    public isValid(): boolean{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public getNumberOfLogConfigs(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LoggingInitInfo.logConfigInfoList!.size();;
    
}


    public toString(): string{

 try { 
    let document: Document = LoggingInitInfo.getDoc()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return XmlDocumentHelper.toString(document);;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    

 }
   }
 
}


}

