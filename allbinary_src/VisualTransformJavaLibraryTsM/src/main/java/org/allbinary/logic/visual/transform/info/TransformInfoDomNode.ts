
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
        



import { DomNodeHelper } from "../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { Attr } from "../../../../../../org/w3c/dom/Attr.js";

    
import { NamedNodeMap } from "../../../../../../org/w3c/dom/NamedNodeMap.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../org/w3c/dom/NodeList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TransformInfoData } from "./TransformInfoData.js";

import { TransformInfoInterface } from "./TransformInfoInterface.js";

export class TransformInfoDomNode
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private transformInfoInterface: TransformInfoInterface

    private mappedName: string
public constructor (node: Node){

            super();
            var node = node

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Constructing TransformInfo From TransformInfoDomNode: " +node.getNodeName(), this, "TransformInfoDomNode(Node node)");
    

                                    }
                                

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;
        
        
;
    

    var attributes: NamedNodeMap = node.getAttributes()!;
        
        
;
    

    var attrNode: Attr = attributes.getNamedItem(transformInfoData!.NAME);

                         as Attr;
        
        
;
    

    var name: string = attrNode!.getValue()!;
        
        
;
    

    var nodeList: NodeList = node.getChildNodes()!;
        
        
;
    

                        if(nodeList!.getLength() > 1)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Constructing Complete TransformInfo Node For: ");
    
stringBuffer!.append(name);
    
stringBuffer!.append(" with ");
    
stringBuffer!.appendint(nodeList!.getLength());
    
stringBuffer!.append(" children");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "TransformInfoObjectConfigComponent(Node node)");
    

                                    }
                                

    var objectFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTFILENAME, nodeList)!;
        
        
;
    

    var objectFileName: string = DomNodeHelper.getTextNodeValue(objectFileNameNode)!;
        
        
;
    

    var objectConfigFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTCONFIGFILENAME, nodeList)!;
        
        
;
    

    var objectConfigFileName: string = DomNodeHelper.getTextNodeValue(objectConfigFileNameNode)!;
        
        
;
    

    var templateFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.TEMPLATEFILENAME, nodeList)!;
        
        
;
    

    var templateFileName: string = DomNodeHelper.getTextNodeValue(templateFileNameNode)!;
        
        
;
    

    var dataFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.DATAFILENAME, nodeList)!;
        
        
;
    

    var dataFileName: string = DomNodeHelper.getTextNodeValue(dataFileNameNode)!;
        
        
;
    
this.transformInfoInterface= new TransformInfo(name, objectFileName, objectConfigFileName, templateFileName, dataFileName) as TransformInfoInterface;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Constructing Partial TransformInfo Node For: ");
    
stringBuffer!.append(name);
    
stringBuffer!.append(" with ");
    
stringBuffer!.appendint(nodeList!.getLength());
    
stringBuffer!.append(" children");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "TransformInfoObjectConfigComponent(Node node)");
    

                                    }
                                
this.transformInfoInterface= new TransformInfo(name) as TransformInfoInterface;
    

                        }
                            

    var templateAttrNode: Attr = attributes.getNamedItem(transformInfoData!.MAPPED);

                         as Attr;
        
        
;
    

                        if(templateAttrNode != 
                                    null
                                )
                        
                                    {
                                    this.mappedName= templateAttrNode!.getValue();
    

                                    }
                                
                        else {
                            this.mappedName= this.getTransformInfoInterface()!.getName();
    

                        }
                            
}

public constructor (transformInfoInterface: TransformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface
this.transformInfoInterface= transformInfoInterface;
    
this.mappedName= transformInfoInterface!.getName();
    
}

public constructor (transformInfoInterface: TransformInfoInterface, mappedName: string){

            super();
            var transformInfoInterface = transformInfoInterface
var mappedName = mappedName
this.transformInfoInterface= transformInfoInterface;
    
this.mappedName= mappedName;
    
}

public constructor (name: string, mappedName: string){

            super();
            var name = name
var mappedName = mappedName
this.transformInfoInterface= new TransformInfo(name);
    
this.mappedName= mappedName;
    
}


    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface;
    
}


    public getMappedName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mappedName;
    
}


    public getReplaceKey(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("<transform:component name=\"");
    
stringBuffer!.append("body");
    
stringBuffer!.append("\"/>");
    

    var key: string = stringBuffer!.toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Component Key: " +key, this, "getReplaceKey()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return key;
    
}


}
                
            

