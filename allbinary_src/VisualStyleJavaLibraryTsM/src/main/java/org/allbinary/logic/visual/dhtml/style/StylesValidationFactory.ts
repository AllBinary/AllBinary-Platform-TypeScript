
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

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { DomSearchHelper } from "../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { NameSpaceRequestParamData } from "../../../../../../org/allbinary/logic/communication/http/request/NameSpaceRequestParamData.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CssElementData } from "../../../../../../org/allbinary/logic/visual/dhtml/style/css/CssElementData.js";

    
import { CssElementsValidationFactory } from "../../../../../../org/allbinary/logic/visual/dhtml/style/css/CssElementsValidationFactory.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../org/w3c/dom/NodeList.js";

    

export class StylesValidationFactory
            extends Object
         {
        

    private static readonly instance: StylesValidationFactory = new StylesValidationFactory();
        
        

    public static getInstance(): StylesValidationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public static getInstance(hashMap: HashMap<Any, Any>): Vector{
var hashMap = hashMap

    var stylesDocument: Document = hashMap!.get(NameSpaceRequestParamData.DOCUMENT) as Document;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StylesValidationFactory.getInstance()!.getInstance(stylesDocument);
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(document: Document): Vector{
var document = document

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


    var nodeList: NodeList = document.getElementsByTagName(StylesData.getInstance()!.NAME)!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Style Present: " +DomDocumentHelper.toString(document), this, commonStrings!.GET_INSTANCE)

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Styles Present: " +nodeList!.getLength(), this, commonStrings!.GET_INSTANCE)

                                    }
                                




                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var stylesNode: Node = nodeList!.item(index)!;
        
        


    var styleNodeList: Vector = DomSearchHelper.getAllNodes(StyleData.getInstance()!.NAME, stylesNode!.getChildNodes())!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Number Of Style Nodes Present: " +styleNodeList!.length, this, commonStrings!.GET_INSTANCE)

                                    }
                                




                        for (
    var styleNodesIndex: number = 0;
        
        
styleNodesIndex < styleNodeList!.length; styleNodesIndex++)
        {

    var styleNode: Node = styleNodeList!.get(styleNodesIndex) as Node;
        
        


    var cssElementStyleNodeList: Vector = DomSearchHelper.getAllNodes(CssElementData.getInstance()!.NAME, styleNode!.getChildNodes())!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Number Of Element Nodes Present: " +cssElementStyleNodeList!.length, this, commonStrings!.GET_INSTANCE)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CssElementsValidationFactory.getInstance(cssElementStyleNodeList);
    
}

}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("No Style Present", this, commonStrings!.GET_INSTANCE)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Vector();
    
}


}
                
            

