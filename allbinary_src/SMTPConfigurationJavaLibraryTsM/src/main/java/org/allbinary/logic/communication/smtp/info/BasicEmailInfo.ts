
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { EmailServerConfigurationInterface } from "../../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationInterface.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class BasicEmailInfo
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private subject: string

    private textBody: string

    emailServerConfigurationInterface: EmailServerConfigurationInterface
public constructor (subject: string, textBody: string){

            super();
            var subject = subject
var textBody = textBody

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

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
                        return emailServerConfigurationInterface;
    
}


    public setEmailServerConfigurationInterface(emailServerConfigurationInterface: EmailServerConfigurationInterface){
var emailServerConfigurationInterface = emailServerConfigurationInterface
this.emailServerConfigurationInterface= emailServerConfigurationInterface;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.getEmailServerConfigurationInterface()!.toString());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append("Subject: \n");
    
stringBuffer!.append(this.getSubject());
    
stringBuffer!.append("\nText Body: \n");
    
stringBuffer!.append(this.getTextBody());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


                //@Throws(Error::class)
            
    init(){



                            throw RuntimeException()
}


}
                
            

