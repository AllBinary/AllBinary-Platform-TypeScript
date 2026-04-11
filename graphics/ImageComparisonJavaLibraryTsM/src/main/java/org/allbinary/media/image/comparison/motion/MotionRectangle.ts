
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

    

//import { Vector } from "../../../../../../java/util/Vector.js";

    

export class MotionRectangle
            extends Object
        
                , Cloneable {
        

    private rectangle: Rectangle

    private pixelDeltaVector: Vector
public constructor (rectangle: Rectangle){

            super();
            var rectangle = rectangle
this.setRectangle(rectangle);
    
this.setPixelDeltaVector(new Vector());
    
}


    public getRectangle(): Rectangle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangle;
    
}


    public setRectangle(rectangle: Rectangle){
var rectangle = rectangle
this.rectangle= rectangle;
    
}


    public getPixelDeltaVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pixelDeltaVector;
    
}


    public setPixelDeltaVector(pixelDeltaVector: Vector){
var pixelDeltaVector = pixelDeltaVector
this.pixelDeltaVector= pixelDeltaVector;
    
}


    public clone(): any{

    var motionRectangle: MotionRectangle = new MotionRectangle(this.getRectangle()!.clone();

                         as Rectangle);
        
        
;
    
motionRectangle!.setPixelDeltaVector(this.getPixelDeltaVector()!.clone();

                         as Vector);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionRectangle;
    
}


}
                
            

