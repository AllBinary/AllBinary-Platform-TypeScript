
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
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { awt } from '../../../../java/awt.js';
//not GWT import const awt

import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageUtil } from './ImageUtil.js';
//not GWT import - same folder const ImageUtil
import { Point } from './Point.js';
//not GWT import - same folder const Point
import { Graphics2D } from './Graphics2D.js';
//not GWT import - same folder const Graphics2D

export class ImagesRatioUtil
            extends Object
         {
        

    private static readonly instance: ImagesRatioUtil = new ImagesRatioUtil();

    public static getInstance(): ImagesRatioUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImagesRatioUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;

    public isEqual(bufferedImageArray: BufferedImage[], totalImages: number): boolean{

    let end: number = totalImages;;
    

                        if(bufferedImageArray!.length < totalImages)
                        end= bufferedImageArray!.length

    let ratio: number = (bufferedImageArray[0]!.getWidth() /bufferedImageArray[0]!.getHeight());;
    




                        for (
    let index: number = 1;index < end; index++)
        {

                        if(ratio != (bufferedImageArray[index]!.getWidth() /bufferedImageArray[index]!.getHeight()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getAverage(bufferedImageArray: BufferedImage[], totalImages: number): number{

    let ratio: number = 0;;
    

    let end: number = totalImages;;
    

                        if(bufferedImageArray!.length < totalImages)
                        end= bufferedImageArray!.length




                        for (
    let index: number = 0;index < end; index++)
        {
ratio += (bufferedImageArray[index]!.getWidth() /bufferedImageArray[index]!.getHeight());
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (ratio /end);
    
}

fudge(...args: any[]): any {
   
    if (args.length === 2 && typeof args[1] === 'number') return this.fudge$overload1(args[0], args[1]);
   
    if (args.length === 3 && typeof args[1] === 'number' && typeof args[2] === 'number') return this.fudge$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: fudge'); }
  
                //@Throws(Exception.constructor)
            
    public fudge$overload1(bufferedImage: BufferedImage, ratio: number): BufferedImage{

    let imageRatio: number = (bufferedImage!.getWidth() /bufferedImage!.getHeight());;
    

    let point: Point = new Point();;
    

    let newHeight: number = bufferedImage!.getHeight()!;;
    

    let newWidth: number = bufferedImage!.getWidth()!;;
    

                        if(ratio > imageRatio)
                        
                                    {
                                    newWidth= globalThis.Math.trunc((bufferedImage!.getHeight() *ratio));
    
point.x= (newWidth -bufferedImage!.getWidth()) /2;
    

                                    }
                                
                        else {
                            newHeight= globalThis.Math.trunc((bufferedImage!.getWidth() /ratio));
    
point.y= (newHeight -bufferedImage!.getHeight()) /2;
    

                        }
                            

    let commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    
this.logUtil!.putF(commonLabels!.WIDTH_LABEL +bufferedImage!.getWidth() +" newWidth: " +newWidth +commonLabels!.HEIGHT_LABEL +bufferedImage!.getHeight() +" newHeight: " +newHeight +" needed ratio: " +(newWidth /newHeight), this, "fudge");
    

    let newBufferedImage: BufferedImage = this.imageUtil!.create(newWidth, newHeight)!;;
    

    let g: Graphics2D = newBufferedImage!.createGraphics()!;;
    

                        if(point.x > 0)
                        
                                    {
                                    
    let firstColumnBufferedImage: BufferedImage = bufferedImage!.getSubimage(0, 0, 1, bufferedImage!.getHeight())!;;
    

    let lastColumnBufferedImage: BufferedImage = bufferedImage!.getSubimage(bufferedImage!.getWidth() -1, 0, 1, bufferedImage!.getHeight())!;;
    
this.logUtil!.putF("Draw some columns to fill in gap", this, "fudge");
    




                        for (
    let index: number = 0;index < point.x; index++)
        {
g.drawImage(firstColumnBufferedImage, index, 0, 
                            null);
    
g.drawImage(lastColumnBufferedImage, newWidth -index, 0, 
                            null);
    
}


                                    }
                                

                        if(point.y > 0)
                        
                                    {
                                    
    let firstRowBufferedImage: BufferedImage = bufferedImage!.getSubimage(0, 0, bufferedImage!.getWidth(), 1)!;;
    

    let lastRowBufferedImage: BufferedImage = bufferedImage!.getSubimage(0, bufferedImage!.getHeight() -1, bufferedImage!.getWidth(), 1)!;;
    
this.logUtil!.putF("Draw some rows to fill in gap", this, "fudge");
    




                        for (
    let index: number = 0;index < point.y; index++)
        {
g.drawImage(firstRowBufferedImage, 0, index, 
                            null);
    
g.drawImage(lastRowBufferedImage, 0, newHeight -index, 
                            null);
    
}


                                    }
                                
g.drawImage(bufferedImage, point.x, point.y, bufferedImage!.getWidth(), bufferedImage!.getHeight(), 
                            null);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newBufferedImage;
    
}


                //@Throws(Exception.constructor)
            
    public fudge$overload2(bufferedImageArray: BufferedImage[], totalImages: number, ratio: number): BufferedImage[]{

    let end: number = totalImages;;
    

                        if(bufferedImageArray!.length < totalImages)
                        end= bufferedImageArray!.length

    let fudgedBufferedImageArray: BufferedImage[] = new Array(end);;
    




                        for (
    let index: number = 0;index < end; index++)
        {
fudgedBufferedImageArray[index]= fudge(bufferedImageArray[index]!, ratio);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fudgedBufferedImageArray;
    
}


}

