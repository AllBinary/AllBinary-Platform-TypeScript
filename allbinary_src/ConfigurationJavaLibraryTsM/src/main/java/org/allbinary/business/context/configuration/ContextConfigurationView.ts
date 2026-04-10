
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
        



import { DomNodeInterface } from "../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { EmailServerConfigurationData } from "../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationData.js";

    
import { EmailServerConfigurationInterface } from "../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationInterface.js";

    
import { EmailServerConfigurationView } from "../../../../../org/allbinary/logic/communication/smtp/configuration/server/EmailServerConfigurationView.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../org/w3c/dom/NodeList.js";

    

export class ContextConfigurationView
            extends Object
        
                , DomNodeInterface {
        

    private contextConfigurationInterface: ContextConfigurationInterface
public constructor (node: Node){

            super();
            var node = node

    var childNodeList: NodeList = node.getChildNodes()!;
        
        

this.contextConfigurationInterface= ContextConfiguration()

    var emailConfigurationNode: Node = DomSearchHelper.getNode(EmailServerConfigurationData.NAME, childNodeList)!;
        
        


    var emailServerConfigurationView: EmailServerConfigurationView = new EmailServerConfigurationView(emailConfigurationNode);
        
        

setEmailServerConfigurationInterface(emailServerConfigurationView!.getEmailConfigurationInterface() as EmailServerConfigurationInterface)
}

public constructor (contextConfigurationInterface: ContextConfigurationInterface){

            super();
            var contextConfigurationInterface = contextConfigurationInterface
this.contextConfigurationInterface= contextConfigurationInterface
}


    public getContextConfigurationInterface(): ContextConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.contextConfigurationInterface;
    
}


                @Throws(Exception::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(ContextConfigurationData.getInstance()!.NAME)!;
        
        


    var emailServerConfigurationView: EmailServerConfigurationView = new EmailServerConfigurationView(this.getContextConfigurationInterface()!.getEmailServerConfigurationInterface());
        
        

appendChild(emailServerConfigurationView!.toXmlNode(document))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

