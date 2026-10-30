
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

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

import { Attr } from '../../../../../../org/w3c/dom/Attr.js';
//not GWT import const Attr

import { NamedNodeMap } from '../../../../../../org/w3c/dom/NamedNodeMap.js';
//not GWT import const NamedNodeMap

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoData } from './TransformInfoData.js';
//sameFolderImports - not GWT import - same folder const TransformInfoData
import { TransformInfoProperties } from './TransformInfoProperties.js';
//sameFolderImports - not GWT import - same folder const TransformInfoProperties

export class TransformInfoPropertiesFactory
            extends Object
         {
        

    private static readonly instance: TransformInfoPropertiesFactory = new TransformInfoPropertiesFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): TransformInfoPropertiesFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoPropertiesFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(node: Node): TransformInfoProperties{

    let transformInfoChildNodeList: NodeList = node.getChildNodes()!;;
    

    let transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

    let attributes: NamedNodeMap = node.getAttributes()!;;
    

    let attrNode: Attr = attributes.getNamedItem(transformInfoData!.NAME) as Attr;;
    

    let name: string = attrNode!.getValue()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(CommonLabels.getInstance()!.NEXT +" View Name: " +name, this, "toTransformInfoPropertiesHashMap()");
    

                                    }
                                

    let labelNode: Node = DomSearchHelper.getNodeNoThrow(transformInfoData!.LABEL, transformInfoChildNodeList)!;;
    

    let label: string = DomNodeHelper.getTextNodesValue(labelNode)!;;
    

                        if(label == 
                                    null
                                )
                        
                                    {
                                    label= name;
    

                                    }
                                

    let descriptionNode: Node = DomSearchHelper.getNode(transformInfoData!.DESCRIPTION, transformInfoChildNodeList)!;;
    

    let description: string = DomNodeHelper.getTextNodesValue(descriptionNode)!;;
    

    let objectFileNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTFILENAME, transformInfoChildNodeList)!;;
    

    let objectFileName: string = DomNodeHelper.getTextNodeValue(objectFileNode)!;;
    

    let objectConfigFileNode: Node = DomSearchHelper.getNode(transformInfoData!.OBJECTCONFIGFILENAME, transformInfoChildNodeList)!;;
    

    let objectConfigFileName: string = DomNodeHelper.getTextNodeValue(objectConfigFileNode)!;;
    

    let templateFileNode: Node = DomSearchHelper.getNode(transformInfoData!.TEMPLATEFILENAME, transformInfoChildNodeList)!;;
    

    let templateFileName: string = DomNodeHelper.getTextNodeValue(templateFileNode)!;;
    

    let transformInfoProperties: TransformInfoProperties = new TransformInfoProperties(name, label, description, objectFileName, objectConfigFileName, templateFileName);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoProperties;
    
}


}

