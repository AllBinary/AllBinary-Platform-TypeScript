
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { awt } from '../../../../java/awt.js';
//not GWT import const awt

import { AffineTransform } from '../../../../java/awt/geom/AffineTransform.js';
//not GWT import const AffineTransform

import { AffineTransformOp } from '../../../../java/awt/image/AffineTransformOp.js';
//not GWT import const AffineTransformOp

import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageUtil } from './ImageUtil.js';
//not GWT import - same folder const ImageUtil
import { Graphics2D } from './Graphics2D.js';
//not GWT import - same folder const Graphics2D

export class MirrorImageUtil
            extends Object
         {
        

    private static readonly instance: MirrorImageUtil = new MirrorImageUtil();

    public static getInstance(): MirrorImageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MirrorImageUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;

private constructor (){

            super();
        }


    public getImage(bufferedImage: BufferedImage, verticle: boolean, horizontal: boolean): BufferedImage{
this.logUtil!.putF("Starting", this, "getImage");
    

    let newBufferedImage: BufferedImage = this.imageUtil!.create(bufferedImage!.getWidth(
                            null), bufferedImage!.getHeight(
                            null))!;;
    

    let g: Graphics2D = newBufferedImage!.createGraphics()!;;
    

                        if(verticle)
                        
                                    {
                                    
    let tx: AffineTransform = AffineTransform.getScaleInstance(1,  -1)!;;
    
tx.translate(0,  -bufferedImage!.getHeight(
                            null));
    

    let op: AffineTransformOp = new AffineTransformOp(tx, AffineTransformOp.TYPE_NEAREST_NEIGHBOR);;
    
bufferedImage= op.filter(bufferedImage, 
                            null);
    

                                    }
                                

                        if(horizontal)
                        
                                    {
                                    
    let tx: AffineTransform = AffineTransform.getScaleInstance( -1, 1)!;;
    
tx.translate( -bufferedImage!.getWidth(
                            null), 0);
    

    let op: AffineTransformOp = new AffineTransformOp(tx, AffineTransformOp.TYPE_NEAREST_NEIGHBOR);;
    
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

    let width: number = bufferedImage!.getWidth()!;;
    

    let height: number = bufferedImage!.getHeight()!;;
    

    let cellHeight: number = height;;
    

    let cellWidth: number = height;;
    

    let numberOfFramesPerOrientation: number = globalThis.Math.trunc(width /cellWidth);;
    

    let numberOfFrames: number = numberOfFramesPerOrientation;;
    

                        if(verticle)
                        numberOfFrames *= 2

                        if(horizontal)
                        numberOfFrames *= 2
this.logUtil!.putF("numberOfFramesPerOrientation: " +numberOfFramesPerOrientation +" numberOfFrames: " +numberOfFrames, this, "getImages");
    

    let bufferedImageArray: BufferedImage[] = new Array(numberOfFrames);;
    

    let y: number = 0;;
    




                        for (
    let index: number = 0;index < numberOfFramesPerOrientation; index++)
        {

    let x: number = index *cellWidth;;
    
bufferedImageArray[index]= bufferedImage!.getSubimage(x, y, cellWidth, cellHeight);
    
}





                        for (
    let index: number = 0;index < numberOfFramesPerOrientation; index++)
        {
bufferedImageArray[index +numberOfFramesPerOrientation]= this.getImage(bufferedImageArray[index]!, verticle, horizontal);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImageArray;
    
}


}

