
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { DomNodeInterface } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { UserEmailEventsConfigurationData } from "../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationData.js";

    
import { UserEmailEventsConfigurationInterface } from "../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationInterface.js";

    
import { UserEmailEventsConfigurationView } from "../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationView.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../org/w3c/dom/NodeList.js";

    

export class UserEmailConfigurationView
            extends Object
        
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private userEmailConfigurationInterface: UserEmailConfigurationInterface
public constructor (node: Node){

            super();
            var node = node

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    put(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
this.userEmailConfigurationInterface= UserEmailConfiguration() as UserEmailConfigurationInterface

    var childNodeList: NodeList = node.getChildNodes()!;
        
        


    var userEmailEventsConfigurationNode: Node = DomSearchHelper.getNodeNoThrow(UserEmailEventsConfigurationData.NAME, childNodeList)!;
        
        


    var userEmailEventsConfigurationView: UserEmailEventsConfigurationView = new UserEmailEventsConfigurationView(userEmailEventsConfigurationNode);
        
        

setUserEmailEventsConfigurationInterface(userEmailEventsConfigurationView!.getUserEmailEventsConfigurationInterface())
}

public constructor (userEmailConfigurationInterface: UserEmailConfigurationInterface){

            super();
            var userEmailConfigurationInterface = userEmailConfigurationInterface
this.userEmailConfigurationInterface= userEmailConfigurationInterface
}


    public getEmailConfigurationInterface(): UserEmailConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userEmailConfigurationInterface;
    
}


                @Throws(Exception::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var emailConfigurationMapping: UserEmailConfigurationMapping = new UserEmailConfigurationMapping(this.userEmailConfigurationInterface);
        
        


    var hashMap: HashMap<Any, Any> = emailConfigurationMapping!.toHashMap()!;
        
        


    var node: Node = ModDomHelper.createNameValueNodes(document, UserEmailConfigurationData.NAME, hashMap)!;
        
        


    var userEmailConfigurationInterface: UserEmailConfigurationInterface = this.getEmailConfigurationInterface()!;
        
        


    var userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface = userEmailConfigurationInterface!.getUserEmailEventsConfigurationInterface()!;
        
        


    var userEmailEventsConfigurationView: UserEmailEventsConfigurationView = new UserEmailEventsConfigurationView(userEmailEventsConfigurationInterface);
        
        

appendChild(userEmailEventsConfigurationView!.toXmlNode(document))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

