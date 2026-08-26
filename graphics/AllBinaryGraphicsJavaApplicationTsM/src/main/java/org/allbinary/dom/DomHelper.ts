
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
        
//not game specific package import { ByteArrayOutputStream } from '../../../java/io/ByteArrayOutputStream.js';
      const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
//not game specific package import { File } from '../../../java/io/File.js';
      const File = globalThis.java.io.File;

      
//not game specific package import { DocumentBuilder } from '../../../javax/xml/parsers/DocumentBuilder.js';
      const DocumentBuilder = globalThis.javax.xml.parsers.DocumentBuilder;

      
//not game specific package import { DocumentBuilderFactory } from '../../../javax/xml/parsers/DocumentBuilderFactory.js';
      const DocumentBuilderFactory = globalThis.javax.xml.parsers.DocumentBuilderFactory;

      
//not game specific package import { Transformer } from '../../../javax/xml/transform/Transformer.js';
      const Transformer = globalThis.javax.xml.transform.Transformer;

      
//not game specific package import { TransformerFactory } from '../../../javax/xml/transform/TransformerFactory.js';
      const TransformerFactory = globalThis.javax.xml.transform.TransformerFactory;

      
//not game specific package import { DOMSource } from '../../../javax/xml/transform/dom/DOMSource.js';
      const DOMSource = globalThis.javax.xml.transform.dom.DOMSource;

      
//not game specific package import { StreamResult } from '../../../javax/xml/transform/stream/StreamResult.js';
      const StreamResult = globalThis.javax.xml.transform.stream.StreamResult;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { Document } from '../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
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


    public createDocument(): Document{

        try {
            
    var factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;;
    

    var builder: DocumentBuilder = factory.newDocumentBuilder()!;;
    

    var document: Document = builder.newDocument()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(Exception.constructor)
            
    public createDocument(xmlFile: File): Document{

        try {
            
    var factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;;
    

    var builder: DocumentBuilder = factory.newDocumentBuilder()!;;
    

    var document: Document = builder.parse(xmlFile)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public toString(document: Document): string{

        try {
            
    var domSource: DOMSource = new DOMSource(document);;
    

    var byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    

    var streamResult: StreamResult = new StreamResult(byteArrayOutputStream);;
    

    var copyTransformerFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    

    var copyTransformer: Transformer = copyTransformerFactory!.newTransformer()!;;
    
copyTransformer!.transform(domSource, streamResult);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return byteArrayOutputStream!.toString();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public save(file: File, document: Document){

        try {
            
    var copyTransformerFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    

    var copyTransformer: Transformer = copyTransformerFactory!.newTransformer()!;;
    

    var domSource: DOMSource = new DOMSource(document);;
    
file.createNewFile();
    

    var streamResult: StreamResult = new StreamResult(file);;
    
copyTransformer!.transform(domSource, streamResult);
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public getChildNodeList(nodeName: string, nodeList: NodeList): NodeList{

    var numberOfNodes: number = nodeList!.getLength()!;;
    




                        for (
    var index: number = 0;index < numberOfNodes; index++)
        {

    var node: Node = nodeList!.item(index)!;;
    

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

    var list: BasicArrayList = new BasicArrayListD();;
    

    var childNodeList: NodeList = this.getChildNodeList(nodeName, nodeList)!;;
    

    var numberOfChildren: number = childNodeList!.getLength()!;;
    




                        for (
    var index: number = 0;index < numberOfChildren; index++)
        {

    var node: Node = childNodeList!.item(index)!;;
    

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

    var list: BasicArrayList = new BasicArrayListD();;
    

    var numberOfChildren: number = nodeList!.getLength()!;;
    




                        for (
    var index: number = 0;index < numberOfChildren; index++)
        {

    var node: Node = nodeList!.item(index)!;;
    

                        if(node.getNodeType() != Node.TEXT_NODE)
                        
                                    {
                                    list.add(node);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


                //@Throws(Exception.constructor)
            
    public searchNodeList(nodeName: string, nodeList: NodeList): Node{

    var numberOfNodes: number = nodeList!.getLength()!;;
    




                        for (
    var index: number = 0;index < numberOfNodes; index++)
        {

    var node: Node = nodeList!.item(index)!;;
    
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
            
    public searchNodeList(nodeName: string, nodeList: BasicArrayList): Node{

    var numberOfNodes: number = nodeList!.size()!;;
    




                        for (
    var index: number = 0;index < numberOfNodes; index++)
        {

    var node: Node = nodeList!.get(index) as Node;;
    
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
                
            

