
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
        



import { GL } from "../../../javax/microedition/khronos/opengles/GL.js";

    
import { ChoiceGroupImageFactory } from "../../../javax/microedition/lcdui/ChoiceGroupImageFactory.js";

    
import { Graphics } from "../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../javax/microedition/lcdui/Image.js";

    
import { OpenGLFeatureFactory } from "../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { Features } from "../../../org/allbinary/game/configuration/feature/Features.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PreResourceImageUtil } from "./PreResourceImageUtil.js";

export class ChoiceGroupImageUtil
            extends Object
         {
        

    private static readonly instance: ChoiceGroupImageUtil = new ChoiceGroupImageUtil();
        
        

    public static getInstance(): ChoiceGroupImageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public init(){

    var features: Features = Features.getInstance()!;
        
        
;
    

    var choiceGroupFactory: ChoiceGroupImageFactory = ChoiceGroupImageFactory.getInstance()!;
        
        
;
    

    var imageArray: Image[] = choiceGroupFactory!.getImageArray()!;
        
        
;
    

                        if(features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    
    var preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;
        
        
;
    

    var size: number = imageArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
imageArray[index]= preResourceImageUtil!.encapsulate(imageArray[index]!);
    
}

choiceGroupFactory!.init(imageArray);
    

                                    }
                                
}


    public update(gl: GL){
var gl = gl

    var features: Features = Features.getInstance()!;
        
        
;
    

    var choiceGroupFactory: ChoiceGroupImageFactory = ChoiceGroupImageFactory.getInstance()!;
        
        
;
    

    var imageArray: Image[] = choiceGroupFactory!.getImageArray()!;
        
        
;
    

                        if(features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    
    var preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;
        
        
;
    

    var size: number = imageArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
preResourceImageUtil!.update(gl, imageArray[index]!);
    
}


                                    }
                                
choiceGroupFactory!.init(imageArray);
    
}


    public update(graphics: Graphics){
var graphics = graphics

    var features: Features = Features.getInstance()!;
        
        
;
    

    var choiceGroupFactory: ChoiceGroupImageFactory = ChoiceGroupImageFactory.getInstance()!;
        
        
;
    

    var imageArray: Image[] = choiceGroupFactory!.getImageArray()!;
        
        
;
    

                        if(features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    
    var preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;
        
        
;
    

    var size: number = imageArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
preResourceImageUtil!.update(graphics, imageArray[index]!);
    
}


                                    }
                                
choiceGroupFactory!.init(imageArray);
    
}


}
                
            

