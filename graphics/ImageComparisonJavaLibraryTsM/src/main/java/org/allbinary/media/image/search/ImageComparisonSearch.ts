
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
        



            import Vector from "@ohos.util.Vector";
        
import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    

//import { Vector } from "../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ImageUtil } from "../../../../../org/allbinary/media/image/ImageUtil.js";

    
import { PixelDelta } from "../../../../../org/allbinary/media/image/comparison/pixel/PixelDelta.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class ImageComparisonSearch
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    public isSameHeight: boolean= false

    public isSameWidth: boolean= false

    public pixelsThatMatch: number= 0

    public pixelsIgnored: number= 0

    public imageHeight: number

    public imageWidth: number

    private tolerance: number= 0

    private nonMatchingPixelVector: Vector

    private bufferedImages: BufferedImage[]

    private matchingPercent: number =  -1;
        
        
public constructor (bufferedImage: BufferedImage, bufferedImage2: BufferedImage, tolerance: number){

            super();
            var bufferedImage = bufferedImage
var bufferedImage2 = bufferedImage2
var tolerance = tolerance
this.nonMatchingPixelVector= Vector();
    
this.setBufferedImages(new Array(2));
    
this.getBufferedImages()[0]= bufferedImage;
    
this.getBufferedImages()[1]= bufferedImage2;
    
this.imageHeight= bufferedImage!.getHeight();
    
this.imageWidth= bufferedImage!.getWidth();
    

                        if(bufferedImage!.getHeight() != bufferedImage2!.getHeight())
                        
                                    {
                                    isSameHeight= false;
    

                        if(imageHeight > bufferedImage2!.getHeight())
                        
                                    {
                                    this.imageHeight= bufferedImage2!.getHeight();
    

                                    }
                                

                                    }
                                
                        else {
                            isSameHeight= true;
    

                        }
                            

                        if(bufferedImage!.getWidth() != bufferedImage2!.getWidth())
                        
                                    {
                                    isSameWidth= false;
    

                        if(imageWidth > bufferedImage2!.getWidth())
                        
                                    {
                                    this.imageWidth= bufferedImage2!.getWidth();
    

                                    }
                                

                                    }
                                
                        else {
                            isSameWidth= true;
    

                        }
                            

                        if(!isSameWidth || !isSameHeight)
                        
                                    {
                                    
    var imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        
;
    
logUtil!.put("Images were not the same size? Most likely a resolution change.", this, this.commonStrings!.CONSTRUCTOR);
    
logUtil!.put("1: " +imageUtil!.toString(bufferedImage), this, this.commonStrings!.CONSTRUCTOR);
    
logUtil!.put("2: " +imageUtil!.toString(bufferedImage2), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    getMatchingPercent(): number{

                        if(this.matchingPercent ==  -1)
                        
                                    {
                                    this.matchingPercent= pixelsThatMatch.toFloat() /(this.imageWidth *this.imageHeight);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.matchingPercent;
    
}


    public add(pixel: PixelDelta){
var pixel = pixel
this.nonMatchingPixelVector!.add(pixel);
    
}


    public getNonMatchingPixelVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nonMatchingPixelVector;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "ImageComparisonInfo: " +" Number Of Matching Pixels: " +this.pixelsThatMatch +"\nNumber Of Non-Matching Pixels: " +this.getNonMatchingPixelVector()!.size() +"\nNumber Of Pixels Ignored: " +this.pixelsIgnored +"\nMatching Percentage: " +this.getMatchingPercent();
    
}


    public getBufferedImages(): BufferedImage[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImages;
    
}


    setBufferedImages(bufferedImages: BufferedImage[]){
var bufferedImages = bufferedImages
this.bufferedImages= bufferedImages;
    
}


    public getTolerance(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tolerance;
    
}


    public setTolerance(tolerance: number){
var tolerance = tolerance
this.tolerance= tolerance;
    
}


}
                
            

