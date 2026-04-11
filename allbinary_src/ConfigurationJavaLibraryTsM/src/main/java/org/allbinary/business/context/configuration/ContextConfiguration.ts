
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

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { EmailServerConfiguration } from "../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfiguration.js";

    
import { EmailServerConfigurationInterface } from "../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class ContextConfiguration
            extends Object
        
                , ContextConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private emailServerConfigurationInterface: EmailServerConfigurationInterface
public constructor (){

            super();
            logUtil!.put(commonStrings!.START, this, "ContextConfiguration");
    
this.setEmailServerConfigurationInterface(EmailServerConfiguration() as EmailServerConfigurationInterface);
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
            var hashMap = hashMap
logUtil!.put(commonStrings!.START, this, "ContextConfiguration(HashMap)");
    
this.setEmailServerConfigurationInterface(EmailServerConfiguration(hashMap) as EmailServerConfigurationInterface);
    
}


    public getEmailServerConfigurationInterface(): EmailServerConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emailServerConfigurationInterface;
    
}


    public setEmailServerConfigurationInterface(emailServerConfigurationInterface: EmailServerConfigurationInterface){
var emailServerConfigurationInterface = emailServerConfigurationInterface
this.emailServerConfigurationInterface= emailServerConfigurationInterface;
    
}


}
                
            

