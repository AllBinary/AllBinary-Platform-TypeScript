
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
        



import { Vector } from "../../../../../../java/util/Vector.js";

    
import { ImageComparisonResult } from "../../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js";

    

export class MotionRectangles
            extends Object
         {
        

    private readonly name: string

    private rectangleVector: Vector

    private imageComparisonResult: ImageComparisonResult

    readonly MAX_PIXEL_DISTANCE_THRESHOLD: number = 2;
        
        
public constructor (name: string, imageComparisonResult: ImageComparisonResult){

            super();
            var name = name
var imageComparisonResult = imageComparisonResult
this.name= name
this.this.setImageComparisonResult(imageComparisonResult)
this.this.setVector(Vector())
}


    public getVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangleVector;
    
}


    public setVector(rectangleVector: Vector){
var rectangleVector = rectangleVector
this.rectangleVector= rectangleVector
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public getImageComparisonResult(): ImageComparisonResult{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageComparisonResult;
    
}


    public setImageComparisonResult(imageComparisonResult: ImageComparisonResult){
var imageComparisonResult = imageComparisonResult
this.imageComparisonResult= imageComparisonResult
}


}
                
            

