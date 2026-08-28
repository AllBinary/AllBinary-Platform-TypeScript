
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../java/lang/Long.js';
        
//not game specific package import { ProfileActionScriptItemInterface } from '../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptItemInterface.js';
      const ProfileActionScriptItemInterface = globalThis.org.allbinary.input.automation.actions.script.ProfileActionScriptItemInterface;

      
//not game specific package import { ProfileActionScriptNodeInterface } from '../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptNodeInterface.js';
      const ProfileActionScriptNodeInterface = globalThis.org.allbinary.input.automation.actions.script.ProfileActionScriptNodeInterface;

      
//not game specific package import { ProfileActionScriptProcessorInterface } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/ProfileActionScriptProcessorInterface.js';
      const ProfileActionScriptProcessorInterface = globalThis.org.allbinary.input.automation.actions.script.condition.processors.ProfileActionScriptProcessorInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomTreeNodeInterface } from './CustomTreeNodeInterface.js';

export interface ProfileActionScriptConditionInterface extends ProfileActionScriptNodeInterface, CustomTreeNodeInterface, ProfileActionScriptItemInterface {
        

    addProcessor(profileActionProcessorInterface: ProfileActionScriptProcessorInterface)

    removeProcessor(profileActionProcessorInterface: ProfileActionScriptProcessorInterface)

                //@Throws(Exception.constructor)
            
    shouldProcess(frame: Long): boolean

}



