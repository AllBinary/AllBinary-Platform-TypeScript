
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
        



import { HashMap } from "../../../../../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../../../../../java/util/Vector.js";

    
import { DomNodeInterface } from "../../../../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Validation } from "../../../../../../../../../../../../org/allbinary/logic/control/validate/Validation.js";

    
import { ValidationInterface } from "../../../../../../../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    
import { StringMaker } from "../../../../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StyleData } from "../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/StyleData.js";

    
import { StylesData } from "../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/StylesData.js";

    
import { StylesValidationFactory } from "../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/StylesValidationFactory.js";

    
import { Document } from "../../../../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CssStyleValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    cssStyleElementVector: Vector
public constructor (){

            super();
        this.cssStyleElementVector= new Vector();
    
}

public constructor (document: Document){

            super();
        var document = document
this.cssStyleElementVector= StylesValidationFactory.getInstance()!.getInstance(document);
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
        var hashMap = hashMap
this.cssStyleElementVector= StylesValidationFactory.getInstance(hashMap);
    
}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, commonStrings!.IS_VALID);
    

                                    }
                                

    var size: number = this.cssStyleElementVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var styleValidationInterface: ValidationInterface = this.cssStyleElementVector!.get(i); as ValidationInterface;
        
        
;
    

                        if(!styleValidationInterface!.isValid();)
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("End: " +isValid, this, commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    

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
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
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

    var node: Node = document.createElement(StylesData.getInstance()!.NAME)!;
        
        
;
    

    var styleNode: Node = document.createElement(StyleData.getInstance()!.NAME)!;
        
        
;
    
node.appendChild(styleNode);
    

    var size: number = this.cssStyleElementVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var styleDomNodeInterface: DomNodeInterface = this.cssStyleElementVector!.get(i); as DomNodeInterface;
        
        
;
    
styleNode!.appendChild(styleDomNodeInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

