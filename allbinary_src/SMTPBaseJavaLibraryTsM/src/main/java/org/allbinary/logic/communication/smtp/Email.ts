
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
        



import { ByteArrayOutputStream } from "../../../../../java/io/ByteArrayOutputStream.js";

    
import { PrintStream } from "../../../../../java/io/PrintStream.js";

    
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Properties } from "../../../../../java/util/Properties.js";

    
import { Address } from "../../../../../javax/mail/Address.js";

    
import { Authenticator } from "../../../../../javax/mail/Authenticator.js";

    
import { Message } from "../../../../../javax/mail/Message.js";

    
import { MessagingException } from "../../../../../javax/mail/MessagingException.js";

    
import { Session } from "../../../../../javax/mail/Session.js";

    
import { InternetAddress } from "../../../../../javax/mail/internet/InternetAddress.js";

    
import { InternetHeaders } from "../../../../../javax/mail/internet/InternetHeaders.js";

    
import { MimeBodyPart } from "../../../../../javax/mail/internet/MimeBodyPart.js";

    
import { MimeMessage } from "../../../../../javax/mail/internet/MimeMessage.js";

    
import { MimeMultipart } from "../../../../../javax/mail/internet/MimeMultipart.js";

    
import { ModDomHelper } from "../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { EmailInterface } from "./EmailInterface.js";

import { EmailData } from "./EmailData.js";

export class Email
            extends Object
         implements EmailInterface {
        

    private static readonly DEBUG: string = "mail.debug";
        
        

    private static readonly SMTP_HOST: string = "mail.smtp.host";
        
        

    private static readonly SMTP_PORT: string = "mail.smtp.port";
        
        

    private static readonly SMTP_USER: string = "mail.smtp.user";
        
        

    private static readonly SMTP_RETURN_ADDRESS: string = "mail.from";
        
        

    private static readonly SMTP_LOCAL_HOST: string = "mail.smtp.localhost";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private msg: MimeMessage

    private properties: Properties

    private bs: ByteArrayOutputStream

    private isDebug: boolean
public constructor (from: string, to: string, subject: string, server: string, textBody: string, htmlAttachment: string, contentBase: string){

            super();
        var from = from
var to = to
var subject = subject
var server = server
var textBody = textBody
var htmlAttachment = htmlAttachment
var contentBase = contentBase
this.isDebug= false;
    
init(from, to, subject, server, textBody, htmlAttachment, contentBase);
    
}

public constructor (from: string, to: string, subject: string, server: string, textBody: string, htmlAttachment: string, contentBase: string, isDebug: boolean){

            super();
        var from = from
var to = to
var subject = subject
var server = server
var textBody = textBody
var htmlAttachment = htmlAttachment
var contentBase = contentBase
var isDebug = isDebug
this.isDebug= isDebug;
    
init(from, to, subject, server, textBody, htmlAttachment, contentBase);
    
}


                //@Throws(Error::class)
            
    public init(from: string, to: string, subject: string, server: string, textBody: string, htmlAttachment: string, contentBase: string){
var from = from
var to = to
var subject = subject
var server = server
var textBody = textBody
var htmlAttachment = htmlAttachment
var contentBase = contentBase

        try {
            
    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

    var mimeBodyParts: MimeBodyPart[] = new Array(
                            //Otherwise - levels - level - dimension - ConditionalExpr
);
        
        
;
    
mimeBodyParts[0]= new MimeBodyPart();
    
mimeBodyParts[0]!.setText(textBody);
    

                        if(!stringValidationUtil!.isEmpty(htmlAttachment);

                        )
                        
                                    {
                                    
    var internetHeaders: InternetHeaders = new InternetHeaders();
        
        
;
    
internetHeaders!.addHeader("Content-Type", "text/html");
    

                        if(!stringValidationUtil!.isEmpty(contentBase);

                        )
                        
                                    {
                                    internetHeaders!.addHeader("Content-Base", contentBase);
    

                                    }
                                
mimeBodyParts[1]= new MimeBodyPart(internetHeaders, htmlAttachment!.encodeToByteArray());
    

                                    }
                                
init(server, null as Authenticator, 
                                                [
                                                    new InternetAddress(from);
        
        
                                                ], 
                                                [
                                                    new InternetAddress(to);
        
        
                                                ], null as Array<InternetAddress?>, null as Array<InternetAddress?>, subject, mimeBodyParts);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "emailConstructor", e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(MessagingException::class)
            
    public init(server: string, authenticator: Authenticator, addresses_from: InternetAddress[], addresses_to: InternetAddress[], addresses_cc: InternetAddress[], addresses_bcc: InternetAddress[], subject: string, mimeBodyParts: MimeBodyPart[]){
var server = server
var authenticator = authenticator
var addresses_from = addresses_from
var addresses_to = addresses_to
var addresses_cc = addresses_cc
var addresses_bcc = addresses_bcc
var subject = subject
var mimeBodyParts = mimeBodyParts
this.properties= new Properties();
    
this.properties.put(SMTP_HOST, server);
    

        try {
            
    var hostName: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(hostName))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.putF("Unable to get HostName so using fake", this, "init()");
    

                                    }
                                
this.properties.put(SMTP_LOCAL_HOST, "FakeHostName");
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put("Continuing on Exception: Unable to get HostName", this, "init()", e);
    

                                    }
                                
this.properties.put(SMTP_LOCAL_HOST, "FakeHostName");
    
}


                        if(this.isDebug)
                        
                                    {
                                    this.properties.put(DEBUG, "true");
    

                                    }
                                

    var session: Session = Session.getInstance(this.properties, authenticator)!;
        
        
;
    

                        if(this.isDebug)
                        
                                    {
                                    session.setDebug(true);
    
this.bs= new ByteArrayOutputStream();
    

    var printStream: PrintStream = new PrintStream(this.bs);
        
        
;
    
session.setDebugOut(printStream);
    

                                    }
                                
this.msg= new MimeMessage(session);
    
this.msg.addFrom(addresses_from);
    
this.msg.setRecipients(Message.RecipientType.TO, addresses_to);
    
this.msg.setRecipients(Message.RecipientType.CC, addresses_cc);
    
this.msg.setRecipients(Message.RecipientType.BCC, addresses_bcc);
    
this.msg.setSubject(subject);
    

    var mimeMultipart: MimeMultipart = new MimeMultipart();
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < mimeBodyParts!.length; i++)
        {
mimeMultipart!.addBodyPart(mimeBodyParts[i]!);
    
}

