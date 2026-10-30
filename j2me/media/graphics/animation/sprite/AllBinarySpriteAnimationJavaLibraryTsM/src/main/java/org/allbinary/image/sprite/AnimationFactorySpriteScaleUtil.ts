
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { Sprite } from '../../../../javax/microedition/lcdui/game/Sprite.js';
//not GWT import const Sprite

import { SpriteFactory } from '../../../../org/allbinary/game/layer/SpriteFactory.js';
//not GWT import const SpriteFactory

import { OpenGLUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLUtil.js';
//not GWT import const OpenGLUtil

import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
//not GWT import const ImageCache

import { ImageCacheFactory } from '../../../../org/allbinary/image/ImageCacheFactory.js';
//not GWT import const ImageCacheFactory

import { OpenGLESImageExclusionUtil } from '../../../../org/allbinary/image/opengles/OpenGLESImageExclusionUtil.js';
//not GWT import const OpenGLESImageExclusionUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { J2SEMath } from '../../../../org/allbinary/logic/math/J2SEMath.js';
//not GWT import const J2SEMath

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { ImageScaleUtil } from '../../../../org/allbinary/media/image/ImageScaleUtil.js';
//not GWT import const ImageScaleUtil

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AnimationFactorySpriteScaleUtil
            extends Object
         {
        

    private static readonly instance: AnimationFactorySpriteScaleUtil = new AnimationFactorySpriteScaleUtil();

    public static getInstance(): AnimationFactorySpriteScaleUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AnimationFactorySpriteScaleUtil.instance;
    
}


    private readonly imageCache: ImageCache = ImageCacheFactory.getInstance()!;

    private readonly imageScaleUtil: ImageScaleUtil = ImageScaleUtil.getInstance()!;

    private readonly openGLUtil: OpenGLUtil = OpenGLUtil.getInstance()!;

    private readonly j2seMath: J2SEMath = J2SEMath.getInstance()!;

    private readonly openGLESImageExclusionUtil: OpenGLESImageExclusionUtil = OpenGLESImageExclusionUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public createImage(image: Image, width: number, height: number, scaleWidth: number, scaleHeight: number): Sprite{

    let spriteFactory: SpriteFactory = SpriteFactory.getInstance()!;;
    

    let sprite: Sprite;;
    

    let scaledImage: Image;;
    

                        if(scaleWidth != 0 && scaleHeight != 0)
                        
                                    {
                                    
    let scaleX: number = (scaleWidth) /(width);;
    

    let scaleY: number = (scaleHeight) /(height);;
    

                        if((scaleX == 1.0 && scaleY == 1.0) || (scaleX == 0.0 || scaleY == 0.0))
                        
                                    {
                                    scaledImage= this.openGLUtil!.addImage(image);
    
sprite= spriteFactory!.createSprite(scaledImage, width, height);
    

                                    }
                                
                        else {
                            
                        if(this.openGLESImageExclusionUtil!.isCustomScaling(image))
                        
                                    {
                                    
    let width2: number = this.j2seMath!.round((scaleWidth) -0.5)!;;
    

    let height2: number = this.j2seMath!.round((scaleHeight) -0.5)!;;
    

    let multiplesOf16Width: number = globalThis.Math.trunc(width2 /16);;
    

    let by16Width: number = multiplesOf16Width *16;;
    
scaleX= (by16Width) /width;
    

    let multiplesOf16Height: number = globalThis.Math.trunc(height2 /16);;
    

    let by16Height: number = multiplesOf16Height *16;;
    
scaleY= (by16Height) /height;
    

                        if(scaleWidth < width)
                        
                                    {
                                    scaleX= scaleX *2.35;
    

                                    }
                                

                        if(scaleHeight < height)
                        
                                    {
                                    scaleY= scaleY *2.35;
    

                                    }
                                

                                    }
                                
scaledImage= this.imageScaleUtil!.createImage2(this.imageCache, image, scaleX, 1.0, scaleY, 1.0, true);
    
sprite= spriteFactory!.createSprite(scaledImage, globalThis.Math.trunc((width *scaleX)), globalThis.Math.trunc((height *scaleY)));
    

                        }
                            

                                    }
                                
                        else {
                            scaledImage= this.openGLUtil!.addImage(image);
    
sprite= spriteFactory!.createSprite(scaledImage, width, height);
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return sprite;
    
}


}

