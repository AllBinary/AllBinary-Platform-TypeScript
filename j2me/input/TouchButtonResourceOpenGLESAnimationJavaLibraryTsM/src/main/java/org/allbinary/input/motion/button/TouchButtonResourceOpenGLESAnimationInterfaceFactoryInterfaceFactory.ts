
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
        



import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { OpenGLFeatureFactory } from "../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { OpenGLImageCacheFactory } from "../../../../../org/allbinary/image/opengles/OpenGLImageCacheFactory.js";

    

export class TouchButtonResourceOpenGLESAnimationInterfaceFactoryInterfaceFactory extends TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory {
        
public constructor ()                        

                            : super("OpenGL TouchButton Animations"){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public init(level: number){
var level = level
super.init(OpenGLImageCacheFactory.getInstance(), level);
    
}


    public isFeature(): boolean{

                        if(Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}
                
            

