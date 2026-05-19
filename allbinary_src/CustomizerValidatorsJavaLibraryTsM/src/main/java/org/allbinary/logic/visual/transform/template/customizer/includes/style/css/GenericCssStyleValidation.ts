
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
        



            import { Object } from '../../../../../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../../java/util/HashMap.js';
      
import { DomNodeInterface } from '../../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      
import { ModDomHelper } from '../../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      
import { LogUtil } from '../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { Validation } from '../../../../../../../../../../org/allbinary/logic/control/validate/Validation.js';
      
import { StringMaker } from '../../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../../../../../../../org/allbinary/logic/string/StringUtil.js';
      
import { StylesData } from '../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/StylesData.js';
      
import { BodyData } from '../../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/bodies/BodyData.js';
      
import { Document } from '../../../../../../../../../../org/w3c/dom/Document.js';
      
import { Node } from '../../../../../../../../../../org/w3c/dom/Node.js';
      
import { NodeList } from '../../../../../../../../../../org/w3c/dom/NodeList.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GenericCssStyleValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
public constructor (){

            super();
        }

public constructor (document: Document){

            super();
        
    var nodeList: NodeList = document.getElementsByTagName(StylesData.getInstance()!.NAME)!;
;
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
        this.getFormData(hashMap);
    
}


                //@Throws(Exception.constructor)
            
    public getFormData(hashMap: HashMap<any, any>){
}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.IS_VALID);
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("End: " +isValid, this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    

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



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = ModDomHelper.createNameValueNodes(document, BodyData.getInstance()!.NAME, StringUtil.getInstance()!.EMPTY_STRING)!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

