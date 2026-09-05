
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
//not GWT import const BasicProfileActionScriptProcessor = globalThis.org.allbinary.input.automation.actions.script.condition.processors.BasicProfileActionScriptProcessor;

      
import { Document } from '../../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptOutputInterface } from './ProfileActionScriptOutputInterface.js';
//not GWT import - same folder const ProfileActionScriptOutputInterface = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ProfileActionScriptOutputInterface;

                import { GenericProfileActionScriptOutputData } from './GenericProfileActionScriptOutputData.js';
//not GWT import - same folder const GenericProfileActionScriptOutputData = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.GenericProfileActionScriptOutputData;

                
export class BasicProfileActionScriptOutput extends BasicProfileActionScriptProcessor implements ProfileActionScriptOutputInterface {
        

public constructor (label: string, node: Node){
            super(label, node);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (label: string){
            super(label);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(GenericProfileActionScriptOutputData.NAME)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



