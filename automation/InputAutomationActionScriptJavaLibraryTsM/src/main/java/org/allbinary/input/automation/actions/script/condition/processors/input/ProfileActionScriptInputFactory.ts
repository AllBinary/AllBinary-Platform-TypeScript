
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
        



import { DomSearchHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    

import { KeyboardActionScriptInputData } from "./KeyboardActionScriptInputData.js";

import { MouseActionScriptInputData } from "./MouseActionScriptInputData.js";

export class ProfileActionScriptInputFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
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
                            


                            throw new Error("No Such ActionScript Input")

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return profileActionScriptInputInterface;
    
}

private constructor (){

            super();
            }


}
                
            

