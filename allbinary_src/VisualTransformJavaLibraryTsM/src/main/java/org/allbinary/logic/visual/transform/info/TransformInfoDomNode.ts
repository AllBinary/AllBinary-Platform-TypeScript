
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
        
import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { Attr } from '../../../../../../org/w3c/dom/Attr.js';
//not GWT import const Attr

import { NamedNodeMap } from '../../../../../../org/w3c/dom/NamedNodeMap.js';
//not GWT import const NamedNodeMap

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoInterface } from './TransformInfoInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInfoInterface
import { TransformInfoData } from './TransformInfoData.js';
//sameFolderImports - not GWT import - same folder const TransformInfoData
import { TransformInfo } from './TransformInfo.js';
//sameFolderImports - not GWT import - same folder const TransformInfo

export class TransformInfoDomNode
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private transformInfoInterface: TransformInfoInterface;

    private mappedName: string;

public constructor (node: Node){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Constructing TransformInfo From TransformInfoDomNode: " +node.getNodeName(), this, "TransformInfoDomNode(Node node)");
    

                                    }
                                

    let transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

    let attributes: NamedNodeMap = node.getAttributes()!;;
    

    let attrNode: Attr = attributes.getNamedItem(transformInfoData!.NAME) as Attr;;
    

    let name: string = attrNode!.getValue()!;;
    

    let nodeList: NodeList = node.getChildNodes()!;;
    

                        if(nodeList!.getLength() > 1)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Constructing Complete TransformInfo Node For: ");
    
stringBuffer!.append(name);
    
stringBuffer!.append(" with ");
    
stringBuffer!.appendint(nodeList!.getLength());
    
stringBuffer!.append(" children");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "TransformInfoObjectConfigComponent(Node node)");
    

                                    }
                                

    let objectFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTFILENAME, nodeList)!;;
    

    let objectFileName: string = DomNodeHelper.getTextNodeValue(objectFileNameNode)!;;
    

    let objectConfigFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTCONFIGFILENAME, nodeList)!;;
    

    let objectConfigFileName: string = DomNodeHelper.getTextNodeValue(objectConfigFileNameNode)!;;
    

    let templateFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.TEMPLATEFILENAME, nodeList)!;;
    

    let templateFileName: string = DomNodeHelper.getTextNodeValue(templateFileNameNode)!;;
    

    let dataFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.DATAFILENAME, nodeList)!;;
    

    let dataFileName: string = DomNodeHelper.getTextNodeValue(dataFileNameNode)!;;
    
this.transformInfoInterface= new TransformInfo(name, objectFileName, objectConfigFileName, templateFileName, dataFileName) as TransformInfoInterface;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Constructing Partial TransformInfo Node For: ");
    
stringBuffer!.append(name);
    
stringBuffer!.append(" with ");
    
stringBuffer!.appendint(nodeList!.getLength());
    
stringBuffer!.append(" children");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "TransformInfoObjectConfigComponent(Node node)");
    

                                    }
                                
this.transformInfoInterface= new TransformInfo(name) as TransformInfoInterface;
    

                        }
                            

    let templateAttrNode: Attr = attributes.getNamedItem(transformInfoData!.MAPPED) as Attr;;
    

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
        this.transformInfoInterface= transformInfoInterface;
    
this.mappedName= transformInfoInterface!.getName();
    
}


public constructor (transformInfoInterface: TransformInfoInterface, mappedName: string){

            super();
        this.transformInfoInterface= transformInfoInterface;
    
this.mappedName= mappedName;
    
}


public constructor (name: string, mappedName: string){

            super();
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

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("<transform:component name=\"");
    
stringBuffer!.append("body");
    
stringBuffer!.append("\"/>");
    

    let key: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Component Key: " +key, this, "getReplaceKey()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return key;
    
}


}

