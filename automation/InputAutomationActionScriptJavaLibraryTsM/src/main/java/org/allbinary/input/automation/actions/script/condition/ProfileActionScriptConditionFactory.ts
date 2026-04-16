
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
        



import { DomSearchHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

import { ColorAtActionScriptConditionData } from "./ColorAtActionScriptConditionData.js";

import { TimeIntervalActionScriptConditionData } from "./TimeIntervalActionScriptConditionData.js";

import { AlwaysActionScriptConditionData } from "./AlwaysActionScriptConditionData.js";

export class ProfileActionScriptConditionFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(node: Node): ProfileActionScriptConditionInterface{
var node = node

    var profileActionScriptConditionInterface: ProfileActionScriptConditionInterface = 
                null
            ;
        
        
;
    

                        if(DomSearchHelper.getNodeNoThrow(ColorAtActionScriptConditionData.NAME, node.getChildNodes()) != 
                                    null
                                )
                        
                                    {
                                    profileActionScriptConditionInterface= new ColorAtActionScriptCondition(node);
    

                                    }
                                
                             else 
                        if(DomSearchHelper.getNodeNoThrow(TimeIntervalActionScriptConditionData.NAME, node.getChildNodes()) != 
                                    null
                                )
                        
                                    {
                                    profileActionScriptConditionInterface= new TimeIntervalActionScriptCondition(node);
    

                                    }
                                
                             else 
                        if(DomSearchHelper.getNodeNoThrow(AlwaysActionScriptConditionData.NAME, node.getChildNodes()) != 
                                    null
                                )
                        
                                    {
                                    profileActionScriptConditionInterface= new AlwaysActionScriptCondition(node);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return profileActionScriptConditionInterface;
    
}

private constructor (){

            super();
            }


}
                
            

