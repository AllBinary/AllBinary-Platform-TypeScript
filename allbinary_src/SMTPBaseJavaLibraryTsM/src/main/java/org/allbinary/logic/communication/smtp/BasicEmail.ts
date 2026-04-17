
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

    
import { MimeMessage } from "../../../../../javax/mail/internet/MimeMessage.js";

    
import { BasicEmailInfo } from "../../../../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js";

    
import { EmailInfo } from "../../../../../org/allbinary/logic/communication/smtp/info/EmailInfo.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Email } from "./Email.js";

export class BasicEmail
            extends Object
         implements EmailInterface {
        

    private email: AbEmail
public constructor (emailInfo: EmailInfo, to: string){

            super();
            var emailInfo = emailInfo
var to = to

    var basicEmailInfo: BasicEmailInfo = emailInfo!.getBasicEmailInfo()!;
        
        
;
    
this.email= new AbEmail(basicEmailInfo!.getEmailServerConfigurationInterface()!.getSmtpServer(), basicEmailInfo!.getEmailServerConfigurationInterface()!.getAccountName(), to, basicEmailInfo!.getSubject(), basicEmailInfo!.getTextBody(), emailInfo!.getHtmlAttachment(), emailInfo!.getContentBase());
    
}


    public getEmail(): Email{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.getEmail();

                         as Email;
    
}


    public getMimeMessage(): MimeMessage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.getMimeMessage();

                        ;
    
}


    public getDebugInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.getDebugInfo();

                        ;
    
}


                //@Throws(Error::class)
            
    public log(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.log();

                        ;
    
}


                //@Throws(Error::class)
            
    public toHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.toHashMap();

                        ;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.toXmlNode(document);

                        ;
    
}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.toXmlDoc();

                        ;
    
}


}
                
            

