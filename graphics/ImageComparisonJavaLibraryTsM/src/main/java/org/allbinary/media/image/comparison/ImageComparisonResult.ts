
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
        



import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ImageUtil } from "../../../../../org/allbinary/media/image/ImageUtil.js";

    
import { PixelDelta } from "../../../../../org/allbinary/media/image/comparison/pixel/PixelDelta.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageComparisonResult
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly bufferedImages: BufferedImage[] = new Array(2);
        
        

    public readonly name: string

    public readonly isSameHeight: boolean= false

    public readonly isSameWidth: boolean= false

    public readonly imageHeight: number

    public readonly imageWidth: number

    private readonly nonMatchingPixelVector: Vector

    private readonly frameOne: Long

    private readonly frameTwo: Long

    public pixelsThatMatch: number= 0

    public pixelsIgnored: number= 0

    private tolerance: number= 0

    private matchingPercent: number =  -1;
        
        
public constructor (name: string, bufferedImage: BufferedImage, bufferedImage2: BufferedImage, frameOne: Long, frameTwo: Long, tolerance: number){

            super();
                //var name = name
    //var bufferedImage = bufferedImage
    //var bufferedImage2 = bufferedImage2
    //var frameOne = frameOne
    //var frameTwo = frameTwo
    //var tolerance = tolerance
this.name= name;
    
this.nonMatchingPixelVector= new Vector();
    
this.bufferedImages[0]= bufferedImage;
    
this.bufferedImages[1]= bufferedImage2;
    
this.frameOne= frameOne;
    
this.frameTwo= frameTwo;
    
this.setTolerance(0);
    

    var imageHeight: number = bufferedImage!.getHeight()!;
        
        
;
    

    var imageWidth: number = bufferedImage!.getWidth()!;
        
        
;
    

                        if(bufferedImage!.getHeight() != bufferedImage2!.getHeight())
                        
                                    {
                                    isSameHeight= false;
    

                        if(imageHeight > bufferedImage2!.getHeight())
                        
                                    {
                                    imageHeight= bufferedImage2!.getHeight();
    

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
                                    imageWidth= bufferedImage2!.getWidth();
    

                                    }
                                

                                    }
                                
                        else {
                            isSameWidth= true;
    

                        }
                            
this.imageWidth= imageWidth;
    
this.imageHeight= imageHeight;
    

                        if(!isSameWidth || !isSameHeight)
                        
                                    {
                                    
    var imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        
;
    
this.logUtil!.putF("Images were not the same size? Most likely a resolution change.", this, this.commonStrings!.CONSTRUCTOR);
    
this.logUtil!.putF("1: " +imageUtil!.toString(bufferedImage), this, this.commonStrings!.CONSTRUCTOR);
    
this.logUtil!.putF("2: " +imageUtil!.toString(bufferedImage2), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public getMatchingPercent(): number{

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
                        return new StringMaker().
                            append("ImageComparisonInfo: ")!.append(this.name)!.append(" Number Of Matching Pixels: ")!.appendint(this.pixelsThatMatch)!.append("\nNumber Of Non-Matching Pixels: ")!.appendint(this.getNonMatchingPixelVector()!.size())!.append("\nNumber Of Pixels Ignored: ")!.appendint(this.pixelsIgnored)!.append("\nMatching Percentage: ")!.appendfloat(this.getMatchingPercent())!.toString();

                        ;
    
}


    public getBufferedImages(): BufferedImage[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImages;
    
}


    public getTolerance(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tolerance;
    
}


    setTolerance(tolerance: number){
var tolerance = tolerance
this.tolerance= tolerance;
    
}


    public getFrameOne(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frameOne;
    
}


    public getFrameTwo(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frameTwo;
    
}


}
                
            

