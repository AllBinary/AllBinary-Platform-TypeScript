
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
        
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream

import { PrintStream } from '../../../../../java/io/PrintStream.js';
//not GWT import const PrintStream

import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Properties } from '../../../../../java/util/Properties.js';
//not GWT import const Properties

import { Address } from '../../../../../javax/mail/Address.js';
//not GWT import const Address

import { Authenticator } from '../../../../../javax/mail/Authenticator.js';
//not GWT import const Authenticator

import { Message } from '../../../../../javax/mail/Message.js';
//not GWT import const Message

import { MessagingException } from '../../../../../javax/mail/MessagingException.js';
//not GWT import const MessagingException

import { Session } from '../../../../../javax/mail/Session.js';
//not GWT import const Session

import { InternetAddress } from '../../../../../javax/mail/internet/InternetAddress.js';
//not GWT import const InternetAddress

import { InternetHeaders } from '../../../../../javax/mail/internet/InternetHeaders.js';
//not GWT import const InternetHeaders

import { MimeBodyPart } from '../../../../../javax/mail/internet/MimeBodyPart.js';
//not GWT import const MimeBodyPart

import { MimeMessage } from '../../../../../javax/mail/internet/MimeMessage.js';
//not GWT import const MimeMessage

import { MimeMultipart } from '../../../../../javax/mail/internet/MimeMultipart.js';
//not GWT import const MimeMultipart

import { ModDomHelper } from '../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmailInterface } from './EmailInterface.js';
//not GWT import - same folder const EmailInterface
import { EmailData } from './EmailData.js';
//not GWT import - same folder const EmailData

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

    private msg: MimeMessage;

    private properties: Properties;

    private bs: ByteArrayOutputStream;

    private isDebug: boolean;

public constructor (from: string, to: string, subject: string, server: string, textBody: string, htmlAttachment: string, contentBase: string){

            super();
        this.isDebug= false;
    
this.init(from, to, subject, server, textBody, htmlAttachment, contentBase);
    
}


public constructor (from: string, to: string, subject: string, server: string, textBody: string, htmlAttachment: string, contentBase: string, isDebug: boolean){

            super();
        this.isDebug= isDebug;
    
this.init(from, to, subject, server, textBody, htmlAttachment, contentBase);
    
}

init(...args: any[]): any {
   
    if (args.length === 7 && typeof args[0] === 'string' && typeof args[1] === 'string' && typeof args[2] === 'string' && typeof args[3] === 'string' && typeof args[4] === 'string' && typeof args[5] === 'string' && typeof args[6] === 'string') return this.init$overload1(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
   
    if (args.length === 8 && typeof args[0] === 'string' && typeof args[6] === 'string') return this.init$overload2(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
   
   throw new TypeError('No matching overload: init'); }
  
                //@Throws(Exception.constructor)
            
    public init$overload1(from: string, to: string, subject: string, server: string, textBody: string, htmlAttachment: string, contentBase: string){

 try { 
    let stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

    let mimeBodyParts: MimeBodyPart[] = new Array(
                            //Otherwise - levels - level - dimension - ConditionalExpr
);;
    
mimeBodyParts[0]= new MimeBodyPart();
    
mimeBodyParts[0]!.setText(textBody);
    

                        if(!stringValidationUtil!.isEmpty(htmlAttachment))
                        
                                    {
                                    
    let internetHeaders: InternetHeaders = new InternetHeaders();;
    
internetHeaders!.addHeader("Content-Type", "text/html");
    

                        if(!stringValidationUtil!.isEmpty(contentBase))
                        
                                    {
                                    internetHeaders!.addHeader("Content-Base", contentBase);
    

                                    }
                                
mimeBodyParts[1]= new MimeBodyPart(internetHeaders, htmlAttachment!.getBytes());
    

                                    }
                                
this.init(server, null as Authenticator, 
                                                [
                                                    new InternetAddress(from)
                                                ], 
                                                [
                                                    new InternetAddress(to)
                                                ], null as InternetAddress[], null as InternetAddress[], subject, mimeBodyParts);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "emailConstructor", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(MessagingException.constructor)
            
    public init$overload2(server: string, authenticator: Authenticator, addresses_from: InternetAddress[], addresses_to: InternetAddress[], addresses_cc: InternetAddress[], addresses_bcc: InternetAddress[], subject: string, mimeBodyParts: MimeBodyPart[]){
this.properties= new Properties();
    
this.properties.put(Email.SMTP_HOST, server);
    

 try { 
    let hostName: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(hostName))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.putF("Unable to get HostName so using fake", this, "init()");
    

                                    }
                                
this.properties.put(Email.SMTP_LOCAL_HOST, "FakeHostName");
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put("Continuing on Exception: Unable to get HostName", this, "init()", e);
    

                                    }
                                
this.properties.put(Email.SMTP_LOCAL_HOST, "FakeHostName");
    

 }
   }
 

                        if(this.isDebug)
                        
                                    {
                                    this.properties.put(Email.DEBUG, "true");
    

                                    }
                                

    let session: Session = Session.getInstance(this.properties, authenticator)!;;
    

                        if(this.isDebug)
                        
                                    {
                                    session.setDebug(true);
    
this.bs= new ByteArrayOutputStream();
    

    let printStream: PrintStream = new PrintStream(this.bs);;
    
session.setDebugOut(printStream);
    

                                    }
                                
this.msg= new MimeMessage(session);
    
this.msg.addFrom(addresses_from);
    
this.msg.setRecipients(Message.RecipientType.TO, addresses_to);
    
this.msg.setRecipients(Message.RecipientType.CC, addresses_cc);
    
this.msg.setRecipients(Message.RecipientType.BCC, addresses_bcc);
    
this.msg.setSubject(subject);
    

    let mimeMultipart: MimeMultipart = new MimeMultipart();;
    




                        for (
    let i: number = 0;i < mimeBodyParts!.length; i++)
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
                        return "More Logging Before This To Standard Out: " +this.bs.toString();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Debugging Is Off";
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public log(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "\nHashMap: " +this.toHashMap()!.toString();
    
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

 try { 
    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(EmailData.SERVER, this.properties.get(Email.SMTP_HOST) as string);
    

    let addresses: Address[] = this.msg.getFrom()!;;
    

                        if(addresses != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    let index: number = 0;index < addresses.length; index++)
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
    let index: number = 0;index < addresses.length; index++)
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
    let index: number = 0;index < addresses.length; index++)
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
    let index: number = 0;index < addresses.length; index++)
        {
hashMap!.put(EmailData.BCC, addresses[index]!.toString());
    
}


                                    }
                                
hashMap!.put(EmailData.SUBJECT, this.msg.getSubject());
    

    let mimeMultipart: MimeMultipart = this.msg.getContent() as MimeMultipart;;
    

                        if(mimeMultipart != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    let index: number = 0;index < mimeMultipart!.getCount(); index++)
        {

    let content: string = mimeMultipart!.getBodyPart(index)!.getContent() as string;;
    
hashMap!.put(EmailData.CONTENT, content);
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toHashMap()", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = ModDomHelper.createNameValueNodes(document, EmailData.NAME, this.toHashMap())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlDoc(): Document{



                            throw new Exception(CommonStrings.getInstance()!.NOT_IMPLEMENTED);
                    
}


}

