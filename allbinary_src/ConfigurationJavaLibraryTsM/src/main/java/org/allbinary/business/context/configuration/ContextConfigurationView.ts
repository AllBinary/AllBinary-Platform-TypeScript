
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
        
//not game specific package import { DomNodeInterface } from '../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { DomSearchHelper } from '../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { EmailServerConfigurationData } from '../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationData.js';
      const EmailServerConfigurationData = globalThis.org.allbinary.logic.communication.smtp.configuration.server.EmailServerConfigurationData;

      
//not game specific package import { EmailServerConfigurationInterface } from '../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationInterface.js';
      const EmailServerConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.server.EmailServerConfigurationInterface;

      
//not game specific package import { EmailServerConfigurationView } from '../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationView.js';
      const EmailServerConfigurationView = globalThis.org.allbinary.logic.communication.smtp.configuration.server.EmailServerConfigurationView;

      
//not game specific package import { Document } from '../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ContextConfigurationInterface } from './ContextConfigurationInterface.js';
import { ContextConfiguration } from './ContextConfiguration.js';
import { ContextConfigurationData } from './ContextConfigurationData.js';

export class ContextConfigurationView
            extends Object
         implements DomNodeInterface {
        

    private contextConfigurationInterface: ContextConfigurationInterface;

public constructor (node: Node){

            super();
        
    var childNodeList: NodeList = node.getChildNodes()!;;
    
this.contextConfigurationInterface= new ContextConfiguration();
    

    var emailConfigurationNode: Node = DomSearchHelper.getNode(EmailServerConfigurationData.NAME, childNodeList)!;;
    

    var emailServerConfigurationView: EmailServerConfigurationView = new EmailServerConfigurationView(emailConfigurationNode);;
    
this.contextConfigurationInterface!.setEmailServerConfigurationInterface(emailServerConfigurationView!.getEmailConfigurationInterface() as EmailServerConfigurationInterface);
    
}


public constructor (contextConfigurationInterface: ContextConfigurationInterface){

            super();
        this.contextConfigurationInterface= contextConfigurationInterface;
    
}


    public getContextConfigurationInterface(): ContextConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.contextConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(ContextConfigurationData.getInstance()!.NAME)!;;
    

    var emailServerConfigurationView: EmailServerConfigurationView = new EmailServerConfigurationView(this.getContextConfigurationInterface()!.getEmailServerConfigurationInterface());;
    
node.appendChild(emailServerConfigurationView!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



