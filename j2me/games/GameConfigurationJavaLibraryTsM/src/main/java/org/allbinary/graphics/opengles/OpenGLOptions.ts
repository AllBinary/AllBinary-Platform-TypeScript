
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
        



import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureChoiceGroups } from "../../../../org/allbinary/game/configuration/feature/GameFeatureChoiceGroups.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { OpenGLFeatureFactory } from "./OpenGLFeatureFactory.js";

export class OpenGLOptions
            extends Object
         {
        

    public init(){

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        
;
    

                        if(Features.getInstance()!.isFeature(openGLFeatureFactory!.OPENGL_OPTIONS))
                        
                                    {
                                    
    var openGLMultipleList: BasicArrayList = new BasicArrayList();
        
        
;
    
openGLMultipleList!.add(openGLFeatureFactory!.OPENGL);
    
GameFeatureChoiceGroups.getMultipleInstance()!.add("OpenGL (Complete Restart)", openGLMultipleList);
    

    var openGLVersionSelectorMultipleList: BasicArrayList = new BasicArrayList();
        
        
;
    
openGLVersionSelectorMultipleList!.add(openGLFeatureFactory!.OPENGL_AUTO_SELECT);
    
openGLVersionSelectorMultipleList!.add(openGLFeatureFactory!.OPENGL_MINIMUM);
    
GameFeatureChoiceGroups.getExclusiveInstance()!.add("OpenGL Version Selector", openGLVersionSelectorMultipleList);
    

    var openGLImageColorMultipleList: BasicArrayList = new BasicArrayList();
        
        
;
    
openGLImageColorMultipleList!.add(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444);
    
openGLImageColorMultipleList!.add(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_8888);
    
GameFeatureChoiceGroups.getExclusiveInstance()!.add("OpenGL Image Color RGBA", openGLImageColorMultipleList);
    

                                    }
                                
}


}
                
            

