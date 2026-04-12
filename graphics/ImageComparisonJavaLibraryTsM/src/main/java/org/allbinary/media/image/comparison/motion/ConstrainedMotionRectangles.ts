
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
        



            import Vector from "@ohos.util.Vector";
        
import { awt } from "../../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../../java/awt/image/BufferedImage.js";

    

//import { Vector } from "../../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class ConstrainedMotionRectangles extends MotionRectangles {
        

    private static readonly NAME: string = "constrainedMotionRectangles_";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface
public constructor (motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface, motionRectangles: MotionRectangles)                        

                            : super(NAME, motionRectangles!.getImageComparisonResult()){

            super();
                //var motionRectangleConstraintsInterface = motionRectangleConstraintsInterface
    //var motionRectangles = motionRectangles


                            //For kotlin this is before the body of the constructor.
                    
this.setMotionRectangleConstraintsInterface(motionRectangleConstraintsInterface);
    
}


                //@Throws(Error::class)
            
    public applyMotionRectangleConstraints(motionRectangles: MotionRectangles){
    //var motionRectangles = motionRectangles
this.logUtil!.putF("Start - Size Before: " +motionRectangles!.getVector()!.size(), this, "applyMotionRectangleConstraints");
    

    var bufferedImageArray: BufferedImage[] = motionRectangles!.getImageComparisonResult()!.getBufferedImages()!;
        
        
;
    

    var bufferedImage: BufferedImage = bufferedImageArray[1]!;
        
        
;
    

    var vector: Vector = new Vector();
        
        
;
    

    var vector2: Vector = motionRectangles!.getVector()!;
        
        
;
    

    var size: number = vector2.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var motionRectangle: MotionRectangle = vector2.get(index);

                         as MotionRectangle;
        
        
;
    

    var rectangle: Rectangle = motionRectangle!.getRectangle()!;
        
        
;
    

    var isTooSmall: boolean = this.getMotionRectangleConstraintsInterface()!.isTooSmall(rectangle)!;
        
        
;
    

                        if(isTooSmall)
                        
                                    {
                                    

                        continue
                    

                                    }
                                

    var isAreaTooSmall: boolean = this.getMotionRectangleConstraintsInterface()!.isAreaTooSmall(rectangle)!;
        
        
;
    

                        if(isAreaTooSmall)
                        
                                    {
                                    

                        continue
                    

                                    }
                                

    var isTooBig: boolean = this.getMotionRectangleConstraintsInterface()!.isTooBig(rectangle)!;
        
        
;
    

                        if(isTooBig)
                        
                                    {
                                    

                        continue
                    

                                    }
                                

    var isValid: boolean = this.getMotionRectangleConstraintsInterface()!.isValid(this.getImageComparisonResult()!.getFrameTwo(), bufferedImage, motionRectangle!.getRectangle())!;
        
        
;
    

                        if(!isValid)
                        
                                    {
                                    

                        continue
                    

                                    }
                                

                        if(!isTooSmall && !isAreaTooSmall && !isTooBig && isValid)
                        vector.add(motionRectangle);

                        
}

this.setVector(vector);
    
}


    public getMotionRectangleConstraintsInterface(): MotionRectangleConstraintsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionRectangleConstraintsInterface;
    
}


    public setMotionRectangleConstraintsInterface(motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface){
var motionRectangleConstraintsInterface = motionRectangleConstraintsInterface
this.motionRectangleConstraintsInterface= motionRectangleConstraintsInterface;
    
}


}
                
            

