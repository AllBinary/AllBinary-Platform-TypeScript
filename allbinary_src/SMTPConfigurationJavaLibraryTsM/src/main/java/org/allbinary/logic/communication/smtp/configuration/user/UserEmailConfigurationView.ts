
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

import { DomNodeInterface } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { ModDomHelper } from '../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { UserEmailEventsConfigurationData } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationData.js';
//not GWT import const UserEmailEventsConfigurationData

import { UserEmailEventsConfigurationInterface } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationInterface.js';
//not GWT import const UserEmailEventsConfigurationInterface

import { UserEmailEventsConfigurationView } from '../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationView.js';
//not GWT import const UserEmailEventsConfigurationView

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailConfigurationInterface } from './UserEmailConfigurationInterface.js';
//sameFolderImports - not GWT import - same folder const UserEmailConfigurationInterface
import { UserEmailConfiguration } from './UserEmailConfiguration.js';
//sameFolderImports - not GWT import - same folder const UserEmailConfiguration
import { UserEmailConfigurationMapping } from './UserEmailConfigurationMapping.js';
//sameFolderImports - not GWT import - same folder const UserEmailConfigurationMapping
import { UserEmailConfigurationData } from './UserEmailConfigurationData.js';
//sameFolderImports - not GWT import - same folder const UserEmailConfigurationData

export class UserEmailConfigurationView
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private userEmailConfigurationInterface: UserEmailConfigurationInterface;

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
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.userEmailConfigurationInterface= new UserEmailConfiguration() as UserEmailConfigurationInterface;
    

    let childNodeList: NodeList = node.getChildNodes()!;;
    

    let userEmailEventsConfigurationNode: Node = DomSearchHelper.getNodeNoThrow(UserEmailEventsConfigurationData.NAME, childNodeList)!;;
    

    let userEmailEventsConfigurationView: UserEmailEventsConfigurationView = new UserEmailEventsConfigurationView(userEmailEventsConfigurationNode);;
    
this.userEmailConfigurationInterface!.setUserEmailEventsConfigurationInterface(userEmailEventsConfigurationView!.getUserEmailEventsConfigurationInterface());
    

    }
    
    private constructor$1(userEmailConfigurationInterface: UserEmailConfigurationInterface): void {
        this.userEmailConfigurationInterface= userEmailConfigurationInterface;
    

    }
    
    public getEmailConfigurationInterface(): UserEmailConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userEmailConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let emailConfigurationMapping: UserEmailConfigurationMapping = new UserEmailConfigurationMapping(this.userEmailConfigurationInterface);;
    

    let hashMap: HashMap<any, any> = emailConfigurationMapping!.toHashMap()!;;
    

    let node: Node = ModDomHelper.createNameValueNodes(document, UserEmailConfigurationData.NAME, hashMap)!;;
    

    let userEmailConfigurationInterface: UserEmailConfigurationInterface = this.getEmailConfigurationInterface()!;;
    

    let userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface = userEmailConfigurationInterface!.getUserEmailEventsConfigurationInterface()!;;
    

    let userEmailEventsConfigurationView: UserEmailEventsConfigurationView = new UserEmailEventsConfigurationView(userEmailEventsConfigurationInterface);;
    
node.appendChild(userEmailEventsConfigurationView!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

