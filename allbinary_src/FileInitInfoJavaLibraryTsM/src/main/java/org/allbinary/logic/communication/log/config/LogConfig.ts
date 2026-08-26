
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

      
//not game specific package import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
      const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
//not game specific package import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
      const PATH_GLOBALS = globalThis.org.allbinary.globals.PATH_GLOBALS;

      
//not game specific package import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { LogConfigType } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigType.js';
      const LogConfigType = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigType;

      
//not game specific package import { LogConfigTypeData } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeData.js';
      const LogConfigTypeData = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeData;

      
//not game specific package import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
      const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;

      
//not game specific package import { LogConfigTypesData } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypesData.js';
      const LogConfigTypesData = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypesData;

      
//not game specific package import { AbFileLocalInputStream } from '../../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
      const AbFileLocalInputStream = globalThis.org.allbinary.logic.io.AbFileLocalInputStream;

      
//not game specific package import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { BooleanUtil } from '../../../../../../org/allbinary/logic/java/bool/BooleanUtil.js';
      const BooleanUtil = globalThis.org.allbinary.logic.java.bool.BooleanUtil;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
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
        import { LogConfigData } from './LogConfigData.js';

export class LogConfig
            extends Object
         {
        

    private isEnabled: boolean;

    private name: string;

    private description: string;

    private path: string;

    private fileName: string;

public constructor (aName: string, aDescription: string, aPath: string, aFileName: string){

            super();
        this.isEnabled= false;
    
this.name= aName;
    
this.description= aDescription;
    
this.path= aPath;
    
this.fileName= aFileName;
    
}


public constructor (node: Node){

            super();
        
    var enabledValueNode: Node = DomSearchHelper.getNode(EntryData.getInstance()!.ENABLE, node.getChildNodes())!;;
    

    var isEnabledString: string = DomNodeHelper.getTextNodeValue(enabledValueNode)!;;
    
this.isEnabled= BooleanUtil.getInstance()!.getFromString(isEnabledString);
    

    var logConfigData: LogConfigData = LogConfigData.getInstance()!;;
    

    var nameValueNode: Node = DomSearchHelper.getNode(logConfigData!.NAME, node.getChildNodes())!;;
    
this.name= DomNodeHelper.getTextNodeValue(nameValueNode);
    

    var descriptionValueNode: Node = DomSearchHelper.getNode(logConfigData!.DESCRIPTION, node.getChildNodes())!;;
    
this.description= DomNodeHelper.getTextNodeValue(descriptionValueNode);
    

    var fileValueNode: Node = DomSearchHelper.getNode(logConfigData!.FILE, node.getChildNodes())!;;
    
this.fileName= DomNodeHelper.getTextNodeValue(fileValueNode);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public isEnabled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isEnabled;
    
}


    public enable(){
this.isEnabled= true;
    
}


    public disable(){
this.isEnabled= false;
    
}


    public getDescription(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.description;
    
}


    public getFileName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileName;
    
}


    public setName(value: string){
this.name= value;
    
}


    public setDescription(value: string){
this.description= value;
    
}


    public setPath(value: string){
this.path= value;
    
}


    public setFileName(value: string){
this.fileName= value;
    
}


                //@Throws(Exception.constructor)
            
    getDoc(): Document{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.INIT_PATH);
    
stringBuffer!.append(this.getFileName());
    

    var file: AbFile = AbFile.createAbFile(stringBuffer!.toString())!;;
    

    var document: Document = DomDocumentHelper.create(new AbFileLocalInputStream(file))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                //@Throws(Exception.constructor)
            
    public getTypeVector(): BasicArrayList{

    var logKeyVector: BasicArrayList = new BasicArrayListD();;
    

    var document: Document = this.getDoc()!;;
    

    var logConfigTypesNodeList: NodeList = document.getElementsByTagName(LogConfigTypesData.getInstance()!.NAME)!;;
    

    var logConfigTypesNode: Node = logConfigTypesNodeList!.item(0)!;;
    

    var logConfigTypeNodeVector: Vector = DomSearchHelper.getAllNodes(LogConfigTypeData.getInstance()!.NAME, logConfigTypesNode!.getChildNodes())!;;
    

    var size: number = logConfigTypeNodeVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var node: Node = logConfigTypeNodeVector!.elementAt(i) as Node;;
    

    var logType: LogConfigType = LogConfigTypes.getInstance(node)!;;
    
logKeyVector!.add(logType);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return logKeyVector;
    
}


}
                
            

