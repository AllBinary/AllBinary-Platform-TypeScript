
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
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
      //not GWT import const PATH_GLOBALS = globalThis.org.allbinary.globals.PATH_GLOBALS;

      
import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
import { AbFileLocalInputStream } from '../../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
      //not GWT import const AbFileLocalInputStream = globalThis.org.allbinary.logic.io.AbFileLocalInputStream;

      
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      //not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LogConfigsData } from './LogConfigsData.js';
//not GWT import const LogConfigsData = globalThis.org.allbinary.logic.communication.log.config.LogConfigsData;

                import { LogConfigData } from './LogConfigData.js';
//not GWT import const LogConfigData = globalThis.org.allbinary.logic.communication.log.config.LogConfigData;

                import { LogConfig } from './LogConfig.js';
//not GWT import const LogConfig = globalThis.org.allbinary.logic.communication.log.config.LogConfig;

                
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

    var path: string = URLGLOBALS.getWebappPath() +LoggingInitInfo.PACKAGE;;
    

    var FILEABPATH: AbPath = new AbPath(path, INITFILENAME);;
    

    var file: AbFile = AbFile.createAbFileFromAbPath(FILEABPATH)!;;
    

    var document: Document = DomDocumentHelper.create(new AbFileLocalInputStream(file))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static write(){

        try {
            LoggingInitInfo.hasRead= false;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    static read(){

        try {
            
    var document: Document = LoggingInitInfo.getDoc()!;;
    

    var logConfigsNodeList: NodeList = document.getElementsByTagName(LogConfigsData.getInstance()!.NAME)!;;
    

    var logConfigsNode: Node = logConfigsNodeList!.item(0)!;;
    

    var logConfigNodeVector: BasicArrayList = DomSearchHelper.getAllNodes(LogConfigData.getInstance()!.NAME, logConfigsNode!.getChildNodes())!;;
    
LoggingInitInfo.logConfigInfoList= new BasicArrayListD();
    

    var size: number = logConfigNodeVector!.size()!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var node: Node = logConfigNodeVector!.get(i) as Node;;
    

    var logConfigInfo: LogConfig = new LogConfig(node);;
    
LoggingInitInfo.logConfigInfoList!.add(logConfigInfo);
    
}


                //: 
} catch(e) 
            {



                            throw e;
                    
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
    

    var allLogTypeVector: BasicArrayList = new BasicArrayListD();;
    

    var size: number = LoggingInitInfo.logConfigInfoList!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var logConfigInfo: LogConfig = LoggingInitInfo.logConfigInfoList!.objectArray[index]! as LogConfig;;
    

    var logTypeVector: BasicArrayList = logConfigInfo!.getTypeVector()!;;
    

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
    

    var allLogTypeVector: BasicArrayList = new BasicArrayListD();;
    

    var size: number = LoggingInitInfo.logConfigInfoList!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var logConfigInfo: LogConfig = LoggingInitInfo.logConfigInfoList!.objectArray[index]! as LogConfig;;
    

    var logTypeVector: BasicArrayList = logConfigInfo!.getTypeVector()!;;
    

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
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(Exception.constructor)
            
    public getNumberOfLogConfigs(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LoggingInitInfo.logConfigInfoList!.size();;
    
}


    public toString(): string{

        try {
            
    var document: Document = LoggingInitInfo.getDoc()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomDocumentHelper.toString(document);;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    
}

}


}



