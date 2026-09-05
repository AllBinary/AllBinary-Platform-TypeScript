
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
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { EmailServerConfiguration } from '../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfiguration.js';
//not GWT import const EmailServerConfiguration = globalThis.org.allbinary.logic.communication.smtp.configuration.server.EmailServerConfiguration;

      
import { EmailServerConfigurationInterface } from '../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationInterface.js';
//not GWT import const EmailServerConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.server.EmailServerConfigurationInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ContextConfigurationInterface } from './ContextConfigurationInterface.js';
//not GWT import - same folder const ContextConfigurationInterface = globalThis.org.allbinary.business.context.configuration.ContextConfigurationInterface;

                
export class ContextConfiguration
            extends Object
         implements ContextConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private emailServerConfigurationInterface: EmailServerConfigurationInterface;

public constructor (){

            super();
        this.logUtil!.putF(this.commonStrings!.START, this, "ContextConfiguration");
    
this.setEmailServerConfigurationInterface(new EmailServerConfiguration() as EmailServerConfigurationInterface);
    
}


public constructor (hashMap: HashMap<any, any>){

            super();
        this.logUtil!.putF(this.commonStrings!.START, this, "ContextConfiguration(HashMap)");
    
this.setEmailServerConfigurationInterface(new EmailServerConfiguration(hashMap) as EmailServerConfigurationInterface);
    
}


    public getEmailServerConfigurationInterface(): EmailServerConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.emailServerConfigurationInterface;
    
}


    public setEmailServerConfigurationInterface(emailServerConfigurationInterface: EmailServerConfigurationInterface){
this.emailServerConfigurationInterface= emailServerConfigurationInterface;
    
}


}



