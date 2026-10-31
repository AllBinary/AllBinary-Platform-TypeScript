
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
//not GWT import const HashMap

import { DomNodeHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { DomNodeInterface } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { ModDomHelper } from '../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmailServerConfigurationInterface } from './EmailServerConfigurationInterface.js';
//sameFolderImports - not GWT import - same folder const EmailServerConfigurationInterface
import { EmailServerConfigurationData } from './EmailServerConfigurationData.js';
//sameFolderImports - not GWT import - same folder const EmailServerConfigurationData
import { EmailServerConfiguration } from './EmailServerConfiguration.js';
//sameFolderImports - not GWT import - same folder const EmailServerConfiguration
import { EmailServerConfigurationMapping } from './EmailServerConfigurationMapping.js';
//sameFolderImports - not GWT import - same folder const EmailServerConfigurationMapping

export class EmailServerConfigurationView
            extends Object
         implements DomNodeInterface {
        

    private emailServerConfigurationInterface: EmailServerConfigurationInterface;

    public constructor(...args: any[]) {
        super();if(args.length === 1 && args[0] instanceof Node) {
            
            this.constructor$0(args[0]);
            
        }
        else if(args.length === 1) {
            
            this.constructor$1(args[0]);
            
        }
        
    }
    
    private constructor$0(node: Node): void {
        
    let childNodeList: NodeList = node.getChildNodes()!;;
    

    let server: string = DomNodeHelper.getTextNodeValue(EmailServerConfigurationData.SERVER, childNodeList)!;;
    

    let accountName: string = DomNodeHelper.getTextNodeValue(EmailServerConfigurationData.ACCOUNT, childNodeList)!;;
    

    let password: string = DomNodeHelper.getTextNodeValue(EmailServerConfigurationData.PASSWORD, childNodeList)!;;
    
this.emailServerConfigurationInterface= new EmailServerConfiguration(accountName, password, server) as EmailServerConfigurationInterface;
    

    }
    
    private constructor$1(emailServerConfigurationInterface: EmailServerConfigurationInterface): void {
        this.emailServerConfigurationInterface= emailServerConfigurationInterface;
    

    }
    
    public getEmailConfigurationInterface(): EmailServerConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.emailServerConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let emailConfigurationMapping: EmailServerConfigurationMapping = new EmailServerConfigurationMapping(this.emailServerConfigurationInterface);;
    

    let hashMap: HashMap<any, any> = emailConfigurationMapping!.toHashMap()!;;
    

    let node: Node = ModDomHelper.createNodeWithValueNodes(document, EmailServerConfigurationData.NAME, hashMap)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

