
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../java/util/Set.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { DomData } from "../../../../../../org/allbinary/data/tree/dom/DomData.js";

    
import { DomNodeHelper } from "../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

export class NameSpaceRequestParams extends RequestParams {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor ()                        

                            : super(){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Constructing empty", this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
}

public constructor (httpServletRequest: HttpServletRequest)                        

                            : super(httpServletRequest){

            super();
            var httpServletRequest = httpServletRequest


                            //For kotlin this is before the body of the constructor.
                    

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Constructing from HttpServletRequest", this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
}

public constructor (pageContext: PageContext)                        

                            : super(pageContext){

            super();
            var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Constructing from PageContext", this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
}


                @Throws(Exception::class)
            
    createPackageNode(document: Document, packageName: string, packagePropertiesHashMap: HashMap<Any, Any>): Node{
var document = document
var packageName = packageName
var packagePropertiesHashMap = packagePropertiesHashMap

    var node: Node = document.createElement(packageName)!;
        
        


    var propertyKeySet: Set = packagePropertiesHashMap!.keys!;
        
        


    var propertyKeySetArray: any = {}[] = propertyKeySet!.toArray()!;
        
        


    var size: number = propertyKeySetArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var propertyName: string = propertyKeySetArray[index]! as String;
        
        


    var propertyValue: string = packagePropertiesHashMap!.get(propertyName as Object) as String;
        
        


    var propertyNode: Node = ModDomHelper.createTextNode(document, propertyName, propertyValue)!;
        
        

appendChild(propertyNode)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                @Throws(Exception::class)
            
    createPackageMultiNode(document: Document, nameSpaceRequestParam: NameSpaceRequestParam, packageName: string, packagePropertiesHashMap: HashMap<Any, Any>): Node{
var document = document
var nameSpaceRequestParam = nameSpaceRequestParam
var packageName = packageName
var packagePropertiesHashMap = packagePropertiesHashMap

    var beginIndex: number = packageName!.indexOf('[')!;
        
        


    var indexValue: string = packageName!.substring(beginIndex +1, packageName!.length -1)!;
        
        


    var multiElementPackage: string = packageName!.substring(0, beginIndex)!;
        
        


    var selectedValue: string = nameSpaceRequestParam!.getValue()!;
        
        


    var propertyValue: string = packagePropertiesHashMap!.get(DomData.VALUE) as String;
        
        


    
                        if(propertyValue!.compareTo(NameSpaceRequestParamData.VALUE) != 0)
                        
                                    {
                                    selectedValue= propertyValue

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("\nAppending Multinode Element: " +multiElementPackage +"[" +indexValue +"] " +selectedValue, this, "createPackageMultiNode")

                                    }
                                

    var nextNode: Node = ModDomHelper.createNameValueNodes(document, multiElementPackage, selectedValue)!;
        
        


    var indexNode: Node = ModDomHelper.createTextNode(document, DomData.INDEX, indexValue)!;
        
        

appendChild(indexNode)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nextNode;
    
}


                @Throws(Exception::class)
            
    getRootNode(rootElementPackage: string, packagePropertiesHashMap: HashMap<Any, Any>, document: Document): Node{
var rootElementPackage = rootElementPackage
var packagePropertiesHashMap = packagePropertiesHashMap
var document = document

    var rootNode: Node = DomSearchHelper.getNodeNoThrow(rootElementPackage, document.getChildNodes())!;
        
        


    
                        if(rootNode == 
                                    null
                                )
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("\nAppending Document Root: " +"\nElementName: " +rootElementPackage +"\nProperties: " +packagePropertiesHashMap!.toString(), this, "getRootNode")

                                    }
                                

    var node: Node = this.createPackageNode(document, rootElementPackage, packagePropertiesHashMap)!;
        
        

appendChild(node)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("\nAppended Document Created: " +DomDocumentHelper.toString(document), this, "getRootNode")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("\nUsing Existing Root Node", this, "getRootNode")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rootNode;
    

                        }
                            
}


                @Throws(Exception::class)
            
    addNewProperties(document: Document, node: Node, nextPackagePropertiesHashMap: HashMap<Any, Any>): Node{
var document = document
var node = node
var nextPackagePropertiesHashMap = nextPackagePropertiesHashMap

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put(StringMaker().
                            append("\nAdding Any New Properties: ")!.append(nextPackagePropertiesHashMap!.toString())!.append("\nto node: ")!.append(node.getNodeName())!.toString(), this, "addNewProperties")

                                    }
                                

    var propertyNameSet: Set = nextPackagePropertiesHashMap!.keys!;
        
        


    var propertyNameSetArray: any = {}[] = propertyNameSet!.toArray()!;
        
        


    var size: number = propertyNameSetArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextPropertyName: string = propertyNameSetArray[index]! as String;
        
        


    var propertyValue: string = StringUtil.getInstance()!.getInstance(nextPackagePropertiesHashMap!.get(nextPropertyName as Object) as String)!;
        
        


    var valueNode: Node = DomSearchHelper.getNodeNoThrow(nextPropertyName, node.getChildNodes())!;
        
        


    
                        if(valueNode != 
                                    null
                                )
                        
                                    {
                                    
    var existingElementNodeTextNodeValue: string = DomNodeHelper.getTextNodeValue(valueNode)!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("\nIf property: \"" +nextPropertyName +" is the same as:\n" +"Node: " +node.getNodeName() +" then: " +propertyValue +"==" +existingElementNodeTextNodeValue, this, "addNewProperties")

                                    }
                                

    
                        if(propertyValue!.compareTo(existingElementNodeTextNodeValue) != 0)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("At least one Property from NameSpaceRequest Package was different from Node", this, "addNewProperties")

                                    }
                                



                            throw Exception("Property Modifications Should Not Occur")

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Adding a new Property: " +nextPropertyName +"=" +propertyValue, this, "addNewProperties")

                                    }
                                

    var newPropertyNode: Node = ModDomHelper.createTextNode(document, nextPropertyName, propertyValue)!;
        
        

