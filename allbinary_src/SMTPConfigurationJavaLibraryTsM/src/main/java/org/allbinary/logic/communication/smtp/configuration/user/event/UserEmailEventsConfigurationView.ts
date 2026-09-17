
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap
import { Set } from '../../../../../../../../java/util/Set.js';
//not GWT import const Set
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface
import { DomSearchHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document
import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node
import { NodeList } from '../../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailEventsConfigurationInterface } from './UserEmailEventsConfigurationInterface.js';
//not GWT import - same folder const UserEmailEventsConfigurationInterfaceimport { UserEmailEventsConfiguration } from './UserEmailEventsConfiguration.js';
//not GWT import - same folder const UserEmailEventsConfigurationimport { UserEmailEventConfigurationData } from './UserEmailEventConfigurationData.js';
//not GWT import - same folder const UserEmailEventConfigurationDataimport { UserEmailEventConfigurationView } from './UserEmailEventConfigurationView.js';
//not GWT import - same folder const UserEmailEventConfigurationViewimport { UserEmailEventsConfigurationMapping } from './UserEmailEventsConfigurationMapping.js';
//not GWT import - same folder const UserEmailEventsConfigurationMappingimport { UserEmailEventsConfigurationData } from './UserEmailEventsConfigurationData.js';
//not GWT import - same folder const UserEmailEventsConfigurationDataimport { UserEmailEventConfigurationInterface } from './UserEmailEventConfigurationInterface.js';
//not GWT import - same folder const UserEmailEventConfigurationInterface
export class UserEmailEventsConfigurationView
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface;

public constructor (node: Node){

            super();
        this.userEmailEventsConfigurationInterface= new UserEmailEventsConfiguration() as UserEmailEventsConfigurationInterface;
    

    var childNodeList: NodeList = node.getChildNodes()!;;
    

    var emailEventConfigurationNodeVector: BasicArrayList = DomSearchHelper.getAllNodesNoThrow(UserEmailEventConfigurationData.NAME, childNodeList)!;;
    

    var size: number = emailEventConfigurationNodeVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var userEmailConfigurationNode: Node = emailEventConfigurationNodeVector!.get(index) as Node;;
    

    var userEmailEventConfigurationView: UserEmailEventConfigurationView = new UserEmailEventConfigurationView(userEmailConfigurationNode);;
    
this.userEmailEventsConfigurationInterface!.addUserEmailEventConfiguration(userEmailEventConfigurationView!.getUserEmailEventConfigurationInterface());
    
}

}


public constructor (userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface){

            super();
        this.userEmailEventsConfigurationInterface= userEmailEventsConfigurationInterface;
    
}


    public getUserEmailEventsConfigurationInterface(): UserEmailEventsConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userEmailEventsConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var userEmailConfigurationMapping: UserEmailEventsConfigurationMapping = new UserEmailEventsConfigurationMapping(this.userEmailEventsConfigurationInterface);;
    

    var node: Node = document.createElement(UserEmailEventsConfigurationData.NAME)!;;
    

    var emailEventHashMap: HashMap<any, any> = this.getUserEmailEventsConfigurationInterface()!.getEventConfigurationHashMap()!;;
    

    var set: Set = emailEventHashMap!.keys()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Number Of Email Events Specified in file: " +set.size(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

    var eventNameArray: any[] = set.toArray()!;;
    

    var size: number = eventNameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var eventName: string = eventNameArray[index]! as string;;
    

    var userEmailEventsConfigurationInterface: UserEmailEventConfigurationInterface = emailEventHashMap!.get(eventName) as UserEmailEventConfigurationInterface;;
    

    var userEmailEventConfigurationView: UserEmailEventConfigurationView = new UserEmailEventConfigurationView(userEmailEventsConfigurationInterface);;
    
node.appendChild(userEmailEventConfigurationView!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