this.msg.setContent(mimeMultipart);
    
}


    public getMimeMessage(): MimeMessage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.msg;
    
}


    public getDebugInfo(): string{

                        if(this.isDebug)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "More Logging Before This To Standard Out: " +
                                    //Otherwise - right - ObjectCreationExpr
;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Debugging Is Off";
    

                        }
                            
}


                //@Throws(Error::class)
            
    public log(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "\nHashMap: " +this.toHashMap()!.toString();
    
}


                //@Throws(Error::class)
            
    public toHashMap(): HashMap<any, any>{

        try {
            
    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(EmailData.SERVER, this.properties.get(SMTP_HOST);

                         as String);
    

    var addresses: Address[] = this.msg.getFrom()!;
        
        
;
    

                        if(addresses != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < addresses.length; index++)
        {
hashMap!.put(EmailData.FROM, addresses[index]!.toString());
    
}


                                    }
                                
addresses= this.msg.getRecipients(Message.RecipientType.TO);
    

                        if(addresses != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < addresses.length; index++)
        {
hashMap!.put(EmailData.TO, addresses[index]!.toString());
    
}


                                    }
                                
addresses= this.msg.getRecipients(Message.RecipientType.CC);
    

                        if(addresses != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < addresses.length; index++)
        {
hashMap!.put(EmailData.CC, addresses[index]!.toString());
    
}


                                    }
                                
addresses= this.msg.getRecipients(Message.RecipientType.BCC);
    

                        if(addresses != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < addresses.length; index++)
        {
hashMap!.put(EmailData.BCC, addresses[index]!.toString());
    
}


                                    }
                                
hashMap!.put(EmailData.SUBJECT, msg.getSubject());
    

    var mimeMultipart: MimeMultipart = msg.getContent();

                         as MimeMultipart;
        
        
;
    

                        if(mimeMultipart != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < mimeMultipart!.getCount(); index++)
        {

    var content: string = mimeMultipart!.getBodyPart(index)!.getContent();

                         as String;
        
        
;
    
hashMap!.put(EmailData.CONTENT, content);
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toHashMap()", e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = ModDomHelper.createNameValueNodes(document, EmailData.NAME, this.toHashMap())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{



                            throw new Error(CommonStrings.getInstance()!.NOT_IMPLEMENTED)
}


}
                
            

