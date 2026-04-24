
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
        



import { awt } from "../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { RectangleCollisionUtil } from "../../../../../org/allbinary/collision/RectangleCollisionUtil.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ImageComparatorConstraintsInterface } from "../../../../../org/allbinary/media/image/comparison/ImageComparatorConstraintsInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Color } from "./Color.js";

import { Rectangle } from "./Rectangle.js";

export class ImageComparatorConstraints
            extends Object
         implements ImageComparatorConstraintsInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private avoidVector: Vector

    private maxNonMatchingPixelDeltas: number= 0

    private doImageComparisonEveryNthFrame: number
public constructor (doImageComparisonEveryNthFrame: number){

            super();
        var doImageComparisonEveryNthFrame = doImageComparisonEveryNthFrame
this.doImageComparisonEveryNthFrame= doImageComparisonEveryNthFrame;
    
this.setAvoidVector(new Vector());
    
}


    public getAvoidVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return avoidVector;
    
}


    public isColorAllowed(frame: number, point: GPoint, color: Color): boolean{
var frame = frame
var point = point
var color = color



                            throw new RuntimeException()
}


    public isCollisionWithAvoidRectangles(rectangle: Rectangle): boolean{
var rectangle = rectangle

    var isCollsionWithAvoidRectangles: boolean = false;
        
        
;
    

    var avoidVector: Vector = this.getAvoidVector()!;
        
        
;
    

    var size: number = avoidVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var avoidRectangle: Rectangle = avoidVector!.get(index); as Rectangle;
        
        
;
    

                        if(RectangleCollisionUtil.isCollision(avoidRectangle, rectangle))
                        
                                    {
                                    isCollsionWithAvoidRectangles= true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isCollsionWithAvoidRectangles;
    
}


    public isCollisionWithAvoidRectangles(point: GPoint): boolean{
var point = point

    var isCollsionWithAvoidRectangles: boolean = false;
        
        
;
    

    var avoidVector: Vector = this.getAvoidVector()!;
        
        
;
    

    var size: number = avoidVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var avoidRectangle: Rectangle = avoidVector!.get(index); as Rectangle;
        
        
;
    

                        if(RectangleCollisionUtil.isCollision(avoidRectangle, point))
                        
                                    {
                                    isCollsionWithAvoidRectangles= true;
    
break;

                    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isCollsionWithAvoidRectangles;
    
}


    public setAvoidVector(avoidVector: Vector){
var avoidVector = avoidVector
this.avoidVector= avoidVector;
    
}


    public getMaxNonMatchingPixelDeltas(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxNonMatchingPixelDeltas;
    
}


    public setMaxNonMatchingPixelDeltas(maxNonMatchingPixelDeltas: number){
var maxNonMatchingPixelDeltas = maxNonMatchingPixelDeltas
this.maxNonMatchingPixelDeltas= maxNonMatchingPixelDeltas;
    
}


    public isFrameAllowed(frame: number): boolean{
var frame = frame

    var remainder: number = ((frame +1) % this.doImageComparisonEveryNthFrame);
        
        
;
    
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


                //@Throws(Error::class)
            
    public isImageValid(bufferedImage: BufferedImage): boolean{
var bufferedImage = bufferedImage



                            throw new RuntimeException()
}


    public log(){

    var avoidVector: Vector = this.getAvoidVector()!;
        
        
;
    

    var size: number = avoidVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var avoidRectangle: Rectangle = avoidVector!.get(index); as Rectangle;
        
        
;
    
this.logUtil!.putF("Avoid Rectangle: " +avoidRectangle, this, "log");
    
}

}


}
                
            

