
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
        
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { EmailServerConfigurationInterface } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationInterface.js';
      //not GWT import const EmailServerConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.server.EmailServerConfigurationInterface;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicEmailInfo
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private subject: string;

    private textBody: string;

    emailServerConfigurationInterface: EmailServerConfigurationInterface;

public constructor (subject: string, textBody: string){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.subject= subject;
    
this.textBody= textBody;
    
}


    public getSubject(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.subject;
    
}


    public getTextBody(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.textBody;
    
}


    public getEmailServerConfigurationInterface(): EmailServerConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.emailServerConfigurationInterface;
    
}


    public setEmailServerConfigurationInterface(emailServerConfigurationInterface: EmailServerConfigurationInterface){
this.emailServerConfigurationInterface= emailServerConfigurationInterface;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.getEmailServerConfigurationInterface()!.toString());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append("Subject: \n");
    
stringBuffer!.append(this.getSubject());
    
stringBuffer!.append("\nText Body: \n");
    
stringBuffer!.append(this.getTextBody());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


                //@Throws(Exception.constructor)
            
    init(){



                            throw new RuntimeException();
                    
}


}



