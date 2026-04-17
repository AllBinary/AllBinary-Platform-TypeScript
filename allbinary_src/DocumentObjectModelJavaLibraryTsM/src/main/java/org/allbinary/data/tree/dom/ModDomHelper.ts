
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../java/util/Set.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { ClassUtil } from "../../../../../org/allbinary/logic/java/anyType/clazz/ClassUtil.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DomData } from "./DomData.js";

export class ModDomHelper
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static createTextNode(document: Document, name: string, text: string): Node{
var document = document
var name = name
var text = text

    var newValueNode: Node = document.createElement(name)!;
        
        
;
    

    var newValueTextNode: Node = document.createTextNode(text)!;
        
        
;
    
newValueNode!.appendChild(newValueTextNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newValueNode;
    
}


                //@Throws(Error::class)
            
    public static createValueNode(document: Document, text: string): Node{
var document = document
var text = text



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createTextNode(document, DomData.VALUE, text);

                        ;
    
}


                //@Throws(Error::class)
            
    public static createNameNode(document: Document, text: string): Node{
var document = document
var text = text



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createTextNode(document, DomData.NAME, text);

                        ;
    
}


                //@Throws(Error::class)
            
    public static createIndexNode(document: Document, index: number): Node{
var document = document
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createTextNode(document, DomData.INDEX, new Integer(index).
                            toString());

                        ;
    
}


                //@Throws(Error::class)
            
    public static createNameValueNodes(document: Document, elementName: string, nameText: string, valueText: string): Node{
var document = document
var elementName = elementName
var nameText = nameText
var valueText = valueText

    var newNode: Node = document.createElement(elementName)!;
        
        
;
    
newNode!.appendChild(ModDomHelper.createNameNode(document, nameText));
    
newNode!.appendChild(ModDomHelper.createValueNode(document, valueText));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newNode;
    
}


                //@Throws(Error::class)
            
    public static createNameValueNodes(document: Document, elementNameAndNameText: string, valueText: string): Node{
var document = document
var elementNameAndNameText = elementNameAndNameText
var valueText = valueText

    var newNode: Node = ModDomHelper.createNameValueNodes(document, elementNameAndNameText, elementNameAndNameText, valueText)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newNode;
    
}


                //@Throws(Error::class)
            
    public static createNameValueIndexNodes(document: Document, elementNameAndNameText: string, index: number, valueText: string): Node{
var document = document
var elementNameAndNameText = elementNameAndNameText
var index = index
var valueText = valueText

    var newNode: Node = ModDomHelper.createNameValueNodes(document, elementNameAndNameText, valueText)!;
        
        
;
    
newNode!.appendChild(ModDomHelper.createIndexNode(document, index));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newNode;
    
}


                //@Throws(Error::class)
            
    public static createNameValueNodes(document: Document, rootNode: string, hashMap: HashMap<any, any>): Node{
var document = document
var rootNode = rootNode
var hashMap = hashMap

    var node: Node = document.createElement(rootNode)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, node, hashMap);

                        ;
    
}


                //@Throws(Error::class)
            
    public static createNameValueNodes(document: Document, node: Node, hashMap: HashMap<any, any>): Node{
var document = document
var node = node
var hashMap = hashMap

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var keySet: Set = hashMap!.keys!;
        
        
;
    

    var keyArray: any[] = keySet!.toTypedArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var objectKey: any = keyArray[i]!;
        
        
;
    

    var name: string = objectKey as String;
        
        
;
    

    var anyType: any = hashMap!.get(objectKey as Object);

                         as Object;
        
        
;
    

                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    
    var value: string = stringUtil!.EMPTY_STRING;
        
        
;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    

                                    }
                                
                             else 
                        if(anyType is String)
                        
                                    {
                                    
    var value: string = stringUtil!.getInstance(anyType as String)!;
        
        
;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    

                                    }
                                
                             else 
                        if(anyType is HashMap)
                        
                                    {
                                    node.appendChild(ModDomHelper.createNameValueNodes(document, name, hashMap));
    

                                    }
                                
                        else {
                            


                            throw new Error("HashMap value is the wrong instance and is: " +ClassUtil.viewAll(anyType, CommonSeps.getInstance()!.NEW_LINE))

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Error::class)
            
    public static createNameValueNodes(document: Document, rootNodeName: string, duplicateNodeName: string, valueVector: Vector): Node{
var document = document
var rootNodeName = rootNodeName
var duplicateNodeName = duplicateNodeName
var valueVector = valueVector

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var node: Node = document.createElement(rootNodeName)!;
        
        
;
    

    var size: number = valueVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var value: string = stringUtil!.getInstance(valueVector!.get(i);

                         as String)!;
        
        
;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, duplicateNodeName, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Error::class)
            
    public static createNameValueIndexNodes(document: Document, rootNodeName: string, duplicateNodeName: string, valueVector: Vector): Node{
var document = document
var rootNodeName = rootNodeName
var duplicateNodeName = duplicateNodeName
var valueVector = valueVector

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var node: Node = document.createElement(rootNodeName)!;
        
        
;
    

    var size: number = valueVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var value: string = stringUtil!.getInstance(valueVector!.get(index);

                         as String)!;
        
        
;
    
node.appendChild(ModDomHelper.createNameValueIndexNodes(document, duplicateNodeName, index, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Error::class)
            
    public static createNodeWithValueNodes(document: Document, rootNode: string, hashMap: HashMap<any, any>): Node{
var document = document
var rootNode = rootNode
var hashMap = hashMap

    var node: Node = document.createElement(rootNode)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNodeWithValueNodes(document, node, hashMap);

                        ;
    
}


                //@Throws(Error::class)
            
    public static createNodeWithValueNodes(document: Document, node: Node, hashMap: HashMap<any, any>): Node{
var document = document
var node = node
var hashMap = hashMap

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var keySet: Set = hashMap!.keys!;
        
        
;
    

    var keyArray: any[] = keySet!.toTypedArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var name: string = keyArray[i]! as String;
        
        
;
    

    var anyType: any = hashMap!.get(name as Object);

                         as Object;
        
        
;
    

    var value: string = stringUtil!.getInstance(anyType as String)!;
        
        
;
    
node.appendChild(ModDomHelper.createTextNode(document, name, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}

private constructor (){

            super();
            }


}
                
            

