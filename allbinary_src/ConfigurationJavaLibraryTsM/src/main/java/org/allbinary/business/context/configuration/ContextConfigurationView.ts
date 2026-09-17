
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
        
import { DomNodeInterface } from '../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface
import { DomSearchHelper } from '../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper
import { EmailServerConfigurationData } from '../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationData.js';
//not GWT import const EmailServerConfigurationData
import { EmailServerConfigurationInterface } from '../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationInterface.js';
//not GWT import const EmailServerConfigurationInterface
import { EmailServerConfigurationView } from '../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationView.js';
//not GWT import const EmailServerConfigurationView
import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document
import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node
import { NodeList } from '../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ContextConfigurationInterface } from './ContextConfigurationInterface.js';
//not GWT import - same folder const ContextConfigurationInterfaceimport { ContextConfiguration } from './ContextConfiguration.js';
//not GWT import - same folder const ContextConfigurationimport { ContextConfigurationData } from './ContextConfigurationData.js';
//not GWT import - same folder const ContextConfigurationData
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



