
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { UserData } from "../../../../../org/allbinary/business/user/UserData.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UserName
            extends Object
         {
        

    private static readonly instance: UserName = new UserName();
        
        

    public static getInstance(): UserName{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public static getValidationInfo(aUserName: string): string{
var aUserName = aUserName

                        if(!StringValidationUtil.getInstance()!.isValidRequired(aUserName, 5, UserData.MAXLEN);

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Please enter a User Name with more than 5 characters.<br/>";
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private userName: string
private constructor (){

            super();
        }

public constructor (hashMap: HashMap<any, any>){

            super();
        var hashMap = hashMap
this.userName= hashMap!.get(UserData.USERNAME);

                         as String;
    
}


    public isValid(): Boolean{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isValid(this.userName);

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, "isUserNameValid()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public get(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName;
    
}


    public isValid(aUserName: string): Boolean{
var aUserName = aUserName

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

        try {
            
    var booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;
        
        
;
    

    var valid: Boolean = booleanFactory!.TRUE;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VALIDATION))
                        
                                    {
                                    this.logUtil!.putF("UserName: " +aUserName, this, commonStrings!.IS_VALID);
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(aUserName, 5, UserData.MAXLEN);

                        )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VALIDATION))
                        
                                    {
                                    this.logUtil!.putF("UserName is invalid", this, commonStrings!.IS_VALID);
    

                                    }
                                
valid= booleanFactory!.FALSE;
    

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


}
                
            

