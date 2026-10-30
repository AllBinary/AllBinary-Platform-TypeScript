
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { ByteArrayOutputStream } from '../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream

import { File } from '../../../java/io/File.js';
//not GWT import const File

import { DocumentBuilder } from '../../../javax/xml/parsers/DocumentBuilder.js';
//not GWT import const DocumentBuilder

import { DocumentBuilderFactory } from '../../../javax/xml/parsers/DocumentBuilderFactory.js';
//not GWT import const DocumentBuilderFactory

import { Transformer } from '../../../javax/xml/transform/Transformer.js';
//not GWT import const Transformer

import { TransformerFactory } from '../../../javax/xml/transform/TransformerFactory.js';
//not GWT import const TransformerFactory

import { DOMSource } from '../../../javax/xml/transform/dom/DOMSource.js';
//not GWT import const DOMSource

import { StreamResult } from '../../../javax/xml/transform/stream/StreamResult.js';
//not GWT import const StreamResult

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { Document } from '../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DomHelper
            extends Object
         {
        

    private static readonly instance: DomHelper = new DomHelper();

    public static getInstance(): DomHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomHelper.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }

createDocument(...args: any[]): any {
   
    if (args.length === 0) return this.createDocument$overload1();
   
    if (args.length === 1) return this.createDocument$overload2(args[0]);
   
   throw new TypeError('No matching overload: createDocument'); }
  
    public createDocument$overload1(): Document{

 try { 
    let factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;;
    

    let builder: DocumentBuilder = factory.newDocumentBuilder()!;;
    

    let document: Document = builder.newDocument()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public createDocument$overload2(xmlFile: File): Document{

 try { 
    let factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;;
    

    let builder: DocumentBuilder = factory.newDocumentBuilder()!;;
    

    let document: Document = builder.parse(xmlFile)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public toString(document: Document): string{

 try { 
    let domSource: DOMSource = new DOMSource(document);;
    

    let byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    

    let streamResult: StreamResult = new StreamResult(byteArrayOutputStream);;
    

    let copyTransformerFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    

    let copyTransformer: Transformer = copyTransformerFactory!.newTransformer()!;;
    
copyTransformer!.transform(domSource, streamResult);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return byteArrayOutputStream!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public save(file: File, document: Document){

 try { 
    let copyTransformerFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    

    let copyTransformer: Transformer = copyTransformerFactory!.newTransformer()!;;
    

    let domSource: DOMSource = new DOMSource(document);;
    
file.createNewFile();
    

    let streamResult: StreamResult = new StreamResult(file);;
    
copyTransformer!.transform(domSource, streamResult);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public getChildNodeList(nodeName: string, nodeList: NodeList): NodeList{

    let numberOfNodes: number = nodeList!.getLength()!;;
    




                        for (
    let index: number = 0;index < numberOfNodes; index++)
        {

    let node: Node = nodeList!.item(index)!;;
    

                        if(node.getNodeName()!.compareTo(nodeName) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node.getChildNodes();;
    

                                    }
                                
}




                            throw new Exception(nodeName +" Node Not Found");
                    
}


                //@Throws(Exception.constructor)
            
    public getChildrenWithoutTextNodes(nodeName: string, nodeList: NodeList): BasicArrayList{

    let list: BasicArrayList = new BasicArrayListD();;
    

    let childNodeList: NodeList = this.getChildNodeList(nodeName, nodeList)!;;
    

    let numberOfChildren: number = childNodeList!.getLength()!;;
    




                        for (
    let index: number = 0;index < numberOfChildren; index++)
        {

    let node: Node = childNodeList!.item(index)!;;
    

                        if(node.getNodeType() != Node.TEXT_NODE)
                        
                                    {
                                    list.add(node);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


                //@Throws(Exception.constructor)
            
    public getWithoutTextNodes(nodeList: NodeList): BasicArrayList{

    let list: BasicArrayList = new BasicArrayListD();;
    

    let numberOfChildren: number = nodeList!.getLength()!;;
    




                        for (
    let index: number = 0;index < numberOfChildren; index++)
        {

    let node: Node = nodeList!.item(index)!;;
    

                        if(node.getNodeType() != Node.TEXT_NODE)
                        
                                    {
                                    list.add(node);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}

searchNodeList(...args: any[]): any {
   
    if (args.length === 2 && typeof args[0] === 'string') return this.searchNodeList$overload1(args[0], args[1]);
   
    if (args.length === 2 && typeof args[0] === 'string') return this.searchNodeList$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: searchNodeList'); }
  
                //@Throws(Exception.constructor)
            
    public searchNodeList$overload1(nodeName: string, nodeList: NodeList): Node{

    let numberOfNodes: number = nodeList!.getLength()!;;
    




                        for (
    let index: number = 0;index < numberOfNodes; index++)
        {

    let node: Node = nodeList!.item(index)!;;
    
this.logUtil!.putF("NodeName: " +node.getNodeName(), this, "searchNodeList");
    

                        if(node.getNodeName()!.compareTo(nodeName) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                                    }
                                
}




                            throw new Exception(nodeName +" Node Not Found in search");
                    
}


                //@Throws(Exception.constructor)
            
    public searchNodeList$overload2(nodeName: string, nodeList: BasicArrayList): Node{

    let numberOfNodes: number = nodeList!.size()!;;
    




                        for (
    let index: number = 0;index < numberOfNodes; index++)
        {

    let node: Node = nodeList!.get(index) as Node;;
    
this.logUtil!.putF("NodeName: " +node.getNodeName(), this, "searchNodeList");
    

                        if(node.getNodeName()!.compareTo(nodeName) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                                    }
                                
}




                            throw new Exception(nodeName +" Node Not Found in search");
                    
}


}

