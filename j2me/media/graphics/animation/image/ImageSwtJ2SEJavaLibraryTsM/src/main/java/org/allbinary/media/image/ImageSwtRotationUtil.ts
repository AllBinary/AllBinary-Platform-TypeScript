
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { SWT } from "../../../../org/eclipse/swt/SWT.js";

    
import { GC } from "../../../../org/eclipse/swt/graphics/GC.js";

    
import { ImageData } from "../../../../org/eclipse/swt/graphics/ImageData.js";

    
import { Transform } from "../../../../org/eclipse/swt/graphics/Transform.js";

    
import { SwtImmutableImage } from "../../../../org/microemu/device/swt/SwtImmutableImage.js";

    
import { SwtMutableImage } from "../../../../org/microemu/device/swt/SwtMutableImage.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageUtil } from "./ImageUtil.js";

export class ImageSwtRotationUtil
            extends Object
         {
        

    private static readonly instance: ImageSwtRotationUtil = new ImageSwtRotationUtil();
        
        

    public static getInstance(): ImageSwtRotationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        

    private readonly gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;
        
        

    private readonly features: Features = Features.getInstance()!;
        
        

    private readonly NO_COPY: string = "SWT should not copy images after initial loading as the alpha is not honored";
        
        
private constructor (){

            super();
            }


    public getRotatedImage(bufferedImage: org.eclipse.swt.graphics.Image, totalAngle: number): org.eclipse.swt.graphics.Image{
    //var bufferedImage = bufferedImage
    //var totalAngle = totalAngle

                        if(!features.isFeature(gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION);

                        )
                        
                                    {
                                    this.logUtil!.putF(NO_COPY, this, commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


    getRotatedImage2(bufferedImage: org.eclipse.swt.graphics.Image, newBufferedImage: org.eclipse.swt.graphics.Image, gc: GC, angle: number): org.eclipse.swt.graphics.Image{
    //var bufferedImage = bufferedImage
    //var newBufferedImage = newBufferedImage
    //var gc = gc
    //var angle = angle

                        if(!features.isFeature(gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION);

                        )
                        
                                    {
                                    this.logUtil!.putF(NO_COPY, this, commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


    public rotateImage(originalSwtImage: org.eclipse.swt.graphics.Image, newSwtImage: org.eclipse.swt.graphics.Image, gc: GC, totalAngle: number): org.eclipse.swt.graphics.Image{
    //var originalSwtImage = originalSwtImage
    //var newSwtImage = newSwtImage
    //var gc = gc
    //var totalAngle = totalAngle



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRotatedImage2(originalSwtImage, newSwtImage, gc, totalAngle);

                        ;
    
}


    public getRotatedImage(bufferedImage: org.eclipse.swt.graphics.Image, newSwtImage: org.eclipse.swt.graphics.Image, gc: GC, totalAngle: number): org.eclipse.swt.graphics.Image{
    //var bufferedImage = bufferedImage
    //var newSwtImage = newSwtImage
    //var gc = gc
    //var totalAngle = totalAngle



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRotatedImage2(bufferedImage, newSwtImage, gc, totalAngle);

                        ;
    
}


    public getRotatedImages(bufferedImage: org.eclipse.swt.graphics.Image, numberOfFrames: number, totalAngle: number): org.eclipse.swt.graphics.Image[]{
    //var bufferedImage = bufferedImage
    //var numberOfFrames = numberOfFrames
    //var totalAngle = totalAngle

    var bufferedImageArray: org.eclipse.swt.graphics.Image[] = new Array(numberOfFrames);
        
        
;
    

    var angle: number= 0
;
    

    var size: number = bufferedImageArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
angle= (totalAngle /size) *index;
    
bufferedImageArray[index]= this.getRotatedImage(bufferedImage, angle);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImageArray;
    
}


    public createSpriteImage(bufferedImageArray: org.eclipse.swt.graphics.Image[]): org.eclipse.swt.graphics.Image{
    //var bufferedImageArray = bufferedImageArray

    var columns: number = 9;
        
        
;
    

    var rows: number = 0;
        
        
;
    

    var size: number = bufferedImageArray!.length
                ;
        
        
;
    

                        if(size < columns)
                        
                                    {
                                    columns= size;
    

                                    }
                                
rows= (size /columns);
    

                        if(size % columns != 0)
                        
                                    {
                                    rows++;
    

                                    }
                                

    var firstBufferedImage: org.eclipse.swt.graphics.Image = bufferedImageArray[0]!;
        
        
;
    

    var imageData: ImageData = firstBufferedImage!.getImageData()!;
        
        
;
    

    var bufferedImage: org.eclipse.swt.graphics.Image = this.imageUtil!.create(imageData!.width *columns, imageData!.height *rows)!;
        
        
;
    

    var gc: GC = new GC(bufferedImage);
        
        
;
    
gc.setAntialias(SWT.ON);
    
gc.setInterpolation(SWT.HIGH);
    

    var columnIndex: number = 0;
        
        
;
    

    var rowIndex: number = 0;
        
        
;
    

    var nextBufferedImage: org.eclipse.swt.graphics.Image
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(index /9 != 0 && index % 9 == 0)
                        
                                    {
                                    rowIndex++;
    
columnIndex= 0;
    

                                    }
                                
nextBufferedImage= bufferedImageArray[index]!;
    
imageData= nextBufferedImage!.getImageData();
    
gc.drawImage(bufferedImage, 0, 0, bufferedImage!.getBounds()!.width, bufferedImage!.getBounds()!.height, imageData!.width *columnIndex, imageData!.height *rowIndex, imageData!.width, imageData!.height);
    
columnIndex++;
    
}

gc.dispose();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


}
                
            

