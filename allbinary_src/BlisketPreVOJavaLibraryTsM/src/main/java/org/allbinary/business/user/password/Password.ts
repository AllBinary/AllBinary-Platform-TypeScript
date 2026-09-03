
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Random } from '../../../../../java/util/Random.js';
      //not GWT import const Random = globalThis.java.util.Random;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { EntryData } from '../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { UserData } from '../../../../../org/allbinary/business/user/UserData.js';
      //not GWT import const UserData = globalThis.org.allbinary.business.user.UserData;

      
//not plain js import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { SuperCrypt } from '../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js';
      //not GWT import const SuperCrypt = globalThis.org.allbinary.logic.control.crypt.SuperCrypt;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Password
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private password: string;

public constructor (password: string){

            super();
        this.password= password;
    
}


    public set(value: string){
this.password= value;
    
}


    public get(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.password;
    
}


    public isValid(): Boolean{

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

        try {
            
    var valid: Boolean = Boolean.TRUE;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VALIDATION))
                        
                                    {
                                    this.logUtil!.putF("Password: " +this.password, this, commonStrings!.IS_VALID);
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.password, 6, UserData.MAXLEN))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VALIDATION))
                        
                                    {
                                    this.logUtil!.putF("Password is invalid", this, commonStrings!.IS_VALID);
    

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
                                    this.logUtil!.put("Failed to validate form", "Password", commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public getValidationInfo(): string{

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.password, 6, UserData.MAXLEN))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Please enter a Password with more than 6 characters.<br />";
    

                                    }
                                

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringUtil!.EMPTY_STRING;
    
}


    public toVector(secret: string): BasicArrayList{
this.password= StringUtil.getInstance()!.getNonNull(this.password);
    

    var random: number = new Random().nextInt(SuperCrypt.KEYMAX)!;;
    

    var vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(new Integer(random).toString());
    
vector.add(secret);
    
vector.add(new SuperCrypt(random).encrypt(this.password));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toHashMap(secret: string): HashMap<any, any>{
this.password= StringUtil.getInstance()!.getNonNull(this.password);
    

    var values: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    var random: number = new Random().nextInt(SuperCrypt.KEYMAX)!;;
    
values.put(EntryData.getInstance()!.ENCRYPTION, new Integer(random).toString());
    
values.put(UserData.SECRET, secret);
    
values.put(UserData.PASSWORD, new SuperCrypt(random).encrypt(this.password));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


}



