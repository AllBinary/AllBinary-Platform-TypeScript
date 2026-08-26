
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
        
//not game specific package import { Vector } from '../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
      const PATH_GLOBALS = globalThis.org.allbinary.globals.PATH_GLOBALS;

      
//not game specific package import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { AbFileLocalInputStream } from '../../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
      const AbFileLocalInputStream = globalThis.org.allbinary.logic.io.AbFileLocalInputStream;

      
//not game specific package import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LogConfigsData } from './LogConfigsData.js';
import { LogConfigData } from './LogConfigData.js';
import { LogConfig } from './LogConfig.js';

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
    

    var logConfigNodeVector: Vector = DomSearchHelper.getAllNodes(LogConfigData.getInstance()!.NAME, logConfigsNode!.getChildNodes())!;;
    
LoggingInitInfo.logConfigInfoList= new BasicArrayListD();
    

    var size: number = logConfigNodeVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var node: Node = logConfigNodeVector!.elementAt(i) as Node;;
    

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
                
            

