
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
        
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features

import { GameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/GameFeatureChoiceGroups.js';
//not GWT import const GameFeatureChoiceGroups

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLFeatureFactory } from './OpenGLFeatureFactory.js';
//sameFolderImports - not GWT import - same folder const OpenGLFeatureFactory

export class OpenGLOptions
            extends Object
         {
        

    public init(){

    let openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;;
    

                        if(Features.getInstance()!.isFeature(openGLFeatureFactory!.OPENGL_OPTIONS))
                        
                                    {
                                    
    let openGLMultipleList: BasicArrayList = new BasicArrayListD();;
    
openGLMultipleList!.add(openGLFeatureFactory!.OPENGL);
    
GameFeatureChoiceGroups.getMultipleInstance()!.add("OpenGL (Complete Restart)", openGLMultipleList);
    

    let openGLVersionSelectorMultipleList: BasicArrayList = new BasicArrayListD();;
    
openGLVersionSelectorMultipleList!.add(openGLFeatureFactory!.OPENGL_AUTO_SELECT);
    
openGLVersionSelectorMultipleList!.add(openGLFeatureFactory!.OPENGL_MINIMUM);
    
GameFeatureChoiceGroups.getExclusiveInstance()!.add("OpenGL Version Selector", openGLVersionSelectorMultipleList);
    

    let openGLImageColorMultipleList: BasicArrayList = new BasicArrayListD();;
    
openGLImageColorMultipleList!.add(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444);
    
openGLImageColorMultipleList!.add(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_8888);
    
GameFeatureChoiceGroups.getExclusiveInstance()!.add("OpenGL Image Color RGBA", openGLImageColorMultipleList);
    

                                    }
                                
}


}

