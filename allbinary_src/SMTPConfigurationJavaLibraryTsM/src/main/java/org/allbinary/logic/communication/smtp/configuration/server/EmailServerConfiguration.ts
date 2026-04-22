
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { EmailServerConfigurationInterface } from "./EmailServerConfigurationInterface.js";

import { EmailServerConfigurationData } from "./EmailServerConfigurationData.js";

export class EmailServerConfiguration
            extends Object
         implements EmailServerConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private accountName: string

    private password: string

    private smtpServer: string
public constructor (){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.setSmtpServer(StringUtil.getInstance()!.EMPTY_STRING);
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
        var hashMap = hashMap

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, "EmailServerConfiguration(HashMap)");
    

                                    }
                                
this.setAccountName(hashMap!.get(EmailServerConfigurationData.ACCOUNT);

                         as String);
    
this.setPassword(hashMap!.get(EmailServerConfigurationData.PASSWORD);

                         as String);
    
this.setSmtpServer(hashMap!.get(EmailServerConfigurationData.SERVER);

                         as String);
    
this.log();
    
}

public constructor (account: string, password: string, server: string){

            super();
        var account = account
var password = password
var server = server

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, "EmailServerConfiguration(HashMap)");
    

                                    }
                                
this.setAccountName(account);
    
this.setPassword(password);
    
this.setSmtpServer(server);
    
this.log();
    
}


    public setSmtpServer(value: string){
var value = value
this.smtpServer= value;
    
}


    public getSmtpServer(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.smtpServer;
    
}


    public getAccountName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return accountName;
    
}


    public setAccountName(accountName: string){
var accountName = accountName
this.accountName= accountName;
    
}


    public getPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return password;
    
}


    public setPassword(password: string){
var password = password
this.password= password;
    
}


    public log(){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.toString(), this, "EmailServerConfiguration");
    

                                    }
                                
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Email Server Configuration:\n" +"Smtp Server: \n" +this.getSmtpServer() +"\nAccount Name: " +this.getAccountName() +"\nPassword: " +this.getPassword();
    
}


}
                
            

