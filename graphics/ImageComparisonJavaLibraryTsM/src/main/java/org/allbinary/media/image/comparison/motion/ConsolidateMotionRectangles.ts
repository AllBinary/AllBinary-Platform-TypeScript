
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

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { MotionRectangles } from "./MotionRectangles.js";

export class ConsolidateMotionRectangles extends MotionRectangles {
        

    private static readonly NAME: string = "consolidatedMotionRectangles_";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (motionRectangles: MotionRectangles)                        

                            : super(NAME, motionRectangles!.getImageComparisonResult()){

            super();
            var motionRectangles = motionRectangles


                            //For kotlin this is before the body of the constructor.
                    

    var vector: Vector = motionRectangles!.getVector()!;
        
        
;
    

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var motionRectangle: MotionRectangle = vector.get(index);

                         as MotionRectangle;
        
        
;
    
vector.add(motionRectangle!.clone());
    
}

consolidateMotionRectangles();
    
}


    consolidateMotionRectangles(){

    var vector: Vector = this.getVector()!;
        
        
;
    
this.logUtil!.putF("Start - Size Before: " +vector.length, this, "consolidateMotionRectangleConstraints");
    

    var removeVector: Vector = new Vector();
        
        
;
    

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var motionRectangle: MotionRectangle = vector.get(index);

                         as MotionRectangle;
        
        
;
    




                        for (
    var i: number = index +1;
        
        
i < vector.length; i++)
        {

    var motionRectangle2: MotionRectangle = vector.get(i);

                         as MotionRectangle;
        
        
;
    

    var rectangle: Rectangle = motionRectangle!.getRectangle()!;
        
        
;
    

    var rectangle2: Rectangle = motionRectangle2!.getRectangle()!;
        
        
;
    

    var x2: number = rectangle.x +rectangle.width;
        
        
;
    

    var y2: number = rectangle.y +rectangle.height;
        
        
;
    

    var rightX: number = rectangle2.x +rectangle2.width;
        
        
;
    

    var bottomY: number = rectangle2.y +rectangle2.height;
        
        
;
    

                        if(rectangle.x <= rectangle2.x && rectangle.y <= rectangle2.y && x2 >= rightX && y2 >= bottomY)
                        
                                    {
                                    removeVector!.add(motionRectangle2);
    

                                    }
                                
}

}

this.remove(removeVector);
    
}


    remove(removeVector: Vector){
var removeVector = removeVector

    var vector: Vector = this.getVector()!;
        
        
;
    

    var size: number = removeVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
vector.remove(removeVector!.get(index));
    
}

}


}
                
            

