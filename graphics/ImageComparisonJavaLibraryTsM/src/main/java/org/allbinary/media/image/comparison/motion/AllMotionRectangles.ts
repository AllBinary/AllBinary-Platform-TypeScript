
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
        
import { awt } from '../../../../../../java/awt.js';
      
import { Vector } from '../../../../../../java/util/Vector.js';
      
import { ImageComparisonResult } from '../../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js';
      
import { PixelDelta } from '../../../../../../org/allbinary/media/image/comparison/pixel/PixelDelta.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionRectangles } from './MotionRectangles.js';
import { MotionRectangle } from './MotionRectangle.js';
import { Rectangle } from './Rectangle.js';

export class AllMotionRectangles extends MotionRectangles {
        

    private static readonly NAME: string = "allMotionRectangles_";
public constructor (imageComparisonResult: ImageComparisonResult){
            super(NAME, imageComparisonResult);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.createMotionRectangles(imageComparisonResult);
    
}


                //@Throws(Exception.constructor)
            
    createMotionRectangles(imageComparisonInfo: ImageComparisonResult){

    var vector: Vector = imageComparisonInfo!.getNonMatchingPixelVector()!;
;
    

    var size: number = vector.length!;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {

    var pixelDelta: PixelDelta = vector.get(index) as PixelDelta;
;
    
this.addPixelDeltaToAMotionRectangle(pixelDelta);
    
}

}


                //@Throws(Exception.constructor)
            
    addPixelDeltaToExistingMotionRectangle(pixelDelta: PixelDelta): boolean{

    var vector: Vector = this.getVector()!;
;
    

    var size: number = vector.length!;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {

    var motionRectangle: MotionRectangle = vector.get(index) as MotionRectangle;
;
    

                        if(shouldPixelDeltaPartOfMotionRectangle(motionRectangle, pixelDelta))
                        
                                    {
                                    
    var newWidth: number = pixelDelta!.getPoint()!.getX() -motionRectangle!.getRectangle()!.x;
;
    

    var newHeight: number = pixelDelta!.getPoint()!.getY() -motionRectangle!.getRectangle()!.y;
;
    

                        if(newWidth < motionRectangle!.getRectangle()!.width)
                        
                                    {
                                    newWidth= motionRectangle!.getRectangle()!.width;
    

                                    }
                                

                        if(newHeight < motionRectangle!.getRectangle()!.height)
                        
                                    {
                                    newHeight= motionRectangle!.getRectangle()!.height;
    

                                    }
                                
motionRectangle!.getRectangle()!.setSize(newWidth, newHeight);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    addPixelDeltaToAMotionRectangle(pixelDelta: PixelDelta){

                        if(!addPixelDeltaToExistingMotionRectangle(pixelDelta))
                        
                                    {
                                    
    var newRectangle: Rectangle = new Rectangle(pixelDelta!.getPoint()!.getX(), pixelDelta!.getPoint()!.getY(), 1, 1);
;
    

    var motionRectangle: MotionRectangle = new MotionRectangle(newRectangle);
;
    
motionRectangle!.getPixelDeltaVector()!.add(pixelDelta);
    
this.getVector()!.add(motionRectangle);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    shouldPixelDeltaPartOfMotionRectangle(motionRectangle: MotionRectangle, pixelDelta: PixelDelta): boolean{

    var isPixelLeftOfTheRectangle: boolean = false;
;
    

                        if(motionRectangle!.getRectangle()!.y > pixelDelta!.getPoint()!.getY())
                        
                                    {
                                    


                            throw new Exception("PixelAboveTheRectangle");
                    

                                    }
                                

                        if(motionRectangle!.getRectangle()!.x > pixelDelta!.getPoint()!.getX())
                        
                                    {
                                    isPixelLeftOfTheRectangle= true;
    

                                    }
                                

                        if(!isPixelLeftOfTheRectangle)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isPixelDeltaLikelyPartOfMotionRectangle(motionRectangle, pixelDelta);;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    isPixelDeltaLikelyPartOfMotionRectangle(motionRectangle: MotionRectangle, pixelDelta: PixelDelta): boolean{

    var maxX: number = motionRectangle!.getRectangle()!.x +motionRectangle!.getRectangle()!.width;
;
    

    var maxY: number = motionRectangle!.getRectangle()!.y +motionRectangle!.getRectangle()!.height;
;
    

    var horizontalDistance: number = pixelDelta!.getPoint()!.getX() -maxX;
;
    

    var verticalDistance: number = pixelDelta!.getPoint()!.getY() -maxY;
;
    

                        if(horizontalDistance < this.MAX_PIXEL_DISTANCE_THRESHOLD && verticalDistance < this.MAX_PIXEL_DISTANCE_THRESHOLD)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

