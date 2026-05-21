
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { Vector } from '../../../../../../java/util/Vector.js';
      
import { ImageComparisonResult } from '../../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MotionRectangles
            extends Object
         {
        

    private readonly name: string

    private rectangleVector: Vector

    private imageComparisonResult: ImageComparisonResult

    readonly MAX_PIXEL_DISTANCE_THRESHOLD: number = 2;
public constructor (name: string, imageComparisonResult: ImageComparisonResult){

            super();
        this.name= name;
    
this.setImageComparisonResult(imageComparisonResult);
    
this.setVector(new Vector());
    
}


    public getVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangleVector;
    
}


    public setVector(rectangleVector: Vector){
this.rectangleVector= rectangleVector;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getImageComparisonResult(): ImageComparisonResult{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageComparisonResult;
    
}


    public setImageComparisonResult(imageComparisonResult: ImageComparisonResult){
this.imageComparisonResult= imageComparisonResult;
    
}


}
                
            

