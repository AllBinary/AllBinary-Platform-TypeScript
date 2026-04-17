
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
        



import { Vector } from "../../../../../../java/util/Vector.js";

    
import { DomSearchHelper } from "../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { PATH_GLOBALS } from "../../../../../../org/allbinary/globals/PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { AbFileLocalInputStream } from "../../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js";

    
import { AbFile } from "../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../org/w3c/dom/NodeList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LogConfigsData } from "./LogConfigsData.js";

import { LogConfigData } from "./LogConfigData.js";

export class LoggingInitInfo
            extends Object
         {
        

    private static readonly INITFILENAME: string = "logConfig.xml";
        
        

    private static readonly PACKAGE: string = PATH_GLOBALS.getInstance()!.INIT_PATH;
        
        

    private logConfigInfoList: BasicArrayList = 
                null
            ;
        
        

    private hasRead: boolean = false;
        
        

                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getDoc(): Document{

    var path: string = URLGLOBALS.getWebappPath() +PACKAGE;
        
        
;
    

    var FILEABPATH: AbPath = new AbPath(path, INITFILENAME);
        
        
;
    

    var file: AbFile = new AbFile(FILEABPATH);
        
        
;
    

    var document: Document = DomDocumentHelper.create(new AbFileLocalInputStream(file))!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static write(){

        try {
            hasRead= false;
    

                //: 
} catch(e) 
            {



                            throw e
}

}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    static read(){

        try {
            
    var document: Document = LoggingInitInfo.getDoc()!;
        
        
;
    

    var logConfigsNodeList: NodeList = document.getElementsByTagName(LogConfigsData.getInstance()!.NAME)!;
        
        
;
    

    var logConfigsNode: Node = logConfigsNodeList!.item(0)!;
        
        
;
    

    var logConfigNodeVector: Vector = DomSearchHelper.getAllNodes(LogConfigData.getInstance()!.NAME, logConfigsNode!.getChildNodes())!;
        
        
;
    
LoggingInitInfo.logConfigInfoList= new BasicArrayList();
    

    var size: number = logConfigNodeVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var node: Node = logConfigNodeVector!.elementAt(i);

                         as Node;
        
        
;
    

    var logConfigInfo: LogConfig = new LogConfig(node);
        
        
;
    
LoggingInitInfo.logConfigInfoList!.add(logConfigInfo);
    
}


                //: 
} catch(e) 
            {



                            throw e
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static setHasRead(value: boolean){
var value = value
LoggingInitInfo.hasRead= value;
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    static updateIfNeeded(){

                        if(!hasRead)
                        
                                    {
                                    LoggingInitInfo.read();
    
hasRead= true;
    

                        if(LoggingInitInfo.logConfigInfoList == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("Read Failed")

                                    }
                                

                                    }
                                
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static set(logConfigInfoVector: BasicArrayList){
var logConfigInfoVector = logConfigInfoVector
LoggingInitInfo.logConfigInfoList= logConfigInfoVector;
    
}


                //@Throws(Error::class)
            
    public static get(): BasicArrayList{
LoggingInitInfo.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LoggingInitInfo.logConfigInfoList;
    
}


                //@Throws(Error::class)
            
    public static getTypeNameList(): BasicArrayList{
LoggingInitInfo.updateIfNeeded();
    

    var allLogTypeVector: BasicArrayList = new BasicArrayList();
        
        
;
    

    var size: number = LoggingInitInfo.logConfigInfoList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var logConfigInfo: LogConfig = LoggingInitInfo.logConfigInfoList!.objectArray[index]! as LogConfig;
        
        
;
    

    var logTypeVector: BasicArrayList = logConfigInfo!.getTypeVector()!;
        
        
;
    

                        if(logConfigInfo!.isEnabled())
                        
                                    {
                                    allLogTypeVector!.addAll(logTypeVector);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allLogTypeVector;
    
}


                //@Throws(Error::class)
            
    public static getTypeList(): BasicArrayList{
LoggingInitInfo.updateIfNeeded();
    

    var allLogTypeVector: BasicArrayList = new BasicArrayList();
        
        
;
    

    var size: number = LoggingInitInfo.logConfigInfoList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var logConfigInfo: LogConfig = LoggingInitInfo.logConfigInfoList!.objectArray[index]! as LogConfig;
        
        
;
    

    var logTypeVector: BasicArrayList = logConfigInfo!.getTypeVector()!;
        
        
;
    

                        if(logConfigInfo!.isEnabled())
                        
                                    {
                                    allLogTypeVector!.addAll(logTypeVector);
    

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


                //@Throws(Error::class)
            
    public getNumberOfLogConfigs(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LoggingInitInfo.logConfigInfoList!.size();

                        ;
    
}


    public toString(): string{

        try {
            
    var document: Document = LoggingInitInfo.getDoc()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomDocumentHelper.toString(document);

                        ;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    
}

}


}
                
            

