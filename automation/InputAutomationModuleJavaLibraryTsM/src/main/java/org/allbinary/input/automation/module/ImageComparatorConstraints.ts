
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
//not GWT import const Color = globalThis.java.awt.Color;

      
import { Rectangle } from '../../../../../java/awt/Rectangle.js';
//not GWT import const Rectangle = globalThis.java.awt.Rectangle;

      
import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { RectangleCollisionUtil } from '../../../../../org/allbinary/collision/RectangleCollisionUtil.js';
//not GWT import const RectangleCollisionUtil = globalThis.org.allbinary.collision.RectangleCollisionUtil;

      
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ImageComparatorConstraintsInterface } from '../../../../../org/allbinary/media/image/comparison/ImageComparatorConstraintsInterface.js';
//not GWT import const ImageComparatorConstraintsInterface = globalThis.org.allbinary.media.image.comparison.ImageComparatorConstraintsInterface;

      
















                                        
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


    public isCollisionWithAvoidRectangles(rectangle: Rectangle): boolean{

    var isCollsionWithAvoidRectangles: boolean = false;;
    

    var avoidVector: BasicArrayList = this.getAvoidVector()!;;
    

    var size: number = avoidVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var avoidRectangle: Rectangle = avoidVector!.get(index) as Rectangle;;
    

                        if(RectangleCollisionUtil.isCollision(avoidRectangle, rectangle))
                        
                                    {
                                    isCollsionWithAvoidRectangles= true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isCollsionWithAvoidRectangles;
    
}


    public isCollisionWithAvoidRectangles(point: GPoint): boolean{

    var isCollsionWithAvoidRectangles: boolean = false;;
    

    var avoidVector: BasicArrayList = this.getAvoidVector()!;;
    

    var size: number = avoidVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var avoidRectangle: Rectangle = avoidVector!.get(index) as Rectangle;;
    

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

    var remainder: number = ((frame +1) % this.doImageComparisonEveryNthFrame);;
    
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

    var avoidVector: BasicArrayList = this.getAvoidVector()!;;
    

    var size: number = avoidVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var avoidRectangle: Rectangle = avoidVector!.get(index) as Rectangle;;
    
this.logUtil!.putF("Avoid Rectangle: " +avoidRectangle, this, "log");
    
}

}


}



