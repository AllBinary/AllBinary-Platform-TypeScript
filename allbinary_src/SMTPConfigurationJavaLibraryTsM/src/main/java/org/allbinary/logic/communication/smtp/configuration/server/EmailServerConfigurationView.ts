
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { DomNodeHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      //not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomNodeInterface } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmailServerConfigurationInterface } from './EmailServerConfigurationInterface.js';
//not GWT import const  = globalThis.org.allbinary.logic.communication.smtp.configuration.server.EmailServerConfigurationInterface;

                import { EmailServerConfigurationData } from './EmailServerConfigurationData.js';
//not GWT import const  = globalThis.org.allbinary.logic.communication.smtp.configuration.server.EmailServerConfigurationData;

                import { EmailServerConfiguration } from './EmailServerConfiguration.js';
//not GWT import const  = globalThis.org.allbinary.logic.communication.smtp.configuration.server.EmailServerConfiguration;

                import { EmailServerConfigurationMapping } from './EmailServerConfigurationMapping.js';
//not GWT import const  = globalThis.org.allbinary.logic.communication.smtp.configuration.server.EmailServerConfigurationMapping;

                
export class EmailServerConfigurationView
            extends Object
         implements DomNodeInterface {
        

    private emailServerConfigurationInterface: EmailServerConfigurationInterface;

public constructor (node: Node){

            super();
        
    var childNodeList: NodeList = node.getChildNodes()!;;
    

    var server: string = DomNodeHelper.getTextNodeValue(EmailServerConfigurationData.SERVER, childNodeList)!;;
    

    var accountName: string = DomNodeHelper.getTextNodeValue(EmailServerConfigurationData.ACCOUNT, childNodeList)!;;
    

    var password: string = DomNodeHelper.getTextNodeValue(EmailServerConfigurationData.PASSWORD, childNodeList)!;;
    
this.emailServerConfigurationInterface= new EmailServerConfiguration(accountName, password, server) as EmailServerConfigurationInterface;
    
}


public constructor (emailServerConfigurationInterface: EmailServerConfigurationInterface){

            super();
        this.emailServerConfigurationInterface= emailServerConfigurationInterface;
    
}


    public getEmailConfigurationInterface(): EmailServerConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.emailServerConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var emailConfigurationMapping: EmailServerConfigurationMapping = new EmailServerConfigurationMapping(this.emailServerConfigurationInterface);;
    

    var hashMap: HashMap<any, any> = emailConfigurationMapping!.toHashMap()!;;
    

    var node: Node = ModDomHelper.createNodeWithValueNodes(document, EmailServerConfigurationData.NAME, hashMap)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



