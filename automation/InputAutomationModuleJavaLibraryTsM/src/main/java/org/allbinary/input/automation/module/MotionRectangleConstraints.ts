
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

    
import { MotionRectangleConstraintsInterface } from "../../../../../org/allbinary/media/image/comparison/motion/MotionRectangleConstraintsInterface.js";

    

export class MotionRectangleConstraints
            extends Object
        
                , MotionRectangleConstraintsInterface {
        

    private minDimension: Dimension

    private maxDimension: Dimension

    private maxMotionRectangles: number= 0

    private minArea: number= 0
public constructor (){

            super();
            }


    public getMinDimension(): Dimension{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.minDimension;
    
}


    public getMaxDimension(): Dimension{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxDimension;
    
}


    public isTooSmall(rectangle: Rectangle): boolean{
var rectangle = rectangle

    
                        if(rectangle.width < this.getMinDimension()!.width || rectangle.height < this.getMinDimension()!.height)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isAreaTooSmall(rectangle: Rectangle): boolean{
var rectangle = rectangle

    
                        if(rectangle.width *rectangle.height < this.getMinArea())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isTooBig(rectangle: Rectangle): boolean{
var rectangle = rectangle

    
                        if(rectangle.width > this.getMaxDimension()!.width || rectangle.height > this.getMaxDimension()!.height)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                @Throws(Exception::class)
            
    public isValid(frame: Long, bufferedImage: BufferedImage, rectangle: Rectangle): boolean{
var frame = frame
var bufferedImage = bufferedImage
var rectangle = rectangle



                            throw RuntimeException()
}


    public setMinDimension(minDimension: Dimension){
var minDimension = minDimension
this.minDimension= minDimension
}


    public setMaxDimension(maxDimension: Dimension){
var maxDimension = maxDimension
this.maxDimension= maxDimension
}


    public getMaxMotionRectangles(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxMotionRectangles;
    
}


    public setMaxMotionRectangles(maxMotionRectangles: number){
var maxMotionRectangles = maxMotionRectangles
this.maxMotionRectangles= maxMotionRectangles
}


    public getMinArea(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minArea;
    
}


    public setMinArea(minArea: number){
var minArea = minArea
this.minArea= minArea
}


}
                
            

