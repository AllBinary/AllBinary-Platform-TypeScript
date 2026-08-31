
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
                *  III
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { DomNodeInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { Validation } from '../../../../../../../../../org/allbinary/logic/control/validate/Validation.js';
      //not GWT import const Validation = globalThis.org.allbinary.logic.control.validate.Validation;

      
//not plain js import { StringMaker } from '../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { HtmlMetaAttributeData } from '../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetaAttributeData.js';
      //not GWT import const HtmlMetaAttributeData = globalThis.org.allbinary.logic.visual.dhtml.html.head.meta.HtmlMetaAttributeData;

      
import { HtmlMetaAttributeDataFactory } from '../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetaAttributeDataFactory.js';
      //not GWT import const HtmlMetaAttributeDataFactory = globalThis.org.allbinary.logic.visual.dhtml.html.head.meta.HtmlMetaAttributeDataFactory;

      
import { HtmlMetaData } from '../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetaData.js';
      //not GWT import const HtmlMetaData = globalThis.org.allbinary.logic.visual.dhtml.html.head.meta.HtmlMetaData;

      
//not plain js import { CommonStrings } from '../../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MetaValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private label: string;

    private name: string;

    private httpEquiv: string;

    private content: string;

public constructor (htmlMetaAttributeData: HtmlMetaAttributeData, label: string, attributeValue: string, contentValue: string){

            super();
        this.label= label;
    

                        if(htmlMetaAttributeData! === HtmlMetaAttributeDataFactory.getInstance()!.HTTP_EQUIV)
                        
                                    {
                                    this.httpEquiv= attributeValue;
    

                                    }
                                
                             else 
                        if(htmlMetaAttributeData! === HtmlMetaAttributeDataFactory.getInstance()!.NAME)
                        
                                    {
                                    this.name= attributeValue;
    

                                    }
                                
this.content= contentValue;
    
}


public constructor (document: Document){

            super();
        


                            throw new Exception(CommonStrings.getInstance()!.NOT_IMPLEMENTED);
                    
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var htmlMetaAttributeDataFactory: HtmlMetaAttributeDataFactory = HtmlMetaAttributeDataFactory.getInstance()!;;
    
hashMap!.put(HtmlMetaData.getInstance()!.LABEL.toString(), this.label);
    
hashMap!.put(htmlMetaAttributeDataFactory!.NAME.toString(), this.name);
    
hashMap!.put(htmlMetaAttributeDataFactory!.HTTP_EQUIV.toString(), this.httpEquiv);
    
hashMap!.put(htmlMetaAttributeDataFactory!.CONTENT.toString(), this.content);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = ModDomHelper.createNameValueNodes(document, HtmlMetaData.getInstance()!.NAME.toString(), this.toHashMap())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



