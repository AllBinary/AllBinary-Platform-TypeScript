
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 leIIgal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { DomData } from "../../../../../../../../../org/allbinary/data/tree/dom/DomData.js";

    
import { DomNodeHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomNodeInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlData } from "../../../../../../../../../org/allbinary/logic/communication/sql/AbSqlData.js";

    
import { Validation } from "../../../../../../../../../org/allbinary/logic/control/validate/Validation.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { BodyData } from "../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/bodies/BodyData.js";

    
import { TitleData } from "../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js";

    
import { TitleNotRequiredValidation } from "../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleNotRequiredValidation.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../../org/w3c/dom/NodeList.js";

    

export class TitleBodyValidation extends Validation
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private body: string

    private titleValidation: TitleNotRequiredValidation
public constructor (){

            super();
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

this.body= stringUtil!.EMPTY_STRING
this.titleValidation= TitleNotRequiredValidation()
}

public constructor (document: Document){

            super();
            var document = document

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put(this.commonStrings!.CONSTRUCTOR, this, "Constructor(document)")

                                    }
                                

    var nodeList: NodeList = document.getElementsByTagName(BodyData.getInstance()!.NAME)!;
        
        





                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var aBodyNode: Node = nodeList!.item(index)!;
        
        


    var aBodyValueNode: Node = DomSearchHelper.getNode(DomData.VALUE, aBodyNode!.getChildNodes())!;
        
        

this.body= DomNodeHelper.getTextNodeValue(aBodyValueNode)

    var titleNode: Node = DomSearchHelper.getNode(TitleData.getInstance()!.NAME, aBodyNode!.getChildNodes())!;
        
        

this.titleValidation= TitleNotRequiredValidation(titleNode)

    
                        if(index > 1)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("To Many Body Nodes", this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                

                                    }
                                
}

}

public constructor (hashMap: HashMap<Any, Any>){

            super();
            var hashMap = hashMap

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put(this.commonStrings!.START, this, "Constructor(hashmap)")

                                    }
                                
this.getFormData(hashMap)
}


                @Throws(Exception::class)
            
    public getFormData(hashMap: HashMap<Any, Any>){
var hashMap = hashMap
this.body= hashMap!.get(BodyData.getInstance()!.NAME) as String
this.titleValidation= TitleNotRequiredValidation(hashMap)
}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("TitleBodyValidation", this, commonStrings!.IS_VALID)

                                    }
                                

    
                        if(!StringValidationUtil.getInstance()!.isValidNotRequired(this.body, BodyData.getInstance()!.MIN, AbSqlData.MAXBLOB))
                        
                                    {
                                    isValid= Boolean.FALSE

                                    }
                                

    
                        if(!this.titleValidation!.isValid())
                        
                                    {
                                    isValid= Boolean.FALSE

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("TitleBodyValidation: " +isValid, this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put("Failed to validate form", this, commonStrings!.IS_VALID, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        



                            {
                            append("Error: Data submitted is < ")
appendint(BodyData.getInstance()!.MIN)
append(" or > ")
appendint(AbSqlData.MAXBLOB)

                            }
                    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    put("Failed to generate validation error info", this, "validationInfo()", e)

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


                @Throws(Exception::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("Title Body: " +this.body, this, "toXmlNode(document)")

                                    }
                                

    var node: Node = ModDomHelper.createNameValueNodes(document, BodyData.getInstance()!.NAME, this.body)!;
        
        

appendChild(this.titleValidation!.toXmlNode(document))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

