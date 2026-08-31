
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
      //not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { Attr } from '../../../../../../org/w3c/dom/Attr.js';
      //not GWT import const Attr = globalThis.org.w3c.dom.Attr;

      
import { NamedNodeMap } from '../../../../../../org/w3c/dom/NamedNodeMap.js';
      //not GWT import const NamedNodeMap = globalThis.org.w3c.dom.NamedNodeMap;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoInterface } from './TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

                import { TransformInfoData } from './TransformInfoData.js';
//not GWT import const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

                import { TransformInfo } from './TransformInfo.js';
//not GWT import const TransformInfo = globalThis.org.allbinary.logic.visual.transform.info.TransformInfo;

                
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
                                

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

    var attributes: NamedNodeMap = node.getAttributes()!;;
    

    var attrNode: Attr = attributes.getNamedItem(transformInfoData!.NAME) as Attr;;
    

    var name: string = attrNode!.getValue()!;;
    

    var nodeList: NodeList = node.getChildNodes()!;;
    

                        if(nodeList!.getLength() > 1)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Constructing Complete TransformInfo Node For: ");
    
stringBuffer!.append(name);
    
stringBuffer!.append(" with ");
    
stringBuffer!.appendint(nodeList!.getLength());
    
stringBuffer!.append(" children");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "TransformInfoObjectConfigComponent(Node node)");
    

                                    }
                                

    var objectFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTFILENAME, nodeList)!;;
    

    var objectFileName: string = DomNodeHelper.getTextNodeValue(objectFileNameNode)!;;
    

    var objectConfigFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTCONFIGFILENAME, nodeList)!;;
    

    var objectConfigFileName: string = DomNodeHelper.getTextNodeValue(objectConfigFileNameNode)!;;
    

    var templateFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.TEMPLATEFILENAME, nodeList)!;;
    

    var templateFileName: string = DomNodeHelper.getTextNodeValue(templateFileNameNode)!;;
    

    var dataFileNameNode: Node = DomSearchHelper.getNode(transformInfoData!.DATAFILENAME, nodeList)!;;
    

    var dataFileName: string = DomNodeHelper.getTextNodeValue(dataFileNameNode)!;;
    
this.transformInfoInterface= new TransformInfo(name, objectFileName, objectConfigFileName, templateFileName, dataFileName) as TransformInfoInterface;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Constructing Partial TransformInfo Node For: ");
    
stringBuffer!.append(name);
    
stringBuffer!.append(" with ");
    
stringBuffer!.appendint(nodeList!.getLength());
    
stringBuffer!.append(" children");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "TransformInfoObjectConfigComponent(Node node)");
    

                                    }
                                
this.transformInfoInterface= new TransformInfo(name) as TransformInfoInterface;
    

                        }
                            

    var templateAttrNode: Attr = attributes.getNamedItem(transformInfoData!.MAPPED) as Attr;;
    

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

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("<transform:component name=\"");
    
stringBuffer!.append("body");
    
stringBuffer!.append("\"/>");
    

    var key: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Component Key: " +key, this, "getReplaceKey()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return key;
    
}


}



