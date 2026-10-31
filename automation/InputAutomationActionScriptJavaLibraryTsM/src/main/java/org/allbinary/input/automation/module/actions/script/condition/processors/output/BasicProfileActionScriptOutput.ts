
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

        


            import { Exception } from '../../../../../../../../../../java/lang/Exception.js';
        
import { BasicProfileActionScriptProcessor } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/BasicProfileActionScriptProcessor.js';
//not GWT import const BasicProfileActionScriptProcessor

import { Document } from '../../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptOutputInterface } from './ProfileActionScriptOutputInterface.js';
//sameFolderImports - not GWT import - same folder const ProfileActionScriptOutputInterface
import { GenericProfileActionScriptOutputData } from './GenericProfileActionScriptOutputData.js';
//sameFolderImports - not GWT import - same folder const GenericProfileActionScriptOutputData

export class BasicProfileActionScriptOutput extends BasicProfileActionScriptProcessor implements ProfileActionScriptOutputInterface {
        

    public constructor(...args: any[]) {
        if(args.length === 2) {
            const label = args[0];
            const node = args[1];
            super(label, node);
            this.constructor$0(label, node);
            
        }
        else if(args.length === 1) {
            const label = args[0];
            super(label);
            this.constructor$1(label);
            
        }
        
    }
    
    private constructor$0(label: string, node: Node): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$1(label: string): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = document.createElement(GenericProfileActionScriptOutputData.NAME)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

