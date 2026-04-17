
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
        



import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { DomNodeInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Validation } from "../../../../../../../../../org/allbinary/logic/control/validate/Validation.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { HtmlMetaAttributeData } from "../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetaAttributeData.js";

    
import { HtmlMetaAttributeDataFactory } from "../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetaAttributeDataFactory.js";

    
import { HtmlMetaData } from "../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetaData.js";

    
import { CommonStrings } from "../../../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MetaValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private label: string

    private name: string

    private httpEquiv: string

    private content: string
public constructor (htmlMetaAttributeData: HtmlMetaAttributeData, label: string, attributeValue: string, contentValue: string){

            super();
            var htmlMetaAttributeData = htmlMetaAttributeData
var label = label
var attributeValue = attributeValue
var contentValue = contentValue
this.label= label;
    

                        if(htmlMetaAttributeData!.equals(HtmlMetaAttributeDataFactory.getInstance()!.HTTP_EQUIV))
                        
                                    {
                                    this.httpEquiv= attributeValue;
    

                                    }
                                
                             else 
                        if(htmlMetaAttributeData!.equals(HtmlMetaAttributeDataFactory.getInstance()!.NAME))
                        
                                    {
                                    this.name= attributeValue;
    

                                    }
                                
this.content= contentValue;
    
}

public constructor (document: Document){

            super();
            var document = document



                            throw new Error(CommonStrings.getInstance()!.NOT_IMPLEMENTED)
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

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
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var htmlMetaAttributeDataFactory: HtmlMetaAttributeDataFactory = HtmlMetaAttributeDataFactory.getInstance()!;
        
        
;
    
hashMap!.put(HtmlMetaData.getInstance()!.LABEL.toString(), this.label);
    
hashMap!.put(htmlMetaAttributeDataFactory!.NAME.toString(), this.name);
    
hashMap!.put(htmlMetaAttributeDataFactory!.HTTP_EQUIV.toString(), this.httpEquiv);
    
hashMap!.put(htmlMetaAttributeDataFactory!.CONTENT.toString(), this.content);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = ModDomHelper.createNameValueNodes(document, HtmlMetaData.getInstance()!.NAME.toString(), this.toHashMap())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

