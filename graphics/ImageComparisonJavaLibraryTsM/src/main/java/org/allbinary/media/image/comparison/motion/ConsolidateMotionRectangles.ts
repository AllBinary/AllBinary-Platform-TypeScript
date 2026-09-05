
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
//not GWT import const awt = globalThis.java.awt;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionRectangles } from './MotionRectangles.js';
//not GWT import - same folder const MotionRectangles = globalThis.org.allbinary.media.image.comparison.motion.MotionRectangles;

                import { MotionRectangle } from './MotionRectangle.js';
//not GWT import - same folder const MotionRectangle = globalThis.org.allbinary.media.image.comparison.motion.MotionRectangle;

                import { Rectangle } from './Rectangle.js';
//not GWT import - same folder const Rectangle = globalThis.org.allbinary.media.image.comparison.motion.Rectangle;

                
export class ConsolidateMotionRectangles extends MotionRectangles {
        

    private static readonly NAME: string = "consolidatedMotionRectangles_";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (motionRectangles: MotionRectangles){
            super(NAME, motionRectangles!.getImageComparisonResult());
                    

                            //For kotlin this is before the body of the constructor.
                    

    var vector: BasicArrayList = motionRectangles!.getVector()!;;
    

    var size: number = vector.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var motionRectangle: MotionRectangle = vector.get(index) as MotionRectangle;;
    
vector.add(motionRectangle!.clone());
    
}

this.consolidateMotionRectangles();
    
}


    consolidateMotionRectangles(){

    var vector: BasicArrayList = this.getVector()!;;
    
this.logUtil!.putF("Start - Size Before: " +vector.size(), this, "consolidateMotionRectangleConstraints");
    

    var removeVector: BasicArrayList = new BasicArrayListD();;
    

    var size: number = vector.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var motionRectangle: MotionRectangle = vector.get(index) as MotionRectangle;;
    




                        for (
    var i: number = index +1;i < vector.size(); i++)
        {

    var motionRectangle2: MotionRectangle = vector.get(i) as MotionRectangle;;
    

    var rectangle: Rectangle = motionRectangle!.getRectangle()!;;
    

    var rectangle2: Rectangle = motionRectangle2!.getRectangle()!;;
    

    var x2: number = rectangle.x +rectangle.width;;
    

    var y2: number = rectangle.y +rectangle.height;;
    

    var rightX: number = rectangle2.x +rectangle2.width;;
    

    var bottomY: number = rectangle2.y +rectangle2.height;;
    

                        if(rectangle.x <= rectangle2.x && rectangle.y <= rectangle2.y && x2 >= rightX && y2 >= bottomY)
                        
                                    {
                                    removeVector!.add(motionRectangle2);
    

                                    }
                                
}

}

this.remove(removeVector);
    
}


    remove(removeVector: BasicArrayList){

    var vector: BasicArrayList = this.getVector()!;;
    

    var size: number = removeVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
vector.remove(removeVector!.get(index));
    
}

}


}



