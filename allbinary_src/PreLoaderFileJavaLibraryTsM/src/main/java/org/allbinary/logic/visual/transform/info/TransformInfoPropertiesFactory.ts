
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

    
import { Attr } from "../../../../../../org/w3c/dom/Attr.js";

    
import { NamedNodeMap } from "../../../../../../org/w3c/dom/NamedNodeMap.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../org/w3c/dom/NodeList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TransformInfoData } from "./TransformInfoData.js";

import { TransformInfoProperties } from "./TransformInfoProperties.js";

export class TransformInfoPropertiesFactory
            extends Object
         {
        

    private static readonly instance: TransformInfoPropertiesFactory = new TransformInfoPropertiesFactory();
        
        

    public static getInstance(): TransformInfoPropertiesFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(node: Node): TransformInfoProperties{
var node = node

    var transformInfoChildNodeList: NodeList = node.getChildNodes()!;
        
        
;
    

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;
        
        
;
    

    var attributes: NamedNodeMap = node.getAttributes()!;
        
        
;
    

    var attrNode: Attr = attributes.getNamedItem(transformInfoData!.NAME);

                         as Attr;
        
        
;
    

    var name: string = attrNode!.getValue()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Next View Name: " +name, this, "toTransformInfoPropertiesHashMap()");
    

                                    }
                                

    var labelNode: Node = DomSearchHelper.getNodeNoThrow(transformInfoData!.LABEL, transformInfoChildNodeList)!;
        
        
;
    

    var label: string = DomNodeHelper.getTextNodesValue(labelNode)!;
        
        
;
    

                        if(label == 
                                    null
                                )
                        
                                    {
                                    label= name;
    

                                    }
                                

    var descriptionNode: Node = DomSearchHelper.getNode(transformInfoData!.DESCRIPTION, transformInfoChildNodeList)!;
        
        
;
    

    var description: string = DomNodeHelper.getTextNodesValue(descriptionNode)!;
        
        
;
    

    var objectFileNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTFILENAME, transformInfoChildNodeList)!;
        
        
;
    

    var objectFileName: string = DomNodeHelper.getTextNodeValue(objectFileNode)!;
        
        
;
    

    var objectConfigFileNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTCONFIGFILENAME, transformInfoChildNodeList)!;
        
        
;
    

    var objectConfigFileName: string = DomNodeHelper.getTextNodeValue(objectConfigFileNode)!;
        
        
;
    

    var templateFileNode: Node = DomSearchHelper.getNode(transformInfoData!.TEMPLATEFILENAME, transformInfoChildNodeList)!;
        
        
;
    

    var templateFileName: string = DomNodeHelper.getTextNodeValue(templateFileNode)!;
        
        
;
    

    var transformInfoProperties: TransformInfoProperties = new TransformInfoProperties(name, label, description, objectFileName, objectConfigFileName, templateFileName);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoProperties;
    
}


}
                
            

