
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
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    

export class OpenGLFeatureUtil
            extends Object
         {
        

    private static readonly instance: OpenGLFeatureUtil = new OpenGLFeatureUtil();
        
        

    public static getInstance(): OpenGLFeatureUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly anyThreed: boolean
public constructor (){

            super();
            
    var openGLConfiguration: OpenGLConfiguration = OpenGLConfiguration.getInstance()!;
        
        


    var features: Features = Features.getInstance()!;
        
        


    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        

this.anyThreed= openGLConfiguration!.isOpenGL() && (features.isFeature(openGLFeatureFactory!.OPENGL_2D_AND_3D) || features.isFeature(openGLFeatureFactory!.OPENGL_3D))
}


    public isAnyThreed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyThreed;
    
}


}
                
            

