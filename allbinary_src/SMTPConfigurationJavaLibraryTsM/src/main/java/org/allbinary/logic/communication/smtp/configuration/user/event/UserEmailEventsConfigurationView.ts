
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../../java/util/Set.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { DomNodeInterface } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../org/w3c/dom/NodeList.js";

    

export class UserEmailEventsConfigurationView
            extends Object
        
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface
public constructor (node: Node){

            super();
            var node = node
this.userEmailEventsConfigurationInterface= UserEmailEventsConfiguration() as UserEmailEventsConfigurationInterface

    var childNodeList: NodeList = node.getChildNodes()!;
        
        


    var emailEventConfigurationNodeVector: Vector = DomSearchHelper.getAllNodesNoThrow(UserEmailEventConfigurationData.NAME, childNodeList)!;
        
        


    var size: number = emailEventConfigurationNodeVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var userEmailConfigurationNode: Node = emailEventConfigurationNodeVector!.get(index) as Node;
        
        


    var userEmailEventConfigurationView: UserEmailEventConfigurationView = new UserEmailEventConfigurationView(userEmailConfigurationNode);
        
        

this.userEmailEventsConfigurationInterface!.addUserEmailEventConfiguration(userEmailEventConfigurationView!.getUserEmailEventConfigurationInterface())
}

}

public constructor (userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface){

            super();
            var userEmailEventsConfigurationInterface = userEmailEventsConfigurationInterface
this.userEmailEventsConfigurationInterface= userEmailEventsConfigurationInterface
}


    public getUserEmailEventsConfigurationInterface(): UserEmailEventsConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userEmailEventsConfigurationInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var userEmailConfigurationMapping: UserEmailEventsConfigurationMapping = new UserEmailEventsConfigurationMapping(this.userEmailEventsConfigurationInterface);
        
        


    var node: Node = document.createElement(UserEmailEventsConfigurationData.NAME)!;
        
        


    var emailEventHashMap: HashMap<Any, Any> = this.getUserEmailEventsConfigurationInterface()!.getEventConfigurationHashMap()!;
        
        


    var set: Set = emailEventHashMap!.keys!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put("Number Of Email Events Specified in file: " +set.size(), this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                

    var eventNameArray: any = {}[] = set.toArray()!;
        
        


    var size: number = eventNameArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var eventName: string = eventNameArray[index]! as String;
        
        


    var userEmailEventsConfigurationInterface: UserEmailEventConfigurationInterface = emailEventHashMap!.get(eventName as Object) as UserEmailEventConfigurationInterface;
        
        


    var userEmailEventConfigurationView: UserEmailEventConfigurationView = new UserEmailEventConfigurationView(userEmailEventsConfigurationInterface);
        
        

node.appendChild(userEmailEventConfigurationView!.toXmlNode(document))
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

