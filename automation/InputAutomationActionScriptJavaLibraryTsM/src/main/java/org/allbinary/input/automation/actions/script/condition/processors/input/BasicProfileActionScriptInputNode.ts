
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

        


            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { DomSearchHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericProfileActionScriptInputData } from './GenericProfileActionScriptInputData.js';
//not GWT import - same folder const GenericProfileActionScriptInputData = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.GenericProfileActionScriptInputData;

                
export class BasicProfileActionScriptInputNode
            extends Object
         {
        

public constructor (node: Node){

            super();
        
    var actionNode: Node = DomSearchHelper.getNode(GenericProfileActionScriptInputData.NAME, node.getChildNodes())!;;
    
}


public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(GenericProfileActionScriptInputData.NAME)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



