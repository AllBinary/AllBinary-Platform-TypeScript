
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
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { TimeCreatedView } from '../../../../../../org/allbinary/business/time/created/TimeCreatedView.js';
      //not GWT import const TimeCreatedView = globalThis.org.allbinary.business.time.created.TimeCreatedView;

      
import { TimeLastModifiedView } from '../../../../../../org/allbinary/business/time/modified/TimeLastModifiedView.js';
      //not GWT import const TimeLastModifiedView = globalThis.org.allbinary.business.time.modified.TimeLastModifiedView;

      
import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { UserEmailConfigurationData } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationData.js';
      //not GWT import const UserEmailConfigurationData = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfigurationData;

      
import { UserEmailConfigurationInterface } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationInterface.js';
      //not GWT import const UserEmailConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfigurationInterface;

      
import { UserEmailConfigurationView } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationView.js';
      //not GWT import const UserEmailConfigurationView = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfigurationView;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserConfigurationInterface } from './UserConfigurationInterface.js';
import { UserConfiguration } from './UserConfiguration.js';
import { UserConfigurationData } from './UserConfigurationData.js';

export class UserConfigurationView
            extends Object
         implements DomNodeInterface {
        

    private userConfigurationInterface: UserConfigurationInterface;

public constructor (node: Node){

            super();
        this.userConfigurationInterface= new UserConfiguration() as UserConfigurationInterface;
    

    var childNodeList: NodeList = node.getChildNodes()!;;
    

    var emailConfigurationNode: Node = DomSearchHelper.getNode(UserEmailConfigurationData.NAME, childNodeList)!;;
    

    var userEmailConfigurationView: UserEmailConfigurationView = new UserEmailConfigurationView(emailConfigurationNode);;
    

    var userEmailConfigurationInterface: UserEmailConfigurationInterface = userEmailConfigurationView!.getEmailConfigurationInterface() as UserEmailConfigurationInterface;;
    
this.userConfigurationInterface!.setUserEmailConfigurationInterface(userEmailConfigurationInterface);
    

    var timeCreatedNode: Node = DomSearchHelper.getNode(EntryData.getInstance()!.TIMECREATED, childNodeList)!;;
    

    var timeCreatedView: TimeCreatedView = new TimeCreatedView(timeCreatedNode);;
    
this.userConfigurationInterface!.setTimeCreated(timeCreatedView!.getTimeCreated());
    

    var timeLastModifiedNode: Node = DomSearchHelper.getNode(EntryData.getInstance()!.LASTMODIFIED, childNodeList)!;;
    

    var timeLastModifiedView: TimeLastModifiedView = new TimeLastModifiedView(timeLastModifiedNode);;
    
this.userConfigurationInterface!.setTimeLastModified(timeLastModifiedView!.getTimeLastModified());
    
}


public constructor (userConfigurationInterface: UserConfigurationInterface){

            super();
        this.userConfigurationInterface= userConfigurationInterface;
    
}


    public getUserConfigurationInterface(): UserConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(UserConfigurationData.NAME)!;;
    

    var userEmailConfigurationView: UserEmailConfigurationView = new UserEmailConfigurationView(this.userConfigurationInterface!.getUserEmailConfigurationInterface());;
    
node.appendChild(userEmailConfigurationView!.toXmlNode(document));
    

    var timeCreatedView: TimeCreatedView = new TimeCreatedView(this.userConfigurationInterface!.getTimeCreated());;
    
node.appendChild(timeCreatedView!.toXmlNode(document));
    

    var timeLastModifiedView: TimeLastModifiedView = new TimeLastModifiedView(this.userConfigurationInterface!.getTimeLastModified());;
    
node.appendChild(timeLastModifiedView!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



