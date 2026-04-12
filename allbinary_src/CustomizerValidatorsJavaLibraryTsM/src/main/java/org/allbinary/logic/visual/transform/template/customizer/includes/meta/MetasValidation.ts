
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
                *  II
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../../../../../java/util/Vector.js";

    
import { StoreFrontFactory } from "../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { DomNodeInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Validation } from "../../../../../../../../../org/allbinary/logic/control/validate/Validation.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { HtmlMetaAttributeDataFactory } from "../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetaAttributeDataFactory.js";

    
import { HtmlMetaAttributeValuesData } from "../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetaAttributeValuesData.js";

    
import { HtmlMetasData } from "../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetasData.js";

    
import { CommonStrings } from "../../../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    

export class MetasValidation extends Validation
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private storeFrontInterface: StoreFrontInterface

    private metaValidationVector: Vector
public constructor (storeName: string){

            super();
            var storeName = storeName
this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    
this.metaValidationVector= new Vector();
    

    var contentValue: string = this.storeFrontInterface!.getName() +" E-Commerce Site";
        
        
;
    

    var keywordsMetaValidation: MetaValidation = new MetaValidation(HtmlMetaAttributeDataFactory.getInstance()!.NAME, "Keywords", HtmlMetaAttributeValuesData.getInstance()!.KEYWORDS, contentValue);
        
        
;
    

    var abstractMetaValidation: MetaValidation = new MetaValidation(HtmlMetaAttributeDataFactory.getInstance()!.NAME, "Abstract", HtmlMetaAttributeValuesData.getInstance()!.ABSTRACT, contentValue);
        
        
;
    

    var descriptionMetaValidation: MetaValidation = new MetaValidation(HtmlMetaAttributeDataFactory.getInstance()!.NAME, "Description", HtmlMetaAttributeValuesData.getInstance()!.DESCRIPTION, contentValue);
        
        
;
    
this.metaValidationVector!.add(keywordsMetaValidation);
    
this.metaValidationVector!.add(abstractMetaValidation);
    
this.metaValidationVector!.add(descriptionMetaValidation);
    
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


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(HtmlMetasData.getInstance()!.NAME)!;
        
        
;
    

    var metaArray: MetaValidation[] = this.metaValidationVector!.toArray([]);

                         as Array<MetaValidation?>;
        
        
;
    

    var size: number = metaArray!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var metaValidation: MetaValidation = metaArray[i]!;
        
        
;
    
node.appendChild(metaValidation!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

