
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
        



import { awt } from "../../../../../../java/awt.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { ImageComparisonResult } from "../../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js";

    
import { PixelDelta } from "../../../../../../org/allbinary/media/image/comparison/pixel/PixelDelta.js";

    

export class AllMotionRectangles extends MotionRectangles {
        

    private static readonly NAME: string = "allMotionRectangles_";
        
        
public constructor (imageComparisonResult: ImageComparisonResult)                        

                            : super(NAME, imageComparisonResult){

            super();
            var imageComparisonResult = imageComparisonResult


                            //For kotlin this is before the body of the constructor.
                    
createMotionRectangles(imageComparisonResult)
}


                @Throws(Exception::class)
            
    createMotionRectangles(imageComparisonInfo: ImageComparisonResult){
var imageComparisonInfo = imageComparisonInfo

    var vector: Vector = imageComparisonInfo!.getNonMatchingPixelVector()!;
        
        


    var size: number = vector.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var pixelDelta: PixelDelta = vector.get(index) as PixelDelta;
        
        

addPixelDeltaToAMotionRectangle(pixelDelta)
}

}


                @Throws(Exception::class)
            
    addPixelDeltaToExistingMotionRectangle(pixelDelta: PixelDelta): boolean{
var pixelDelta = pixelDelta

    var vector: Vector = this.getVector()!;
        
        


    var size: number = vector.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var motionRectangle: MotionRectangle = vector.get(index) as MotionRectangle;
        
        


    
                        if(shouldPixelDeltaPartOfMotionRectangle(motionRectangle, pixelDelta))
                        
                                    {
                                    
    var newWidth: number = pixelDelta!.getPoint()!.getX() -motionRectangle!.getRectangle()!.x;
        
        


    var newHeight: number = pixelDelta!.getPoint()!.getY() -motionRectangle!.getRectangle()!.y;
        
        


    
                        if(newWidth < motionRectangle!.getRectangle()!.width)
                        
                                    {
                                    newWidth= motionRectangle!.getRectangle()!.width

                                    }
                                

    
                        if(newHeight < motionRectangle!.getRectangle()!.height)
                        
                                    {
                                    newHeight= motionRectangle!.getRectangle()!.height

                                    }
                                
setSize(newWidth, newHeight)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                @Throws(Exception::class)
            
    addPixelDeltaToAMotionRectangle(pixelDelta: PixelDelta){
var pixelDelta = pixelDelta

    
                        if(!addPixelDeltaToExistingMotionRectangle(pixelDelta))
                        
                                    {
                                    
    var newRectangle: Rectangle = new Rectangle(pixelDelta!.getPoint()!.getX(), pixelDelta!.getPoint()!.getY(), 1, 1);
        
        


    var motionRectangle: MotionRectangle = new MotionRectangle(newRectangle);
        
        

add(pixelDelta)
add(motionRectangle)

                                    }
                                
}


                @Throws(Exception::class)
            
    shouldPixelDeltaPartOfMotionRectangle(motionRectangle: MotionRectangle, pixelDelta: PixelDelta): boolean{
var motionRectangle = motionRectangle
var pixelDelta = pixelDelta

    var isPixelLeftOfTheRectangle: boolean = false;
        
        


    
                        if(motionRectangle!.getRectangle()!.y > pixelDelta!.getPoint()!.getY())
                        
                                    {
                                    


                            throw Exception("PixelAboveTheRectangle")

                                    }
                                

    
                        if(motionRectangle!.getRectangle()!.x > pixelDelta!.getPoint()!.getX())
                        
                                    {
                                    isPixelLeftOfTheRectangle= true

                                    }
                                

    
                        if(!isPixelLeftOfTheRectangle)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isPixelDeltaLikelyPartOfMotionRectangle(motionRectangle, pixelDelta);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                @Throws(Exception::class)
            
    isPixelDeltaLikelyPartOfMotionRectangle(motionRectangle: MotionRectangle, pixelDelta: PixelDelta): boolean{
var motionRectangle = motionRectangle
var pixelDelta = pixelDelta

    var maxX: number = motionRectangle!.getRectangle()!.x +motionRectangle!.getRectangle()!.width;
        
        


    var maxY: number = motionRectangle!.getRectangle()!.y +motionRectangle!.getRectangle()!.height;
        
        


    var horizontalDistance: number = pixelDelta!.getPoint()!.getX() -maxX;
        
        


    var verticalDistance: number = pixelDelta!.getPoint()!.getY() -maxY;
        
        


    
                        if(horizontalDistance < MAX_PIXEL_DISTANCE_THRESHOLD && verticalDistance < MAX_PIXEL_DISTANCE_THRESHOLD)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

