
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

    
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptInputInterface } from './ProfileActionScriptInputInterface.js';
import { KeyboardActionScriptInputData } from './KeyboardActionScriptInputData.js';
import { MouseActionScriptInputData } from './MouseActionScriptInputData.js';
import { MouseActionScriptInput } from './MouseActionScriptInput.js';
import { KeyboardActionScriptInput } from './KeyboardActionScriptInput.js';

export class ProfileActionScriptInputFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(node: Node): ProfileActionScriptInputInterface{
var node = node

    var profileActionScriptInputInterface: ProfileActionScriptInputInterface = 
                null
            ;
;
    

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
                
            

