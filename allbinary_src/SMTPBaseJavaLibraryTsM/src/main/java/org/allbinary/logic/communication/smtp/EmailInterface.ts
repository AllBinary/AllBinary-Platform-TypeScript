
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { MimeMessage } from '../../../../../javax/mail/internet/MimeMessage.js';
      const MimeMessage = globalThis.javax.mail.internet.MimeMessage;

      
//not game specific package import { DomNodeInterface } from '../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { DomDocumentMappingInterface } from '../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js';
      const DomDocumentMappingInterface = globalThis.org.allbinary.data.tree.dom.document.mapping.DomDocumentMappingInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface EmailInterface extends DomNodeInterface, DomDocumentMappingInterface {
        

    getDebugInfo(): string

    getMimeMessage(): MimeMessage

                //@Throws(Exception.constructor)
            
    log(): string

}
                
            

