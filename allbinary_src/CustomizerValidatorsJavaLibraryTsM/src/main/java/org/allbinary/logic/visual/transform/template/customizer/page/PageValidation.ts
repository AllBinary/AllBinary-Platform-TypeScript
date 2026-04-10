
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { PageData } from "../../../../../../../../org/allbinary/business/page/PageData.js";

    
import { DomNodeInterface } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Validation } from "../../../../../../../../org/allbinary/logic/control/validate/Validation.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { TitleData } from "../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js";

    
import { TitleValidation } from "../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleValidation.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    

export class PageValidation extends Validation
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private title: TitleValidation
public constructor (){

            super();
            this.title= TitleValidation()
}

public constructor (document: Document){

            super();
            var document = document

    var node: Node = DomSearchHelper.getNode(TitleData.getInstance()!.NAME, document.getElementsByTagName(PageData.getInstance()!.NAME))!;
        
        

this.title= TitleValidation(node)
}

public constructor (hashMap: HashMap<Any, Any>){

            super();
            var hashMap = hashMap
this.getFormData(hashMap)
}


    public getFormData(hashMap: HashMap<Any, Any>){
var hashMap = hashMap
this.title= TitleValidation(hashMap)
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("PageValidation", this, commonStrings!.IS_VALID)

                                    }
                                

                        if(!this.title.isValid())
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("PageValidation: " +valid, this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put("Failed to validate form", this, commonStrings!.IS_VALID, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        


                        if(!this.title.isValid())
                        
                                    {
                                    stringBuffer!.append(this.title.validationInfo())

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e)

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

    var node: Node = document.createElement(PageData.getInstance()!.NAME)!;
        
        

node.appendChild(this.title.toXmlNode(document))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

