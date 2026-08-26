
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
//not game specific package import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { GameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/GameFeatureChoiceGroups.js';
      const GameFeatureChoiceGroups = globalThis.org.allbinary.game.configuration.feature.GameFeatureChoiceGroups;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLFeatureFactory } from './OpenGLFeatureFactory.js';

export class OpenGLOptions
            extends Object
         {
        

    public init(){

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;;
    

                        if(Features.getInstance()!.isFeature(openGLFeatureFactory!.OPENGL_OPTIONS))
                        
                                    {
                                    
    var openGLMultipleList: BasicArrayList = new BasicArrayListD();;
    
openGLMultipleList!.add(openGLFeatureFactory!.OPENGL);
    
GameFeatureChoiceGroups.getMultipleInstance()!.add("OpenGL (Complete Restart)", openGLMultipleList);
    

    var openGLVersionSelectorMultipleList: BasicArrayList = new BasicArrayListD();;
    
openGLVersionSelectorMultipleList!.add(openGLFeatureFactory!.OPENGL_AUTO_SELECT);
    
openGLVersionSelectorMultipleList!.add(openGLFeatureFactory!.OPENGL_MINIMUM);
    
GameFeatureChoiceGroups.getExclusiveInstance()!.add("OpenGL Version Selector", openGLVersionSelectorMultipleList);
    

    var openGLImageColorMultipleList: BasicArrayList = new BasicArrayListD();;
    
openGLImageColorMultipleList!.add(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444);
    
openGLImageColorMultipleList!.add(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_8888);
    
GameFeatureChoiceGroups.getExclusiveInstance()!.add("OpenGL Image Color RGBA", openGLImageColorMultipleList);
    

                                    }
                                
}


}
                
            

