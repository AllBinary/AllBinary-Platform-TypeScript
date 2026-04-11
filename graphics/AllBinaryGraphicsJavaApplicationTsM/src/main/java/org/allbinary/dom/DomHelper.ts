
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
        



import { ByteArrayOutputStream } from "../../../java/io/ByteArrayOutputStream.js";

    
import { File } from "../../../java/io/File.js";

    
import { DocumentBuilder } from "../../../javax/xml/parsers/DocumentBuilder.js";

    
import { DocumentBuilderFactory } from "../../../javax/xml/parsers/DocumentBuilderFactory.js";

    
import { Transformer } from "../../../javax/xml/transform/Transformer.js";

    
import { TransformerFactory } from "../../../javax/xml/transform/TransformerFactory.js";

    
import { DOMSource } from "../../../javax/xml/transform/dom/DOMSource.js";

    
import { StreamResult } from "../../../javax/xml/transform/stream/StreamResult.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../org/w3c/dom/NodeList.js";

    

export class DomHelper
            extends Object
         {
        

    private static readonly instance: DomHelper = new DomHelper();
        
        

    public static getInstance(): DomHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    public createDocument(): Document{

        try {
            
    var factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;
        
        
;
    

    var builder: DocumentBuilder = factory.newDocumentBuilder()!;
        
        
;
    

    var document: Document = builder.newDocument()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(Error::class)
            
    public createDocument(xmlFile: File): Document{
var xmlFile = xmlFile

        try {
            
    var factory: DocumentBuilderFactory = DocumentBuilderFactory.newInstance()!;
        
        
;
    

    var builder: DocumentBuilder = factory.newDocumentBuilder()!;
        
        
;
    

    var document: Document = builder.parse(xmlFile)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                //: 
} catch(e) 
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    public toString(document: Document): string{
var document = document

        try {
            
    var domSource: DOMSource = new DOMSource(document);
        
        
;
    

    var byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();
        
        
;
    

    var streamResult: StreamResult = new StreamResult(byteArrayOutputStream);
        
        
;
    

    var copyTransformerFactory: TransformerFactory = TransformerFactory.newInstance()!;
        
        
;
    

    var copyTransformer: Transformer = copyTransformerFactory!.newTransformer()!;
        
        
;
    
copyTransformer!.transform(domSource, streamResult);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return byteArrayOutputStream!.toString();

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    public save(file: File, document: Document){
var file = file
var document = document

        try {
            
    var copyTransformerFactory: TransformerFactory = TransformerFactory.newInstance()!;
        
        
;
    

    var copyTransformer: Transformer = copyTransformerFactory!.newTransformer()!;
        
        
;
    

    var domSource: DOMSource = new DOMSource(document);
        
        
;
    
file.createNewFile();
    

    var streamResult: StreamResult = new StreamResult(file);
        
        
;
    
copyTransformer!.transform(domSource, streamResult);
    

                //: 
} catch(e) 
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    public getChildNodeList(nodeName: string, nodeList: NodeList): NodeList{
var nodeName = nodeName
var nodeList = nodeList

    var numberOfNodes: number = nodeList!.getLength()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfNodes; index++)
        {

    var node: Node = nodeList!.item(index)!;
        
        
;
    

                        if(node.getNodeName()!.compareTo(nodeName) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node.getChildNodes();

                        ;
    

                                    }
                                
}




                            throw Error(nodeName +" Node Not Found")
}


                //@Throws(Error::class)
            
    public getChildrenWithoutTextNodes(nodeName: string, nodeList: NodeList): BasicArrayList{
var nodeName = nodeName
var nodeList = nodeList

    var list: BasicArrayList = new BasicArrayList();
        
        
;
    

    var childNodeList: NodeList = getChildNodeList(nodeName, nodeList)!;
        
        
;
    

    var numberOfChildren: number = childNodeList!.getLength()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfChildren; index++)
        {

    var node: Node = childNodeList!.item(index)!;
        
        
;
    

                        if(node.getNodeType() != Node.TEXT_NODE)
                        
                                    {
                                    list.add(node);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


                //@Throws(Error::class)
            
    public getWithoutTextNodes(nodeList: NodeList): BasicArrayList{
var nodeList = nodeList

    var list: BasicArrayList = new BasicArrayList();
        
        
;
    

    var numberOfChildren: number = nodeList!.getLength()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfChildren; index++)
        {

    var node: Node = nodeList!.item(index)!;
        
        
;
    

                        if(node.getNodeType() != Node.TEXT_NODE)
                        
                                    {
                                    list.add(node);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


                //@Throws(Error::class)
            
    public searchNodeList(nodeName: string, nodeList: NodeList): Node{
var nodeName = nodeName
var nodeList = nodeList

    var numberOfNodes: number = nodeList!.getLength()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfNodes; index++)
        {

    var node: Node = nodeList!.item(index)!;
        
        
;
    
logUtil!.put("NodeName: " +node.getNodeName(), this, "searchNodeList");
    

                        if(node.getNodeName()!.compareTo(nodeName) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                                    }
                                
}




                            throw Error(nodeName +" Node Not Found in search")
}


                //@Throws(Error::class)
            
    public searchNodeList(nodeName: string, nodeList: BasicArrayList): Node{
var nodeName = nodeName
var nodeList = nodeList

    var numberOfNodes: number = nodeList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfNodes; index++)
        {

    var node: Node = nodeList!.get(index);

                         as Node;
        
        
;
    
logUtil!.put("NodeName: " +node.getNodeName(), this, "searchNodeList");
    

                        if(node.getNodeName()!.compareTo(nodeName) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                                    }
                                
}




                            throw Error(nodeName +" Node Not Found in search")
}


}
                
            

