
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
        



            import Vector from "@ohos.util.Vector";
        
            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { DomData } from "../../../../../../../org/allbinary/data/tree/dom/DomData.js";

    
import { DomNodeHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomNodeInterface } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CssPropertiesValidationFactory } from "../../../../../../../org/allbinary/logic/visual/dhtml/style/css/property/CssPropertiesValidationFactory.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../org/w3c/dom/NodeList.js";

    

export class CssElementView
            extends Object
        
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly TITLE: string = "title";
        
        

    private readonly DESCRIPTION: string = "description";
        
        

    private value: string

    private title: string

    private description: string

    cssElementVector: Vector

    cssPropertyVector: Vector
public constructor (){

            super();
            this.cssPropertyVector= new Vector();
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    
this.title= stringUtil!.EMPTY_STRING;
    
this.description= stringUtil!.EMPTY_STRING;
    
this.value= stringUtil!.EMPTY_STRING;
    
}

public constructor (node: Node){

            super();
            var node = node

        try {
            
    var valueNode: Node = DomSearchHelper.getNode(DomData.VALUE, node.getChildNodes())!;
        
        
;
    
this.value= DomNodeHelper.getTextNodeValue(valueNode);
    

    var titleValueNode: Node = DomSearchHelper.getNodeNoThrow(TITLE, node.getChildNodes())!;
        
        
;
    

                        if(titleValueNode != 
                                    null
                                )
                        
                                    {
                                    this.title= DomNodeHelper.getTextNodeValue(titleValueNode);
    

                                    }
                                
                        else {
                            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    
this.title= stringUtil!.EMPTY_STRING;
    

                        }
                            

    var descriptionValueNode: Node = DomSearchHelper.getNodeNoThrow(DESCRIPTION, node.getChildNodes())!;
        
        
;
    

                        if(descriptionValueNode != 
                                    null
                                )
                        
                                    {
                                    this.description= DomNodeHelper.getTextNodeValue(descriptionValueNode);
    

                                    }
                                
                        else {
                            this.description= StringUtil.getInstance()!.EMPTY_STRING;
    

                        }
                            

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().
                            append("Value: ")!.append(this.value)!.append("\nTitle: ")!.append(this.title)!.append("\nDescription: ")!.append(this.description)!.toString(), this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                

    var cssElementStyleNodeVector: Vector = DomSearchHelper.getAllNodes(CssElementData.getInstance()!.NAME, node.getChildNodes())!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Child Css Elements: " +cssElementStyleNodeVector!.length, this, "CssElementView()");
    

                                    }
                                
this.cssElementVector= CssElementsValidationFactory.getInstance(cssElementStyleNodeVector);
    

    var nodeList: NodeList = node.getChildNodes()!;
        
        
;
    
this.cssPropertyVector= CssPropertiesValidationFactory.getInstance(nodeList);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(new StringMaker().
                            append("Value: ")!.append(this.value)!.append("\nTitle: ")!.append(this.title)!.append("\nDescription: ")!.append(this.description)!.toString(), this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw new Error("CssElementView")
}

}


    public getValue(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(DomData.VALUE, this.value);
    
hashMap!.put(this.TITLE, this.title);
    
hashMap!.put(this.DESCRIPTION, this.description);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<any, any> = this.toHashMap()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("CssView HashMap: " +hashMap!.toString(), this, "toXmlNode");
    

                                    }
                                

    var node: Node = ModDomHelper.createNodeWithValueNodes(document, CssElementData.getInstance()!.NAME, hashMap)!;
        
        
;
    

    var size: number = cssPropertyVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var cssPropertyDomNodeInterface: DomNodeInterface = cssPropertyVector!.get(index);

                         as DomNodeInterface;
        
        
;
    
node.appendChild(cssPropertyDomNodeInterface!.toXmlNode(document));
    
}


    var size2: number = cssElementVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {

    var cssElementDomNodeInterface: DomNodeInterface = cssElementVector!.get(index);

                         as DomNodeInterface;
        
        
;
    
node.appendChild(cssElementDomNodeInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

