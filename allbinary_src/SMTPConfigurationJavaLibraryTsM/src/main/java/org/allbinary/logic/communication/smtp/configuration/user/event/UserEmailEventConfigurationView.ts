
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
        
//not game specific package import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { DomNodeHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { ModDomHelper } from '../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailEventConfigurationInterface } from './UserEmailEventConfigurationInterface.js';
import { UserEmailEventConfigurationData } from './UserEmailEventConfigurationData.js';
import { UserEmailEventConfiguration } from './UserEmailEventConfiguration.js';
import { UserEmailEventConfigurationMapping } from './UserEmailEventConfigurationMapping.js';

export class UserEmailEventConfigurationView
            extends Object
         implements DomNodeInterface {
        

    private userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface;

public constructor (node: Node){

            super();
        
    var childNodeList: NodeList = node.getChildNodes()!;;
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var name: string = DomNodeHelper.getTextNodeValue(UserEmailEventConfigurationData.NAME, childNodeList)!;;
    
hashMap!.put(UserEmailEventConfigurationData.NAME, name);
    

    var eventListenerClassPath: string = DomNodeHelper.getTextNodeValue(UserEmailEventConfigurationData.LISTENER_CLASSPATH, childNodeList)!;;
    
hashMap!.put(UserEmailEventConfigurationData.LISTENER_CLASSPATH, eventListenerClassPath);
    
this.setUserEmailEventConfigurationInterface(new UserEmailEventConfiguration(hashMap) as UserEmailEventConfigurationInterface);
    
}


public constructor (userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface){

            super();
        this.setUserEmailEventConfigurationInterface(userEmailEventConfigurationInterface);
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var userEmailEventConfigurationMapping: UserEmailEventConfigurationMapping = new UserEmailEventConfigurationMapping(this.getUserEmailEventConfigurationInterface());;
    

    var hashMap: HashMap<any, any> = userEmailEventConfigurationMapping!.toHashMap()!;;
    

    var node: Node = ModDomHelper.createNameValueNodes(document, UserEmailEventConfigurationData.NAME, hashMap)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getUserEmailEventConfigurationInterface(): UserEmailEventConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userEmailEventConfigurationInterface;
    
}


    public setUserEmailEventConfigurationInterface(userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface){
this.userEmailEventConfigurationInterface= userEmailEventConfigurationInterface;
    
}


}
                
            

