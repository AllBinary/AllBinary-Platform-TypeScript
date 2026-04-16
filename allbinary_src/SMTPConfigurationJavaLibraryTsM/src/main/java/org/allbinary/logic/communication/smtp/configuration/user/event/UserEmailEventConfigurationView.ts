
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

    
import { DomNodeHelper } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomNodeInterface } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../org/w3c/dom/NodeList.js";

    

import { UserEmailEventConfigurationData } from "./UserEmailEventConfigurationData.js";

import { UserEmailEventConfigurationData } from "./UserEmailEventConfigurationData.js";

import { UserEmailEventConfigurationData } from "./UserEmailEventConfigurationData.js";

import { UserEmailEventConfigurationData } from "./UserEmailEventConfigurationData.js";

import { UserEmailEventConfigurationData } from "./UserEmailEventConfigurationData.js";

export class UserEmailEventConfigurationView
            extends Object
        
                , DomNodeInterface {
        

    private userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface
public constructor (node: Node){

            super();
            var node = node

    var childNodeList: NodeList = node.getChildNodes()!;
        
        
;
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var name: string = DomNodeHelper.getTextNodeValue(UserEmailEventConfigurationData.NAME, childNodeList)!;
        
        
;
    
hashMap!.put(UserEmailEventConfigurationData.NAME, name);
    

    var eventListenerClassPath: string = DomNodeHelper.getTextNodeValue(UserEmailEventConfigurationData.LISTENER_CLASSPATH, childNodeList)!;
        
        
;
    
hashMap!.put(UserEmailEventConfigurationData.LISTENER_CLASSPATH, eventListenerClassPath);
    
this.setUserEmailEventConfigurationInterface(new UserEmailEventConfiguration(hashMap) as UserEmailEventConfigurationInterface);
    
}

public constructor (userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface){

            super();
            var userEmailEventConfigurationInterface = userEmailEventConfigurationInterface
this.setUserEmailEventConfigurationInterface(userEmailEventConfigurationInterface);
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var userEmailEventConfigurationMapping: UserEmailEventConfigurationMapping = new UserEmailEventConfigurationMapping(this.getUserEmailEventConfigurationInterface());
        
        
;
    

    var hashMap: HashMap<any, any> = userEmailEventConfigurationMapping!.toHashMap()!;
        
        
;
    

    var node: Node = ModDomHelper.createNameValueNodes(document, UserEmailEventConfigurationData.NAME, hashMap)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getUserEmailEventConfigurationInterface(): UserEmailEventConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userEmailEventConfigurationInterface;
    
}


    public setUserEmailEventConfigurationInterface(userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface){
var userEmailEventConfigurationInterface = userEmailEventConfigurationInterface
this.userEmailEventConfigurationInterface= userEmailEventConfigurationInterface;
    
}


}
                
            

