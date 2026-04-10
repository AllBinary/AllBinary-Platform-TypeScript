
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
        



import { EntryData } from "../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { TimeCreatedView } from "../../../../../../org/allbinary/business/time/created/TimeCreatedView.js";

    
import { TimeLastModifiedView } from "../../../../../../org/allbinary/business/time/modified/TimeLastModifiedView.js";

    
import { DomNodeInterface } from "../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { UserEmailConfigurationData } from "../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationData.js";

    
import { UserEmailConfigurationInterface } from "../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationInterface.js";

    
import { UserEmailConfigurationView } from "../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationView.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../org/w3c/dom/NodeList.js";

    

export class UserConfigurationView
            extends Object
        
                , DomNodeInterface {
        

    private userConfigurationInterface: UserConfigurationInterface
public constructor (node: Node){

            super();
            var node = node
this.userConfigurationInterface= UserConfiguration() as UserConfigurationInterface

    var childNodeList: NodeList = node.getChildNodes()!;
        
        


    var emailConfigurationNode: Node = DomSearchHelper.getNode(UserEmailConfigurationData.NAME, childNodeList)!;
        
        


    var userEmailConfigurationView: UserEmailConfigurationView = new UserEmailConfigurationView(emailConfigurationNode);
        
        


    var userEmailConfigurationInterface: UserEmailConfigurationInterface = userEmailConfigurationView!.getEmailConfigurationInterface() as UserEmailConfigurationInterface;
        
        

userConfigurationInterface!.setUserEmailConfigurationInterface(userEmailConfigurationInterface)

    var timeCreatedNode: Node = DomSearchHelper.getNode(EntryData.getInstance()!.TIMECREATED, childNodeList)!;
        
        


    var timeCreatedView: TimeCreatedView = new TimeCreatedView(timeCreatedNode);
        
        

this.userConfigurationInterface!.setTimeCreated(timeCreatedView!.getTimeCreated())

    var timeLastModifiedNode: Node = DomSearchHelper.getNode(EntryData.getInstance()!.LASTMODIFIED, childNodeList)!;
        
        


    var timeLastModifiedView: TimeLastModifiedView = new TimeLastModifiedView(timeLastModifiedNode);
        
        

this.userConfigurationInterface!.setTimeLastModified(timeLastModifiedView!.getTimeLastModified())
}

public constructor (userConfigurationInterface: UserConfigurationInterface){

            super();
            var userConfigurationInterface = userConfigurationInterface
this.userConfigurationInterface= userConfigurationInterface
}


    public getUserConfigurationInterface(): UserConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userConfigurationInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(UserConfigurationData.NAME)!;
        
        


    var userEmailConfigurationView: UserEmailConfigurationView = new UserEmailConfigurationView(this.userConfigurationInterface!.getUserEmailConfigurationInterface());
        
        

node.appendChild(userEmailConfigurationView!.toXmlNode(document))

    var timeCreatedView: TimeCreatedView = new TimeCreatedView(userConfigurationInterface!.getTimeCreated());
        
        

node.appendChild(timeCreatedView!.toXmlNode(document))

    var timeLastModifiedView: TimeLastModifiedView = new TimeLastModifiedView(userConfigurationInterface!.getTimeLastModified());
        
        

node.appendChild(timeLastModifiedView!.toXmlNode(document))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

