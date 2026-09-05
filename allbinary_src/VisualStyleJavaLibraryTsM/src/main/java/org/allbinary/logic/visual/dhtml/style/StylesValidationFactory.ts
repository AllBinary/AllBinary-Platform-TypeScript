
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
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { NameSpaceRequestParamData } from '../../../../../../org/allbinary/logic/communication/http/request/NameSpaceRequestParamData.js';
//not GWT import const NameSpaceRequestParamData = globalThis.org.allbinary.logic.communication.http.request.NameSpaceRequestParamData;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { CssElementData } from '../../../../../../org/allbinary/logic/visual/dhtml/style/css/CssElementData.js';
//not GWT import const CssElementData = globalThis.org.allbinary.logic.visual.dhtml.style.css.CssElementData;

      
import { CssElementsValidationFactory } from '../../../../../../org/allbinary/logic/visual/dhtml/style/css/CssElementsValidationFactory.js';
//not GWT import const CssElementsValidationFactory = globalThis.org.allbinary.logic.visual.dhtml.style.css.CssElementsValidationFactory;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StylesData } from './StylesData.js';
//not GWT import - same folder const StylesData = globalThis.org.allbinary.logic.visual.dhtml.style.StylesData;

                import { StyleData } from './StyleData.js';
//not GWT import - same folder const StyleData = globalThis.org.allbinary.logic.visual.dhtml.style.StyleData;

                
export class StylesValidationFactory
            extends Object
         {
        

    private static readonly instance: StylesValidationFactory = new StylesValidationFactory();

    public static getInstance(): StylesValidationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StylesValidationFactory.instance;
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance(hashMap: HashMap<any, any>): BasicArrayList{

    var stylesDocument: Document = hashMap!.get(NameSpaceRequestParamData.DOCUMENT) as Document;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StylesValidationFactory.getInstance()!.getInstance(stylesDocument);;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(document: Document): BasicArrayList{

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var nodeList: NodeList = document.getElementsByTagName(StylesData.getInstance()!.NAME)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Style Present: " +DomDocumentHelper.toString(document), this, commonStrings!.GET_INSTANCE);
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Styles Present: " +nodeList!.getLength(), this, commonStrings!.GET_INSTANCE);
    

                                    }
                                




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var stylesNode: Node = nodeList!.item(index)!;;
    

    var styleNodeList: BasicArrayList = DomSearchHelper.getAllNodes(StyleData.getInstance()!.NAME, stylesNode!.getChildNodes())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Number Of Style Nodes Present: " +styleNodeList!.size(), this, commonStrings!.GET_INSTANCE);
    

                                    }
                                




                        for (
    var styleNodesIndex: number = 0;styleNodesIndex < styleNodeList!.size(); styleNodesIndex++)
        {

    var styleNode: Node = styleNodeList!.get(styleNodesIndex) as Node;;
    

    var cssElementStyleNodeList: BasicArrayList = DomSearchHelper.getAllNodes(CssElementData.getInstance()!.NAME, styleNode!.getChildNodes())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Number Of Element Nodes Present: " +cssElementStyleNodeList!.size(), this, commonStrings!.GET_INSTANCE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CssElementsValidationFactory.getInstance(cssElementStyleNodeList);;
    
}

}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("No Style Present", this, commonStrings!.GET_INSTANCE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicArrayListD();
    
}


}



