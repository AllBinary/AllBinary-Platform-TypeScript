
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { DomNodeHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { DomDocumentHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { XmlDocumentHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/XmlDocumentHelper.js';
//not GWT import const XmlDocumentHelper

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { InputOutputTypeData } from '../../../../../../../org/allbinary/logic/io/InputOutputTypeData.js';
//not GWT import const InputOutputTypeData

import { OutputTypeData } from '../../../../../../../org/allbinary/logic/io/OutputTypeData.js';
//not GWT import const OutputTypeData

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { TransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
//not GWT import const TransformInfoData

import { TransformInfoDomNode } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoDomNode.js';
//not GWT import const TransformInfoDomNode

import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { TransformInfosData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js';
//not GWT import const TransformInfosData

import { XslData } from '../../../../../../../org/allbinary/logic/visual/transform/template/XslData.js';
//not GWT import const XslData

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Attr } from '../../../../../../../org/w3c/dom/Attr.js';
//not GWT import const Attr

import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { NamedNodeMap } from '../../../../../../../org/w3c/dom/NamedNodeMap.js';
//not GWT import const NamedNodeMap

import { Node } from '../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoObjectConfigInterface } from './TransformInfoObjectConfigInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigInterface
import { TransformInfoObjectConfigData } from './TransformInfoObjectConfigData.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigData

export class TransformInfoObjectConfig
            extends Object
         implements TransformInfoObjectConfigInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly ownerTransformInfoInterface: TransformInfoInterface;

    private document: Document;

    private outputTypeName: string;

    public constructor(...args: any[]) {
        super();if(args.length === 1) {
            
            this.constructor$0(args[0]);
            
        }
        else if(args.length === 2) {
            
            this.constructor$1(args[0], args[1]);
            
        }
        else if(args.length === 3) {
            
            this.constructor$2(args[0], args[1], args[2]);
            
        }
        
    }
    
    private constructor$0(transformInfoInterface: Object): void {
        this.ownerTransformInfoInterface= transformInfoInterface;
    
this.createDocument();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("TransformInfo: ");
    

                        if(this.ownerTransformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(this.ownerTransformInfoInterface!.getName());
    

                                    }
                                
                        else {
                            stringBuffer!.append("No Owner!?#@");
    

                        }
                            
stringBuffer!.append("\nConstructed with document: ");
    
stringBuffer!.append(this.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "Constructor(TransformInfoInterface)");
    

                                    }
                                

    }
    
    private constructor$1(transformInfoInterface: Object, document: Object): void {
        this.ownerTransformInfoInterface= transformInfoInterface;
    
this.document= document;
    

    let node: Node = DomSearchHelper.getNodeNoThrow(OutputTypeData.getInstance()!.NAME, this.getRootNode()!.getChildNodes())!;;
    

                        if(node != 
                                    null
                                )
                        
                                    {
                                    this.setOutputTypeName(DomNodeHelper.getTextNodeValue(node));
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("TransformInfo: ");
    

                        if(this.ownerTransformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(this.ownerTransformInfoInterface!.getName());
    

                                    }
                                
                        else {
                            stringBuffer!.append("No Owner!?#@");
    

                        }
                            
stringBuffer!.append("\nConstructed with document: ");
    
stringBuffer!.append(this.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "Constructor(TransformInfoInterface, Document)");
    

                                    }
                                

    }
    
    private constructor$2(transformInfoInterface: Object, name: string, type: string): void {
        this.ownerTransformInfoInterface= transformInfoInterface;
    
this.createDocument();
    

    let configNameAttr: Attr = this.document.createAttribute(TransformInfoObjectConfigData.getInstance()!.NAME)!;;
    
configNameAttr!.setValue(name);
    

    let objectConfigNode: Node = this.document.getElementsByTagName(TransformInfoObjectConfigData.getInstance()!.NAME)!.item(0)!;;
    
objectConfigNode!.appendChild(configNameAttr);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("TransformInfo: ");
    

                        if(this.ownerTransformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(this.ownerTransformInfoInterface!.getName());
    

                                    }
                                
                        else {
                            stringBuffer!.append("No Owner!?#@");
    

                        }
                            
stringBuffer!.append("\nConstructed with document: ");
    
stringBuffer!.append(this.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "Constructor(TransformInfoInterface, name, type)");
    

                                    }
                                

    }
    
    createDocument(){
this.document= DomDocumentHelper.create();
    

    let objectConfigNode: Node = this.document.createElement(TransformInfoObjectConfigData.getInstance()!.NAME)!;;
    
this.document.appendChild(objectConfigNode);
    
}


    getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ownerTransformInfoInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.document;
    
}


    setDocument(document: Document){
this.document= document;
    
}


    public containsView(transformInfoInterface: TransformInfoInterface): boolean{

    let objectConfigNode: Node = this.document.getElementsByTagName(TransformInfoObjectConfigData.getInstance()!.NAME)!.item(0)!;;
    

    let viewNodeList: NodeList = objectConfigNode!.getChildNodes()!;;
    

    let numberOfViews: number = viewNodeList!.getLength()!;;
    




                        for (
    let index: number = 0;index < numberOfViews; index++)
        {

    let viewNode: Node = viewNodeList!.item(index)!;;
    

    let viewAttributes: NamedNodeMap = viewNode!.getAttributes()!;;
    

    let attrNode: Attr = viewAttributes!.getNamedItem(TransformInfoData.getInstance()!.NAME) as Attr;;
    

                        if(transformInfoInterface!.getName()!.compareTo(attrNode!.getValue()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    getTemplateAttributes(): NamedNodeMap{

    let componentNode: Node = this.document.getElementsByTagName(TransformInfoObjectConfigData.getInstance()!.NAME)!.item(0)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return componentNode!.getAttributes();;
    
}


                //@Throws(Exception.constructor)
            
    public getName(): string{

    let attrNode: Attr = this.getTemplateAttributes()!.getNamedItem(TransformInfoObjectConfigData.getInstance()!.NAME) as Attr;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return attrNode!.getValue();;
    
}


                //@Throws(Exception.constructor)
            
    public setName(name: string){

    let attrNode: Attr = this.getTemplateAttributes()!.getNamedItem(TransformInfoObjectConfigData.getInstance()!.NAME) as Attr;;
    
attrNode!.setValue(name);
    
}


                //@Throws(Exception.constructor)
            
    getNodeVector(nodeName: string): BasicArrayList{

    let componentsNodeList: NodeList = this.document.getElementsByTagName(nodeName)!;;
    

                        if(componentsNodeList != 
                                    null
                                 && componentsNodeList!.getLength() > 0)
                        
                                    {
                                    
    let viewNodeVector: BasicArrayList = DomSearchHelper.getAllNodes(TransformInfoData.getInstance()!.NAME, componentsNodeList!.item(0)!.getChildNodes())!;;
    

    let numberOfViews: number = viewNodeVector!.size()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Number Of ");
    
stringBuffer!.append(nodeName);
    
stringBuffer!.append(" Nodes: ");
    
stringBuffer!.appendint(numberOfViews);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "getNodeVector(nodename)");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewNodeVector;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicArrayListD();
    
}

getTransformDomNodes(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'string') return this.getTransformDomNodes$overload1(args[0]);
   
    if (args.length === 0) return this.getTransformDomNodes$overload2();
   
   throw new TypeError('No matching overload: getTransformDomNodes'); }
  
                //@Throws(Exception.constructor)
            
    getTransformDomNodes$overload1(nodeName: string): BasicArrayList{

    let viewVector: BasicArrayList = new BasicArrayListD();;
    

    let viewNodeVector: BasicArrayList = this.getNodeVector(nodeName)!;;
    

    let size: number = viewNodeVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let viewNode: Node = viewNodeVector!.get(index) as Node;;
    
viewVector!.add(new TransformInfoDomNode(viewNode));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewVector;
    
}

getTransforms(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'string') return this.getTransforms$overload1(args[0]);
   
    if (args.length === 0) return this.getTransforms$overload2();
   
   throw new TypeError('No matching overload: getTransforms'); }
  
                //@Throws(Exception.constructor)
            
    public getTransforms$overload1(nodeName: string): BasicArrayList{

    let viewVector: BasicArrayList = new BasicArrayListD();;
    

    let viewNodeVector: BasicArrayList = this.getNodeVector(nodeName)!;;
    

    let size: number = viewNodeVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let viewNode: Node = viewNodeVector!.get(index) as Node;;
    
viewVector!.add(new TransformInfoDomNode(viewNode).getTransformInfoInterface());
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewVector;
    
}


                //@Throws(Exception.constructor)
            
    public getTransformsGroup(group: string): BasicArrayList{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Started: " +group, this, "getTransformsGroup()");
    

                                    }
                                

    let viewVector: BasicArrayList = new BasicArrayListD();;
    

    let GROUP: string = TransformInfosData.getInstance()!.GROUP;;
    

    let componentsNodeList: NodeList = this.document.getElementsByTagName(GROUP)!;;
    

                        if(componentsNodeList != 
                                    null
                                 && componentsNodeList!.getLength() > 0)
                        
                                    {
                                    
    let componentsNode: Node = componentsNodeList!.item(0)!;;
    

    let length: number = componentsNodeList!.getLength()!;;
    




                        for (
    let index: number = 0;index < length; index++)
        {

    let node: Node = componentsNodeList!.item(index)!;;
    

    let attributes: NamedNodeMap = node.getAttributes()!;;
    

    let attrNode: Attr = attributes.getNamedItem(GROUP) as Attr;;
    

    let value: string = attrNode!.getValue()!;;
    

                        if(value.compareTo(group) == 0)
                        
                                    {
                                    componentsNode= node;
    
break;

                    

                                    }
                                
}


    let viewNodeVector: BasicArrayList = DomSearchHelper.getAllNodes(TransformInfoData.getInstance()!.NAME, componentsNode!.getChildNodes())!;;
    

    let numberOfViews: number = viewNodeVector!.size()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Number Of Nodes: " +numberOfViews, this, "getTransformsGroup()");
    

                                    }
                                

    let size: number = viewNodeVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let viewNode: Node = viewNodeVector!.get(index) as Node;;
    
viewVector!.add(new TransformInfoDomNode(viewNode));
    
}


                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
                        if(componentsNodeList == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF("Number Of Nodes: NULL", this, "getTransformsGroup()");
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Number Of Nodes: 0", this, "getTransformsGroup()");
    

                        }
                            

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewVector;
    
}


                //@Throws(Exception.constructor)
            
    public getTransformDomNodes$overload2(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransformDomNodes(TransformInfosData.getInstance()!.GROUP);;
    
}


                //@Throws(Exception.constructor)
            
    public getTransforms$overload2(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransforms(TransformInfosData.getInstance()!.NAME);;
    
}


                //@Throws(Exception.constructor)
            
    public getGroupTransforms(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransforms(TransformInfosData.getInstance()!.GROUP);;
    
}


                //@Throws(Exception.constructor)
            
    public getParentTransforms(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransforms(TransformInfoData.getInstance()!.PARENT);;
    
}


    getRootNode(): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.document.getElementsByTagName(TransformInfoObjectConfigData.getInstance()!.NAME)!.item(0);;
    
}


    public setOutputTypeName(outputTypeName: string){
this.outputTypeName= outputTypeName;
    
}


                //@Throws(Exception.constructor)
            
    public getOutputTypeName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.outputTypeName;
    
}


                //@Throws(Exception.constructor)
            
    public getInputOutputTypeName(): string{

    let node: Node = DomSearchHelper.getNode(InputOutputTypeData.getInstance()!.NAME, this.getRootNode()!.getChildNodes())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomNodeHelper.getTextNodeValue(node);;
    
}


                //@Throws(Exception.constructor)
            
    public getInputOutputTypeFile(): string{

    let node: Node = DomSearchHelper.getNode(InputOutputTypeData.getInstance()!.FILE, this.getRootNode()!.getChildNodes())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomNodeHelper.getTextNodeValue(node);;
    
}


                //@Throws(Exception.constructor)
            
    public getImportUriPath(): string{

    let node: Node = DomSearchHelper.getNode(XslData.getInstance()!.ROOT_IMPORT_URI, this.getRootNode()!.getChildNodes())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomNodeHelper.getTextNodeValue(node);;
    
}


    public toString(): string{

 try { 
                        if(this.document != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return XmlDocumentHelper.toString(this.document);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.putF("DOM Document error", this, this.commonStrings!.TOSTRING);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


}

