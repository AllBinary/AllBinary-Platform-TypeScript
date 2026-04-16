
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
        



import { DomSearchHelper } from "../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    

import { GenericProfileActionScriptProcessorData } from "./GenericProfileActionScriptProcessorData.js";

import { GenericProfileActionScriptProcessorData } from "./GenericProfileActionScriptProcessorData.js";

export class BasicProfileActionScriptProcessorNode
            extends Object
         {
        
public constructor (node: Node){

            super();
            var node = node

    var actionNode: Node = DomSearchHelper.getNode(GenericProfileActionScriptProcessorData.NAME, node.getChildNodes())!;
        
        
;
    
}

public constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(GenericProfileActionScriptProcessorData.NAME)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

