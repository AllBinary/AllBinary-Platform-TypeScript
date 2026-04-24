
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
        



import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { DomDocumentMappingInterface } from "../../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { UserConfigurationInterface } from "./UserConfigurationInterface.js";

export class UserConfigurationDomDocumentMapping
            extends Object
         implements DomDocumentMappingInterface {
        

    private userConfigurationInterface: UserConfigurationInterface
public constructor (userConfigurationInterface: UserConfigurationInterface){

            super();
        var userConfigurationInterface = userConfigurationInterface
this.userConfigurationInterface= userConfigurationInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{

    var document: Document = DomDocumentHelper.create()!;
        
        
;
    

    var node: Node = new UserConfigurationView(this.userConfigurationInterface).
                            toXmlNode(document)!;
        
        
;
    
document.appendChild(node);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                //@Throws(Error::class)
            
    public toDomDocumentString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomDocumentHelper.toString(this.toXmlDoc());;
    
}


}
                
            

