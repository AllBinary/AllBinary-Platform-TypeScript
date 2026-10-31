
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData

import { TimeCreatedView } from '../../../../../../org/allbinary/business/time/created/TimeCreatedView.js';
//not GWT import const TimeCreatedView

import { TimeLastModifiedView } from '../../../../../../org/allbinary/business/time/modified/TimeLastModifiedView.js';
//not GWT import const TimeLastModifiedView

import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { UserEmailConfigurationData } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationData.js';
//not GWT import const UserEmailConfigurationData

import { UserEmailConfigurationInterface } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationInterface.js';
//not GWT import const UserEmailConfigurationInterface

import { UserEmailConfigurationView } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationView.js';
//not GWT import const UserEmailConfigurationView

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserConfigurationInterface } from './UserConfigurationInterface.js';
//sameFolderImports - not GWT import - same folder const UserConfigurationInterface
import { UserConfiguration } from './UserConfiguration.js';
//sameFolderImports - not GWT import - same folder const UserConfiguration
import { UserConfigurationData } from './UserConfigurationData.js';
//sameFolderImports - not GWT import - same folder const UserConfigurationData

export class UserConfigurationView
            extends Object
         implements DomNodeInterface {
        

    private userConfigurationInterface: UserConfigurationInterface;

    public constructor(...args: any[]) {
        super();
        if(args.length === 1 && args[0] instanceof Node) {
            this.constructor$0(args[0]);
        }
        else if(args.length === 1) {
            this.constructor$1(args[0]);
        }
        
    }
    
    private constructor$0(node: Node): void {
        this.userConfigurationInterface= new UserConfiguration() as UserConfigurationInterface;
    

    let childNodeList: NodeList = node.getChildNodes()!;;
    

    let emailConfigurationNode: Node = DomSearchHelper.getNode(UserEmailConfigurationData.NAME, childNodeList)!;;
    

    let userEmailConfigurationView: UserEmailConfigurationView = new UserEmailConfigurationView(emailConfigurationNode);;
    

    let userEmailConfigurationInterface: UserEmailConfigurationInterface = userEmailConfigurationView!.getEmailConfigurationInterface() as UserEmailConfigurationInterface;;
    
this.userConfigurationInterface!.setUserEmailConfigurationInterface(userEmailConfigurationInterface);
    

    let timeCreatedNode: Node = DomSearchHelper.getNode(EntryData.getInstance()!.TIMECREATED, childNodeList)!;;
    

    let timeCreatedView: TimeCreatedView = new TimeCreatedView(timeCreatedNode);;
    
this.userConfigurationInterface!.setTimeCreated(timeCreatedView!.getTimeCreated());
    

    let timeLastModifiedNode: Node = DomSearchHelper.getNode(EntryData.getInstance()!.LASTMODIFIED, childNodeList)!;;
    

    let timeLastModifiedView: TimeLastModifiedView = new TimeLastModifiedView(timeLastModifiedNode);;
    
this.userConfigurationInterface!.setTimeLastModified(timeLastModifiedView!.getTimeLastModified());
    

    }
    
    private constructor$1(userConfigurationInterface: UserConfigurationInterface): void {
        this.userConfigurationInterface= userConfigurationInterface;
    

    }
    
    public getUserConfigurationInterface(): UserConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = document.createElement(UserConfigurationData.NAME)!;;
    

    let userEmailConfigurationView: UserEmailConfigurationView = new UserEmailConfigurationView(this.userConfigurationInterface!.getUserEmailConfigurationInterface());;
    
node.appendChild(userEmailConfigurationView!.toXmlNode(document));
    

    let timeCreatedView: TimeCreatedView = new TimeCreatedView(this.userConfigurationInterface!.getTimeCreated());;
    
node.appendChild(timeCreatedView!.toXmlNode(document));
    

    let timeLastModifiedView: TimeLastModifiedView = new TimeLastModifiedView(this.userConfigurationInterface!.getTimeLastModified());;
    
node.appendChild(timeLastModifiedView!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

