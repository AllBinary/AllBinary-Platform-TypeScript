
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
        



            import Vector from "@ohos.util.Vector";
        
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Random } from "../../../../../java/util/Random.js";

    

//import { Vector } from "../../../../../java/util/Vector.js";

    
import { EntryData } from "../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserData } from "../../../../../org/allbinary/business/user/UserData.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SuperCrypt } from "../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class Password
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private password: string
public constructor (password: string){

            super();
            var password = password
this.password= password;
    
}


    public set(value: string){
var value = value
this.password= value;
    
}


    public get(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.password;
    
}


    public isValid(): Boolean{

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

        try {
            
    var valid: Boolean = Boolean.TRUE;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VALIDATION))
                        
                                    {
                                    logUtil!.put("Password: " +this.password, this, commonStrings!.IS_VALID);
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.password, 6, UserData.MAXLEN);

                        )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VALIDATION))
                        
                                    {
                                    logUtil!.put("Password is invalid", this, commonStrings!.IS_VALID);
    

                                    }
                                
valid= Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VALIDATIONERROR))
                        
                                    {
                                    logUtil!.put("Failed to validate form", "Password", commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public getValidationInfo(): string{

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.password, 6, UserData.MAXLEN);

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Please enter a Password with more than 6 characters.<br />";
    

                                    }
                                

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringUtil!.EMPTY_STRING;
    
}


    public toVector(secret: string): Vector{
var secret = secret
this.password= StringUtil.getInstance()!.getInstance(this.password);
    

    var random: number = Random().
                            nextInt(SuperCrypt.KEYMAX)!;
        
        
;
    

    var vector: Vector = new Vector();
        
        
;
    
vector.add(Integer(random).
                            toString());
    
vector.add(secret);
    
vector.add(SuperCrypt(random).
                            encrypt(password));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toHashMap(secret: string): HashMap<any, any>{
var secret = secret
this.password= StringUtil.getInstance()!.getInstance(this.password);
    

    var values: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var random: number = Random().
                            nextInt(SuperCrypt.KEYMAX)!;
        
        
;
    
values.put(EntryData.getInstance()!.ENCRYPTION, Integer(random).
                            toString());
    
values.put(UserData.SECRET, secret);
    
values.put(UserData.PASSWORD, SuperCrypt(random).
                            encrypt(this.password));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


}
                
            

