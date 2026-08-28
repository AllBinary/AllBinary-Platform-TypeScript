
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
        



            import { Object } from '../../../java/lang/Object.js';
        
//not game specific package import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { OpenGLFeatureFactory } from '../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

      
//not game specific package import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { Memory } from '../../../org/allbinary/system/Memory.js';
      const Memory = globalThis.org.allbinary.system.Memory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameStatisticsFactory } from './GameStatisticsFactory.js';

export class SpecialMessageUtil
            extends Object
         {
        

    private static readonly SINGLETON: SpecialMessageUtil = new SpecialMessageUtil();

    public static getInstance(): SpecialMessageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SpecialMessageUtil.SINGLETON;
    
}


    public get(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(Memory.getInfo());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(GameStatisticsFactory.getInstance()!.toString());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(" Option: ");
    

                        if(Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL_AUTO_SELECT))
                        
                                    {
                                    stringBuffer!.append(OpenGLFeatureFactory.getInstance()!.OPENGL_AUTO_SELECT.getName());
    

                                    }
                                
                        else {
                            stringBuffer!.append(OpenGLFeatureFactory.getInstance()!.OPENGL_MINIMUM.getName());
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



