
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

    
import { DomNodeHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomNodeInterface } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../org/w3c/dom/NodeList.js";

    

export class EmailServerConfigurationView
            extends Object
        
                , DomNodeInterface {
        

    private emailServerConfigurationInterface: EmailServerConfigurationInterface
public constructor (node: Node){

            super();
            var node = node

    var childNodeList: NodeList = node.getChildNodes()!;
        
        
;
    

    var server: string = DomNodeHelper.getTextNodeValue(EmailServerConfigurationData.SERVER, childNodeList)!;
        
        
;
    

    var accountName: string = DomNodeHelper.getTextNodeValue(EmailServerConfigurationData.ACCOUNT, childNodeList)!;
        
        
;
    

    var password: string = DomNodeHelper.getTextNodeValue(EmailServerConfigurationData.PASSWORD, childNodeList)!;
        
        
;
    
this.emailServerConfigurationInterface= EmailServerConfiguration(accountName, password, server) as EmailServerConfigurationInterface;
    
}

public constructor (emailServerConfigurationInterface: EmailServerConfigurationInterface){

            super();
            var emailServerConfigurationInterface = emailServerConfigurationInterface
this.emailServerConfigurationInterface= emailServerConfigurationInterface;
    
}


    public getEmailConfigurationInterface(): EmailServerConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.emailServerConfigurationInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var emailConfigurationMapping: EmailServerConfigurationMapping = new EmailServerConfigurationMapping(this.emailServerConfigurationInterface);
        
        
;
    

    var hashMap: HashMap<any, any> = emailConfigurationMapping!.toHashMap()!;
        
        
;
    

    var node: Node = ModDomHelper.createNodeWithValueNodes(document, EmailServerConfigurationData.NAME, hashMap)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

