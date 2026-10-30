
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { awt } from '../../../../../../java/awt.js';
//not GWT import const awt

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { ImageComparisonResult } from '../../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js';
//not GWT import const ImageComparisonResult

import { PixelDelta } from '../../../../../../org/allbinary/media/image/comparison/pixel/PixelDelta.js';
//not GWT import const PixelDelta

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionRectangles } from './MotionRectangles.js';
//sameFolderImports - not GWT import - same folder const MotionRectangles
import { MotionRectangle } from './MotionRectangle.js';
//sameFolderImports - not GWT import - same folder const MotionRectangle
import { Rectangle } from './Rectangle.js';
//sameFolderImports - not GWT import - same folder const Rectangle

export class AllMotionRectangles extends MotionRectangles {
        

    private static readonly NAME: string = "allMotionRectangles_";

public constructor (imageComparisonResult: ImageComparisonResult){
            super(NAME, imageComparisonResult);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.createMotionRectangles(imageComparisonResult);
    
}


                //@Throws(Exception.constructor)
            
    createMotionRectangles(imageComparisonInfo: ImageComparisonResult){

    let vector: BasicArrayList = imageComparisonInfo!.getNonMatchingPixelVector()!;;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let pixelDelta: PixelDelta = vector.get(index) as PixelDelta;;
    
this.addPixelDeltaToAMotionRectangle(pixelDelta);
    
}

}


                //@Throws(Exception.constructor)
            
    addPixelDeltaToExistingMotionRectangle(pixelDelta: PixelDelta): boolean{

    let vector: BasicArrayList = this.getVector()!;;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let motionRectangle: MotionRectangle = vector.get(index) as MotionRectangle;;
    

                        if(shouldPixelDeltaPartOfMotionRectangle(motionRectangle, pixelDelta))
                        
                                    {
                                    
    let newWidth: number = pixelDelta!.getPoint()!.getX() -motionRectangle!.getRectangle()!.x;;
    

    let newHeight: number = pixelDelta!.getPoint()!.getY() -motionRectangle!.getRectangle()!.y;;
    

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
                                    
    let newRectangle: Rectangle = new Rectangle(pixelDelta!.getPoint()!.getX(), pixelDelta!.getPoint()!.getY(), 1, 1);;
    

    let motionRectangle: MotionRectangle = new MotionRectangle(newRectangle);;
    
motionRectangle!.getPixelDeltaVector()!.add(pixelDelta);
    
this.getVector()!.add(motionRectangle);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    shouldPixelDeltaPartOfMotionRectangle(motionRectangle: MotionRectangle, pixelDelta: PixelDelta): boolean{

    let isPixelLeftOfTheRectangle: boolean = false;;
    

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

    let maxX: number = motionRectangle!.getRectangle()!.x +motionRectangle!.getRectangle()!.width;;
    

    let maxY: number = motionRectangle!.getRectangle()!.y +motionRectangle!.getRectangle()!.height;;
    

    let horizontalDistance: number = pixelDelta!.getPoint()!.getX() -maxX;;
    

    let verticalDistance: number = pixelDelta!.getPoint()!.getY() -maxY;;
    

                        if(horizontalDistance < this.MAX_PIXEL_DISTANCE_THRESHOLD && verticalDistance < this.MAX_PIXEL_DISTANCE_THRESHOLD)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}

