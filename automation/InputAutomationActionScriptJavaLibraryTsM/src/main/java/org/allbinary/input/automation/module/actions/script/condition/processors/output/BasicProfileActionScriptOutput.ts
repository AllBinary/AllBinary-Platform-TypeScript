
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
        



import { BasicProfileActionScriptProcessor } from "../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/BasicProfileActionScriptProcessor.js";

    
import { Document } from "../../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ProfileActionScriptOutputInterface } from "./ProfileActionScriptOutputInterface.js";

import { GenericProfileActionScriptOutputData } from "./GenericProfileActionScriptOutputData.js";

export class BasicProfileActionScriptOutput extends BasicProfileActionScriptProcessor implements ProfileActionScriptOutputInterface {
        
public constructor (label: string, node: Node){
            super(label, node);
                    var label = label
var node = node


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (label: string){
            super(label);
                    var label = label


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(GenericProfileActionScriptOutputData.NAME)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

