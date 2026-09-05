
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
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { MimeMessage } from '../../../../../javax/mail/internet/MimeMessage.js';
//not GWT import const MimeMessage = globalThis.javax.mail.internet.MimeMessage;

      
import { BasicEmailInfo } from '../../../../../org/allbinary/logic/communication/smtp/info/BasicEmailInfo.js';
//not GWT import const BasicEmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.BasicEmailInfo;

      
import { EmailInfo } from '../../../../../org/allbinary/logic/communication/smtp/info/EmailInfo.js';
//not GWT import const EmailInfo = globalThis.org.allbinary.logic.communication.smtp.info.EmailInfo;

      
import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmailInterface } from './EmailInterface.js';
//not GWT import - same folder const EmailInterface = globalThis.org.allbinary.logic.communication.smtp.EmailInterface;

                import { AbEmail } from './AbEmail.js';
//not GWT import - same folder const AbEmail = globalThis.org.allbinary.logic.communication.smtp.AbEmail;

                import { Email } from './Email.js';
//not GWT import - same folder const Email = globalThis.org.allbinary.logic.communication.smtp.Email;

                
export class BasicEmail
            extends Object
         implements EmailInterface {
        

    private email: AbEmail;

public constructor (emailInfo: EmailInfo, to: string){

            super();
        
    var basicEmailInfo: BasicEmailInfo = emailInfo!.getBasicEmailInfo()!;;
    
this.email= new AbEmail(basicEmailInfo!.getEmailServerConfigurationInterface()!.getSmtpServer(), basicEmailInfo!.getEmailServerConfigurationInterface()!.getAccountName(), to, basicEmailInfo!.getSubject(), basicEmailInfo!.getTextBody(), emailInfo!.getHtmlAttachment(), emailInfo!.getContentBase());
    
}


    public getEmail(): Email{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.getEmail() as Email;
    
}


    public getMimeMessage(): MimeMessage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.getMimeMessage();;
    
}


    public getDebugInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.getDebugInfo();;
    
}


                //@Throws(Exception.constructor)
            
    public log(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.log();;
    
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.toHashMap();;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.toXmlNode(document);;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.toXmlDoc();;
    
}


}



