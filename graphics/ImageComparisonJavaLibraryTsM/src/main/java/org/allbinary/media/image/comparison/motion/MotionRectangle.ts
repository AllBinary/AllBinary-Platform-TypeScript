
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


        
import { awt } from '../../../../../../java/awt.js';
      
import { Vector } from '../../../../../../java/util/Vector.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Cloneable } from './Cloneable.js';
import { Rectangle } from './Rectangle.js';

export class MotionRectangle
            extends Object
         implements Cloneable {
        

    private rectangle: Rectangle

    private pixelDeltaVector: Vector
public constructor (rectangle: Rectangle){

            super();
        this.setRectangle(rectangle);
    
this.setPixelDeltaVector(new Vector());
    
}


    public getRectangle(): Rectangle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangle;
    
}


    public setRectangle(rectangle: Rectangle){
this.rectangle= rectangle;
    
}


    public getPixelDeltaVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pixelDeltaVector;
    
}


    public setPixelDeltaVector(pixelDeltaVector: Vector){
this.pixelDeltaVector= pixelDeltaVector;
    
}


    public clone(): any{

    var motionRectangle: MotionRectangle = new MotionRectangle(this.getRectangle()!.clone() as Rectangle);
;
    
motionRectangle!.setPixelDeltaVector(this.getPixelDeltaVector()!.clone() as Vector);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionRectangle;
    
}


}
                
            

