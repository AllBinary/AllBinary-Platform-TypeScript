
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
        
import { GL } from '../../../javax/microedition/khronos/opengles/GL.js';
//not GWT import const GL

import { ChoiceGroupImageFactory } from '../../../javax/microedition/lcdui/ChoiceGroupImageFactory.js';
//not GWT import const ChoiceGroupImageFactory

import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { Image } from '../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { OpenGLFeatureFactory } from '../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory

import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PreResourceImageUtil } from './PreResourceImageUtil.js';
//not GWT import - same folder const PreResourceImageUtil

export class ChoiceGroupImageUtil
            extends Object
         {
        

    private static readonly instance: ChoiceGroupImageUtil = new ChoiceGroupImageUtil();

    public static getInstance(): ChoiceGroupImageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ChoiceGroupImageUtil.instance;
    
}


    public init(){

    var features: Features = Features.getInstance()!;;
    

    var choiceGroupFactory: ChoiceGroupImageFactory = ChoiceGroupImageFactory.getInstance()!;;
    

    var imageArray: Image[] = choiceGroupFactory!.getImageArray()!;;
    

                        if(features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    
    var preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;;
    

    var size: number = imageArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
imageArray[index]= preResourceImageUtil!.encapsulate(imageArray[index]!);
    
}

choiceGroupFactory!.init(imageArray);
    

                                    }
                                
}


    public update(gl: GL){

    var features: Features = Features.getInstance()!;;
    

    var choiceGroupFactory: ChoiceGroupImageFactory = ChoiceGroupImageFactory.getInstance()!;;
    

    var imageArray: Image[] = choiceGroupFactory!.getImageArray()!;;
    

                        if(features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    
    var preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;;
    

    var size: number = imageArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
preResourceImageUtil!.updateGL(gl, imageArray[index]!);
    
}


                                    }
                                
choiceGroupFactory!.init(imageArray);
    
}


    public update(graphics: Graphics){

    var features: Features = Features.getInstance()!;;
    

    var choiceGroupFactory: ChoiceGroupImageFactory = ChoiceGroupImageFactory.getInstance()!;;
    

    var imageArray: Image[] = choiceGroupFactory!.getImageArray()!;;
    

                        if(features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    
    var preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;;
    

    var size: number = imageArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
preResourceImageUtil!.update(graphics, imageArray[index]!);
    
}


                                    }
                                
choiceGroupFactory!.init(imageArray);
    
}


}



