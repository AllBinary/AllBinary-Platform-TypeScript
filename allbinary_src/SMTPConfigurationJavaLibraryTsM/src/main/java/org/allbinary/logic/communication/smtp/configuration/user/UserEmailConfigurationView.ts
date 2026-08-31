
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

      
import { DomNodeInterface } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { ModDomHelper } from '../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { UserEmailEventsConfigurationData } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationData.js';
      //not GWT import const UserEmailEventsConfigurationData = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventsConfigurationData;

      
import { UserEmailEventsConfigurationInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationInterface.js';
      //not GWT import const UserEmailEventsConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventsConfigurationInterface;

      
import { UserEmailEventsConfigurationView } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationView.js';
      //not GWT import const UserEmailEventsConfigurationView = globalThis.org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventsConfigurationView;

      
//not plain js import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailConfigurationInterface } from './UserEmailConfigurationInterface.js';
import { UserEmailConfiguration } from './UserEmailConfiguration.js';
import { UserEmailConfigurationMapping } from './UserEmailConfigurationMapping.js';
import { UserEmailConfigurationData } from './UserEmailConfigurationData.js';

export class UserEmailConfigurationView
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private userEmailConfigurationInterface: UserEmailConfigurationInterface;

public constructor (node: Node){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.userEmailConfigurationInterface= new UserEmailConfiguration() as UserEmailConfigurationInterface;
    

    var childNodeList: NodeList = node.getChildNodes()!;;
    

    var userEmailEventsConfigurationNode: Node = DomSearchHelper.getNodeNoThrow(UserEmailEventsConfigurationData.NAME, childNodeList)!;;
    

    var userEmailEventsConfigurationView: UserEmailEventsConfigurationView = new UserEmailEventsConfigurationView(userEmailEventsConfigurationNode);;
    
this.userEmailConfigurationInterface!.setUserEmailEventsConfigurationInterface(userEmailEventsConfigurationView!.getUserEmailEventsConfigurationInterface());
    
}


public constructor (userEmailConfigurationInterface: UserEmailConfigurationInterface){

            super();
        this.userEmailConfigurationInterface= userEmailConfigurationInterface;
    
}


    public getEmailConfigurationInterface(): UserEmailConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userEmailConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var emailConfigurationMapping: UserEmailConfigurationMapping = new UserEmailConfigurationMapping(this.userEmailConfigurationInterface);;
    

    var hashMap: HashMap<any, any> = emailConfigurationMapping!.toHashMap()!;;
    

    var node: Node = ModDomHelper.createNameValueNodes(document, UserEmailConfigurationData.NAME, hashMap)!;;
    

    var userEmailConfigurationInterface: UserEmailConfigurationInterface = this.getEmailConfigurationInterface()!;;
    

    var userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface = userEmailConfigurationInterface!.getUserEmailEventsConfigurationInterface()!;;
    

    var userEmailEventsConfigurationView: UserEmailEventsConfigurationView = new UserEmailEventsConfigurationView(userEmailEventsConfigurationInterface);;
    
node.appendChild(userEmailEventsConfigurationView!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



