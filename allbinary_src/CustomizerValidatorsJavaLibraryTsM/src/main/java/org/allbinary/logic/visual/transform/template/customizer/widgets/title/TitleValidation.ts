
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

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationInterface } from "../../../../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TitleView } from "./TitleView.js";

import { TitleData } from "./TitleData.js";

export class TitleValidation extends TitleView implements ValidationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (node: Node){
            super(node);
                    var node = node


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (hashMap: HashMap<any, any>){
            super(hashMap);
                    var hashMap = hashMap


                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TitleValidation", this, commonStrings!.IS_VALID);
    

                                    }
                                

    var valid: Boolean = Boolean.TRUE;
        
        
;
    

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.getTitle(), 1, TitleData.getInstance()!.MAXLEN);)
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TitleValidation: " +valid, this, commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
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
    
stringBuffer!.append("Title is not valid.");
    



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


}
                
            

