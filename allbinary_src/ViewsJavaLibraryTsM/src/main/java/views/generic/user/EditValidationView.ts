
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
        



import { UserName } from "../../../org/allbinary/business/user/username/UserName.js";

    
import { UserEntityFactory } from "../../../org/allbinary/data/tables/user/UserEntityFactory.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { UserView } from "./UserView.js";

export class EditValidationView extends UserView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{

        try {
            
                        if(UserName.getInstance()!.isValid(this.getWeblisketSession()!.getUserName()) == Boolean.FALSE)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Failed to validate username", this, commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
this.user= UserEntityFactory.getInstance()!.getUser(this.getWeblisketSession()!.getUserName());
    

                        if(this.user == 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("User does not exist", this, commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.user.isValid() == Boolean.FALSE)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("User exists but is invalid - Probably manually modified", this, commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(UserName.getInstance()!.isValid(this.getWeblisketSession()!.getUserName()) == Boolean.FALSE)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Failed to validate username", this, "validationInfo()");
    

                                    }
                                
stringBuffer!.append("Session User Name is not valid - Your session data has been logged!");
    

                                    }
                                

                        if(this.user == 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("User does not exist", this, commonStrings!.IS_VALID);
    

                                    }
                                
stringBuffer!.append("User profile does not exist - Your session data has been logged!");
    

                                    }
                                

                        if(this.user.isValid() == Boolean.FALSE)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("User exists but is invalid - Probably manually modified", this, commonStrings!.IS_VALID);
    

                                    }
                                
stringBuffer!.append(this.user.validationInfo());
    

                                    }
                                



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
                        return "Error Getting Validation Info";
    
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
                
            

