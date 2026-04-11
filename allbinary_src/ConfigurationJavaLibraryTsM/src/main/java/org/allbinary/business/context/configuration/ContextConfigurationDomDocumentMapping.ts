
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
        



import { DomDocumentHelper } from "../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { DomDocumentMappingInterface } from "../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

export class ContextConfigurationDomDocumentMapping
            extends Object
        
                , DomDocumentMappingInterface {
        

    private contextConfigurationInterface: ContextConfigurationInterface
public constructor (contextConfigurationInterface: ContextConfigurationInterface){

            super();
            var contextConfigurationInterface = contextConfigurationInterface
this.contextConfigurationInterface= contextConfigurationInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{

    var document: Document = DomDocumentHelper.create()!;
        
        
;
    

    var node: Node = new ContextConfigurationView(this.contextConfigurationInterface).
                            toXmlNode(document)!;
        
        
;
    
document.appendChild(node);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                //@Throws(Error::class)
            
    public toDomDocumentString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomDocumentHelper.toString(this.toXmlDoc());

                        ;
    
}


}
                
            

