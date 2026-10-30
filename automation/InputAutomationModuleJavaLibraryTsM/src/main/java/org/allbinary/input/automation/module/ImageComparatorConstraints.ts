
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
import { Color } from '../../../../../java/awt/Color.js';
//not GWT import const Color

import { Rectangle } from '../../../../../java/awt/Rectangle.js';
//not GWT import const Rectangle

import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { RectangleCollisionUtil } from '../../../../../org/allbinary/collision/RectangleCollisionUtil.js';
//not GWT import const RectangleCollisionUtil

import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { ImageComparatorConstraintsInterface } from '../../../../../org/allbinary/media/image/comparison/ImageComparatorConstraintsInterface.js';
//not GWT import const ImageComparatorConstraintsInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageComparatorConstraints
            extends Object
         implements ImageComparatorConstraintsInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private avoidVector: BasicArrayList;

    private maxNonMatchingPixelDeltas: number= 0;

    private doImageComparisonEveryNthFrame: number;

public constructor (doImageComparisonEveryNthFrame: number){

            super();
        this.doImageComparisonEveryNthFrame= doImageComparisonEveryNthFrame;
    
this.setAvoidVector(new BasicArrayListD());
    
}


    public getAvoidVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.avoidVector;
    
}


    public isColorAllowed(frame: number, point: GPoint, color: Color): boolean{



                            throw new RuntimeException();
                    
}

isCollisionWithAvoidRectangles(...args: any[]): any {
   
    if (args.length === 1) return this.isCollisionWithAvoidRectangles$overload1(args[0]);
   
    if (args.length === 1) return this.isCollisionWithAvoidRectangles$overload2(args[0]);
   
   throw new TypeError('No matching overload: isCollisionWithAvoidRectangles'); }
  
    public isCollisionWithAvoidRectangles$overload1(rectangle: Rectangle): boolean{

    let isCollsionWithAvoidRectangles: boolean = false;;
    

    let avoidVector: BasicArrayList = this.getAvoidVector()!;;
    

    let size: number = avoidVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let avoidRectangle: Rectangle = avoidVector!.get(index) as Rectangle;;
    

                        if(RectangleCollisionUtil.isCollision(avoidRectangle, rectangle))
                        
                                    {
                                    isCollsionWithAvoidRectangles= true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isCollsionWithAvoidRectangles;
    
}


    public isCollisionWithAvoidRectangles$overload2(point: GPoint): boolean{

    let isCollsionWithAvoidRectangles: boolean = false;;
    

    let avoidVector: BasicArrayList = this.getAvoidVector()!;;
    

    let size: number = avoidVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let avoidRectangle: Rectangle = avoidVector!.get(index) as Rectangle;;
    

                        if(RectangleCollisionUtil.isCollision(avoidRectangle, point))
                        
                                    {
                                    isCollsionWithAvoidRectangles= true;
    
break;

                    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isCollsionWithAvoidRectangles;
    
}


    public setAvoidVector(avoidVector: BasicArrayList){
this.avoidVector= avoidVector;
    
}


    public getMaxNonMatchingPixelDeltas(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxNonMatchingPixelDeltas;
    
}


    public setMaxNonMatchingPixelDeltas(maxNonMatchingPixelDeltas: number){
this.maxNonMatchingPixelDeltas= maxNonMatchingPixelDeltas;
    
}


    public isFrameAllowed(frame: number): boolean{

    let remainder: number = ((frame +1) % this.doImageComparisonEveryNthFrame);;
    
this.logUtil!.putF(" Frame: " +frame +" remainder: " +remainder +" this.doImageComparisonEveryNthFrame: " +this.doImageComparisonEveryNthFrame, this, "isCollisionWithAvoidRectangles");
    

                        if(remainder == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public isImageValid(bufferedImage: BufferedImage): boolean{



                            throw new RuntimeException();
                    
}


    public log(){

    let avoidVector: BasicArrayList = this.getAvoidVector()!;;
    

    let size: number = avoidVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let avoidRectangle: Rectangle = avoidVector!.get(index) as Rectangle;;
    
this.logUtil!.putF("Avoid Rectangle: " +avoidRectangle, this, "log");
    
}

}


}

