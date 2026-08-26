
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
        
//not game specific package import { HashMap } from '../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { DomNodeHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { DomNodeInterface } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { ModDomHelper } from '../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmailServerConfigurationInterface } from './EmailServerConfigurationInterface.js';
import { EmailServerConfigurationData } from './EmailServerConfigurationData.js';
import { EmailServerConfiguration } from './EmailServerConfiguration.js';
import { EmailServerConfigurationMapping } from './EmailServerConfigurationMapping.js';

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
                
            

