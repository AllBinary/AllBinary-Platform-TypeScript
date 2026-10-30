
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
        
import { Rectangle } from '../../../../../../java/awt/Rectangle.js';
//not GWT import const Rectangle

import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionRectangles } from './MotionRectangles.js';
//not GWT import - same folder const MotionRectangles
import { MotionRectangleConstraintsInterface } from './MotionRectangleConstraintsInterface.js';
//not GWT import - same folder const MotionRectangleConstraintsInterface
import { MotionRectangle } from './MotionRectangle.js';
//not GWT import - same folder const MotionRectangle

export class ConstrainedMotionRectangles extends MotionRectangles {
        

    private static readonly NAME: string = "constrainedMotionRectangles_";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface;

public constructor (motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface, motionRectangles: MotionRectangles){
            super(NAME, motionRectangles!.getImageComparisonResult());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setMotionRectangleConstraintsInterface(motionRectangleConstraintsInterface);
    
}


                //@Throws(Exception.constructor)
            
    public applyMotionRectangleConstraints(motionRectangles: MotionRectangles){
this.logUtil!.putF("Start - Size Before: " +motionRectangles!.getVector()!.size(), this, "applyMotionRectangleConstraints");
    

    let bufferedImageArray: BufferedImage[] = motionRectangles!.getImageComparisonResult()!.getBufferedImages()!;;
    

    let bufferedImage: BufferedImage = bufferedImageArray[1]!;;
    

    let vector: BasicArrayList = new BasicArrayListD();;
    

    let vector2: BasicArrayList = motionRectangles!.getVector()!;;
    

    let size: number = vector2.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let motionRectangle: MotionRectangle = vector2.get(index) as MotionRectangle;;
    

    let rectangle: Rectangle = motionRectangle!.getRectangle()!;;
    

    let isTooSmall: boolean = this.getMotionRectangleConstraintsInterface()!.isTooSmall(rectangle)!;;
    

                        if(isTooSmall)
                        
                                    {
                                    

                        continue
                    

                                    }
                                

    let isAreaTooSmall: boolean = this.getMotionRectangleConstraintsInterface()!.isAreaTooSmall(rectangle)!;;
    

                        if(isAreaTooSmall)
                        
                                    {
                                    

                        continue
                    

                                    }
                                

    let isTooBig: boolean = this.getMotionRectangleConstraintsInterface()!.isTooBig(rectangle)!;;
    

                        if(isTooBig)
                        
                                    {
                                    

                        continue
                    

                                    }
                                

    let isValid: boolean = this.getMotionRectangleConstraintsInterface()!.isValid(this.getImageComparisonResult()!.getFrameTwo(), bufferedImage, motionRectangle!.getRectangle())!;;
    

                        if(!isValid)
                        
                                    {
                                    

                        continue
                    

                                    }
                                

                        if(!isTooSmall && !isAreaTooSmall && !isTooBig && isValid)
                        vector.add(motionRectangle)
}

this.setVector(vector);
    
}


    public getMotionRectangleConstraintsInterface(): MotionRectangleConstraintsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.motionRectangleConstraintsInterface;
    
}


    public setMotionRectangleConstraintsInterface(motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface){
this.motionRectangleConstraintsInterface= motionRectangleConstraintsInterface;
    
}


}

