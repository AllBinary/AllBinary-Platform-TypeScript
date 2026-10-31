
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
//not GWT import const HashMap

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { EmailServerConfiguration } from '../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfiguration.js';
//not GWT import const EmailServerConfiguration

import { EmailServerConfigurationInterface } from '../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationInterface.js';
//not GWT import const EmailServerConfigurationInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ContextConfigurationInterface } from './ContextConfigurationInterface.js';
//sameFolderImports - not GWT import - same folder const ContextConfigurationInterface

export class ContextConfiguration
            extends Object
         implements ContextConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private emailServerConfigurationInterface: EmailServerConfigurationInterface;

    public constructor(...args: any[]) {
        super();
        if(args.length === 0) {
            this.constructor$0();
        }
        else if(args.length === 1) {
            this.constructor$1(args[0]);
        }
        
    }
    
    private constructor$0(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, "ContextConfiguration");
    
this.setEmailServerConfigurationInterface(new EmailServerConfiguration() as EmailServerConfigurationInterface);
    

    }
    
    private constructor$1(hashMap: HashMap<any, any>): void {
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

