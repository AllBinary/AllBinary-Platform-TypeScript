
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

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptInputInterface } from './ProfileActionScriptInputInterface.js';
//not GWT import - same folder const ProfileActionScriptInputInterface = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.ProfileActionScriptInputInterface;

                import { KeyboardActionScriptInputData } from './KeyboardActionScriptInputData.js';
//not GWT import - same folder const KeyboardActionScriptInputData = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.KeyboardActionScriptInputData;

                import { MouseActionScriptInputData } from './MouseActionScriptInputData.js';
//not GWT import - same folder const MouseActionScriptInputData = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.MouseActionScriptInputData;

                import { MouseActionScriptInput } from './MouseActionScriptInput.js';
//not GWT import - same folder const MouseActionScriptInput = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.MouseActionScriptInput;

                import { KeyboardActionScriptInput } from './KeyboardActionScriptInput.js';
//not GWT import - same folder const KeyboardActionScriptInput = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.KeyboardActionScriptInput;

                
export class ProfileActionScriptInputFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(node: Node): ProfileActionScriptInputInterface{

    var profileActionScriptInputInterface: ProfileActionScriptInputInterface = 
                null
            ;;
    

                        if(DomSearchHelper.getNodeNoThrow(KeyboardActionScriptInputData.NAME, node.getChildNodes()) != 
                                    null
                                )
                        
                                    {
                                    profileActionScriptInputInterface= new KeyboardActionScriptInput(node);
    

                                    }
                                
                             else 
                        if(DomSearchHelper.getNodeNoThrow(MouseActionScriptInputData.NAME, node.getChildNodes()) != 
                                    null
                                )
                        
                                    {
                                    profileActionScriptInputInterface= new MouseActionScriptInput(node);
    

                                    }
                                
                        else {
                            


                            throw new Exception("No Such ActionScript Input");
                    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return profileActionScriptInputInterface;
    
}


private constructor (){

            super();
        }


}



