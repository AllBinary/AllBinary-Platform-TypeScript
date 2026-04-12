
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
        



import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { DomNodeInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Validation } from "../../../../../../../../../org/allbinary/logic/control/validate/Validation.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { LogoData } from "../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/logo/LogoData.js";

    
import { LogoValidation } from "../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/logo/LogoValidation.js";

    
import { TitleData } from "../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js";

    
import { TitleValidation } from "../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleValidation.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../../org/w3c/dom/NodeList.js";

    

export class HeadingValidation extends Validation
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private title: TitleValidation

    private logo: LogoValidation
public constructor (){

            super();
            this.title= new TitleValidation();
    
this.logo= new LogoValidation();
    
}

public constructor (document: Document){

            super();
            var document = document

    var headingNodeList: NodeList = document.getElementsByTagName(HeadingData.NAME)!;
        
        
;
    

    var titleNode: Node = DomSearchHelper.getNode(TitleData.getInstance()!.NAME, headingNodeList!.item(0)!.getChildNodes())!;
        
        
;
    

    var logoNode: Node = DomSearchHelper.getNode(LogoData.getInstance()!.NAME, headingNodeList!.item(0)!.getChildNodes())!;
        
        
;
    
this.title= new TitleValidation(titleNode);
    
this.logo= new LogoValidation(logoNode);
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
            var hashMap = hashMap
this.getFormData(hashMap);
    
}


                //@Throws(Error::class)
            
    public getFormData(hashMap: HashMap<any, any>){
var hashMap = hashMap
this.title= new TitleValidation(hashMap);
    
this.logo= new LogoValidation(hashMap);
    
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;
        
        
;
    

    var titleValid: Boolean = Boolean.TRUE;
        
        
;
    

    var logoValid: Boolean = Boolean.TRUE;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, commonStrings!.IS_VALID);
    

                                    }
                                

                        if(!this.title.isValid();

                        )
                        
                                    {
                                    titleValid= Boolean.FALSE;
    

                                    }
                                

                        if(!this.logo.isValid();

                        )
                        
                                    {
                                    logoValid= Boolean.FALSE;
    

                                    }
                                
                        else {
                            this.logo.processLogoFile();
    

                        }
                            

                        if(!titleValid;

                         && !logoValid;

                        )
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("HeadingValidation: " +valid, this, commonStrings!.IS_VALID);
    

                                    }
                                



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
            
    var valid: Boolean = Boolean.TRUE;
        
        
;
    

    var titleValid: Boolean = Boolean.TRUE;
        
        
;
    

    var logoValid: Boolean = Boolean.TRUE;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(!this.title.isValid();

                        )
                        
                                    {
                                    titleValid= Boolean.FALSE;
    

                                    }
                                

                        if(!this.logo.isValid();

                        )
                        
                                    {
                                    logoValid= Boolean.FALSE;
    

                                    }
                                

                        if(!titleValid;

                         && !logoValid;

                        )
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!valid;

                        )
                        
                                    {
                                    stringBuffer!.append("Include a title and/or logo for the header.");
    

                                    }
                                



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

    var node: Node = document.createElement(HeadingData.NAME)!;
        
        
;
    
node.appendChild(this.logo.toXmlNode(document));
    
node.appendChild(this.title.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

