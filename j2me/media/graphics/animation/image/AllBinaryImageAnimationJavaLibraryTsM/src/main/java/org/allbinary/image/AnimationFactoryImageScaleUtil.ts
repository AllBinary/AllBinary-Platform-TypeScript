
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

    
import { AnimationFactoryInitializationVisitor } from '../../../org/allbinary/animation/image/AnimationFactoryInitializationVisitor.js';

    
import { BaseImageAnimationFactory } from '../../../org/allbinary/animation/image/BaseImageAnimationFactory.js';

    
import { ScaleProperties } from '../../../org/allbinary/media/ScaleProperties.js';

    
import { ImageJ2MEScaleUtil } from '../../../org/allbinary/media/image/ImageJ2MEScaleUtil.js';

    

















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
    //var image = image
    //var width = width
    //var height = height
    //var scaleWidth = scaleWidth
    //var scaleHeight = scaleHeight

    var scaledImage: Image
;
    

                        if(scaleWidth != 0 && scaleHeight != 0)
                        
                                    {
                                    
    var scaleX: number = (scaleWidth) /(width);
;
    

    var scaleY: number = (scaleHeight) /(height);
;
    

                        if((scaleX == 1.0 && scaleY == 1.0) || (scaleX == 0.0 || scaleY == 0.0))
                        
                                    {
                                    scaledImage= image;
    

                                    }
                                
                        else {
                            scaledImage= this.imageScaleUtil!.scale(image, Math.round((scaleX *width)), Math.round((scaleY *height)));
    

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
    //var baseImageAnimationFactory = baseImageAnimationFactory

    var scaleProperties: ScaleProperties = baseImageAnimationFactory!.getScalePropertiesP()!;
;
    

                        if(scaleProperties!.scaleWidth != 0 && scaleProperties!.scaleHeight != 0)
                        
                                    {
                                    
    var animationFactoryInitializationVisitor: AnimationFactoryInitializationVisitor = baseImageAnimationFactory!.getAnimationFactoryInitializationVisitorP()!;
;
    

    var scaleX: number = (scaleProperties!.scaleWidth) /(animationFactoryInitializationVisitor!.width);
;
    

    var scaleY: number = (scaleProperties!.scaleHeight) /(animationFactoryInitializationVisitor!.height);
;
    

                        if((scaleX == 1.0 && scaleY == 1.0) || (scaleX == 0.0 || scaleY == 0.0))
                        
                                    {
                                    
                                    }
                                
                        else {
                            animationFactoryInitializationVisitor!.dx= Math.round((animationFactoryInitializationVisitor!.originalDx *scaleX));
    
animationFactoryInitializationVisitor!.dy= Math.round((animationFactoryInitializationVisitor!.originalDy *scaleY));
    

                        }
                            

                                    }
                                
                        else {
                            
                        }
                            
}


}
                
            

