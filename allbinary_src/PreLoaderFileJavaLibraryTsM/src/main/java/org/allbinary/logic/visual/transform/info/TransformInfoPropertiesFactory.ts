
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
        
//not game specific package import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { Attr } from '../../../../../../org/w3c/dom/Attr.js';
      const Attr = globalThis.org.w3c.dom.Attr;

      
//not game specific package import { NamedNodeMap } from '../../../../../../org/w3c/dom/NamedNodeMap.js';
      const NamedNodeMap = globalThis.org.w3c.dom.NamedNodeMap;

      
//not game specific package import { Node } from '../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoData } from './TransformInfoData.js';
import { TransformInfoProperties } from './TransformInfoProperties.js';

export class TransformInfoPropertiesFactory
            extends Object
         {
        

    private static readonly instance: TransformInfoPropertiesFactory = new TransformInfoPropertiesFactory();

    public static getInstance(): TransformInfoPropertiesFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoPropertiesFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(node: Node): TransformInfoProperties{

    var transformInfoChildNodeList: NodeList = node.getChildNodes()!;;
    

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

    var attributes: NamedNodeMap = node.getAttributes()!;;
    

    var attrNode: Attr = attributes.getNamedItem(transformInfoData!.NAME) as Attr;;
    

    var name: string = attrNode!.getValue()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Next View Name: " +name, this, "toTransformInfoPropertiesHashMap()");
    

                                    }
                                

    var labelNode: Node = DomSearchHelper.getNodeNoThrow(transformInfoData!.LABEL, transformInfoChildNodeList)!;;
    

    var label: string = DomNodeHelper.getTextNodesValue(labelNode)!;;
    

                        if(label == 
                                    null
                                )
                        
                                    {
                                    label= name;
    

                                    }
                                

    var descriptionNode: Node = DomSearchHelper.getNode(transformInfoData!.DESCRIPTION, transformInfoChildNodeList)!;;
    

    var description: string = DomNodeHelper.getTextNodesValue(descriptionNode)!;;
    

    var objectFileNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTFILENAME, transformInfoChildNodeList)!;;
    

    var objectFileName: string = DomNodeHelper.getTextNodeValue(objectFileNode)!;;
    

    var objectConfigFileNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTCONFIGFILENAME, transformInfoChildNodeList)!;;
    

    var objectConfigFileName: string = DomNodeHelper.getTextNodeValue(objectConfigFileNode)!;;
    

    var templateFileNode: Node = DomSearchHelper.getNode(transformInfoData!.TEMPLATEFILENAME, transformInfoChildNodeList)!;;
    

    var templateFileName: string = DomNodeHelper.getTextNodeValue(templateFileNode)!;;
    

    var transformInfoProperties: TransformInfoProperties = new TransformInfoProperties(name, label, description, objectFileName, objectConfigFileName, templateFileName);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoProperties;
    
}


}
                
            

