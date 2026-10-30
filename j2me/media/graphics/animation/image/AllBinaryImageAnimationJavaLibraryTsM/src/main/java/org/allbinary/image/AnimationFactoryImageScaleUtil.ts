
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { Image } from '../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { AnimationFactoryInitializationVisitor } from '../../../org/allbinary/animation/image/AnimationFactoryInitializationVisitor.js';
//not GWT import const AnimationFactoryInitializationVisitor

import { BaseImageAnimationFactory } from '../../../org/allbinary/animation/image/BaseImageAnimationFactory.js';
//not GWT import const BaseImageAnimationFactory

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

import { ScaleProperties } from '../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const ScaleProperties

import { ImageJ2MEScaleUtil } from '../../../org/allbinary/media/image/ImageJ2MEScaleUtil.js';
//not GWT import const ImageJ2MEScaleUtil

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AnimationFactoryImageScaleUtil
            extends Object
         {
        

    private static readonly instance: AnimationFactoryImageScaleUtil = new AnimationFactoryImageScaleUtil();

    public static getInstance(): AnimationFactoryImageScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AnimationFactoryImageScaleUtil.instance;
    
}


    private readonly imageScaleUtil: ImageJ2MEScaleUtil = ImageJ2MEScaleUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public createImage(image: Image, width: number, height: number, scaleWidth: number, scaleHeight: number): Image{

    var scaledImage: Image;;
    

                        if(scaleWidth != 0 && scaleHeight != 0)
                        
                                    {
                                    
    var scaleX: number = (scaleWidth) /(width);;
    

    var scaleY: number = (scaleHeight) /(height);;
    

                        if((scaleX == 1.0 && scaleY == 1.0) || (scaleX == 0.0 || scaleY == 0.0))
                        
                                    {
                                    scaledImage= image;
    

                                    }
                                
                        else {
                            
    var scaledWidth: number = globalThis.Math.trunc((scaleX *width));;
    

    var scaledHeight: number = globalThis.Math.trunc((scaleY *height));;
    
scaledImage= this.imageScaleUtil!.scale(image, scaledWidth, scaledHeight);
    

                        }
                            

                                    }
                                
                        else {
                            scaledImage= image;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaledImage;
    
}


                //@Throws(Exception.constructor)
            
    public processAdjust(baseImageAnimationFactory: BaseImageAnimationFactory){

    var scaleProperties: ScaleProperties = baseImageAnimationFactory!.getScalePropertiesP()!;;
    

                        if(scaleProperties!.scaleWidth != 0 && scaleProperties!.scaleHeight != 0)
                        
                                    {
                                    
    var animationFactoryInitializationVisitor: AnimationFactoryInitializationVisitor = baseImageAnimationFactory!.getAnimationFactoryInitializationVisitorP()!;;
    

    var scaleX: number = (scaleProperties!.scaleWidth) /(animationFactoryInitializationVisitor!.width);;
    

    var scaleY: number = (scaleProperties!.scaleHeight) /(animationFactoryInitializationVisitor!.height);;
    

                        if((scaleX == 1.0 && scaleY == 1.0) || (scaleX == 0.0 || scaleY == 0.0))
                        
                                    {
                                    
                                    }
                                
                        else {
                            animationFactoryInitializationVisitor!.dx= globalThis.Math.trunc((animationFactoryInitializationVisitor!.originalDx *scaleX));
    
animationFactoryInitializationVisitor!.dy= globalThis.Math.trunc((animationFactoryInitializationVisitor!.originalDy *scaleY));
    

                        }
                            

                                    }
                                
                        else {
                            
                        }
                            
}


}



