
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
        



import { ProfileActionScriptItemInterface } from "../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptItemInterface.js";

    
import { ProfileActionScriptNodeInterface } from "../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptNodeInterface.js";

    
import { ProfileActionScriptProcessorInterface } from "../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/ProfileActionScriptProcessorInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CustomTreeNodeInterface } from "./CustomTreeNodeInterface.js";

export interface ProfileActionScriptConditionInterface extends ProfileActionScriptNodeInterface, CustomTreeNodeInterface, ProfileActionScriptItemInterface {
        

    addProcessor(profileActionProcessorInterface: ProfileActionScriptProcessorInterface)

    removeProcessor(profileActionProcessorInterface: ProfileActionScriptProcessorInterface)

                //@Throws(Error::class)
            
    shouldProcess(frame: Long): boolean

}
                
            

