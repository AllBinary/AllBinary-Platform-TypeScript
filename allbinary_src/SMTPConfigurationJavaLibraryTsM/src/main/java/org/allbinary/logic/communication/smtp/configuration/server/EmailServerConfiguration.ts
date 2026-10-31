
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmailServerConfigurationInterface } from './EmailServerConfigurationInterface.js';
//sameFolderImports - not GWT import - same folder const EmailServerConfigurationInterface
import { EmailServerConfigurationData } from './EmailServerConfigurationData.js';
//sameFolderImports - not GWT import - same folder const EmailServerConfigurationData

export class EmailServerConfiguration
            extends Object
         implements EmailServerConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private accountName: string;

    private password: string;

    private smtpServer: string;

    public constructor(...args: any[]) {
        super();if(args.length === 0) {
            
            this.constructor$0();
            
        }
        else if(args.length === 1) {
            
            this.constructor$1(args[0]);
            
        }
        else if(args.length === 3) {
            
            this.constructor$2(args[0], args[1], args[2]);
            
        }
        
    }
    
    private constructor$0(): void {
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.setSmtpServer(StringUtil.getInstance()!.EMPTY_STRING);
    

    }
    
    private constructor$1(hashMap: HashMap<any, any>): void {
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.START, this, "EmailServerConfiguration(HashMap)");
    

                                    }
                                
this.setAccountName(hashMap!.get(EmailServerConfigurationData.ACCOUNT) as string);
    
this.setPassword(hashMap!.get(EmailServerConfigurationData.PASSWORD) as string);
    
this.setSmtpServer(hashMap!.get(EmailServerConfigurationData.SERVER) as string);
    
this.log();
    

    }
    
    private constructor$2(account: string, password: string, server: string): void {
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.START, this, "EmailServerConfiguration(HashMap)");
    

                                    }
                                
this.setAccountName(account);
    
this.setPassword(password);
    
this.setSmtpServer(server);
    
this.log();
    

    }
    
    public setSmtpServer(value: string){
this.smtpServer= value;
    
}


    public getSmtpServer(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.smtpServer;
    
}


    public getAccountName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.accountName;
    
}


    public setAccountName(accountName: string){
this.accountName= accountName;
    
}


    public getPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.password;
    
}


    public setPassword(password: string){
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

