
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { DomDocumentMappingInterface } from '../../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js';
//not GWT import const DomDocumentMappingInterface = globalThis.org.allbinary.data.tree.dom.document.mapping.DomDocumentMappingInterface;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserConfigurationInterface } from './UserConfigurationInterface.js';
//not GWT import - same folder const UserConfigurationInterface = globalThis.org.allbinary.business.user.modules.configuration.UserConfigurationInterface;

                import { UserConfigurationView } from './UserConfigurationView.js';
//not GWT import - same folder const UserConfigurationView = globalThis.org.allbinary.business.user.modules.configuration.UserConfigurationView;

                
export class UserConfigurationDomDocumentMapping
            extends Object
         implements DomDocumentMappingInterface {
        

    private userConfigurationInterface: UserConfigurationInterface;

public constructor (userConfigurationInterface: UserConfigurationInterface){

            super();
        this.userConfigurationInterface= userConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlDoc(): Document{

    var document: Document = DomDocumentHelper.create()!;;
    

    var node: Node = new UserConfigurationView(this.userConfigurationInterface).toXmlNode(document)!;;
    
document.appendChild(node);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                //@Throws(Exception.constructor)
            
    public toDomDocumentString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomDocumentHelper.toString(this.toXmlDoc());;
    
}


}



