
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
        
import { DomSearchHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericProfileActionScriptProcessorData } from './GenericProfileActionScriptProcessorData.js';
//sameFolderImports - not GWT import - same folder const GenericProfileActionScriptProcessorData

export class BasicProfileActionScriptProcessorNode
            extends Object
         {
        

    public constructor(...args: any[]) {
        super();
        if(args.length === 1) {
            this.constructor$0(args[0]);
        }
        else if(args.length === 0) {
            this.constructor$1();
        }
        
    }
    
    private constructor$0(node: Node): void {
        
    let actionNode: Node = DomSearchHelper.getNode(GenericProfileActionScriptProcessorData.NAME, node.getChildNodes())!;;
    

    }
    
    private constructor$1(): void {
        
    }
    
                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = document.createElement(GenericProfileActionScriptProcessorData.NAME)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

