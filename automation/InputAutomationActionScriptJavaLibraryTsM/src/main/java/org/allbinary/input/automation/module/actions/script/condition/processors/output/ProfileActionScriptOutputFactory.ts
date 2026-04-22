
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
        



import { DomSearchHelper } from "../../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { Node } from "../../../../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageActionScriptOutputData } from "./ImageActionScriptOutputData.js";

import { ProfileActionScriptOutputInterface } from "./ProfileActionScriptOutputInterface.js";

export class ProfileActionScriptOutputFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(node: Node): ProfileActionScriptOutputInterface{
var node = node

    var profileActionScriptOutputInterface: ProfileActionScriptOutputInterface = 
                null
            ;
        
        
;
    

                        if(DomSearchHelper.getNodeNoThrow(ImageActionScriptOutputData.NAME, node.getChildNodes()) != 
                                    null
                                )
                        
                                    {
                                    profileActionScriptOutputInterface= new ImageActionScriptOutput(node);
    

                                    }
                                
                        else {
                            


                            throw new Error("No Such ActionScript Output")

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return profileActionScriptOutputInterface;
    
}

private constructor (){

            super();
        }


}
                
            

