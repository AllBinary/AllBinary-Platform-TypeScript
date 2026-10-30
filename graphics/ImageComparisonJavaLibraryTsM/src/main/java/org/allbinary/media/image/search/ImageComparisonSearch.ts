
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { ImageUtil } from '../../../../../org/allbinary/media/image/ImageUtil.js';
//not GWT import const ImageUtil

import { PixelDelta } from '../../../../../org/allbinary/media/image/comparison/pixel/PixelDelta.js';
//not GWT import const PixelDelta

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageComparisonSearch
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    public isSameHeight: boolean= false;

    public isSameWidth: boolean= false;

    public pixelsThatMatch: number= 0;

    public pixelsIgnored: number= 0;

    public imageHeight: number;

    public imageWidth: number;

    private tolerance: number= 0;

    private nonMatchingPixelVector: BasicArrayList;

    private bufferedImages: BufferedImage[];

    private matchingPercent: number =  -1;

public constructor (bufferedImage: BufferedImage, bufferedImage2: BufferedImage, tolerance: number){

            super();
        this.nonMatchingPixelVector= new BasicArrayListD();
    
this.setBufferedImages(new Array(2));
    
this.getBufferedImages()[0]= bufferedImage;
    
this.getBufferedImages()[1]= bufferedImage2;
    
this.imageHeight= bufferedImage!.getHeight();
    
this.imageWidth= bufferedImage!.getWidth();
    

                        if(bufferedImage!.getHeight() != bufferedImage2!.getHeight())
                        
                                    {
                                    this.isSameHeight= false;
    

                        if(this.imageHeight > bufferedImage2!.getHeight())
                        
                                    {
                                    this.imageHeight= bufferedImage2!.getHeight();
    

                                    }
                                

                                    }
                                
                        else {
                            this.isSameHeight= true;
    

                        }
                            

                        if(bufferedImage!.getWidth() != bufferedImage2!.getWidth())
                        
                                    {
                                    this.isSameWidth= false;
    

                        if(this.imageWidth > bufferedImage2!.getWidth())
                        
                                    {
                                    this.imageWidth= bufferedImage2!.getWidth();
    

                                    }
                                

                                    }
                                
                        else {
                            this.isSameWidth= true;
    

                        }
                            

                        if(!this.isSameWidth || !this.isSameHeight)
                        
                                    {
                                    
    let imageUtil: ImageUtil = ImageUtil.getInstance()!;;
    
this.logUtil!.putF("Images were not the same size? Most likely a resolution change.", this, this.commonStrings!.CONSTRUCTOR);
    
this.logUtil!.putF("1: " +imageUtil!.toString(bufferedImage), this, this.commonStrings!.CONSTRUCTOR);
    
this.logUtil!.putF("2: " +imageUtil!.toString(bufferedImage2), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    getMatchingPercent(): number{

                        if(this.matchingPercent ==  -1)
                        
                                    {
                                    this.matchingPercent= this.pixelsThatMatch /(this.imageWidth *this.imageHeight);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.matchingPercent;
    
}


    public add(pixel: PixelDelta){
this.nonMatchingPixelVector!.add(pixel);
    
}


    public getNonMatchingPixelVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nonMatchingPixelVector;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "ImageComparisonInfo: " +" Number Of Matching Pixels: " +this.pixelsThatMatch +"\nNumber Of Non-Matching Pixels: " +this.getNonMatchingPixelVector()!.size() +"\nNumber Of Pixels Ignored: " +this.pixelsIgnored +"\nMatching Percentage: " +this.getMatchingPercent();
    
}


    public getBufferedImages(): BufferedImage[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.bufferedImages;
    
}


    setBufferedImages(bufferedImages: BufferedImage[]){
this.bufferedImages= bufferedImages;
    
}


    public getTolerance(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tolerance;
    
}


    public setTolerance(tolerance: number){
this.tolerance= tolerance;
    
}


}

