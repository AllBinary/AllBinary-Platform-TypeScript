
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
        



            import { Integer } from '../../../../../../java/lang/Integer.js';
        
//not game specific package import { AndroidResources } from '../../../../../../org/allbinary/AndroidResources.js';
      const AndroidResources = globalThis.org.allbinary.AndroidResources;

      
//not game specific package import { ResourceUtil } from '../../../../../../org/allbinary/data/resource/ResourceUtil.js';
      const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
//not game specific package import { Init } from '../../../../../../org/allbinary/init/Init.js';
      const Init = globalThis.org.allbinary.init.Init;

      
//not game specific package import { CommonButtons } from '../../../../../../org/allbinary/input/motion/button/CommonButtons.js';
      const CommonButtons = globalThis.org.allbinary.input.motion.button.CommonButtons;

      
//not game specific package import { TouchButtonBlankResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonBlankResource.js';
      const TouchButtonBlankResource = globalThis.org.allbinary.input.motion.button.TouchButtonBlankResource;

      
//not game specific package import { TouchButtonDownResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonDownResource.js';
      const TouchButtonDownResource = globalThis.org.allbinary.input.motion.button.TouchButtonDownResource;

      
//not game specific package import { TouchButtonGenericActionResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonGenericActionResource.js';
      const TouchButtonGenericActionResource = globalThis.org.allbinary.input.motion.button.TouchButtonGenericActionResource;

      
//not game specific package import { TouchButtonResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonResource.js';
      const TouchButtonResource = globalThis.org.allbinary.input.motion.button.TouchButtonResource;

      
//not game specific package import { TouchButtonStartResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonStartResource.js';
      const TouchButtonStartResource = globalThis.org.allbinary.input.motion.button.TouchButtonStartResource;

      
//not game specific package import { TouchButtonStrafeLeftResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonStrafeLeftResource.js';
      const TouchButtonStrafeLeftResource = globalThis.org.allbinary.input.motion.button.TouchButtonStrafeLeftResource;

      
//not game specific package import { TouchButtonStrafeRightResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonStrafeRightResource.js';
      const TouchButtonStrafeRightResource = globalThis.org.allbinary.input.motion.button.TouchButtonStrafeRightResource;

      
//not game specific package import { TouchButtonTurnLeftResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonTurnLeftResource.js';
      const TouchButtonTurnLeftResource = globalThis.org.allbinary.input.motion.button.TouchButtonTurnLeftResource;

      
//not game specific package import { TouchButtonTurnRightResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonTurnRightResource.js';
      const TouchButtonTurnRightResource = globalThis.org.allbinary.input.motion.button.TouchButtonTurnRightResource;

      
//not game specific package import { TouchButtonUpResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonUpResource.js';
      const TouchButtonUpResource = globalThis.org.allbinary.input.motion.button.TouchButtonUpResource;

      
//not game specific package import { OperatingSystemFactory } from '../../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
      const OperatingSystemFactory = globalThis.org.allbinary.logic.system.os.OperatingSystemFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TouchButtonAndroidResources extends Init {
        

    public init(){

    var resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;;
    

    var androidResources: AndroidResources = AndroidResources.getInstance()!;;
    

    var RESOURCE_STRING_ARRAY: TouchButtonResource[] = 
                                                        [
                                                            TouchButtonBlankResource.getInstance(), TouchButtonGenericActionResource.getInstance(), TouchButtonStartResource.getInstance(), TouchButtonUpResource.getInstance(), TouchButtonDownResource.getInstance(), TouchButtonTurnLeftResource.getInstance(), TouchButtonTurnRightResource.getInstance(), TouchButtonStrafeLeftResource.getInstance(), TouchButtonStrafeRightResource.getInstance()
                                                        ];;
    

    var RESOURCE_ARRAY: number[] = new Array(RESOURCE_STRING_ARRAY.length);;
    

                        if(CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE == 128)
                        
                                    {
                                    RESOURCE_ARRAY[0]= androidResources!.raw.touch_button_128_by_128;
    
RESOURCE_ARRAY[1]= androidResources!.raw.touch_button_generic_action_128_by_128;
    
RESOURCE_ARRAY[2]= androidResources!.raw.touch_button_start_128_by_128;
    
RESOURCE_ARRAY[3]= androidResources!.raw.touch_button_up_arrow_128_by_128;
    
RESOURCE_ARRAY[4]= androidResources!.raw.touch_button_down_arrow_128_by_128;
    
RESOURCE_ARRAY[5]= androidResources!.raw.touch_button_turn_left_arrow_128_by_128;
    
RESOURCE_ARRAY[6]= androidResources!.raw.touch_button_turn_right_arrow_128_by_128;
    
RESOURCE_ARRAY[7]= androidResources!.raw.touch_button_strafe_left_arrow_128_by_128;
    
RESOURCE_ARRAY[8]= androidResources!.raw.touch_button_strafe_right_arrow_128_by_128;
    

                        if(OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan())
                        
                                    {
                                    resourceUtil!.addResource(RESOURCE_STRING_ARRAY[2]!.HINT, Integer.valueOf(androidResources!.raw.ouya_o));
    

                                    }
                                

                                    }
                                
                        else {
                            RESOURCE_ARRAY[0]= androidResources!.raw.touch_button_64_by_64;
    
RESOURCE_ARRAY[1]= androidResources!.raw.touch_button_generic_action_64_by_64;
    
RESOURCE_ARRAY[2]= androidResources!.raw.touch_button_start_64_by_64;
    
RESOURCE_ARRAY[3]= androidResources!.raw.touch_button_up_arrow_64_by_64;
    
RESOURCE_ARRAY[4]= androidResources!.raw.touch_button_down_arrow_64_by_64;
    
RESOURCE_ARRAY[5]= androidResources!.raw.touch_button_turn_left_arrow_64_by_64;
    
RESOURCE_ARRAY[6]= androidResources!.raw.touch_button_turn_right_arrow_64_by_64;
    
RESOURCE_ARRAY[7]= androidResources!.raw.touch_button_strafe_left_arrow_64_by_64;
    
RESOURCE_ARRAY[8]= androidResources!.raw.touch_button_strafe_right_arrow_64_by_64;
    

                        }
                            




                        for (
    var index: number = 0;index < RESOURCE_ARRAY.length; index++)
        {
resourceUtil!.addResource(RESOURCE_STRING_ARRAY[index]!.RESOURCE, Integer.valueOf(RESOURCE_ARRAY[index]!));
    
}

}


}