appendChild(newPropertyNode)

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                @Throws(Exception::class)
            
    isElementValueTextNodeEqual(nextPackagePropertiesHashMap: HashMap<Any, Any>, node: Node): boolean{
var nextPackagePropertiesHashMap = nextPackagePropertiesHashMap
var node = node

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("\nComparing the value property in: " +nextPackagePropertiesHashMap!.toString() +"\nto node child leaves of node: " +node.getNodeName(), this, "isElementValueTextNodeEqual")

                                    }
                                

    var propertyValue: string = nextPackagePropertiesHashMap!.get(DomData.VALUE) as String;
        
        


    var valueNode: Node = DomSearchHelper.getNodeNoThrow(DomData.VALUE, node.getChildNodes())!;
        
        


    
                        if(valueNode != 
                                    null
                                )
                        
                                    {
                                    
    var existingElementNodeTextNodeValue: string = DomNodeHelper.getTextNodeValue(valueNode)!;
        
        


    
                        if(propertyValue!.compareTo(existingElementNodeTextNodeValue) == 0)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Value Node is the same", this, "isElementValueTextNodeEqual")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                @Throws(Exception::class)
            
    isElementValueTextNodeUnique(nextPackagePropertiesHashMap: HashMap<Any, Any>, elementNodeVector: Vector): number{
var nextPackagePropertiesHashMap = nextPackagePropertiesHashMap
var elementNodeVector = elementNodeVector

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("\nComparing Properties of: " +elementNodeVector!.length +" Nodes", this, "isElementValueTextNodeUnique")

                                    }
                                

    var size: number = elementNodeVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var existingElementNode: Node = elementNodeVector!.get(index) as Node;
        
        


    
                        if(this.isElementValueTextNodeEqual(nextPackagePropertiesHashMap, existingElementNode))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


                @Throws(Exception::class)
            
    addChildren(document: Document, rootNode: Node, nameSpaceRequestParam: NameSpaceRequestParam): Document{
var document = document
var rootNode = rootNode
var nameSpaceRequestParam = nameSpaceRequestParam

    var node: Node = rootNode;
        
        


    var packageVector: Vector = nameSpaceRequestParam!.getPackages()!;
        
        


    var size: number = packageVector!.length!;
        
        





                        for (
    var index: number = 1;
        
        
index < size; index++)
        {

    var nextPackageName: string = packageVector!.get(index) as String;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put(StringMaker().
                            append("\nTrying to Add Child to Node: ")!.append(node.getNodeName())!.append("\nwith new PackageName: ")!.append(nextPackageName)!.toString(), this, "addChildren")

                                    }
                                

    var nextPackagePropertiesHashMap: HashMap<Any, Any> = nameSpaceRequestParam!.getPackageProperties(index)!;
        
        


    var elementNodeVector: Vector = DomSearchHelper.getAllNodesNoThrow(nextPackageName, node.getChildNodes())!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("\nDocument Contains " +elementNodeVector!.length +" Node(s) With Same Name", this, "addChildren")

                                    }
                                

    var isElementValueTextNodeUniqueIndex: number = this.isElementValueTextNodeUnique(nextPackagePropertiesHashMap, elementNodeVector)!;
        
        


    
                        if((elementNodeVector!.length == 0 || isElementValueTextNodeUniqueIndex ==  -1) && !nextPackageName!.endsWith(CommonSeps.getInstance()!.BRACKET_CLOSE))
                        
                                    {
                                    
    var nextNode: Node = this.createPackageNode(document, nextPackageName, nextPackagePropertiesHashMap)!;
        
        

appendChild(nextNode)
node= nextNode

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("\nAppended Package: " +node.getNodeName(), this, "addChildren")
put("\nAppended Document Created: " +DomDocumentHelper.toString(document), this, "addChildren")

                                    }
                                

                                    }
                                
                             else 
    
                        if(nextPackageName!.endsWith(CommonSeps.getInstance()!.BRACKET_CLOSE))
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Package is MultiNode: just append", this, "addChildren")

                                    }
                                

    var nextNode: Node = this.createPackageMultiNode(document, nameSpaceRequestParam, nextPackageName, nextPackagePropertiesHashMap)!;
        
        

