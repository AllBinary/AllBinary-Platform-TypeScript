
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
        



import { awt } from "../../../../java/awt.js";

    
import { AffineTransform } from "../../../../java/awt/geom/AffineTransform.js";

    
import { AffineTransformOp } from "../../../../java/awt/image/AffineTransformOp.js";

    
import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageUtil } from "./ImageUtil.js";

export class MirrorImageUtil
            extends Object
         {
        

    private static readonly instance: MirrorImageUtil = new MirrorImageUtil();
        
        

    public static getInstance(): MirrorImageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        
private constructor (){

            super();
        }


    public getImage(bufferedImage: BufferedImage, verticle: boolean, horizontal: boolean): BufferedImage{
var bufferedImage = bufferedImage
var verticle = verticle
var horizontal = horizontal
this.logUtil!.putF("Starting", this, "getImage");
    

    var newBufferedImage: BufferedImage = this.imageUtil!.create(bufferedImage!.getWidth(
                            null), bufferedImage!.getHeight(
                            null))!;
        
        
;
    

    var g: Graphics2D = newBufferedImage!.createGraphics()!;
        
        
;
    

                        if(verticle)
                        
                                    {
                                    
    var tx: AffineTransform = AffineTransform.getScaleInstance(1,  -1)!;
        
        
;
    
tx.translate(0,  -bufferedImage!.getHeight(
                            null);

                        );
    

    var op: AffineTransformOp = new AffineTransformOp(tx, AffineTransformOp.TYPE_NEAREST_NEIGHBOR);
        
        
;
    
bufferedImage= op.filter(bufferedImage, 
                            null);
    

                                    }
                                

                        if(horizontal)
                        
                                    {
                                    
    var tx: AffineTransform = AffineTransform.getScaleInstance( -1, 1)!;
        
        
;
    
tx.translate( -bufferedImage!.getWidth(
                            null);

                        , 0);
    

    var op: AffineTransformOp = new AffineTransformOp(tx, AffineTransformOp.TYPE_NEAREST_NEIGHBOR);
        
        
;
    
bufferedImage= op.filter(bufferedImage, 
                            null);
    

                                    }
                                
g.drawImage(bufferedImage, 0, 0, bufferedImage!.getWidth(
                            null), bufferedImage!.getHeight(
                            null), 
                            null);
    
g.dispose();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newBufferedImage;
    
}


    public getImages(bufferedImage: BufferedImage, verticle: boolean, horizontal: boolean): BufferedImage[]{
var bufferedImage = bufferedImage
var verticle = verticle
var horizontal = horizontal

    var width: number = bufferedImage!.getWidth()!;
        
        
;
    

    var height: number = bufferedImage!.getHeight()!;
        
        
;
    

    var cellHeight: number = height;
        
        
;
    

    var cellWidth: number = height;
        
        
;
    

    var numberOfFramesPerOrientation: number = width /cellWidth;
        
        
;
    

    var numberOfFrames: number = numberOfFramesPerOrientation;
        
        
;
    

                        if(verticle)
                        numberOfFrames *= 2

                        if(horizontal)
                        numberOfFrames *= 2
this.logUtil!.putF("numberOfFramesPerOrientation: " +numberOfFramesPerOrientation +" numberOfFrames: " +numberOfFrames, this, "getImages");
    

    var bufferedImageArray: BufferedImage[] = new Array(numberOfFrames);
        
        
;
    

    var y: number = 0;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfFramesPerOrientation; index++)
        {

    var x: number = index *cellWidth;
        
        
;
    
bufferedImageArray[index]= bufferedImage!.getSubimage(x, y, cellWidth, cellHeight);
    
}





                        for (
    var index: number = 0;
        
        
index < numberOfFramesPerOrientation; index++)
        {
bufferedImageArray[index +numberOfFramesPerOrientation]= this.getImage(bufferedImageArray[index]!, verticle, horizontal);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImageArray;
    
}


}
                
            

