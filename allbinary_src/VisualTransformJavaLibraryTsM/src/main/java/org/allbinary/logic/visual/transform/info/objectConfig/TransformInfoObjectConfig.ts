
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
        



import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { DomNodeHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DomDocumentHelper } from "../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { InputOutputTypeData } from "../../../../../../../org/allbinary/logic/io/InputOutputTypeData.js";

    
import { OutputTypeData } from "../../../../../../../org/allbinary/logic/io/OutputTypeData.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfoData } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { TransformInfoDomNode } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoDomNode.js";

    
import { TransformInfoInterface } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfosData } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js";

    
import { XslData } from "../../../../../../../org/allbinary/logic/visual/transform/template/XslData.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Attr } from "../../../../../../../org/w3c/dom/Attr.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { NamedNodeMap } from "../../../../../../../org/w3c/dom/NamedNodeMap.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../org/w3c/dom/NodeList.js";

    

export class TransformInfoObjectConfig
            extends Object
        
                , TransformInfoObjectConfigInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly ownerTransformInfoInterface: TransformInfoInterface

    private document: Document

    private outputTypeName: string
public constructor (transformInfoInterface: Object){

            super();
            var transformInfoInterface = transformInfoInterface
this.ownerTransformInfoInterface= transformInfoInterface
this.createDocument()

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("TransformInfo: ")

    
                        if(this.ownerTransformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    append(this.ownerTransformInfoInterface!.getName())

                                    }
                                
                        else {
                            append("No Owner!?#@")

                        }
                            
append("\nConstructed with document: ")
append(this.toString())
put(stringBuffer!.toString(), this, "Constructor(TransformInfoInterface)")

                                    }
                                
}

public constructor (transformInfoInterface: Object, document: Object){

            super();
            var transformInfoInterface = transformInfoInterface
var document = document
this.ownerTransformInfoInterface= transformInfoInterface
this.document= document

    var node: Node = DomSearchHelper.getNodeNoThrow(OutputTypeData.getInstance()!.NAME, this.getRootNode()!.getChildNodes())!;
        
        


    
                        if(node != 
                                    null
                                )
                        
                                    {
                                    this.setOutputTypeName(DomNodeHelper.getTextNodeValue(node))

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("TransformInfo: ")

    
                        if(this.ownerTransformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    append(this.ownerTransformInfoInterface!.getName())

                                    }
                                
                        else {
                            append("No Owner!?#@")

                        }
                            
append("\nConstructed with document: ")
append(this.toString())
put(stringBuffer!.toString(), this, "Constructor(TransformInfoInterface, Document)")

                                    }
                                
}