appendChild(nextNode)
node= nextNode

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("\nAppended Multinode Element: " +DomDocumentHelper.toString(document), this, "addChildren")

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Value Node already exists: Now compare (properties to leaf nodes)", this, "addChildren")

                                    }
                                

    var nodeNameDuplicateNode: Node = elementNodeVector!.get(isElementValueTextNodeUniqueIndex) as Node;
        
        

node= this.addNewProperties(document, nodeNameDuplicateNode, nextPackagePropertiesHashMap)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("\nDuplicate Node Found: Moving to next child ^", this, "addChildre")

                                    }
                                

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                @Throws(Exception::class)
            
    addNameSpace(key: string, value: string, document: Document): Document{
var key = key
var value = value
var document = document

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put(StringMaker().
                            append("NameSpace key: ")!.append(key)!.append(" Value: ")!.append(value)!.toString(), this, "addNameSpace")

                                    }
                                

    var nameSpaceRequestParam: NameSpaceRequestParam = new NameSpaceRequestParam(key, value);
        
        


    var packageVector: Vector = nameSpaceRequestParam!.getPackages()!;
        
        


    var size: number = packageVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var packageName: string = packageVector!.get(index) as String;
        
        


    var packagePropertiesHashMap: HashMap<Any, Any> = nameSpaceRequestParam!.getPackageProperties(packageVector!.indexOf(packageName))!;
        
        


    var rootNode: Node = this.getRootNode(packageName, packagePropertiesHashMap, document)!;
        
        


    
                        if(index < size -1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addChildren(document, rootNode as Node, nameSpaceRequestParam);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                @Throws(Exception::class)
            
    public toHashMap(): HashMap<Any, Any>{

    var document: Document = DomDocumentHelper.create()!;
        
        


    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var keys: Set = this.getMap()!.keySet()!;
        
        


    var keyArray: any = {}[] = keys.toArray()!;
        
        


    var keySize: number = keyArray!.length
                ;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("NameSpace Request Size: " +keys.size(), this, "toHashMap")

                                    }
                                




                        for (
    var i: number = 0;
        
        
i < keySize; i++)
        {

    var key: string = keyArray[i]! as String;
        
        


    var anyType: any = {} = this.getMap()!.get(key)!;
        
        


    var className: string = anyType!::class.toString()! as String;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Request Param Class: " +className, this, "toHashMap")

                                    }
                                

    
                        if(this.getMap()!.get(key) is String)
                        
                                    {
                                    
    var value: string = this.getMap()!.get(key) as String;
        
        


    
                        if(key.indexOf(NameSpaceRequestParamData.NAME) < 0)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Not NameSpace key: " +key +" Value: " +value, this, "toHashMap()")

                                    }
                                
put(key.toCharArray()
                                        .slice(0, ).join('')
                                    , value.toCharArray()
                                        .slice(0, ).join('')
                                    )

                                    }
                                
                        else {
                            document= this.addNameSpace(key.toCharArray()
                                        .slice(0, ).join('')
                                    , value.toCharArray()
                                        .slice(0, ).join('')
                                    , document)

                        }
                            

                                    }
                                
                             else 
    
                        if(this.getMap()!.get(key) is )
                        
                                    {
                                    
    var values: string[] = this.getMap()!.get(key) as Array<String?>;
        
        


    
                        if(key.indexOf(NameSpaceRequestParamData.NAME) < 0)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("Not NameSpace key: " +key +" Value: " +values[0], this, "toHashMap()")

                                    }
                                
put(key.toCharArray()
                                        .slice(0, ).join('')
                                    , .toCharArray())

                                    }
                                
                        else {
                            document= this.addNameSpace(key.toCharArray()
                                        .slice(0, ).join('')
                                    , .toCharArray(), document)

                        }
                            

                                    }
                                
}


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    put("NameSpaceRequestParams: " +this.getMap()!.toString() +"\ntoHashMap(): " +hashMap!.toString() +"\nDocument Created: " +DomDocumentHelper.toString(document), this, "toHashMap()")

                                    }
                                
put(NameSpaceRequestParamData.DOCUMENT, document)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


}
                
            

