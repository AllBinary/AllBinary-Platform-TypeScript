
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
      //not GWT import const Image = globalThis.javax.microedition.lcdui.Image;

      
import { Sprite } from '../../../../javax/microedition/lcdui/game/Sprite.js';
      //not GWT import const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;

      
//not plain js import { SpriteFactory } from '../../../../org/allbinary/game/layer/SpriteFactory.js';
      const SpriteFactory = globalThis.org.allbinary.game.layer.SpriteFactory;

      
import { OpenGLUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLUtil.js';
      //not GWT import const OpenGLUtil = globalThis.org.allbinary.graphics.opengles.OpenGLUtil;

      
import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
      //not GWT import const ImageCache = globalThis.org.allbinary.image.ImageCache;

      
import { ImageCacheFactory } from '../../../../org/allbinary/image/ImageCacheFactory.js';
      //not GWT import const ImageCacheFactory = globalThis.org.allbinary.image.ImageCacheFactory;

      
import { OpenGLESImageExclusionUtil } from '../../../../org/allbinary/image/opengles/OpenGLESImageExclusionUtil.js';
      //not GWT import const OpenGLESImageExclusionUtil = globalThis.org.allbinary.image.opengles.OpenGLESImageExclusionUtil;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { J2SEMath } from '../../../../org/allbinary/logic/math/J2SEMath.js';
      //not GWT import const J2SEMath = globalThis.org.allbinary.logic.math.J2SEMath;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { ImageScaleUtil } from '../../../../org/allbinary/media/image/ImageScaleUtil.js';
      const ImageScaleUtil = globalThis.org.allbinary.media.image.ImageScaleUtil;

      
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
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

    var spriteFactory: SpriteFactory = SpriteFactory.getInstance()!;;
    

    var sprite: Sprite;;
    

    var scaledImage: Image;;
    

                        if(scaleWidth != 0 && scaleHeight != 0)
                        
                                    {
                                    
    var scaleX: number = (scaleWidth) /(width);;
    

    var scaleY: number = (scaleHeight) /(height);;
    

                        if((scaleX == 1.0 && scaleY == 1.0) || (scaleX == 0.0 || scaleY == 0.0))
                        
                                    {
                                    scaledImage= this.openGLUtil!.addImage(image);
    
sprite= spriteFactory!.createSprite(scaledImage, width, height);
    

                                    }
                                
                        else {
                            
                        if(this.openGLESImageExclusionUtil!.isCustomScaling(image))
                        
                                    {
                                    
    var width2: number = this.j2seMath!.round((scaleWidth) -0.5)!;;
    

    var height2: number = this.j2seMath!.round((scaleHeight) -0.5)!;;
    

    var multiplesOf16Width: number = width2 /16;;
    

    var by16Width: number = multiplesOf16Width *16;;
    
scaleX= (by16Width) /width;
    

    var multiplesOf16Height: number = height2 /16;;
    

    var by16Height: number = multiplesOf16Height *16;;
    
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
    
sprite= spriteFactory!.createSprite(scaledImage, Math.round((width *scaleX)), Math.round((height *scaleY)));
    

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