public constructor (transformInfoInterface: Object, name: string, type: string){

            super();
            var transformInfoInterface = transformInfoInterface
var name = name
var type = type
this.ownerTransformInfoInterface= transformInfoInterface
this.createDocument()

    var configNameAttr: Attr = this.document.createAttribute(TransformInfoObjectConfigData.getInstance()!.NAME)!;
        
        

setValue(name)

    var objectConfigNode: Node = this.document.getElementsByTagName(TransformInfoObjectConfigData.getInstance()!.NAME)!.item(0)!;
        
        

appendChild(configNameAttr)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("TransformInfo: ")

    
                        if(this.ownerTransformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    append(this.ownerTransformInfoInterface!.getName())

                                    }
                                
                        else {
                            append("No Owner!?#@")

                        }
                            
append("\nConstructed with document: ")
append(this.toString())
put(stringBuffer!.toString(), this, "Constructor(TransformInfoInterface, name, type)")

                                    }
                                
}


    createDocument(){
this.document= DomDocumentHelper.create()

    var objectConfigNode: Node = document.createElement(TransformInfoObjectConfigData.getInstance()!.NAME)!;
        
        

appendChild(objectConfigNode)
}


    getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ownerTransformInfoInterface;
    
}


                @Throws(Exception::class)
            
    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.document;
    
}


    setDocument(document: Document){
var document = document
this.document= document
}


    public containsView(transformInfoInterface: TransformInfoInterface): boolean{
var transformInfoInterface = transformInfoInterface

    var objectConfigNode: Node = this.document.getElementsByTagName(TransformInfoObjectConfigData.getInstance()!.NAME)!.item(0)!;
        
        


    var viewNodeList: NodeList = objectConfigNode!.getChildNodes()!;
        
        


    var numberOfViews: number = viewNodeList!.getLength()!;
        
        





                        for (
    var index: number = 0;
        
        
index < numberOfViews; index++)
        {

    var viewNode: Node = viewNodeList!.item(index)!;
        
        


    var viewAttributes: NamedNodeMap = viewNode!.getAttributes()!;
        
        


    var attrNode: Attr = viewAttributes!.getNamedItem(TransformInfoData.getInstance()!.NAME) as Attr;
        
        


    
                        if(transformInfoInterface!.getName()!.compareTo(attrNode!.getValue()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                @Throws(Exception::class)
            
    getTemplateAttributes(): NamedNodeMap{

    var componentNode: Node = this.document.getElementsByTagName(TransformInfoObjectConfigData.getInstance()!.NAME)!.item(0)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return componentNode!.getAttributes();
    
}


                @Throws(Exception::class)
            
    public getName(): string{

    var attrNode: Attr = this.getTemplateAttributes()!.getNamedItem(TransformInfoObjectConfigData.getInstance()!.NAME) as Attr;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return attrNode!.getValue();
    
}


                @Throws(Exception::class)
            
    public setName(name: string){
var name = name

    var attrNode: Attr = this.getTemplateAttributes()!.getNamedItem(TransformInfoObjectConfigData.getInstance()!.NAME) as Attr;
        
        

setValue(name)
}


                @Throws(Exception::class)
            
    getNodeVector(nodeName: string): Vector{
var nodeName = nodeName

    var componentsNodeList: NodeList = this.document.getElementsByTagName(nodeName)!;
        
        


    
                        if(componentsNodeList != 
                                    null
                                 && componentsNodeList!.getLength() > 0)
                        
                                    {
                                    
    var viewNodeVector: Vector = DomSearchHelper.getAllNodes(TransformInfoData.getInstance()!.NAME, componentsNodeList!.item(0)!.getChildNodes())!;
        
        


    var numberOfViews: number = viewNodeVector!.length!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Number Of ")
append(nodeName)
append(" Nodes: ")
appendint(numberOfViews)
put(stringBuffer!.toString(), this, "getNodeVector(nodename)")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewNodeVector;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Vector();
    
}


                @Throws(Exception::class)
            
    getTransformDomNodes(nodeName: string): Vector{
var nodeName = nodeName

    var viewVector: Vector = new Vector();
        
        


    var viewNodeVector: Vector = this.getNodeVector(nodeName)!;
        
        


    var size: number = viewNodeVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var viewNode: Node = viewNodeVector!.get(index) as Node;
        
        

add(TransformInfoDomNode(viewNode))
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewVector;
    
}


                @Throws(Exception::class)
            
    public getTransforms(nodeName: string): Vector{
var nodeName = nodeName

    var viewVector: Vector = new Vector();
        
        


    var viewNodeVector: Vector = this.getNodeVector(nodeName)!;
        
        


    var size: number = viewNodeVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var viewNode: Node = viewNodeVector!.get(index) as Node;
        
        

add(TransformInfoDomNode(viewNode).
                            getTransformInfoInterface())
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewVector;
    
}


                @Throws(Exception::class)
            
    public getTransformsGroup(group: string): Vector{
var group = group

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("Started: " +group, this, "getTransformsGroup()")

                                    }
                                

    var viewVector: Vector = new Vector();
        
        


    var GROUP: string = TransformInfosData.getInstance()!.GROUP;
        
        


    var componentsNodeList: NodeList = this.document.getElementsByTagName(GROUP)!;
        
        


    
                        if(componentsNodeList != 
                                    null
                                 && componentsNodeList!.getLength() > 0)
                        
                                    {
                                    
    var componentsNode: Node = componentsNodeList!.item(0)!;
        
        


    var length: number = componentsNodeList!.getLength()!;
        
        





                        for (
    var index: number = 0;
        
        
index < length; index++)
        {

    var node: Node = componentsNodeList!.item(index)!;
        
        


    var attributes: NamedNodeMap = node.getAttributes()!;
        
        


    var attrNode: Attr = attributes.getNamedItem(GROUP) as Attr;
        
        


    var value: string = attrNode!.getValue()!;
        
        


    
                        if(value.compareTo(group) == 0)
                        
                                    {
                                    componentsNode= node
break;

                    

                                    }
                                
}


    var viewNodeVector: Vector = DomSearchHelper.getAllNodes(TransformInfoData.getInstance()!.NAME, componentsNode!.getChildNodes())!;
        
        


    var numberOfViews: number = viewNodeVector!.length!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("Number Of Nodes: " +numberOfViews, this, "getTransformsGroup()")

                                    }
                                

    var size: number = viewNodeVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var viewNode: Node = viewNodeVector!.get(index) as Node;
        
        

add(TransformInfoDomNode(viewNode))
}


                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    
                        if(componentsNodeList == 
                                    null
                                )
                        
                                    {
                                    put("Number Of Nodes: NULL", this, "getTransformsGroup()")

                                    }
                                
                        else {
                            put("Number Of Nodes: 0", this, "getTransformsGroup()")

                        }
                            

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewVector;
    
}


                @Throws(Exception::class)
            
    public getTransformDomNodes(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransformDomNodes(TransformInfosData.getInstance()!.GROUP);
    
}


                @Throws(Exception::class)
            
    public getTransforms(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransforms(TransformInfosData.getInstance()!.NAME);
    
}


                @Throws(Exception::class)
            
    public getGroupTransforms(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransforms(TransformInfosData.getInstance()!.GROUP);
    
}


                @Throws(Exception::class)
            
    public getParentTransforms(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransforms(TransformInfoData.getInstance()!.PARENT);
    
}


    getRootNode(): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.document.getElementsByTagName(TransformInfoObjectConfigData.getInstance()!.NAME)!.item(0);
    
}


    public setOutputTypeName(outputTypeName: string){
var outputTypeName = outputTypeName
this.outputTypeName= outputTypeName
}


                @Throws(Exception::class)
            
    public getOutputTypeName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.outputTypeName;
    
}


                @Throws(Exception::class)
            
    public getInputOutputTypeName(): string{

    var node: Node = DomSearchHelper.getNode(InputOutputTypeData.getInstance()!.NAME, this.getRootNode()!.getChildNodes())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomNodeHelper.getTextNodeValue(node);
    
}


                @Throws(Exception::class)
            
    public getInputOutputTypeFile(): string{

    var node: Node = DomSearchHelper.getNode(InputOutputTypeData.getInstance()!.FILE, this.getRootNode()!.getChildNodes())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomNodeHelper.getTextNodeValue(node);
    
}


                @Throws(Exception::class)
            
    public getImportUriPath(): string{

    var node: Node = DomSearchHelper.getNode(XslData.getInstance()!.ROOT_IMPORT_URI, this.getRootNode()!.getChildNodes())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomNodeHelper.getTextNodeValue(node);
    
}


    public toString(): string{

        try {
            
    
                        if(this.document != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomDocumentHelper.toString(this.document);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    put("DOM Document error", this, commonStrings!.TOSTRING)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

