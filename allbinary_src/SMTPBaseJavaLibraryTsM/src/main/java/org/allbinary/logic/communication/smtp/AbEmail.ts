
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
        



            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { MimeMessage } from "../../../../../javax/mail/internet/MimeMessage.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

export class AbEmail
            extends Object
        
                , EmailInterface {
        

    private email: Email
public constructor (server: string, from: string, to: string, subject: string, textBody: string, htmlAttachment: string, contentBase: string){

            super();
            var server = server
var from = from
var to = to
var subject = subject
var textBody = textBody
var htmlAttachment = htmlAttachment
var contentBase = contentBase

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.email= new Email(from, to, subject, server, textBody, htmlAttachment, contentBase, true);
    

                                    }
                                
                        else {
                            this.email= new Email(from, to, subject, server, textBody, htmlAttachment, contentBase);
    

                        }
                            
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


    public getEmail(): Email{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email as Email;
    
}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.email.toXmlDoc();

                        ;
    
}


}
                
            

